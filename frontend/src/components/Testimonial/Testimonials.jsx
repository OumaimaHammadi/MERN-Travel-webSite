import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

// Stop 1:21:06


const Testimonials = () => {
  const settings={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,



  //   responsive:[
  //     {
  //       breakpoint:992,
  //       settings:{
  //         slidesToShow:2,
  //         slidesToScroll:1,
  //         dots:true,
  //         infinite:true,
  //       }

  //     },
  //     {
  //       breakpoint:576,
  //       settings:{
  //         slidesToShow:1,
  //         slidesToScroll:1,
  //         dots:true,
  //         infinite:true,
  //       }

  //     }
  //   ]

  }



  return (
    <Slider {...settings}>
        <div className="testimonial  py-4 px-3">
            <p>
                
          We pride ourselves with the positive testimonials we receive from our clients; 
          however, we always strive to improve our services.
          Hearing what our returning clients have to say plays 
          a vital role in understanding how we can enhance our programs and customer service
          . Communication is key – Always
          </p> 
            <div className="d-flex align-items-center gap-4 mt-3">
              <img src={ava01} className="w-25 h-25 rounded-2 " alt="" />
              <div>
              <h5  className='mb-0 mt-3'>John Doe </h5>
                  <p>Customer </p>
              </div>              
            </div>
        </div>

{/* 2éme témoignage */}

        <div className="testimonial  py-4 px-3">
            <p>
                
          We pride ourselves with the positive testimonials we receive from our clients; 
          however, we always strive to improve our services.
          Hearing what our returning clients have to say plays 
          a vital role in understanding how we can enhance our programs and customer service
          . Communication is key – Always
          </p> 
            <div className="d-flex align-items-center gap-4 mt-3">
              <img src={ava02} className="w-25 h-25 rounded-2 " alt="" />
              <div>
              <h5  className='mb-0 mt-3'>Emeli </h5>
                  <p>Customer </p>
              </div>              
            </div>
        </div>
{/* end 2éme témoignage */}



{/* 3éme témoignage */}

<div className="testimonial  py-4 px-3">
            <p>
                
          We pride ourselves with the positive testimonials we receive from our clients; 
          however, we always strive to improve our services.
          Hearing what our returning clients have to say plays 
          a vital role in understanding how we can enhance our programs and customer service
          . Communication is key – Always
          </p> 
            <div className="d-flex align-items-center gap-4 mt-3">
              <img src={ava03} className="w-25 h-25 rounded-2 " alt="" />
              <div>
              <h5  className='mb-0 mt-3'> Mario  </h5>
                  <p>Customer </p>
              </div>              
            </div>
        </div>
{/* end 3éme témoignage */}



{/* 4éme témoignage */}

<div className="testimonial  py-4 px-3">
            <p>
                
          We pride ourselves with the positive testimonials we receive from our clients; 
          however, we always strive to improve our services.
          Hearing what our returning clients have to say plays 
          a vital role in understanding how we can enhance our programs and customer service
          . Communication is key – Always
          </p> 
            <div className="d-flex align-items-center gap-4 mt-3">
              <img src={ava02} className="w-25 h-25 rounded-2 " alt="" />
              <div>
              <h5  className='mb-0 mt-3'> Julia  </h5>
                  <p>Customer </p>
              </div>              
            </div>
        </div>
{/* end 4éme témoignage */}








    </Slider>
  )
}

export default Testimonials