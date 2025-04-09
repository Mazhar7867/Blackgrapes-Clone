import React from 'react'
import Footer from "../Footer"
import about from "./Images/about.png"
const AboutUs = () => {
  return (
    <div>
        <div className='Ml[10%] mr[10%]'>
        <h1 className='text-center text-5xl text-black'>About US</h1>

             <div className='flex justify-between'>
          <img className='h-[300px] w-[300px]' src={about} alt="" />
          <div>
            <h1>Vision</h1>
            <h2>Empowering Tomorrow Through Innovative Code
At Black Grapes Softech, our vision is to lead the way in software development, using innovation and creativity to
shape the future of technology. We envision a world where every software solution we create empowers individuals, businesses, and communities to thrive and excel.</h2>
          
          </div>

          <div>
            <h1>Mssions</h1>
            <h2>Crafting Excellence, One Line of Code at a Time
Our mission is to provide exceptional software Development services tailored to our clients’ Unique needs. We are dedicated to delivering top notch, cutting-edge solutions while fostering a culture of collaboration, growth, and innovation.

At Black Grapes Softech, we
don’t just writecode; we build
the foundation for a better,
smarter, and more connected
world


Meet the founders</h2>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs