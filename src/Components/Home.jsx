import React from 'react' 
import Image1 from "./Images/Image1.png"
import About1 from './About1'
const Links = [ 
  "Get the offer",
  "Request a Demo",
  "Apprenticeship Program",
]
const Home = () => {
  return (
    <>
    <div  className='bg-[#303030]'>
      <div  className='text-white  flex items-center justify-between ml-[10%] mr-[10%] '>
        <div>
        <h1 className='text-5xl mb-16' >Innovate. Integrate. Elevate. And Digitalize Your Ideas into Success via <span className='text-[#F86200]'> BLACK GRAPES SOFTECH </span>, Where Innovation And ideas Meets Excellence.</h1>
        <p className='text-xl'>Get Free Consultation From Our Industry Experts</p>
       <div className='mt-6 text-white  '>
       {
         Links.map((item)=>{
           return(
            <button className='bg-[#F86200] hover:bg-[#f87a04bb] h-12 p-2 rounded-md font-bold ml-3 '>{item}</button>

          )
        })
       }
       </div>
        </div>
        <img className='h-[850px] w-[850px]' src={Image1} alt="" />
      
      </div>
     
      <About1/>
    </div>
    </>

      )
}

export default Home