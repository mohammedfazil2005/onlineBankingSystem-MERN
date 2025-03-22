import React from 'react'
import './HomeAdminCreditCardManage.css'
const HomeAdminCreditCardManage = () => {

    
    return (
        <div className='home-admin-credit-manage-parent'>
            <div className="heading-dashboard">
                <h1>All User Credit Cards</h1>
                <p>Review and manage all credit cards assigned to users within the banking system.</p>
            </div>
            <div className="user-card-div-main">
                <div className='main-card' style={{ background: 'url(https://img.freepik.com/premium-vector/gold-luxury-background-theme_23-2148605021.jpg)' }}>
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
                       <button className='btn text-light'>view</button>
                    </div>
                   
                </div>

               


                

                
            </div>
        </div>
    )
}

export default HomeAdminCreditCardManage
