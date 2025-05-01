import React, { useContext, useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { onFetchDebitCardDetails, onFetchLoanAmount, onPayFullLoanAmount, onPayFullLoanAmountOTP } from '../../../../services/allAPI'
import { AuthContext } from '../../../../contexts/TokenContext'
import toast from 'react-hot-toast'
const HomePayLoan = ({setCategoryName}) => {

  const [remainingloanamount, setRemainingLoanAmount] = useState({})
  const navigate = useNavigate()
  const { loanid } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [OTP, setOTP] = useState()
  const [isOTP, setIsOTP] = useState(false)

  const [payData, setPayData] = useState({
    accountNumber: "",
    cvv: "",
    loanID: "",
  })


  const fetchloanAmount = async () => {
    const token = sessionStorage.getItem("token")

    if (token) {
      const header = {
        'Authorization': `Bearer ${token}`
      }
      try {
        const serverResponce = await onFetchLoanAmount(loanid, header)
        if (serverResponce.status == 200) {
          setRemainingLoanAmount(serverResponce.data)
          setPayData({
            loanID: serverResponce.data.loanID
          })
        } else {
          console.log(serverResponce)
        }

      } catch (error) {
        console.log(error)
      }

    } else {
      toast.error("Please Login Again!")
      navigate("/login")
    }
  }

  const payLoanAmount = async () => {
    const token = sessionStorage.getItem("token")

    if (token) {
      if (payData.accountNumber.length == 12) {
        if (payData.cvv.length == 3) {
          const header = {
            'Authorization': `Bearer ${token}`
          }
          const payload = {
            accountNumber: payData.accountNumber,
            cvv: payData.cvv,
            loanID: payData.loanID
          }
          try {
            setLoading(true)
            const serverResponce = await onPayFullLoanAmount(payload, header)
            if (serverResponce.status == 200) {
            setTimeout(()=>{
              toast.success(
                "OTP sent successfully! Please check your email or phone to proceed.",
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
              
              setIsOTP(true)
            },3000)
            } else if (serverResponce.status == 400) {
              setTimeout(()=>{
                toast.error("⚠️ Insufficient balance in your account to close the loan. Please ensure your account has enough funds and try again.")
                setLoading(false)
              },3000)
             
            }else if (serverResponce.status == 404) {
              setTimeout(()=>{
                toast.error("⚠️ Account not found. Please check the account number and try again.")
                setLoading(false)
              },3000) 
            }else {
              setTimeout(()=>{
                toast.error('⚠️ Unable to close the loan. Please ensure all dues are cleared and try again.')
                setLoading(false)
              },3000)
             
            }

          } catch (error) {
            setLoading(false)
            toast.error("Please try again!")
            console.log(error)
          }
        } else {
          toast.error("Please enter a valid CVV")
        }

      } else {
        toast.error("Please enter a valid account number")
      }


    } else {
      toast.error("Please Login Again!")
      navigate("/login")
    }
  }

  const OTPbtnClick = async () => {
    const token = sessionStorage.getItem("token")

    if (token) {
      if (OTP.length == 4) {
       
          const header = {
            'Authorization': `Bearer ${token}`
          }
          
          try {
            setLoading(true)
            setIsOTP(false)
            const serverResponce = await onPayFullLoanAmountOTP(OTP, header)
            if (serverResponce.status == 200) {
            setTimeout(()=>{
              toast.success(
                "✅ Loan successfully closed! The remaining balance has been deducted, and the transaction has been completed.",
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
              setLoading(false)
             
              setCategoryName("Loans")
            },3000)
          }else if(serverResponce.status==402){
            setTimeout(()=>{
              toast.error('⚠️ Incorrect OTP. Please check and try again.')
              setLoading(false)
              setIsOTP(true)
            },3000)
            }else {
              setTimeout(()=>{
                toast.error('⚠️Please try again!')
                setLoading(false)
                setIsOTP(true)
              },3000)
             
            }

          } catch (error) {
            setLoading(false)
            toast.error("Please try again!")
            console.log(error)
          }
       
      } else {
        toast.error("Please enter 4 digit OTP!")
      }


    } else {
      toast.error("Please Login Again!")
      navigate("/login")
    }
  }

  const fetchDebitCard=async()=>{
    const token = sessionStorage.getItem("token")
    if (token) {
      const header = {
        'Authorization': `Bearer ${token}`
      }
      try {
        const serverResponce = await onFetchDebitCardDetails(header)
        console.log(serverResponce)
        if (serverResponce.status == 200) {
         setPayData({...payData,accountNumber:serverResponce.data.accno,cvv:serverResponce.data.cvv})
        } else {
          console.log(serverResponce)
        }

      } catch (error) {
        console.log(error)
      }

    } else {
      toast.error("Please Login Again!")
      navigate("/login")
    }
  }



  useEffect(() => {
    fetchloanAmount()
  }, [loanid])

  console.log(payData)







  return (
    <>
      {isOTP ? <div className='login-parent'><div className="login-child">
        <Link to={'/'}> <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" /></Link>
        <p style={{ color: 'grey' }} >Enter the OTP sent to your email address</p>
        <FloatingLabel onChange={(e) => setOTP(e.target.value)} controlId="otp" label="OTP" className="mb-3">
          <Form.Control type="text" placeholder="ex: Rosh" className="cursor-pointer" maxLength={4} />
        </FloatingLabel>
        <button onClick={OTPbtnClick}>Submit</button>
      </div></div> : loading ? <div className='loader-div'>
        <img src="https://assets-v2.lottiefiles.com/a/b90ff028-1177-11ee-81af-97de0bdd79c1/3mdk9wAzDF.gif" alt="" />
      </div> : <div>
        <div className='login-parent'>
          <div className="login-childs">
            <Link to={'/'}> <img src="https://askproject.net/bankai/wp-content/uploads/sites/32/2021/10/logo_Asset-4_4-2048x688.png" alt="" /></Link>
            <h1 style={{ fontSize: '24px' }}>Loan Payment</h1>
            <p>Pay and settle your loan in full</p>


            <div className='main-card-right-money-details-div' >
              <div>
                <h2>EMI Payment Amount</h2>
                <h6 sty style={{ color: 'white', fontWeight: "bold", fontSize: '25px', letterSpacing: '2px', textAlign: 'left' }}>₹{remainingloanamount?.loanamount}</h6>
              </div>



            </div>

            <>
              <div className="repay-input-div">
                <div>


                  <FloatingLabel controlId="accountNumber" label="Account Number" className="mb-3">
                    <Form.Control
                      type="number"
                      placeholder="Enter your account number"
                      className="cursor-pointer"
                      value={payData.accountNumber}
                      maxLength={12}
                      onChange={(e) => setPayData({ ...payData, accountNumber: e.target.value })}
                      required
                    />
                  </FloatingLabel>

                  <FloatingLabel controlId="cvv" label="CVV" className="mb-3">
                    <Form.Control
                    value={payData.cvv}
                      type="number"
                      maxLength={3}
                      placeholder="Enter CVV"
                      className="cursor-pointer"
                      onChange={(e) => setPayData({ ...payData, cvv: e.target.value })}
                      required
                    />
                  </FloatingLabel>
                </div>

                <div>


                  <FloatingLabel controlId="amount" label="Amount" className="mb-3">
                    <Form.Control value={remainingloanamount?.loanamount}
                      type="number"
                      placeholder="Enter amount"
                      className="cursor-pointer"

                      required
                    />
                  </FloatingLabel>


                </div>

              </div>
              <div className="debit-card-fill-details">
                <p onClick={fetchDebitCard}>Use Your Debit Card Details</p>
              </div>

            </>
            <button onClick={payLoanAmount}>Pay EMI</button>
          </div>
        </div>
      </div>}
     
    </>
  )
}

export default HomePayLoan
