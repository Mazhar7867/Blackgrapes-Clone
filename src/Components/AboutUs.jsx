import React from 'react'
import Footer from "../Footer"
import about from "./Images/about.png"
import founders from "./Images/founders.jpeg"
const AboutUs = () => {
  return (
    <>
        <div className='Ml-[10%] mr-[10%]'>
        <h1 className='text-center text-5xl font-bold text-black mt-36'>About US</h1>
             <div className='flex justify-around h-full mt-36 mb-36'>

          <img className='h-[600px] w-[600px]' src={about} alt="" />
          <div className='w-[500px]'>
            <h1 className='text-center text-4xl font-bold mb-16' >Vision</h1>
            <h2 className='text-2xl leading-relaxed'> <b> Empowering Tomorrow Through Innovative Code </b> <br />
At Black Grapes Softech,  our vision is to lead the way in software development, using innovation and creativity to
shape the future of technology. We envision a world where every software solution we create empowers individuals, businesses, and communities to thrive and excel.</h2>
          
          </div>

          <div className='w-[500px]'>
            <h1 className='text-center text-4xl font-bold mb-16'>Mssions</h1>
            <h2 className='text-2xl leading-relaxed'><b> Crafting Excellence, One Line of Code at a Time </b> <br />
Our mission is to provide exceptional software Development services tailored to our clients’ Unique needs. We are dedicated to delivering top notch, cutting-edge solutions while fostering a culture of collaboration, growth, and innovation.
<br />
<br />
<br />
At Black Grapes Softech, we
don’t just writecode; we build
the foundation for a better,
smarter, and more connected
world


Meet the founders</h2>
          </div>
        </div>
      </div>
      <div className='flex justify-between text-2xl'>
        <img src={founders} alt="" />
        <div>
          <h1 className='text-5xl' >Meet the founders</h1>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AboutUs