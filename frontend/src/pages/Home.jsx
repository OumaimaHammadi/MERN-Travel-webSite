import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'reactstrap'

import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'



import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImageGallery from '../components/Image-gallery/MasonryImageGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'


const Home = () => {
  return (
    <>

    {/*-------hero section start*/}
 
    <section>
       <Container>
       <Row>
       <Col lg='6'>
         <div className="hero__content ">
           <div className="hero__subtitle d-flex align-items-center">
            
              <Subtitle subtitle={ 'Konw Before You Go'}/>
                <img src={worldImg} alt="" />

           </div>
 
 
           <h1>
              Traveling opens the door to creating 
              <span className='highlight'> memories </span>
            </h1>
 
           <p>
              ou can include the written description of the place that you have visited, list down your itinerary,
              the photos that you took during your trip and even voice recordings that you have made during your time. 
              Travel journals is one of the most popular journal amongst the different types of journals
           </p>
 
         </div>
       </Col>
 
       <Col lg='2'>
         <div className="hero__img-box">
           <img src={heroImg} alt="" />
         </div>
         </Col>

         <Col lg='2'>
         <div className="hero__img-box  hero__video-box mt-4">
           <video src={heroVideo} alt="" controls />
         </div> 
         </Col>


         <Col lg='2'>
          <div className="hero__img-box mt-5">
           <img src={heroImg02} alt="" />
         </div>
       </Col>


       <SearchBar />

       </Row>
       </Container>
 
     </section>
  <section>
    <Container>
      <Row>
      <Col lg='3'>
        <h5 className="services__subtitle">What we serve </h5>
        <h2 className="services__title" >
          We offer our best services
        </h2>

      </Col>
      <ServiceList />


      </Row>
      


    </Container>
  </section>

         {/*------- featured tour   section start--------*/}
         <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={"Explore"} />
              <h2 className='featured__tour-title'>Our featured tours</h2>
            </Col>
            <FeaturedTourList/>
          </Row>
         </Container>
       {/*------- featured tour section end---------*/}
       {/*------- experience section start---------*/}
       <section>
        <Container>
          <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />

              <h2> With our all experience <br/> we will serve you   </h2>
              <p>Qu'il soit long ou de courte durée, il est prouvé que voyager a un effet bénéfique sur notre développement personnel. En effet, partir à l'aventure, changer nos habitudes et découvrir de nouvelles choses permet de stimuler le cerveau et participe à notre bien-être.
              </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5  ">
              <div className="counter__box">
                <span>12K+</span>
                <h6>Successfull trip</h6>
           </div>


           <div className="counter__box">
                <span>2K+</span>
                <h6>Regular clients</h6>
           </div>

           <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>

           </div>

            </div>
          </Col>

          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
          </Row>

        </Container>
       </section>
       {/*------- experience section end---------*/}

              {/*------- gallery section start---------*/}

              <section>
                <Container>
                  <Row>
                    <Col lg='12'>
                      <Subtitle   subtitle={'Gallery'}/>
                      <h2 className="gallery__title">
                        Visit our customers tour gallery

                      </h2>

                    </Col>


                    <Col lg='12'>
                      <MasonryImageGallery />


                    </Col>
                  </Row>
                </Container>

              </section>
       {/*------- gallery section end---------*/}

              {/*------- testimonial section end---------*/}
              <section>
                <Container>
                  <Row>
                    <Col lg='12'>
                      <Subtitle subtitle={"Fan Love "}/>
                      <h2 className="testimonial__title">
                        What our fans say about us

                      </h2>
                    </Col>

                    <Col lg='12' >
                    <Testimonials/>
                    </Col>
                  </Row>
                </Container>
              </section>
       {/*------- testimonial section end---------*/}



                  {/*------- Newsletter section end---------*/}
                 
                    <Newsletter/>
                   
       {/*------- Newsletter section end---------*/}








     






   </>
        
  )
 

       {/*-------hero section end*/}

}

export default Home