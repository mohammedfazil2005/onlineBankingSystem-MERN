import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './HomeRightRepay.css'

const HomeRightRepay = () => {
  return (
    <div>
      <div className='login-parent'>
        <div className="login-childs">
          <Link to={'/'}> <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" /></Link>
          <h1 style={{ fontSize: "24px" }}>Repay Options</h1>
          <p id='repay-desc'>Manage your repayments easily and securely</p>

          <div className='main-card-right-money-details-div' >
          <div>
              <h2>Total Due</h2>
              <h6 style={{ color: 'white', fontWeight: "bold", fontSize: '25px', letterSpacing: '2px' }}>₹5299</h6>
            </div>
            <div>
              <p>Minimum</p>
              <h6>₹899</h6>
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
              <p>Auto-Fill Debit Card Details</p>
            </div>

          </>
          <button>Repay</button>
        </div>
      </div>
    </div>
  )
}

export default HomeRightRepay
