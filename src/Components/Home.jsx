import React from 'react'
import serviceGraph from '../assets/serviceGraph.png'; 
const Home = () => {
  return (
    <>
    <div className='mt-44 ml-28'>
      <div className='text-white text-5xl w-[50%]'>
        <h1 >Innovate. Integrate. Elevate. And Digitalize Your Ideas into Success via <span className='text-[#F86200]'> BLACK GRAPES SOFTECH </span>, Where Innovation And ideas Meets Excellence."</h1>
      </div>
      <div>
        <img src={serviceGraph} alt="image" />
      </div>
    </div>
    </>

      )
}

export default Home