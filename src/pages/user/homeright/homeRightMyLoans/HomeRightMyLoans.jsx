import React, { useContext, useEffect, useState } from 'react'
import './HomeRightMyLoans.css'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { onCancelLoanRequest, onFetchLoans } from '../../../../services/allAPI'
import { Button, Modal } from 'react-bootstrap'
import { AuthContext } from '../../../../contexts/TokenContext'
import { generateLoanReceiptPDF } from '../../../../services/LoanRecipet'
const HomeRightMyLoans = ({ setCategoryName }) => {

    const [activeloans, setActiveLoans] = useState([])
    const [requestedLoans, setRequestedLoans] = useState([])
    const {setLoanid}=useContext(AuthContext)

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [loanID, setLoanId] = useState({})
    const [not,setNot]=useState('')

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setLoanId(e)
        setShow(true)
    };

    const fetchLoans = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const header = {
                'Authorization': `Bearer ${token}`
            }
            try {
                const serverResponce = await onFetchLoans(header)
                if (serverResponce.status == 200) {
                    setActiveLoans(serverResponce.data.loans)
                    setRequestedLoans(serverResponce.data.requestedLoans)
                } else {
                    toast.error("Something went wrong!")
                }
            } catch (error) {
                console.log(error)
            }

        } else {
            toast.error("Please Login Again!")
            navigate("/login")
        }
    }
    const cancelLoan = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const header = {
                'Authorization': `Bearer ${token}`
            }
            try {
                const serverResponce = await onCancelLoanRequest(loanID.id,header)
                if (serverResponce.status == 200) {
                    toast.success(
                        "The loan request has been cancelled successfully. You can apply again anytime.",
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
                    toast.error("Something went wrong!")
                }
            } catch (error) {
                console.log(error)
            }

        } else {
            toast.error("Please Login Again!")
            navigate("/login")
        }
    }

    const onPayLoanAmountBtn=(id)=>{
        setLoanid(id)
        setCategoryName("payloan")
    }



    useEffect(() => {
        fetchLoans()
    }, [not])

    console.log(activeloans)



    return (
        <div className='home-right-my-loans-parent'>
            <div className="home-right-my-loans-heading">
                <h1>My Loans</h1>
                <p>View and manage your active loans</p>
            </div>
            <div className="my-loans-cards-parent">
                {activeloans?.length > 0 ? activeloans?.map((a, key) => (

                    <div key={key} className="my-loans-card-main">
                        <div>
                            <h4>Loan type :<span>{a?.loantype}</span></h4>
                            <h4>Loan Amount :<span>₹{a?.loanamount}</span></h4>
                            <h4>Loan Duration :<span>{a?.loanduration} Year</span></h4>
                            <h4>Interest Rate (%):<span>{a?.interestrate}%</span></h4>
                            <h4>Remaining Loan Balance: <span>₹{a?.remainingloanamount}</span></h4>
                            <h4>Next EMI Due: <span>{a?.EMIdate}</span></h4>
                            <h4> EMI Amount: <span>₹{a?.EMIAmount}</span></h4>
                            <main>
                                {/* <button onClick={() => setCategoryName("payloan")}>Pay EMI</button> */}
                                <button onClick={()=>onPayLoanAmountBtn(a.loanID)}>Pay Full Loan Amount</button>
                            </main>
                        </div>
                        <div>
                            <button id='download-loan-recipet' onClick={()=>generateLoanReceiptPDF(a)}>Download Loan Receipt</button>
                        </div>
                    </div>


                )) : <div className=' w-100'><p className='text-center'>Looks like you don’t have an active loan at the moment!</p></div>}
            </div>

            <div className="home-right-my-loans-heading">
                <h2>Requested Loans</h2>
                <p>View your loan applications that are currently <br />
                    pending approval or have been denied.</p>
            </div>

            <div className="my-loans-cards-parent">
                {requestedLoans?.length > 0 ? requestedLoans?.map((a) => (
                    <div className="my-loans-card-main" style={{ border: '1px solid #660e19', width: '400px' }}>
                        <div>
                            <h4>Loan type :<span style={{ color: 'gray' }}>{a?.loanType}</span></h4>
                            <h4>Loan Amount :<span style={{ color: 'gray' }}>₹{a?.requestedAmount}</span></h4>
                            <h4>Loan Duration :<span style={{ color: 'gray' }}>{a?.loanDuration} Years</span></h4>
                            <h4>Interest Rate (%):<span style={{ color: 'gray' }}>{a?.interestRate}%</span></h4>
                            <h4>Status:<span style={{ color: 'gray' }}>{a?.status}</span></h4>
                            <main>
                                <button onClick={() => handleShow(a)}>Cancel Loan Request</button>

                            </main>
                        </div>
                        <div>
                            ...
                        </div>
                    </div>
                )) : <div className=' w-100'><p className='text-center'>Looks like you don’t Requested any loan!</p></div>}
         

            </div>

            <div className='mb-2'>

            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}

            >
                <Modal.Header style={{ background: 'gray', border: '1px solid blueviolet' }} closeButton>
                    <Modal.Title className='text-light'>Cancel Loan Request</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-white' style={{ background: 'gray', border: '1px solid blueviolet' }}>
                    <p>Are you sure you want to cancel the loan request?</p>

                    <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>Loan Amount: <span style={{ fontWeight: 'bold', fontSize: '15px' }}>₹{loanID?.requestedAmount}</span></p>
                    <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>Loan Duration: <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{loanID?.loanDuration}</span> Years</p>
                    <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>Interest Rate: <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{loanID?.interestRate}%</span></p>

                    <p>Once cancelled, the user will no longer have access to this loan request. Please confirm your action.</p>
                </Modal.Body>

                <Modal.Footer style={{ background: 'gray', border: '1px solid blueviolet' }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{ background: 'blueviolet', border: '1px solid blueviolet' }} onClick={cancelLoan}>Cancel Loan Request</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default HomeRightMyLoans
