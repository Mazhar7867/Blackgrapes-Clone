import React from 'react'
import Eccomerce1 from './Images/Eccomerce1.jpg'
import Eccomerce2 from './Images/Eccomerce2.jpg'
import Footer from '../Footer'
const Ecommerce = () => {
  return (
    <>
    <div className='bg-white ml-[10%] mr-[10%] text-bold'>
      <div className='text-center text-3xl pt-12 '>
        <h1 className='text-5xl text-bold pb-12'>Ecommerce
        </h1>
        <h1 className='pb-14'>Exciting News! Naya Purna Bazaar is Coming Soon!</h1>
     <h1>(An Online Market Place By Black Grapes Softech)
     </h1>
     <h1 className='text-[#F86200] pt-5 pb-12'>WWW.nayapuranabazar.com</h1>
      </div>
      <p className='text-3xl leading-relaxed'>We are thrilled to announce the upcoming launch of Naya Purana Bazaar, your future favourite destination for online shopping. Our platform is under development, and we are working hard to bring you a seamless, user-friendly shopping experience with a wide range of “New And Used Products”. Stay tuned for more updates and be among the first to explore our unique offerings and exclusive deals. Thank you for your patience and support as we prepare to launch. Get ready to redefine your shopping experience with nayapuranabazaar.com!</p>
       <div className='flex justify-between text-center text-4xl font-bold mt-6 mb-16 '>
       <div>

        <img className=' h-[800px] w-[900px] rounded-3xl mb-5' src={Eccomerce1} alt="image" />
       <h1>NEW PRODUCTS</h1>
       </div>
       <div>
        <img className=' h-[800px] w-[900px] rounded-3xl mb-5' src={Eccomerce2} alt="" />
       <h1>USED PRODUCTS</h1>
       </div>
       </div>
    </div>
       <Footer/>
    </>
  )
}

export default Ecommerce