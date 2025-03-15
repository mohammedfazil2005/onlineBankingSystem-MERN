import React, { useState } from 'react'
import './HomeAdminDashboard.css'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend } from 'chart.js'


ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)

const HomeAdminDashboard = () => {

  const Linedata={
    labels:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],
    datasets:[
      {
      label:"Credit Card",
      data:[10,5],
      borderColor:"red"
     },
     {
      label:"Debit Card",
      data:[3,15],
      borderColor:"yellow"
     }
  ]
  }

  const Lineoptions = {
    responsive: true,  // Enables responsiveness
    maintainAspectRatio: false, // Allows custom width & height
  };


  

    return (
        <div className='home-dashboard-parent'>
            <div className="heading-dashboard">
                <h1>Dashboard</h1>
                <p>Welcome to dashboard</p>
            </div>

            <div style={{ width: "90%", height: "auto" }}>
              <Line data={Linedata} options={Lineoptions}style={{height:'300px'}}/>
            </div>


            <div className="admin-chart-parent" style={{width:"100%"}}>
            <div className="user-transaction-history-full">
                <div className="user-transaction-history-list-heading">
                    <h2>Transaction history</h2>
                    {/* <button>Apply filter</button> */}
                </div>

            <div className="user-transaction-list">
            <p>#</p>
            <p>Transactions</p>
            <p>Amount</p>
            <p>Status</p>
            <p>Date</p>
            <p>Download</p>
        </div>
        <div className="user-transaction-list">
            <p>1</p>
            <p>Kumar</p>
            <p>200</p>
            <p>Processing</p>
            <p>Wed 11:00pm</p>
           <button>Download</button>
        </div>
            </div>
            </div>
            
        </div>
    )
}

export default HomeAdminDashboard
