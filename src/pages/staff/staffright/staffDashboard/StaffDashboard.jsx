import React from 'react'
import { Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import './staffDashboard.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

const StaffDashboard = () => {


    const Linedata = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Basic Card",
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
          {
            label: "Silver Card",
            data: [5, 8, 12, 18, 22, 19, 25],
            borderColor: "rgba(54, 162, 235, 1)", // Blue
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            pointBackgroundColor: "rgba(54, 162, 235, 1)", // Blue for points
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
            <p>₹564,7792</p>

          </div>
        </div>
        <div className="home-dashboard-bank-main-card main-card-staff">
          <div>
            <button><i class="fa-solid fa-sack-dollar"></i></button>
          </div>
          <div>
            <h5>Total Loan Approved</h5>
            <p>₹564,7792</p>

          </div>
        </div>
        <div className="home-dashboard-bank-main-card main-card-staff">
          <div>
            <button><i class="fa-solid fa-sack-dollar"></i></button>
          </div>
          <div>
            <h5>Total Creditcard users</h5>
            <p>₹564,7792</p>

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
        <h3>All Transactions</h3>
        <p className='mt-2'>View the complete history of all your banking transactions.</p>
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

export default StaffDashboard
