import React, { useContext, useEffect, useState } from 'react'
import './HomeAdminLoanRequests.css'
import { Link, useNavigate } from 'react-router-dom'
import '../homeadmincreditCardRequests/HomeAdminCreditCardReq.css'
import '../homeadmincreditCardRequests/HomeAdminCreditCardReq'
import { onApproveLoan, onFetchLoanRequests, onRejectLoanRequest } from '../../../../services/allAPI'
import { Button, Modal } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { AuthContext } from '../../../../contexts/TokenContext'

const HomeAdminLoanRequests = ({setCategoryName}) => {



  const navigate = useNavigate()

   const {setUserID}=useContext(AuthContext)


  const [loanRequests, setLoanRequests] = useState([])

  const [show, setShow] = useState(false);
  const [reject, setReject] = useState(false);

  const [userdetails, setUserdetails] = useState({})
  const [not, setNot] = useState("")
  const [loanData, setLoanData] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setUserdetails(e)
    setShow(true)
  };

  const handleRejectClose = () => setReject(false);
  const handleRejectShow = (e) => {
    setLoanData(e)
    setReject(true)
  };

  const fetchCreditCardRequests = async () => {
    const token = sessionStorage.getItem('token')
    if (token) {

      const header = {
        'Authorization': `Bearer ${token}`
      }

      try {
        const serverResponce = await onFetchLoanRequests(header)
        if (serverResponce.status == 200) {
          setLoanRequests(serverResponce.data)
        }
      } catch (error) {
        console.log(error)
      }

    } else {
      navigate('/login')
      toast.error("Please login again!")
    }
  }

  const approveLoan = async () => {
    const token = sessionStorage.getItem('token')
    if (token) {

      const header = {
        'Authorization': `Bearer ${token}`
      }

      const payload = {
        loanID: userdetails.id
      }

      try {
        const serverResponce = await onApproveLoan(payload, header)
        console.log(serverResponce)
        if (serverResponce.status == 200) {
          toast.success(
            "Loan approved successfully! The user can now access their loan amount under the agreed terms.",
            {
              style: {
                border: '2px solid blueviolet',
                padding: '16px',
                color: 'blueviolet',
              },
              iconTheme: {
                primary: 'blueviolet',
                secondary: 'white',
              },
              duration: 6000,
            }
          );
          handleClose()
          setNot("done")
        } else {
          toast.error("Please try again after some time!")
        }
      } catch (error) {
        toast.error("Please try again after some time!")
        console.log(error)
      }



    } else {
      navigate('/login')
      toast.error("Please login again!")
    }
  }

  const rejectLoan = async () => {
    const token = sessionStorage.getItem('token')
    if (token) {

      const header = {
        'Authorization': `Bearer ${token}`
      }

      const payload = {
        loanID:loanData.id,
        loanUserID:loanData.userID
      }

      try {
        const serverResponce = await onRejectLoanRequest(payload, header)
        console.log(serverResponce)
        if (serverResponce.status == 200) {
          toast.success(
            "Loan request rejected successfully! The user has been notified about the rejection.",
            {
              style: {
                border: '2px solid blueviolet',
                padding: '16px',
                color: 'blueviolet',
              },
              iconTheme: {
                primary: 'blueviolet',
                secondary: 'white',
              },
              duration: 6000,
            }
          );
          handleRejectClose()
          setNot("done")
        } else {
          toast.error("Please try again after some time!")
        }
      } catch (error) {
        toast.error("Please try again after some time!")
        console.log(error)
      }



    } else {
      navigate('/login')
      toast.error("Please login again!")
    }
  }

  const onViewProfile=(user)=>{
    setUserID(user.userID)
    setCategoryName('ViewProfile')
  }



  useEffect(() => {
    fetchCreditCardRequests()
  }, [not])

  console.log(loanRequests)

  return (
    <>
      <div className='home-admin-loan-requests-parent'>

        <div className="home-admin-loan-requests-heading">
          <h1>Loan Requests</h1>
          <p>Review and manage all pending loan applications submitted by users</p>
        </div>


       {loanRequests?.length>0? <div className="home-admin-credit-req-tables heading-req-table mb-3">
          <p>FULL NAME</p>
          <p>Loan Type </p>
          <p> Loan Duration</p>
          <p>Requested Amount</p>
          <p>Interest Rate</p>
          <p>Profile</p>
          <p>...</p>
        </div>:<div className='mt-5'>
                    <p className='text-center'>No credit card requests are available at the moment.!!</p>
                </div>}
        {loanRequests?.length > 0 ? loanRequests?.map((a, key) => (
          <div className="home-admin-credit-req-tables heading-req-content mb-3">
            <div>
              {/* <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png" style={{width:'40px',height:'40px',borderRadius:'50%'}} alt="" /> */}
              <p>{a?.fullname}</p>
            </div>
            <p>{a?.loanType}</p>
            <p>{a?.loanDuration} years</p>
            <p>₹{a?.requestedAmount}</p>
            <p>{a.interestRate}%</p>
            <p style={{cursor:'pointer'}} onClick={()=>onViewProfile(a)}>View Profile</p>
            <div className='btn-loan-req-div'>
              <button onClick={() => handleShow(a)}>Approve</button>
              <button onClick={() => handleRejectShow(a)}>Reject</button>
            </div>
          </div>
        )) : ""}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header style={{ background: 'gray', border: '1px solid blueviolet' }} closeButton>
          <Modal.Title className='text-light'>Approve Loan Requestt</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-white' style={{ background: 'gray', border: '1px solid blueviolet' }}>
          <Modal.Body style={{ background: 'gray' }}>
            <p>Do you want to approve the loan application?</p>

            <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>
              Applicant Name:
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                {userdetails?.fullname}
              </span>
            </p>

            <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>
              Loan Amount:
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                ₹{userdetails?.requestedAmount}
              </span>
            </p>

            <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>
              Duration:
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                {userdetails?.loanDuration} months
              </span>
            </p>

            <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>
              Interest Rate:
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                {userdetails?.interestRate}%
              </span>
            </p>

            <p>Once approved, the user will receive the loan amount under the mentioned terms.</p>
          </Modal.Body>
        </Modal.Body>
        <Modal.Footer style={{ background: 'gray', border: '1px solid blueviolet' }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ background: 'blueviolet', border: '1px solid blueviolet' }} onClick={approveLoan}>Approve</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={reject}
        onHide={handleRejectClose}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header style={{ background: 'gray', border: '1px solid blueviolet' }} closeButton>
          <Modal.Title className='text-light'>Reject Loan Request</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-white' style={{ background: 'gray', border: '1px solid blueviolet' }}>
          <Modal.Body style={{ background: 'gray' }}>
            <p>Do you want to reject the loan application?</p>

            <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>
              Applicant Name:
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                {loanData?.fullname}
              </span>
            </p>

            <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>
              Loan Amount:
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                ₹{loanData?.requestedAmount}
              </span>
            </p>

            <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>
              Duration:
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                {loanData?.loanDuration} Years
              </span>
            </p>

            <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>
              Interest Rate:
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
                {loanData?.interestRate}%
              </span>
            </p>

            <p>Once rejected, the user will not receive the loan under the mentioned terms. They may apply again later if eligible.</p>
          </Modal.Body>
        </Modal.Body>

        <Modal.Footer style={{ background: 'gray', border: '1px solid blueviolet' }}>
          <Button variant="secondary" onClick={handleRejectClose}>
            Close
          </Button>
          <Button style={{ background: 'blueviolet', border: '1px solid blueviolet' }} onClick={rejectLoan}>Reject</Button>
        </Modal.Footer>
      </Modal>




    </>

  )
}

export default HomeAdminLoanRequests
