import React, { useEffect, useState } from 'react'
import { Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { onFetchDashboardDetails } from '../../../services/allAPI'
import { useNavigate } from 'react-router-dom'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

const LoanOfficerDashboard = () => {
  const [data,setData]=useState({})

  const navigate=useNavigate()
  
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
      Linedata.datasets[0].data[monthIndex] = item.count;
    
  });
  
 
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
    <div className='loanofficer-dashboard-parent'>
        <div className="heading-dashboard">
        <h1>Dashboard</h1>
        <p>Welcome to dashboard</p>
      </div>
      <div className='staff-dashboard-details'>
      <div className="home-dashboard-bank-main-card main-card-staff">
          <div>
            <button><i className="fa-solid fa-sack-dollar"></i></button>
          </div>
          <div>
            <h5>Total Balance</h5>
            <p>₹{data?.totalbalance}</p>

          </div>
        </div>
        <div className="home-dashboard-bank-main-card">
          <div>
            <button><i class="fas fa-hand-holding-usd"></i></button>
          </div>
          <div>
            <h5>Total Loans Approved</h5>
            <p>{data?.totalloansapproved}</p>

          </div>
        </div>

        <div className="home-dashboard-bank-main-card main-card-staff">
          <div>
            <button><i className="fa-solid fa-hourglass-end"></i></button>
          </div>
          <div>
            <h5> Loan Request Pending </h5>
            <p>{data?.totalloansrequestpending}</p>

          </div>
        </div>
        
      </div>
      <div className='home-dashboard-loan-heading mt-5'>
        <h3>Loan Distribution Trends Over Time</h3>
        <p>Monthly analysis of different loan types issued by the bank.</p>
      </div>
       <div className='w-100' style={{borderRadius:'10px',minHeight:"350px"}}>
                <Line data={Linedata} options={Lineoptions} />
              </div>
    </div>
  )
}

export default LoanOfficerDashboard
