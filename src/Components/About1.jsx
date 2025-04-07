import React from 'react'
import Image2 from "./Images/Image2.jpeg"
const About1 = () => {
  return (
    <>
         <div className='bg-white  '>
                <div className='ml-[10%] mr-[10%] mt-36 flex justify-between' >
                  <img src={Image2} alt="" />
                  <div className=''>
                    <h1 className='text-black text-5xl mt-16  '>ABOUT <span className='text-[#F86200]'>COMPANY</span></h1>
                    <p className='text-2xl leading-relaxed mt-16'>Black Grapes Softech is an IT Company extending its services in the field of Software Development. We’re not just another company; we’re your innovationpartner. With a passion for coding and a commitment to excellence, we craft solutions that push the boundaries of what’s possible. Our team of techsavvy wizards brings diverse expertise to the table. From web and mobile apps to cutting-edge AI and IoT solutions, we’ve got it all covered. Our customization prowess knows no bounds. We take your vision and turn it into reality, creating software that aligns perfectly with your goals.</p>
                  </div>
                </div>
              </div>
        
    </>
  )
}

export default About1