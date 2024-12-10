import React from 'react'

// pic imports 
import sevice from '../assets/service .png'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.png'
const Service = () => {
    return (
        <div className='mx-auto mt-36 flex justify-centers flex-col md:flex-row gap-36'>
            <div className='mx-5'>
                <img src={sevice} alt="" className='h-4' />
                <p className=' lg:text-3xl xl:text-4xl 2xl:text-5xl mt-3 font-bold'>Our Culinary Journey <br /> And Services</p>
                <p className='text-gray-500 mt-10 w-96'>
                    Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
                </p>
            </div>
            <div className='flex flex-col justify-center gap-8'>
                {/* //boxes */}
                 <div className='flex gap-8 justify-center mx-4 flex-wrap'>
                      <div className='border p-7 w-52 flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl'>
                           <img src={service1} alt="" />
                           <h1 className='text-[#5FE26C] mt-3 font-bold'>CATERING</h1>
                           <p className='text-[#5FE26C] mt-2'>Delight your guests with our flavors and presentation</p>
                      </div>
                      <div className='border p-7 w-52 flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl'>
                           <img src={service2} alt="" />
                           <h1 className='text-[#5FE26C] mt-3 font-bold'>FAST DELIVERY</h1>
                           <p className='text-[#5FE26C] mt-2'>We deliver your order promptly to your door</p>
                      </div>
                 </div>
                 <div className='flex gap-8 justify-center mx-4  flex-wrap'>
                      <div className='border p-7 w-52 flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl'>
                           <img src={service3} alt="" />
                           <h1 className='text-[#5FE26C] mt-3 font-bold'>ONLINE ORDERING</h1>
                           <p className='text-[#5FE26C] mt-3'>Exlpore menu & order with ease using our Online Ordering</p>
                      </div>
                      <div className='border p-7 w-52 flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl'>
                           <img src={service4} alt="" />
                           <h1 className='text-[#5FE26C] mt-3 font-bold'>CATERING</h1>
                           <p className='text-[#5FE26C] mt-3'>Give the gift of exceptional dining with Gift cards</p>
                      </div>
                 </div>
            </div>
        </div>
    )
}

export default Service