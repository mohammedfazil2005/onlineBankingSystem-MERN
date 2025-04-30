import React, { useEffect, useState } from 'react'
import './HomeRightNotifications.css'
import { Button, ListGroup, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { onDeleteNotifications, onFetchAllNotifications } from '../../../../services/allAPI'
const HomeRightNotifications = () => {
  const [notification,setNotification]=useState([])
  const navigate=useNavigate()
  const [currentPage,setCurrentPage]=useState(1)

   const [notShow, setNotShow] = useState(false);
   const [viewNot,setViewNot]=useState({})

   const [not,setNot]=useState('')

  const handleCloseNot = () => setNotShow(false);
    const handleShowNot = (a) => {
        setViewNot(a)
        setNotShow(true)
    };

  const fetchNotifications=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){
      const header={
        'Authorization':`Bearer ${token}`
      }
      try {
        const serverResponce=await onFetchAllNotifications(header)
        if(serverResponce.status==200){
          setNotification(serverResponce.data)
        }else{
        
        }
      } catch (error) {
        console.log(error)
      }
    }else{
      toast.error("Please login again")
      navigate('/login')
    }
  }
  
  let notificationPerPage=8
  let totalpages=Math.ceil(notification?.length/notificationPerPage)

  let lastIndex=currentPage* notificationPerPage
  let firstIndexIndex=lastIndex-notificationPerPage

  let slicedData=notification?.slice(firstIndexIndex,lastIndex)

  const onBackward=()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }

  const onForward=()=>{
    if(currentPage<totalpages){
      setCurrentPage(currentPage+1)
    }
  }

  const deleteNotification=async()=>{
    const token=sessionStorage.getItem("token")
    if(token){
      const header={
        'Authorization':`Bearer ${token}`
      }
      try {
        const serverResponce=await onDeleteNotifications(viewNot.id,header)
        if(serverResponce.status==200){
          toast.success(
            "Notification Deleted!",
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
          handleCloseNot()
          setNot("done")
        }
      } catch (error) {
        console.log(error)
      }
    }else{
      toast.error("Please login again")
      navigate('/login')
    }
  }


  useEffect(()=>{
    fetchNotifications()
  },[not])

  




  return (
    <>
    <div className='home-right-notifications-parent'>
      <div className="home-right-notification-heading">
        <h1>All Notifications</h1>
        <p>Stay updated with your account activities</p>
      </div>
      <div className='notfication-table-parent'>
        {slicedData.length>0?slicedData?.map((a)=>(
           <div key={a.id} className='notification-table-main'>
           <div>
           <i className='fa-solid fa-bell'></i>
           <p>{a?.message}...</p>
           </div>
       <div>
           <button onClick={()=>handleShowNot(a)}>View</button>
       </div>
       </div>
        )):''}


       
        <hr />

        <div className='d-flex align-items-center justify-content-center'>
                <button className='btn' onClick={onBackward}><i class="fa-solid fa-arrow-left"></i></button>
                <p>{currentPage} of {totalpages}</p>
                <button className='btn' onClick={onForward}><i class="fa-solid fa-arrow-right"></i></button>
            </div>

      </div>
    </div>
  
       <Modal show={notShow} onHide={handleCloseNot} size='md'>
                <Modal.Header closeButton>
                    <Modal.Title>View Notifications</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        {/* <img style={{width:'50px',background:'black'}} src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-1_2.png" alt="" /> */}
                        <h6>ID: <span style={{fontWeight:'400',fontSize:'15px'}}>{viewNot?.id}</span> </h6>
                        <h6 className='mt-3'>MESSAGE: <span style={{fontWeight:'400',fontSize:'15px'}}>{viewNot?.message}</span> </h6>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseNot}>
                        Close
                    </Button>

                    <Button variant="secondary" onClick={deleteNotification}>
                        Delete
                    </Button>
                    {/* <Button variant="primary">
                        Send
                    </Button> */}
                </Modal.Footer>
            </Modal>
          
    </>
  )
}

export default HomeRightNotifications
