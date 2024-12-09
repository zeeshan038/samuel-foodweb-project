import React from 'react'

// pic imports 
import circle from '../assets/circle.png'
import heroGirl from '../assets/object.png'
import rectangle from '../assets/rectangle.png'
import food1 from '../assets/food-1-hero.png'
import stars from '../assets/stars.png'
import tag from '../assets/spicytag.png'
const Home = () => {
    return (
        <div>

            <div className='flex justify-center flex-col lg:flex-row h-[100vh] items-center lg:gap-10  xl:gap-28 2xl:gap-64 '>
                {/* left  */}
                   {/* right  */} 
                   <div className=' block xs:hidden sm4:block lg:hidden mt-16 pic'>
                          
                          <div className='relative mt-28 '>
                          <img src={tag} alt="" className='absolute -left-36 top-3 hidden ' />
                    <img src={circle} alt="" className='h-[420px] lg:h-[500px] xl:h-full' />
                    <img src={heroGirl} alt="" className='absolute -top-20 right-4 h-[500px]' />
                          </div>


                

                </div>
                <div className=' mt-10  mx-10 lg:-mt-28'>
                    <h1 className=' text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold'>Dive into Delights <br /> <p className='mt-5'>Of Delectable <span className='text-[#39DB4A]'>Food</span></p></h1>

                    <p className='mt-12   text-2xl text-gray-500 '>
                        Where Each Plate Weaves a Story of Culinary <br /> <p className='mt-2'>Mastery and Passionate Craftsmanship</p></p>
                    <div className='flex gap-10 items-center'>
                        <button className='mt-16 border p-4 px-10 rounded-full bg-[#39DB4A] text-white font-bold'>Order now </button>

                    </div>
                </div>

                {/* right  */} 
                <div className='relative mt-20 hidden lg:block'>
                    <img src={tag} alt="" className='absolute -left-36 top-3  ' />
                    <img src={circle} alt="" className='h-[450px] lg:h-[500px] xl:h-full' />
                    <img src={heroGirl} alt="" className='absolute -top-20 right-4' />


                    <div>
                        <div className='relative'>
                            <img src={rectangle} alt="" className='relative -top-24 right-28 xl:right-10  ' />
                            <div className='absolute -top-14 -left-16 xl:-top-16 xl:left-5 flex justify-cente items-start gap-8'>
                                <img src={food1} alt="" />
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Spicy noodles</p>
                                    <img src={stars} alt="" className='mt-2' />
                                    <p className='mt-2'>$18.0</p>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home