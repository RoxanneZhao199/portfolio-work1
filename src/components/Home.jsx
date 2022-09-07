import React from 'react'
import Slider from './Slider'

const Home = () => {

  return (
      <div name='home' className='h-[130vh] w-full bg-gradient-to-b from-black via-black to-gray-800 text-[#E1DFDF]'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full w-full p-4'>
        <div className='pb-8'>
          <p className='text-2xl font-bold inline border-b-4 border-gray-500'>Synapse Pilates Wechat MP & Administration Platform</p>
          <p className='pt-8 max-w-4xl'><strong>Synapse Wechat-Mini Program</strong> provides a platform for members to check their courses and certificates. They can also download and share their certificates.</p>
          <p className='py-2 max-w-4xl'><strong>Synapse Administration Platform</strong> is a backend database for admins to better manage the data of their members, courses, and certificates. </p>
          <p className='py-8 text-[14px] text-[gray]'><strong>Stack:</strong> Ruby on Rails, ActiveAdmin, JavaScript, AliCloud</p>
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default Home
