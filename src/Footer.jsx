import React from 'react'

let Industries =[
 "Healthcare",
"Food Delivery",
"E- Commerce",
"Taxi and Transportation",
"Home Services",
"Education",
"Real Estate"
]
let USefulLinks = [
 "  Home",
"About Us",
"Contact Us",
"Careers",
"Demo",
"Privacy Policy",
"Terms and Conditions",
]
let Services = [
 "Web Designing and Development",
"Graphic Designing",
"Digital Marketing",
"Mobile App Development",
"Software Development",
"MLM Software Development",
"CRM Software Development",
"Game Development"
]
let ContactUs = [
   " 252-F/H Scheme No 54,",
   " Vijaynagar, Indore-452010,",
   " Madhya Pradesh, India",
"info@blackgrapessoftech.com",
"                             ",
"blackgrapes.arpitjain@gmail.com",
"                                 ",
"blackgrapes.deepikajain@gmail.com",
"                                  ",
"+91 7470997884, +91 6262414463"
]
const Footer = () => {
  return (
    <div className='text-white bg-black  flex justify-around pt-[100px] pb-[300px]'>
        <div>
            <h1 className='text-4xl pb-12'>INDUSTRIES</h1>
            {
                Industries.map((item)=>{
                    return(
                        <h1 className='hover:text-[#F86200]  text-2xl pb-4 '>{item}</h1>
                    )
                })
            }
            </div>
            <div>
            <h1 className='text-4xl pb-12'>USEFUL-LINKS</h1>
            {
                USefulLinks.map((item)=>{
                    return(
                        <h1 className='hover:text-[#F86200]  text-2xl  pb-4'>{item}</h1>
                        
                    )
                })
            }
        </div>
        <div>
            <h1 className='text-4xl pb-12'>Services</h1>
            {
                
                Services.map((item)=>{
                    return(
                        <h1 className='hover:text-[#F86200]  text-2xl pb-4'>{item}</h1>
                    )
                })
            }
        </div>
        <div>
            <h1 className='text-4xl pb-12'>CONTACT-US</h1>
            {
                ContactUs.map((item)=>{
                    return(
                        <h1 className='hover:text-[#F86200]  text-2xl pb-4'>{item}</h1>

                    )
                })
            }
        </div>
    </div>
  )
}

export default Footer