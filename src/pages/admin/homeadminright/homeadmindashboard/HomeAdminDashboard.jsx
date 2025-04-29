import React, { useEffect, useState } from 'react'
import './HomeAdminDashboard.css'
import { Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { onFetchDashboardDetails } from '../../../../services/allAPI'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

const HomeAdminDashboard = () => {

  const [data,setData]=useState({})

  const navigate=useNavigate()

  //Line Chart
  const Linedata = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"], // Months
    datasets: [
      {
        label: "Total Loan Requests",
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
  
  
  data?.loanRequestMonthly?.forEach((item) => {
    const monthIndex = Linedata.labels.indexOf(item.month);
    if (monthIndex !== -1) {
      Linedata.datasets[0].data[monthIndex] = item.count; 
    }
  });
  

  const Lineoptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false, 
      },
      legend: {
        display: true
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
  
  
  
  //Bar chart

  const PieData = {
    labels: ['approved', "pending", "rejected"],
    datasets: [
      {
        label: "Loan status",
        data: [],
        backgroundColor: [
        "#81C784", // Light Green (Lighter version of #4CAF50)
    "#FFB74D", // Light Orange (Lighter version of #FF9800)
    "#E57373"  
        ],
        hoverOffset: 4,
      }
    ]
  }

  if (data?.loanstatusmonthlychart?.length > 0) {
  const loanStatus = data.loanstatusmonthlychart[0];  // Picking latest month (April)

  PieData.datasets[0].data = [
    loanStatus.approved || 0, 
    loanStatus.pending || 0, 
    loanStatus.rejected || 0
  ];
}



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

  useEffect(()=>{
    fetchDashboardDetails()
  },[])

  console.log(data)





  return (
    <div className='home-dashboard-parent'>
      <div className="heading-dashboard">
        <h1>Dashboard</h1>
        <p>Welcome to dashboard</p>
      </div>




      <div className="home-dashboard-bank-details">
        <div className="home-dashboard-bank-main-card">
          <div>
            <button><i class="fa-solid fa-sack-dollar"></i></button>
          </div>
          <div>
            <h5>Total Balance</h5>
            <p>₹{data?.totalbalance}</p>

          </div>
        </div>

        <div className="home-dashboard-bank-main-card">
          <div>
            <button><i class="fa-solid fa-user"></i></button>
          </div>
          <div>
            <h5>Total Users</h5>
            <p>{data?.totalusers}</p>

          </div>
        </div>

        <div className="home-dashboard-bank-main-card">
          <div>
            <button><i class="fas fa-hand-holding-usd"></i></button>
          </div>
          <div>
            <h5>Total Loans Approved</h5>
            <p>₹{data?.totalloanamountapproved }</p>

          </div>
        </div>

        <div className="home-dashboard-bank-main-card">
          <div>
            <button><i class="fa-solid fa-money-bill-transfer"></i></button>
          </div>
          <div>
            <h5>Total Withdrawel Amount</h5>
            <p>₹{data?.totalwithdrawelamount}</p>

          </div>
        </div>
      </div>

      <div className='home-dashboard-loan-heading'>
        <h3>Loan Distribution Trends Over Time</h3>
        <p>Monthly analysis of different loan types issued by the bank.</p>
      </div>

      <div className="home-dashboard-bank-pie-charts">
        <div style={{ height: '330px',borderRadius:'10px' }}>
          <Pie data={PieData} />
        </div>
        <div className='w-100' style={{borderRadius:'10px',height:'300px',width:'100%'}}>
          <Line data={Linedata} options={Lineoptions} />
        </div>
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

export default HomeAdminDashboard
