import React from 'react'
import './HomeAdminTransactions.css'
const HomeAdminTransactions = () => {
    return (
        <div className='home-admin-transactions-parent'>
             <div className="heading-dashboard">
        <h1>All Transactions</h1>
        <p>Overview of all transactions made within the banking system.</p>
      </div>
            <div className="home-admin-dashboard-transaction-table">
                <p>#</p>
                <p>Name</p>
                <p>Date</p>
                <p>Transaction Type</p>
                <p>Amount</p>
                <p>Status</p>
                <p>Export</p>

            </div>
         

            <div className="home-admin-dashboard-transaction-table" style={{borderBottom:'1px solid lightgray'}}>
              
            <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png" alt="" />   
                 <p>Mohammed fazil</p>
                <p>10/2/2024</p>
                <p>Deposit</p>
                <p>₹299</p>
                <p>Success</p>
                <button> Recipet</button>

            </div>

            <div className="home-admin-dashboard-transaction-table" style={{borderBottom:'1px solid lightgray'}}>
              
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

export default HomeAdminTransactions
