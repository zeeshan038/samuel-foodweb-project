import React from 'react'

import secialDish from '../assets/specialdishes.png'
import vegSalad from '../assets/VegetableSalad.png'
import eggSalad from '../assets/EggSalad.png'
import salad from '../assets/salad.png'
import stars from '../assets/star.png'
const SpecialDish = () => {
  return (
    <div className='mx-auto  mt-28'>
          <div className='mx-auto flex flex-col  justify-center items-center lg:items-start'>
                <img src={secialDish} alt="" className='h-4' />
                <p className=' text-3xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-3 font-bold'>Standout Dishes<br /> From Our Menu</p>

            </div>
            <div className='flex mt-10 gap-4 justify-center items-center flex-wrap'>
                 <div className='border shadow-lg rounded-2xl mx-8 w-full md:mx-0  md:w-72 p-5 flex flex-col justify-center items-center'>
                 <img src={salad} alt="" className='h-52' />
                    <h1 className='font-bold mt-3'>Fattoush salad  </h1>
                    <div className='flex justify-between items-center mt-3 gap-32'> 
                        <h1>$24.0</h1>
                        <div className='flex gap-2 items-center'>
                            <img src={stars} alt="" />
                            <h1>4.9</h1>
                        </div>
                    </div>
                 </div>
                 <div className='border shadow-lg rounded-2xl mx-8  w-full md:mx-0  md:w-72 p-5 flex flex-col justify-center items-center'>
                 <img src={vegSalad} alt="" className='h-52' />
                    <h1 className='font-bold mt-3'>Vegetable salad  </h1>
                    <div className='flex justify-between items-center mt-3 gap-32'> 
                        <h1>$24.0</h1>
                        <div className='flex gap-2 items-center'>
                            <img src={stars} alt="" />
                            <h1>4.9</h1>
                        </div>
                    </div>
                 </div>
                 <div className='border shadow-lg rounded-2xl p-5 mx-8 md:mx-0 w-full md:w-72 flex flex-col justify-center items-center'>
                 <img src={eggSalad} alt="" className='h-52' />
                    <h1 className='font-bold mt-3'>Egg salad  </h1>
                    <div className='flex justify-between items-center mt-3 gap-32'> 
                        <h1>$24.0</h1>
                        <div className='flex gap-2 items-center'>
                            <img src={stars} alt="" />
                            <h1>4.9</h1>
                        </div>
                    </div>
                 </div>
                 <div className='border shadow-lg rounded-2xl p-5  mx-8 w-full md:mx-0  md:w-72 flex flex-col justify-center items-center'>
                 <img src={salad} alt="" className='h-52' />
                    <h1 className='font-bold mt-3'>Fattoush salad  </h1>
                    <div className='flex justify-between items-center mt-3 gap-32'> 
                        <h1>$24.0</h1>
                        <div className='flex gap-2 items-center'>
                            <img src={stars} alt="" />
                            <h1>4.9</h1>
                        </div>
                    </div>
                 </div>
            </div>
    </div>
  )
}

export default SpecialDish