import React, { useContext, useEffect, useState } from 'react'
import HomeAdminDashboard from './homeadmindashboard/HomeAdminDashboard'
import HomeAdminUserDetails from './homeadminUserDetails/HomeAdminUserDetails'
import HomeUserProfile from './homeUserProfile/HomeUserProfile'
import HomeAdminLoanRequests from './homeadminloanrequests/HomeAdminLoanRequests'
import HomeAdminTransactions from './homeadminallTransactions/HomeAdminTransactions'
import HomeAdminNotifications from './homeadminNotifications/HomeAdminNotifications'
import HomeAdminCreditCardReq from './homeadmincreditCardRequests/HomeAdminCreditCardReq'
import HomeAdminCreditCardManage from './homeadmincreditCardManage/HomeAdminCreditCardManage'
import HomeAdminStaff from './homeadminAddStaff/HomeAdminStaff'
import HomeAdminStaffManagement from './homeAdminStaffManagement/HomeAdminStaffManagement'
import HomeStaffProfile from './homestaffProfile/HomeStaffProfile'
import HomeAdminApprovedLoan from './homeadminApprovedLoan/HomeAdminApprovedLoan'
import { Button, Modal } from 'react-bootstrap'
import { AuthContext } from '../../../contexts/TokenContext'
import toast from 'react-hot-toast'


const HomeAdminRight = ({categoryName,setCategoryName}) => {

  
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
     {categoryName=="Admin Dashboard"?<HomeAdminDashboard/>:""}
     {categoryName=="Account holders"?<HomeAdminUserDetails setCategoryName={setCategoryName}/>:""}
     {categoryName=="Add staff"?<HomeAdminStaff/>:""}
     {categoryName=="ViewProfile"?<HomeUserProfile setCategoryName={setCategoryName}/>:""}
     {categoryName=="Loan Requests"?<HomeAdminLoanRequests setCategoryName={setCategoryName}/>:""}
     {categoryName=="Transactions"?<HomeAdminTransactions/>:""}
     {categoryName=="Notifications"?<HomeAdminNotifications/>:""}
     {categoryName=="Credit Card Requests"?<HomeAdminCreditCardReq setCategoryName={setCategoryName}/>:""}
     {categoryName=="Manage Credit Cards"?<HomeAdminCreditCardManage/>:""}
     {categoryName=="Staff Management"?<HomeAdminStaffManagement setCategoryName={setCategoryName}/>:""}
     {categoryName=="viewstaffprofile"?<HomeStaffProfile/>:""}
     {categoryName=="Manage Loans"?<HomeAdminApprovedLoan/>:""}
     {categoryName=="Logout"?<HomeAdminDashboard/>:""}

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

export default HomeAdminRight
