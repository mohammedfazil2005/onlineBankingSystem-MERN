import React from 'react'
import './HomeRightProfile.css'

const HomeRightProfile = () => {
  return (
    <>    <div className="home-user-card-headings">
    <h1>Your Information</h1>
    <p>Here you can edit public information about yourself. <br /> The changes will be displayed for other users within 5 minutes.</p>
</div>
    <div className='user-profile-page-parent'>

      <div className="user-profile-page-left">
       
        <div className="user-profile-page-left-input-div">
        <div>
          <h6>Email address</h6>
          <input type="text" />
        </div>
        <div>
          <section>
          <main>
          <h6>Full Name</h6>
          <input type="text" />
          </main>
          <main>
          <h6>Last Name</h6>
          <input type="text" />
          </main>
          </section>
        </div>

        <div>
          <section>
          <main>
          <h6>DOB</h6>
          <input type="text" />
          </main>
          <main>
          <h6>Phone</h6>
          <input type="text" />
          </main>
          </section>
        </div>

        <div>
          <section>
          <main>
          <h6>STATE</h6>
          <input type="text" />
          </main>
          <main>
          <h6>PINCODE</h6>
          <input type="text" />
          </main>
          </section>
        </div>

        <div>
          <section>
          <main>
          <button>Change Password</button>
          </main>
          <main>
          <button>Update</button>
          </main>
          </section>
        </div>
        </div>
       
        
      </div>
      <div className="user-profile-page-right">
        <img src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D" alt="" />
        <button>Change</button>
      </div>
    </div>
    </>

  )
}

export default HomeRightProfile
