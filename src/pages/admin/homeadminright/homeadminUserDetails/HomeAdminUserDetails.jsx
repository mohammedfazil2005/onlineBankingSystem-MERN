import React, { useEffect, useState } from 'react'
import './HomeAdminUserDetails.css'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { onFetchAccountHolders } from '../../../../services/allAPI'

const HomeAdminUserDetails = ({setCategoryName}) => {
    const onHandleShow=()=>{
        setCategoryName("ViewProfile")
    }

    const [users,setUsers]=useState([])

    const navigate=useNavigate()

    const fetchAccountHolders=async()=>{
        const token=sessionStorage.getItem("token")
        if(token){
            try {
                const header={
                    'Authorization': `Bearer ${token}`
                }

                const serverResponce=await onFetchAccountHolders(header)

                if(serverResponce.status==200){
                    setUsers(serverResponce.data)
                }

            } catch (error) {
                console.log(error)
            }
        }else{
            navigate('/login')
        }
    }

    console.log(users)

    useEffect(()=>{
        fetchAccountHolders()
    },[])



    return (
        <div className='home-admin-userdetails-parent'>

            <div className="home-admin-user-details-heading">
                <h1>User Management</h1>
                <p>Manage user details</p>
            </div>
            <div className="home-admin-user-details-search">
                <input type="text" placeholder='Search user' />
                <button>Search</button>
            </div>
            <div className="home-admin-user-details-table-parent">
            {users?.length>0?users?.map((a)=>(
                <> <div className="user-details-table-card-main">
                <div>
                    <img src={`http://localhost:3000/uploads/${a.imageurl}`} alt="" />
                    <h2>{a?.firstname}</h2>
                    <h6>{a?.email}</h6>
                </div>
                <main>
                <p>Active</p>
                <button onClick={()=>onHandleShow()}>Show</button>
                </main>
               </div>
               <hr /></>
            )):""}
            </div>
            
              
               
            

        </div>
    )
}

export default HomeAdminUserDetails
