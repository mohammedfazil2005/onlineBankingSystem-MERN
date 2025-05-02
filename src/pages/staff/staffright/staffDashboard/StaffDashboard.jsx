import React, { useEffect, useState } from 'react'
import { Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import './staffDashboard.css'
import { useNavigate } from 'react-router-dom'
import { onFetchDashboardDetails } from '../../../../services/allAPI'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

const StaffDashboard = () => {

  const [data,setData]=useState({})

  const navigate=useNavigate()

    const Linedata = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Silver Card",
          data: [], 
          borderColor: "rgba(255, 99, 132, 1)", 
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          pointBackgroundColor: "rgba(255, 99, 132, 1)", 
          pointBorderColor: "#fff",
          pointRadius: 6,
          pointHoverRadius: 8,
          tension: 0.4, 
          fill: true,
        },
        {
          label: "Gold Card",
          data: [],
          borderColor: "rgba(54, 162, 235, 1)", 
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          pointBackgroundColor: "rgba(54, 162, 235, 1)", 
          pointBorderColor: "#fff",
          pointRadius: 6,
          pointHoverRadius: 8,
          tension: 0.4, 
          fill: true,
        },
       
      ]
    }

      data?.creditcardMonthlyrequestschart?.forEach((e) => {
        const monthIndex = Linedata.labels.indexOf(e.month);
      
        if (monthIndex !== -1) {
          Linedata.datasets[0].data[monthIndex] = e.silver ?? 0; 
          Linedata.datasets[1].data[monthIndex] = e.gold ?? 0;   
        }
      });
    
    
      const Lineoptions = {
        responsive: true,  
        maintainAspectRatio: false, 
      };

      const fetchDashboardDetails=async()=>{
            const token=sessionStorage.getItem("token")
            if(token){
              const header={
                'Authorization':`Bearer ${token}`
              }
              try {
                const serverResponce=await onFetchDashboardDetails(header)
                if(serverResponce.status==200){
                  setData(serverResponce.data)
                }
              } catch (error) {
                console.log(error)
              }
        
            }else{
              navigate('/login')
              toast.error("Please login again!")
            }
          }
        
          console.log(data)
        
          useEffect(()=>{
              fetchDashboardDetails()
            },[])

            


  return (
    <div className='staff-deahsboard-parent'>
       <div className="heading-dashboard">
        <h1>Dashboard</h1>
        <p>Welcome to dashboard</p>
      </div>

      <div className='staff-dashboard-details'>
      <div className="home-dashboard-bank-main-card main-card-staff">
          <div>
            <button><i class="fa-solid fa-sack-dollar"></i></button>
          </div>
          <div>
            <h5>Total Balance</h5>
            <p>₹{data?.totalbalance}</p>

          </div>
        </div>
        <div className="home-dashboard-bank-main-card main-card-staff">
        <div>
            <button><i class="fas fa-hand-holding-usd"></i></button>
          </div>
          <div>
            <h5>Total Loan Approved</h5>
            <p>₹{data?.totalloanamountapproved}</p>

          </div>
        </div>
        <div className="home-dashboard-bank-main-card main-card-staff">
          <div>
            <button><i class="fa-solid fa-sack-dollar"></i></button>
          </div>
          <div>
            <h5>Total Withdrawel </h5>
            <p>₹{data?.totalwithdrawelamount}</p>

          </div>
        </div>
      </div>


      <div className='home-dashboard-transactions-heading mt-4'>
        <h3>Credit Card Requests Overview</h3>
        <p className='mt-2'> Visual representation of Silver and Gold credit card request trends.</p>
      </div>

       <div className='w-100' style={{borderRadius:'10px',minHeight:'340px'}}>
                <Line data={Linedata} options={Lineoptions} />
              </div>




              <div className='home-dashboard-transactions-heading mt-4'>
        <h3>Recent Transactions</h3>
        <p className='mt-2'>Last five transactions processed within the banking system.</p>
      </div>

      <div className="home-admin-dashboard-transaction-table mt-4">
        <p>#</p>
        <p>Transaction ID</p>
        <p>Date</p>
       
        <p>Amount</p>
        <p>Status</p>
        <p>Export</p>

      </div>


    {data?.lastTransactions?.length>0?data?.lastTransactions?.map((a,key)=>(
        <div key={key} className="home-admin-dashboard-transaction-table mb-2" style={{ borderBottom: '1px solid lightgray' }}>
        <p>{key+1}</p>
        <p>{a?.transactionID||982191}</p>
        <p>{a?.date}</p>
     
        <p>₹{a?.amount}</p>
        <p>Success</p>
        <button> Recipet</button>

      </div>
    )):""}
    </div>
  )
}

export default StaffDashboard
