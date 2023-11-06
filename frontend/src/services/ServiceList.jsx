import React from 'react'
import ServicesCard from './ServicesCard'
import {Col} from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData =[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:"Weather is weather"
        },
        {
            imgUrl:guideImg,
            title:"Best Tour Guide",
            desc:" guide description"
            },
            {
                imgUrl:customizationImg,
                title:"customization",
                desc:"customization is active"
                }
]


const ServiceList = () => {
  return (
    <>
    {serviceData.map((item,index)=>(
      <Col lg="3" md='6' sm="12" className='mb-4' key={index}>
      <ServicesCard item={item} />
  </Col>
    )    )}

        
    </>
  )
}

export default ServiceList