import React, {useState, useEffect, useRef} from 'react'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai'

let count = 0;
let sliderInterval;
const Slider = () => {
  const images =[
    "/images/synapse1.png",
    "/images/synapse2.png",
    "/images/synapse3.png",
    "/images/synapse4.png",
    "/images/synapse5.png",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const sliderRef = useRef()

  const removeAnimation = () => {
    sliderRef.current.classList.remove('fade-anim')
  }
  useEffect(() => {
    sliderRef.current.addEventListener('animationend', removeAnimation)
    sliderRef.current.addEventListener('mouseenter', pauseSlider)
    sliderRef.current.addEventListener('mouseleave', startSlider)

    startSlider()
    return () => {
      pauseSlider()
    }
  }, [])

  const startSlider = () => {
    sliderInterval = setInterval(() => {
      handleOnNextClick()
    }, 3000);
  }

  const pauseSlider = () => {
    clearInterval(sliderInterval)
  }

  const handleOnNextClick = () => {
    count = (count + 1) % images.length
    setCurrentIndex(count)
    sliderRef.current.classList.add('fade-anim')
  }
  const handleOnPrevClick = () => {
    const imagesLength = images.length
    count = (currentIndex + imagesLength - 1) % imagesLength
    setCurrentIndex(count)
    sliderRef.current.classList.add('fade-anim')

  }

  return (
    <div ref={sliderRef} className='w-full select-none relative'>
      <div className='aspect-w-16 aspect-h-9 bg-[#2E2E2E] flex justify-center rounded-2xl shadow-md shadow-gray-600'>
        <img src={images[currentIndex]} alt="" className='sm:h-[400px] h-[300px]'/>
      </div>

      <div className='absolute w-full top-1/2 -transform translate-y-1/2 px-3 flex justify-between items-center'>
        <button className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition' onClick={handleOnPrevClick}><AiOutlineVerticalRight size={30}/></button>
        <button className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition' onClick={handleOnNextClick}><AiOutlineVerticalLeft size={30}/></button>
      </div>
    </div>


  )
}

export default Slider
