import React,{useState,useContext} from 'react'
import './booking.css'
import { Form,FormGroup,ListGroup,ListGroupItem,Button} from 'reactstrap'

import {useNavigate} from 'react-router-dom'

import {BASE_URL} from '../../utils/config'


import {AuthContext} from '../../context/AuthContext'
 


const Booking = ({tour,avgRating}) => {

    const {price,reviews,title}=tour
    const navigate = useNavigate()


    const {user} =useContext(AuthContext)
    // 53:32 err server 500

    
    const [booking,setBooking]= useState({
      userId:user && user._id,
      userEmail:user && user.email,
      tourName:title,
      fullName:'',
      Phone:'',
      guestSize:'',
      bookAt:''
    })


    const handleChange = e =>{
      setBooking(prev =>({
        ...prev,[e.target.id]:e.target.value

      }))

    }
    const serviceFee =10
    const totalAmount =
     Number(price) * Number(booking.guestSize)+ Number(serviceFee)

    //send data to the server
    const handleClick = async e =>{
      e.preventDefault();
      console.log(booking)



      
  try {

    if(!user || user === undefined || user === null){

      alert('Please sign in')
    }

const res = await fetch (`${BASE_URL}/booking`,{
  method:'post',
  headers:{
    'content-type':'application/json',
  },
  credentials:'include',
  body:JSON.stringify(booking),
})
    

    const result = await res.json()


    navigate('/thank-you')

    if(!res.ok) {

        return alert(result.message)
    }



    
  } catch (err) {
    alert(err.message)    
  }
}


  return (
    <div className='booking'>
        <div className="booking__top d-flex align-items-center 
        justify-content-between">

            <h3>${price} <span>/per person</span>  </h3>

<span className="tour__rating 
    d-flex align-items-center ">

<i class="ri-star-fill"></i> 
 {avgRating === 0 ? null :avgRating} ({reviews?.length})


</span>
        </div>


        {/*-----booking from -------*/}
        <div className="booking__form">
          <h5>Information</h5>
          <Form className="booking__info-form" onSubmit={handleClick}>

          <FormGroup>
            <input type="text" placeholder='Full Name'id='fullName' required onChange={handleChange}/>
          </FormGroup>


          <FormGroup>
            <input type="number" placeholder='Phone' id='Phone' required onChange={handleChange}/>
          </FormGroup>

          <FormGroup className='d-flex align-items-center gap-3'>
            <input type="date" placeholder='Full Name' id='bookAt' required onChange={handleChange}/>

            <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange}/>
          </FormGroup>

          </Form>
        </div>
        {/*-----booking from end -------*/}

        {/*-----booking botton -------*/}

        <div className="booking__bottom">
          <ListGroup>
            <ListGroupItem className='border-0 px-0'>

                <h5 className='d-flex align-items-center gap-1'>
                  ${price}
                  <i class="ri-close-circle-line"></i>
                1 person 
                </h5>

                <span>${price}</span>
            </ListGroupItem>


            <ListGroupItem className='border-0 px-0'>

          <h5>Service Charge</h5>
          <span>${serviceFee}   </span>
          </ListGroupItem>


          <ListGroupItem className='border-0 px-0 total'>

          <h5>Total</h5>
          <span>$ {totalAmount} </span>


          </ListGroupItem>





          </ListGroup>

          <Button className="btn primary__btn w-100 mt-4 " onClick={handleClick}>
            Book Now
          </Button>
        </div>


        
        {/*-----booking botton end  -------*/}




    </div>
  )
}

export default Booking