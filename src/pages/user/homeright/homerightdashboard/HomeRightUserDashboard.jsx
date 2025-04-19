import React, { useState } from 'react'
import './HomeRightUserDashboard.css'
import { Form } from 'react-bootstrap';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)



const HomeRightUserDashboard = () => {

    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Debit",
                data: [10, 400, 50, 90],
                borderColor: "rgba(255, 99, 132, 1)", // Red
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                tension: 0.4
            },
            {
                label: "Credit",
                data: [100, 600, 200, 30],
                borderColor: "rgba(54, 162, 235, 1)", // Blue
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                tension: 0.4

            }
        ]
    }

    const Lineoptions = {
        responsive: true,  // Enables responsiveness
        maintainAspectRatio: false, // Allows custom width & height
    };


    return (
        <div className='user-dashboard-parent'>
            <div className="userdashboard-heading">
                <h1>Welcome,<span>Adrian</span></h1>
                <p>Access & manage your account and transactions efficiently</p>
            </div>
            <div className="user-balance-dashboard">
                <div className="user-balance-card-parent">
                    <div className="user-balance-dashboard-main-card">
                        <div>
                            <h5>Your Balance</h5>
                            <p>₹3989</p>
                        </div>
                        <div>
                            <h6>Credit card</h6>
                            <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
                        </div>

                    </div>
                    <div className="user-balance-dashboard-main-card-2">
                        <div>
                            <h5>Your Balance</h5>
                            <p>₹43,989</p>
                        </div>
                        <div>
                            <h6>Debit card</h6>
                            <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
                        </div>
                    </div>
                </div>



            </div>

            <div className="home-user-card-headings">

            <h2>Debited & Credit</h2>
            <p>Track your earnings and spending with real-time insights.</p>

            </div>

            <div className="line-chart-user-dashboard" style={{ minHeight: '300px' }}>

                <Line data={lineData} options={Lineoptions} />
            </div>


            <div className="user-dashboard-transactions">
        <div className="user-dashboard-transactions-heading">
            <h1>Recent transactions</h1>
            <button>View all <i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="user-banks-name">
            <button style={{borderBottom:'2px solid blueviolet'}}>All Transactions</button>
            <button>Debited </button>
            <button>Credited </button>
        </div>
        <div className="user-bank-balance">
            <div className='user-bank-balance-heading'>
           
               
            </div>
            <div>
            <Form.Select aria-label="Select card">
                           
                            <option value="debit">Debit Card</option>
                            <option value="credit">Credit Card</option>

                        </Form.Select>
            </div>
        </div>
        <div className="user-page-transaction-table head-user-trans">
         
         <p>Name</p>
         <p>Date</p>
         <p>CARD</p>
         <p>Transaction Type</p>
       
         <p>Amount</p>
         <p>Export</p>
      </div>

      <div className="user-page-transaction-table mb-2" style={{marginTop:'3px'}}>
        
         <p>MohammedFazil</p>
         <p>20/2/2024</p>
         <p>Debit</p>
         <p>Credited</p>
       
         <p>₹460</p>
         <button>Export</button>
      </div>
     </div>
        </div>
    )
}

export default HomeRightUserDashboard
