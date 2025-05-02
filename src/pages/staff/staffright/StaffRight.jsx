import React, { useContext, useEffect, useState } from 'react'
import HomeAdminCreditCardReq from '../../admin/homeadminright/homeadmincreditCardRequests/HomeAdminCreditCardReq'
import HomeAdminLoanRequests from '../../admin/homeadminright/homeadminloanrequests/HomeAdminLoanRequests'
import StaffDepositMoney from './staffDepositMoney/StaffDepositMoney'
import HomeRightNotifications from '../../user/homeright/homerightnotification/HomeRightNotifications'
import StaffDashboard from './staffDashboard/StaffDashboard'
import { AuthContext } from '../../../contexts/TokenContext'
import { Button, Modal } from 'react-bootstrap'
import toast from 'react-hot-toast'


const StaffRight = ({categoryName}) => {
    const { role, setRole } = useContext(AuthContext)
    
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
    
    
    
      const onLogout = () => {
        toast.error("Logged out!")
        sessionStorage.clear()
        setRole("null")
      }
    useEffect(()=>{
      if(categoryName=="Logout"){
       handleShow()
      }
  
    },[categoryName])
  return (
    <div>
       {categoryName=="Dashboard"?<StaffDashboard/>:""} 
       {categoryName=="Credit Card Requests"?<HomeAdminCreditCardReq/>:""} 
       {categoryName=="Loan Requests"?<HomeAdminLoanRequests/>:""}
       {categoryName=="Withdraw from User"?<StaffDepositMoney/>:""}
       {categoryName=="Notifications"?<HomeRightNotifications/>:""}
       {categoryName=="Logout"?<StaffDashboard/>:""}

        <Modal show={show} onHide={handleClose} size="md" >
             <Modal.Header style={{ background: 'gray', border: '1px solid blueviolet',color:'white' }}  closeButton>
               <Modal.Title  >Confirm Logout</Modal.Title>
             </Modal.Header>
           
             <Modal.Body style={{ background: 'gray', border: '1px solid blueviolet',color:'white' }} >
               <h5 className="mb-4">Are you sure you want to log out?</h5>
               <div className="d-flex  gap-2">
                 <button className="btn btn-secondary" onClick={handleClose}>
                   Cancel
                 </button>
                 <button className="btn btn-danger" onClick={onLogout}>
                   Logout
                 </button>
               </div>
             </Modal.Body>
           </Modal>

    </div>
  )
}

export default StaffRight
