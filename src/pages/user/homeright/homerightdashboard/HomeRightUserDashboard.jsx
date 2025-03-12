import React, { useState } from 'react'
import './HomeRightUserDashboard.css'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ✅ Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);


const HomeRightUserDashboard = () => {

    const [balance, setBalance] = useState(1000); // Example balance
  const [expenses, setExpenses] = useState(400); // Example expenses

  const chartData = {
    labels: ["Available Balance", "Spent"],
    datasets: [
      {
        label: "Bank Balance",
        data: [balance, expenses],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };



  return (
    <div className='user-dashboard-parent'>
     <div className="userdashboard-heading">
        <h1>Welcome,<span>Adrian</span></h1>
        <p>Access & manage your account and transactions efficiently</p>
     </div>
     <div className="user-dashboard-balance">
        <div className="balance-left">
            <div>
                <Doughnut data={chartData} options={{ responsive: true, maintainAspectRatio: false }}   
                />
            </div>
            <div>
                <h2>2 Bank Accounts</h2>
                <h6>Total Current Balance</h6>
                <h1>₹2,599</h1>
            </div>
        </div>
        <div className="balance-right">
            <button>+ Add Bank</button>
        </div>
     </div>
     <div className="user-dashboard-transactions">
        <div className="user-dashboard-transactions-heading">
            <h1>Recent transactions</h1>
            <button>View all</button>
        </div>
        <div className="user-banks-name">
            <button style={{borderBottom:'2px solid blueviolet'}}>Chase Bank</button>
            <button>Bank of America</button>
            <button>First Playypus Bank</button>
        </div>
        <div className="user-bank-balance">
            <div className='user-bank-balance-heading'>
                <img src="https://logowik.com/content/uploads/images/bank3801.jpg" alt="image-logo" />
                <div>
                    <h6>Chase Bank</h6>
                    <p>₹2993</p>
                </div>
            </div>
            <div>
                <button>Savings</button>
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
