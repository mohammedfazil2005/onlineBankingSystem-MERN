import React from 'react'
import './HomeAdminCreditCardManage.css'
import { Form } from 'react-bootstrap'

const HomeAdminCreditCardManage = () => {

    
    return (
        <div className='home-admin-credit-manage-parent'>
            <div className="heading-dashboard">
                <h1>All User Credit Cards</h1>
                <p>Review and manage all credit cards assigned to users within the banking system.</p>
            </div>
            <div className='me-3'>
             
                <Form.Select aria-label="Default select example" value={''} style={{width:'180px'}} className='float-end'>
                            <option value="" disabled>Select card type</option>
                            <option value="1">Silver</option>
                            <option value="2">Gold</option>

                        </Form.Select>
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

                <div className='main-card' style={{ background: 'url(https://media-hosting.imagekit.io/a8ff3bf7410d42e0/goldtheme-fotor-20250326224819.png?Expires=1837617563&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BVBxYriwWI3OmL~HCXv8pDll9-tAcReop~muaT9T0H8MKkYKNBPLFp5qLbevq38v3Lt9zpNfnC2ycmnv-d8rxBrJyXwcNrKza79J5FAczzRD3u0gA5~4eszfVT-xSWd7bBQn46ic3i2EtkaZkpqTLXMNHFbr0sxmAV5rRNrPVMlgYaMK4IC569Id9WQ4IuqoI7goWR0I-7xGWidYg2QwMEY1KjkESHauCvH5BZITDwEPwpXoPfLbTHYKrS0u1G9coQQu3iukAY9~4gIqi1qxkmlPVYqw1Jdq0vQMy54LjY9oB5rdUcACnG3cih6MHBUncrbV6nWyjip1Dg2wUf17~A__)' }}>
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
                <div className='main-card' style={{ background: 'url(https://media-hosting.imagekit.io/a8ff3bf7410d42e0/goldtheme-fotor-20250326224819.png?Expires=1837617563&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BVBxYriwWI3OmL~HCXv8pDll9-tAcReop~muaT9T0H8MKkYKNBPLFp5qLbevq38v3Lt9zpNfnC2ycmnv-d8rxBrJyXwcNrKza79J5FAczzRD3u0gA5~4eszfVT-xSWd7bBQn46ic3i2EtkaZkpqTLXMNHFbr0sxmAV5rRNrPVMlgYaMK4IC569Id9WQ4IuqoI7goWR0I-7xGWidYg2QwMEY1KjkESHauCvH5BZITDwEPwpXoPfLbTHYKrS0u1G9coQQu3iukAY9~4gIqi1qxkmlPVYqw1Jdq0vQMy54LjY9oB5rdUcACnG3cih6MHBUncrbV6nWyjip1Dg2wUf17~A__)' }}>
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
