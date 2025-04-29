import React, { useContext, useEffect, useState } from 'react'
import './HomeAdminUserDetails.css'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { onFetchAccountHolders } from '../../../../services/allAPI'
import { AuthContext } from '../../../../contexts/TokenContext'

const HomeAdminUserDetails = ({setCategoryName}) => {
  

    const [users,setUsers]=useState([])
    const [search,setSearch]=useState('')
    const [data,setData]=useState([])

    const navigate=useNavigate()
    const {setUserID}=useContext(AuthContext)

    const onHandleShow=(id)=>{
        setUserID(id)
        setCategoryName("ViewProfile")
    }

    

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

    

    useEffect(()=>{
        if(search==""){
         setData(users)
        }else{
            let isName=users?.filter((a)=>a.firstname.toLowerCase().includes(search.toLowerCase()))
        setData(isName)
        }
    },[search,users])

    useEffect(()=>{
        fetchAccountHolders()
    },[search])

    console.log(users)



    return (
        <div className='home-admin-userdetails-parent'>

            <div className="home-admin-user-details-heading">
                <h1>User Management</h1>
                <p>Manage user details</p>
            </div>
            <div className="home-admin-user-details-search">
                <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search user' />
                <button>Search</button>
            </div>
            <div className="home-admin-user-details-table-parent">
            {data?.length>0?data?.map((a)=>(
                <> <div className="user-details-table-card-main">
                <div>
                    <img src={`http://localhost:3000/uploads/${a.imageurl}`} alt="" />
                    <h2>{a?.firstname}</h2>
                    <h6>{a?.email}</h6>
                </div>
                <main>
                <p>Active</p>
                <button onClick={()=>onHandleShow(a?._id)}>Show</button>
                </main>
               </div>
               <hr /></>
            )):<p>No users found!</p>}
            </div>
            
              
               
            

        </div>
    )
}

export default HomeAdminUserDetails
