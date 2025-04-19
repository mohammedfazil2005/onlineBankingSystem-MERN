import React, { useState } from 'react'
import './HomeUserCards.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';





const HomeUserCards = ({setCategoryName}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='home-user-cards-parent'>
      <div className="home-user-card-headings">

        <h1>My Bank Account</h1>
        <p>Effortlessly Manage Your Banking Activites</p>

      </div>
      <div className="home-user-card-headings">
        <h6 onClick={handleShow}>Apply for a Credit Card</h6>

      </div>
      <h2 style={{ letterSpacing: '1px', fontSize: '17px' }}>Debit Card</h2>
      <div className="user-card-div-main">
        <div className='main-card'>
          <div className='main-card-heading'>
            <h5>Bank Ai</h5>
            <p>Debit</p>
          </div>
          <div className='main-card-user-details'>
            <h4>ADRIAN HADJIN</h4>
            <p>06/24</p>
          </div>
          <div className='main-card-card-details'>
            <p><span>1234</span><span>1234</span> <span>1234</span></p>
            <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
          </div>
        </div>

        <div className="main-card-right">
          <div className='main-card-right-money-details-div'>
            <div>
              <p>Received</p>
              <h6>₹299</h6>
            </div>
            <div>
              <h2>Available</h2>
              <h6 style={{ color: 'white', fontWeight: "bold", fontSize: '25px', letterSpacing: '2px' }}>₹299</h6>
            </div>
            <div>
              <p>Sent</p>
              <h6>₹299</h6>
            </div>
          </div>

          <div className="main-card-right-account-holder-details">
            <div>
              <h6>Cardholder Name</h6>
              <p><i class="fa-solid fa-user" style={{ fontSize: '14px' }}></i> James DENIS</p>
            </div>
            <div>
              <h6>Card Number</h6>
              <p><img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" /><span>5300</span><span>5848</span><span>9581</span></p>
            </div>
            <section>
              <main>
                <h6>Expires</h6>
                <p>01/23</p>
              </main>
              <main>
                <h6>CVV</h6>
                <p>***</p>
              </main>
            </section>
          </div>


        </div>

        <div className="card-buttons-div">
          <button>Freeze Card</button>
        </div>





      </div>

      <h2 style={{ letterSpacing: '1px', fontSize: '17px' }}>Credit Card</h2>

      <div className="user-card-div-main">
        <div className='main-card' style={{ background: 'url(https://img.freepik.com/free-vector/premium-round-golden-frame-red-background-design_1017-54880.jpg)' }}>
          <div className='main-card-heading'>
            <h5>Bank Ai</h5>
            <p>Debit</p>
          </div>
          <div className='main-card-user-details'>
            <h4>ADRIAN HADJIN</h4>
            <p>06/24</p>
          </div>
          <div className='main-card-card-details'>
            <p><span>1234</span><span>1234</span> <span>1234</span></p>
            <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
          </div>
        </div>

        <div className="main-card-right">
          <div className='main-card-right-money-details-div' style={{ background: 'url(https://img.freepik.com/free-vector/premium-round-golden-frame-red-background-design_1017-54880.jpg)' }}>
           
            <div>
              <h2>Available</h2>
              <h6 style={{ color: 'white', fontWeight: "bold", fontSize: '25px', letterSpacing: '2px' }}>₹299</h6>
            </div>
            <div>
              <p>Sent</p>
              <h6>₹299</h6>
            </div>
          </div>

          <div className="main-card-right-account-holder-details" style={{ background: 'url(https://img.freepik.com/free-vector/premium-round-golden-frame-red-background-design_1017-54880.jpg)' }}>
            <div>
              <h6>Cardholder Name</h6>
              <p><i class="fa-solid fa-user" style={{ fontSize: '14px' }}></i> James DENIS</p>
            </div>
            <div>
              <h6>Card Number</h6>
              <p><img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" /><span>5300</span><span>5848</span><span>9581</span></p>
            </div>
            <section>
              <main>
                <h6>Expires</h6>
                <p>01/23</p>
              </main>
              <main>
                <h6>CVV</h6>
                <p>***</p>
              </main>
            </section>
          </div>


        </div>

        <div className="card-buttons-div">
          <button>Freeze Card</button>
          <button onClick={()=>setCategoryName("repay")}>Repay</button>
        </div>





      </div>
      <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Apply for a Credit Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             
         <p>Apply for a credit card with ease! Fill in your personal details, select the type of credit card that suits your needs, and submit your application. Ensure all information is accurate, and review the terms & conditions before proceeding. Your application will be processed, and you will be notified about the approval status.</p>
          <div className="credit-card-details-modal mt-3" >
            <h1>Silver Credit Card</h1>
            <p>
              The Silver Credit Card offers a credit limit of ₹50,000 with minimal fees.
              It is ideal for first-time users looking for a simple and affordable credit card.
              Enjoy cashback on selected purchases, secure transactions, and easy repayment options.
              <br />
              💳 Credit Limit: ₹50,000 <br />
               Annual Fee: ₹499 <br />
               Monthly Fee: ₹42 <br />
               Benefits: Basic cashback offers, online & offline payments, and zero liability on fraud.
            </p>
          </div>

          <div className="credit-card-details-modal mt-4">
            <h1>Gold Credit Card</h1>
            <p>
              The Gold Credit Card provides a higher credit limit and additional perks compared to the Basic Credit Card.
              It is suitable for individuals looking for better rewards and exclusive benefits.
              Earn more cashback, enjoy travel privileges, and access premium services.
              <br /><br />
              💳 Credit Limit: ₹75,000 <br />
               Annual Fee: ₹999 <br />
               Monthly Fee: ₹83 <br />
               Benefits: Enhanced cashback offers, travel & dining discounts, reward points on transactions, and fraud protection.
            </p>

          </div>

          <div className="transfer-details-input-div mt-4">
                    <div>
                        <h6>Select Card Type</h6>
                        <p>Choose the card you want to apply</p>
                    </div>
                    <div>
                        <Form.Select aria-label="Select card">
                            <option>Select Card Type</option>
                            <option value="sliver">Silver Card</option>
                            <option value="gold">Gold Card</option>

                        </Form.Select>
                    </div>
                </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Apply</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default HomeUserCards
