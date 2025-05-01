import React, { useEffect, useState } from 'react'
import './HomeRightUserDashboard.css'
import { Form } from 'react-bootstrap';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { onFetchUserDashboardDetails } from '../../../../services/allAPI';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)



const HomeRightUserDashboard = ({setCategoryName}) => {

    const [data, setData] = useState({})

    const [filteredData,setFilteredData]=useState([])
    const [selectType,setSelectType]=useState("")

    const Linedata = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"], // Months
        datasets: [
          {
            label: "Monthly Transactions",
            data: Array(12).fill(0), // Initialize with 0 for each month
            borderColor: "rgba(54, 162, 235, 1)", // Blue
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            pointBackgroundColor: "rgba(54, 162, 235, 1)",
            pointBorderColor: "#fff",
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.4, // Smooth curve
            fill: true,
          },
        ],
      };
      const Lineoptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: false, 
          },
          legend: {
            display: true,
          },
        },
        elements: {
          point: {
            radius: 0,
            hoverRadius: 0,
          },
        },
        scales: {
          y: {
            beginAtZero: true, 
          },
        },
      };

      data?.transactionchart?.forEach((a)=>{
        const monthIndex=Linedata.labels.indexOf(a.month)
        Linedata.datasets[0].data[monthIndex]=a.count
      })

    const fetchDashboardDetails = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const header = {
                'Authorization': `Bearer ${token}`
            }
            try {
                const serverResponce = await onFetchUserDashboardDetails(header)
                if (serverResponce.status == 200) {
                    setData(serverResponce.data)
                }
            } catch (error) {
                console.log(error)
            }

        } else {
            navigate('/login')
            toast.error("Please login again!")
        }
    }

    useEffect(() => {
        fetchDashboardDetails()
    }, [])

    useEffect(()=>{
        if(selectType==""){
            setFilteredData(data.transactions)
        }else{
            let filteredData=data?.transactions?.filter((a)=>a['transactionType'].toLowerCase()==selectType)
            setFilteredData(filteredData)
        }
    },[selectType,data])

    console.log(data)






    return (
        <div className='user-dashboard-parent'>
            <div className="userdashboard-heading">
                <h1>Welcome,<span>{data?.name}</span></h1>
                <p>Access & manage your account and transactions efficiently</p>
            </div>
            <div className="user-balance-dashboard">
                <div className="user-balance-card-parent">
                    <div className="user-balance-dashboard-main-card">
                        <div>
                            <h5>Your Balance</h5>
                            <p>₹{data?.debitcardBalance}</p>
                        </div>
                        <div>
                            <h6>Debit card</h6>
                            <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
                        </div>

                    </div>
                    {data?.creditcards?.length>0?data?.creditcards?.map((a)=>(
                          <div className="user-balance-dashboard-main-card-2">
                          <div>
                              <h5>Your Balance</h5>
                              <p>₹{a?.cardBalance}</p>
                          </div>
                          <div>
                              <h6>Credit card ({a?.cardTier})</h6>
                              <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
                          </div>
                      </div>
                    )):""}
                  
                </div>



            </div>

            <div className="home-user-card-headings">

                <h2>Monthly Transaction Chart</h2>
                <p>Track how your account activity changes month by month.</p>


            </div>

            <div className="line-chart-user-dashboard w-100"  style={{borderRadius:'10px',minHeight:"350px"}}>

                <Line data={Linedata} options={Lineoptions} />
            </div>


            <div className="user-dashboard-transactions">
                <div className="user-dashboard-transactions-heading">
                    <h1>Recent transactions</h1>
                    <button onClick={()=>setCategoryName('Transactions')}>View all <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="user-banks-name">
                    <button onClick={()=>setSelectType('')} style={selectType?{borderBottom:"none"}:{borderBottom: '2px solid blueviolet'}}>All Transactions</button>
                    <button style={selectType=="debited"?{borderBottom: '2px solid blueviolet'}:{borderBottom:"none"} }onClick={()=>setSelectType('debited')}>Debited </button>
                    <button style={selectType=="credited"?{borderBottom: '2px solid blueviolet'}:{borderBottom:"none"} } onClick={()=>setSelectType('credited')}>Credited </button>
                </div>
                <div className="user-bank-balance">
                    
                </div>
                <div className="user-page-transaction-table head-user-trans">

                    <p>Name</p>
                    <p>Date</p>
                    <p>CARD</p>
                    <p>Transaction Type</p>

                    <p>Amount</p>
                    <p>Export</p>
                </div>

                {filteredData?.length > 0 ? filteredData?.map((a, key) => (
                    <>
                    <div className="user-page-transaction-table mb-2" style={{ marginTop: '3px' }}>

                        <p>MohammedFazil</p>
                        <p>{a?.date}</p>
                        <p>{a?.card}</p>
                        <p>{a?.transactionType}</p>

                        <p>₹{a?.amount}</p>
                        <button>Export</button>
                    </div>
                    <hr  style={{marginTop:'-7px'}}/>
                    </>
                )) : <div className='text-center'>
                <p> Oops! Looks like you haven't made any transactions yet.</p>
                <button onClick={()=>setCategoryName('Transactions')} className='mt-3' style={{backgroundColor:'blueviolet',padding:'8px',border:'1px solid white',color:'white'}}>  Start Your First Transaction</button>
                </div>}
            </div>
        </div>
    )
}

export default HomeRightUserDashboard
