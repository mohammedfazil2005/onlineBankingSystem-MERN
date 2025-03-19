import React, { useState } from 'react'
import './HomeAdminDashboard.css'
import { Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

const HomeAdminDashboard = () => {

  //Line Chart
  const Linedata = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Personal Loan",
        data: [10, 15, 9],
        borderColor: "rgba(255, 99, 132, 1)", // Red
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4
      },
      {
        label: "Home Loan",
        data: [5, 8, 12],
        borderColor: "rgba(54, 162, 235, 1)", // Blue
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4
      },
      {
        label: "Auto Loan",
        data: [3, 5, 7],
        borderColor: "rgba(255, 206, 86, 1)", // Yellow
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        tension: 0.4
      },
      {
        label: "Business Loan",
        data: [8, 12, 15],
        borderColor: "rgba(75, 192, 192, 1)", // Teal
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4
      },
      {
        label: "Education Loan",
        data: [4, 6, 9],
        borderColor: "rgba(153, 102, 255, 1)", // Purple
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.4
      }
    ]
  }

  const Lineoptions = {
    responsive: true,  // Enables responsiveness
    maintainAspectRatio: false, // Allows custom width & height
  };


  //Bar chart

  const PieData = {
    labels: ['approved', "pending", "rejected"],
    datasets: [
      {
        label: "Loan status",
        data: ['10', '5', '3'],
        backgroundColor: [
        "#81C784", // Light Green (Lighter version of #4CAF50)
    "#FFB74D", // Light Orange (Lighter version of #FF9800)
    "#E57373"  
        ],
        hoverOffset: 4,
      }
    ]
  }





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
            <p>₹564,7792</p>

          </div>
        </div>

        <div className="home-dashboard-bank-main-card">
          <div>
            <button><i class="fa-solid fa-user"></i></button>
          </div>
          <div>
            <h5>Total Users</h5>
            <p>1000</p>

          </div>
        </div>

        <div className="home-dashboard-bank-main-card">
          <div>
            <button><i class="fas fa-hand-holding-usd"></i></button>
          </div>
          <div>
            <h5>Total Loans Approved</h5>
            <p>₹47,792</p>

          </div>
        </div>

        <div className="home-dashboard-bank-main-card">
          <div>
            <button><i class="fa-solid fa-money-bill-transfer"></i></button>
          </div>
          <div>
            <h5>Total Deposit Amount</h5>
            <p>₹64,7792</p>

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
        <div className='w-100' style={{borderRadius:'10px'}}>
          <Line data={Linedata} options={Lineoptions} />
        </div>
      </div>

      <div className='home-dashboard-transactions-heading mt-4'>
        <h3>Recent Transactions</h3>
        <p className='mt-2'>Last five transactions processed within the banking system.</p>
      </div>

      <div className="home-admin-dashboard-transaction-table mt-4">
        <p>#</p>
        <p>Name</p>
        <p>Date</p>
        <p>Transaction Type</p>
        <p>Amount</p>
        <p>Status</p>
        <p>Export</p>

      </div>


      <div className="home-admin-dashboard-transaction-table" style={{ borderBottom: '1px solid lightgray' }}>

        <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png" alt="" />
        <p>Mohammed fazil</p>
        <p>10/2/2024</p>
        <p>Deposit</p>
        <p>₹299</p>
        <p>Success</p>
        <button> Recipet</button>

      </div>







    </div>
  )
}

export default HomeAdminDashboard
