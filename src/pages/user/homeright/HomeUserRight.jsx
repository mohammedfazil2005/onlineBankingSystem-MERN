import React, { useContext, useEffect, useState } from 'react'
import HomeRightUserDashboard from './homerightdashboard/HomeRightUserDashboard'
import HomeRightTransactionHistory from './HomeRightTransactionHistory/HomeRightTransactionHistory'
import HomeUserCards from './homerightUserCards/HomeUserCards'
import HomeRightPayment from './homeRightPayment/HomeRightPayment'
import HomeRightLoans from './homerightloans/HomeRightLoans'
import HomeRightMyLoans from './homeRightMyLoans/HomeRightMyLoans'
import HomeRightNotifications from './homerightnotification/HomeRightNotifications'
import HomeRightRepay from './homerightRepay/HomeRightRepay'
import HomePayLoan from './homepayloan/HomePayLoan'
import HomeRightProfile from './homerightProfile/HomeRightProfile'
import { AuthContext } from '../../../contexts/TokenContext'
import toast from 'react-hot-toast'
import { Button, Modal } from 'react-bootstrap'

const HomeUserRight = ({categoryName,setCategoryName}) => {
   const { role, setRole } = useContext(AuthContext)
     
       const [show, setShow] = useState(false);
      
     
       const handleClose = () =>{ 
        setShow(false) 
        
       };
       const handleShow = () =>{
    
       setShow(true);
       }
     
     
     
     
     
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
      {categoryName=="Dashboard"?<HomeRightUserDashboard/>:""}
      {categoryName=="Transactions"?<HomeRightTransactionHistory/>:""}
      {categoryName=="Accounts"?<HomeUserCards setCategoryName={setCategoryName}/>:""}
      {categoryName=="Payment Transfer"?<HomeRightPayment/>:""}
      {categoryName=="Loans"?<HomeRightLoans/>:""}
      {categoryName=="My Loans"?<HomeRightMyLoans setCategoryName={setCategoryName}/>:""}
      {categoryName=="Notifications"?<HomeRightNotifications/>:""}
      {categoryName=="Profile"?<HomeRightProfile/>:""}
      {categoryName=="repay"?<HomeRightRepay/>:""}
      {categoryName=="payloan"?<HomePayLoan setCategoryName={setCategoryName}/>:""}
      {categoryName=="Logout"?<HomeRightUserDashboard setCategoryName={setCategoryName}/>:""}
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

export default HomeUserRight
