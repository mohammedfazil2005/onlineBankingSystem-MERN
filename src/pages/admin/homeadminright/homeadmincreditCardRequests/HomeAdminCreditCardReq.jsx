import React, { useContext, useEffect, useState } from 'react'
import './HomeAdminCreditCardReq.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { onApproveCreditCard, onFetchCreditCardRequests, onRejectCreditcardRequest } from '../../../../services/allAPI'
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../../../contexts/TokenContext'



const HomeAdminCreditCardReq = ({setCategoryName}) => {

    const [show, setShow] = useState(false);
    const [reject, setReject] = useState(false);

    const [userdetails, setUserdetails] = useState({})
    const [cardData,setCardData]=useState({})

      const {setUserID}=useContext(AuthContext)

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setUserdetails(e)
        setShow(true)
    };

    const handleRejectClose = () => setReject(false);
    const handleRejectShow = (e) => {
        setCardData(e)
        setReject(true)
    };

    const navigate = useNavigate()

    const [creditCardRequests, setCreditCardRequests] = useState([])
    const [not, setNot] = useState("")

    const fetchCreditCardRequests = async () => {
        const token = sessionStorage.getItem('token')
        if (token) {

            const header = {
                'Authorization': `Bearer ${token}`
            }

            try {
                const serverResponce = await onFetchCreditCardRequests(header)
                if (serverResponce.status == 200) {
                    setCreditCardRequests(serverResponce.data.allrequests)
                }
            } catch (error) {
                console.log(error)
            }

        } else {
            navigate('/login')
            toast.error("Please login again!")
        }
    }

    const approveCreditCardRequest = async () => {
        const token = sessionStorage.getItem('token')
        if (token) {
            const header = {
                'Authorization': `Bearer ${token}`
            }
            const payload = {
                id: userdetails.id,
                userID: userdetails.userID
            }

            try {
                const serverResponce = await onApproveCreditCard(payload, header)
                if (serverResponce.status == 200) {
                    toast.success(
                        "Credit card approved successfully! The user can now enjoy their new benefits.",
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
                } else if (serverResponce.status == 409) {
                    toast.error("User already have this card!")
                } else if (serverResponce.status == 400) {
                    toast.error("Application not found!")
                }
            } catch (error) {
                console.log(error)
                toast.error("Please try again!")
            }


        } else {
            navigate('/login')
            toast.error("Please login again!")
        }
    }

    const rejectCreditCardRequests = async () => {
        const token = sessionStorage.getItem('token')
        if (token) {
            const header = {
                'Authorization': `Bearer ${token}`
            }
            try {
                const serverResponce = await onRejectCreditcardRequest(cardData.id, header)
                if(serverResponce.status==200){
                    toast.success(
                        "The credit card request has been rejected.",
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
                }else{
                    toast.error("Please try again!")
                }

            } catch (error) {
                console.log(error)
                toast.error("Please try again!")
            }


        } else {
            navigate('/login')
            toast.error("Please login again!")
        }
    }

    const onViewProfile=(user)=>{
        setUserID(user)
        setCategoryName('ViewProfile')
      }





    useEffect(() => {
        fetchCreditCardRequests()
    }, [not])



    return (
        <>
            <div className='home-admin-credit-card-req-parent'>
                <div className="heading-dashboard">
                    <h1>Credit Card Requests</h1>
                    <p>Review and manage all credit card requests submitted by users.</p>
                </div>
                <div className='me-3'>

                    <Form.Select aria-label="Default select example" style={{ width: '120px' }} className='float-end'>
                        <option value="1">Silver</option>
                        <option value="2">Gold</option>

                    </Form.Select>
                </div>
                {creditCardRequests?.length > 0 ? <div className="home-admin-credit-req-table heading-req-table">
                    <p>FULL NAME</p>
                    <p>Email </p>
                    <p> Card Type</p>
                    <p>Profile</p>
                    <p>...</p>
                </div> : <div>
                    <p className='text-center'>No credit card requests are available at the moment.!!</p>
                </div>}
                {creditCardRequests?.length > 0 ? creditCardRequests?.map((a, key) => (
                    <div key={key} className="home-admin-credit-req-table heading-req-content">
                        <div>
                            <img src={`http://localhost:3000/uploads/${a.profileimg}`} alt="" />
                            <p>{a.name}</p>
                        </div>
                        <p>{a?.email}</p>
                        <h6>{a?.cardType}</h6>
                        <p onClick={()=>onViewProfile(a.userID)}>View Profile</p>
                        <div>
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
                    <Modal.Title className='text-light'>Approve Credit Card Request</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-white' style={{ background: 'gray', border: '1px solid blueviolet' }}>
                    <Modal.Body style={{ background: 'gray', }}>
                        <p>Do you want to approve the credit card application?</p>

                        <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>Card Type: <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{userdetails?.cardType}</span></p>
                        <p style={{ textTransform: 'uppercase', fontSize: '12px' }} >Applicant Name: <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{userdetails?.name}</span></p>

                        <p>Once approved, the user will gain access to credit card features.</p>
                    </Modal.Body>
                </Modal.Body>
                <Modal.Footer style={{ background: 'gray', border: '1px solid blueviolet' }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{ background: 'blueviolet', border: '1px solid blueviolet' }} onClick={approveCreditCardRequest}>Approve</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={reject}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}

            >
                <Modal.Header style={{ background: 'gray', border: '1px solid blueviolet' }} closeButton>
                    <Modal.Title className='text-light'>Reject Credit Card Request</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-white' style={{ background: 'gray', border: '1px solid blueviolet' }}>
                    <p>Do you want to reject the credit card application?</p>

                    <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>Card Type: <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{cardData?.cardType}</span></p>
                    <p style={{ textTransform: 'uppercase', fontSize: '12px' }}>Applicant Name: <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{cardData?.name}</span></p>

                    <p>Once rejected, the user will not be able to access credit card features. They can try applying again later.</p>
                </Modal.Body>
            <Modal.Footer style={{ background: 'gray', border: '1px solid blueviolet' }}>
                <Button variant="secondary" onClick={handleRejectClose}>
                    Close
                </Button>
                <Button style={{ background: 'blueviolet', border: '1px solid blueviolet' }} onClick={rejectCreditCardRequests}>Reject</Button>
            </Modal.Footer>
        </Modal >

        </>
    )
}

export default HomeAdminCreditCardReq
