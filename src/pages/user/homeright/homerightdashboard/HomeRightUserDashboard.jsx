import React, { useState } from 'react'
import './HomeRightUserDashboard.css'
import { Form } from 'react-bootstrap';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS ,CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)



const HomeRightUserDashboard = () => {

    const lineData={
        labels:["Credit Card","Debit Card"],
        datasets:[
            {
                label:"Credit Card Transactions",
                data:["100","200"],
                borderColor: "rgba(153, 102, 255, 1)", // Purple
                backgroundColor: [
                    "#347deb", // Sky Blue
                    "#a11010"  // Dark Red (Shaded Red)
                ],
                tension: 0.4
            },
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

    
     <div className="user-dashboard-transactions">
        <div className="user-dashboard-transactions-heading">
            <h1>Recent transactions</h1>
            <button>View all <i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="user-banks-name">
            <button style={{borderBottom:'2px solid blueviolet'}}>All Transactions</button>
            <button>Income </button>
            <button>Expense </button>
        </div>
        <div className="user-bank-balance">
            <div className='user-bank-balance-heading'>
            <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
                <div>
                    <h6>Balance</h6>
                    <p>₹2993</p>
                </div>
            </div>
            <div>
            <Form.Select aria-label="Select card">
                           
                            <option value="debit">Debit Card</option>
                            <option value="credit">Credit Card</option>

                        </Form.Select>
            </div>
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
  )
}

export default HomeRightUserDashboard
