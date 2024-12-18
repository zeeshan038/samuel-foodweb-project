import React from 'react'

//picture imports 
import testimonial from '../assets/Testimonials.png'
import cheff from '../assets/ourCheff .png'
import cheffBg from '../assets/cheffBg.png'
import customer1 from '../assets/customer1.png';
import customer2 from '../assets/customer2.png'
import customer3 from '../assets/customer3.png';
import star from '../assets/star.png'
const Testimonials = () => {
  return (
    <div className=' mt-20 lg:mt-52  mx-auto '>

      <div className='flex gap-40'>
        {/* Left side  */}
        <div className='relative mt-12 hidden lg:block'>
          <img src={cheffBg} alt="" className='h-[300px]' />
          <img src={cheff} alt="" className='absolute -top-52 right-14 h-[510px] ' />
        </div>
        {/* right side  */}
        <div className=''>
          <img src={testimonial} alt="" className='' />
          <div className='mt-10 text-center md:text-start'>
            <h1 className='font-bold text-2xl md:text-5xl '>What Our Customers <br /> Say About Us</h1>
            <p className='mt-4 w-96'>
              "I had a pleasure of dining at Hexham Thyme (The Tasty House) last night, and
              I'm still raving about the experience! The attention to
              detail in presentation and service was impeccable "
            </p>
            <div className='mt-5 flex gap-28 '>
                <div>
                <div className='flex items-center relative'>
                <img src={customer1} alt="" className='h-12 ' />
                <img src={customer2} alt="" className=' absolute left-10' />
                <img src={customer3} alt="" className=" absolute left-20" />
              </div>
                </div>
              <div>
                <p>Customer Feedback</p>
                <div className='flex items-center gap-2 mt-1'>
                   <img src={star} alt="" className='h-4'/>
                   <p className='text-[14px] font-bold'>4.9 <span className='font-thin text-[12px] ml-2'>(8.3k Reviews)</span></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials