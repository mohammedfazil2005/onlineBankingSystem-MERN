import React, { useEffect, useState } from 'react'

import { Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { useNavigate } from 'react-router-dom'
import { onFetchDashboardDetails } from '../../services/allAPI'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

const AccountManagerDashboard = () => {
   const [data,setData]=useState({})
  
    const navigate=useNavigate()
  const Linedata = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Total withdrawels",
        data: [10, 15, 9, 20, 25, 22, 30], // More data points for a full year
        borderColor: "rgba(255, 99, 132, 1)", // Red
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)", // Red for points
        pointBorderColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4, // Smooth curve
        fill: true,
      },
     
     
    ]
  }

  const Lineoptions = {
    responsive: true,  // Enables responsiveness
    maintainAspectRatio: false, // Allows custom width & height
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
    <div>
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
            <h5>Total Withdrawel </h5>
            <p>₹{data?.totalwithdrawelamount}</p>

          </div>
        </div>

        <div className="home-dashboard-bank-main-card main-card-staff">
          <div>
            <button><i className="fa-solid fa-person-circle-check"></i></button>
          </div>
          <div>
            <h5> Account Holders </h5>
            <p>{data?.totalusers}</p>

          </div>
        </div>

      </div>
      <div className='home-dashboard-transactions-heading mt-4'>
      <h3>Withdrawal Chart Overview</h3>
      <p className='mt-2'>Visual representation of daily monthly withdrawal trends.</p>
      </div>

      <div className='w-100' style={{ borderRadius: '10px', minHeight: '340px' }}>
        <Line data={Linedata} options={Lineoptions} />
      </div>
    </div>
  )
}

export default AccountManagerDashboard
