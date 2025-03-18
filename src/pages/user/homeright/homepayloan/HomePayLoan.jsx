import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const HomePayLoan = () => {
  return (
    <div>
      <div className='login-parent'>
        <div className="login-childs">
          <Link to={'/'}> <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" /></Link>
          <h1 style={{fontSize:'24px'}}>Loan Payment</h1>
          <p>Pay your EMI or settle your loan in full</p>
   

          <div className='main-card-right-money-details-div' >
          <div>
              <h2>EMI Payment Amount</h2>
              <h6 sty style={{ color: 'white', fontWeight: "bold", fontSize: '25px', letterSpacing: '2px',textAlign:'left' }}>₹5299</h6>
            </div>
           
            

          </div>

          <>
            <div className="repay-input-div">
              <div>


                <FloatingLabel controlId="accountNumber" label="Account Number" className="mb-3">
                  <Form.Control
                    type="number"
                    placeholder="Enter your account number"
                    className="cursor-pointer"

                    required
                  />
                </FloatingLabel>

                <FloatingLabel controlId="cvv" label="CVV" className="mb-3">
                  <Form.Control
                    type="number"
                    maxLength={4}
                    placeholder="Enter CVV"
                    className="cursor-pointer"

                    required
                  />
                </FloatingLabel>
              </div>

              <div>


                <FloatingLabel controlId="amount" label="Amount" className="mb-3">
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    className="cursor-pointer"

                    required
                  />
                </FloatingLabel>


              </div>

            </div>
            <div className="debit-card-fill-details">
              <p>Use Your Debit Card Details</p>
              <p>Use Your Credit Card Details</p>
            </div>

          </>
          <button>Pay EMI</button>
        </div>
      </div>
    </div>
  )
}

export default HomePayLoan
