import React from 'react'
import './HomeRightMyLoans.css'
const HomeRightMyLoans = () => {
  return (
    <div className='home-right-my-loans-parent'>
        <div className="home-right-my-loans-heading">
        <h1>My Loans</h1>
        <p>View and manage your active loans</p>
        </div>
        <div className="my-loans-cards-parent">
            <div className="my-loans-card-main">
                <div>
                <h4>Loan type :<span>Personal</span></h4>
                <h4>Loan Amount :<span>₹3000</span></h4>
                <h4>Loan Duration :<span>12months</span></h4>
                <h4>Interest Rate (%):<span>15%</span></h4>
                 <main>
                    <button>Pay EMI</button>
                    <button>Pay Full Loan Amount</button>
                 </main>
                </div>
                <div>
                    <button id='download-loan-recipet'>Download Loan Receipt</button>
                </div>
            </div>
            
        </div>

        <div className="home-right-my-loans-heading">
        <h2>Requested Loans</h2>  
        <p>View your loan applications that are currently <br />
         pending approval or have been denied.</p>
        </div>

        <div className="my-loans-cards-parent">
            <div className="my-loans-card-main" style={{border:'1px solid red',width:'400px'}}>
                <div>
                <h4>Loan type :<span style={{color:'gray'}}>Personal</span></h4>
                <h4>Loan Amount :<span style={{color:'gray'}}>₹3000</span></h4>
                <h4>Loan Duration :<span style={{color:'gray'}}>12months</span></h4>
                <h4>Interest Rate (%):<span style={{color:'gray'}}>15%</span></h4>
                 <main>
                    <button>Cancel Loan Request</button>
                 
                 </main>
                </div>
                <div>
                   ...
                </div>
            </div>
        </div>



    </div>
  )
}

export default HomeRightMyLoans
