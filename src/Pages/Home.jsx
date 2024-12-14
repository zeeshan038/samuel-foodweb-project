import React from 'react'

// pic imports 
import circle from '../assets/circle.png'
import heroGirl from '../assets/object.png'
import rectangle from '../assets/rectangle.png'
import food1 from '../assets/food-1-hero.png'
import stars from '../assets/stars.png'
import tag from '../assets/spicytag.png'
import PopularCategories from './PopularCategories'
import Service from './Service'
import SpecialDish from './SpecialDish'

import Contact from './Contact'
import Location from './Location'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className='flex flex-col '>

            <div className='flex justify-center flex-col lg:flex-row h-[100vh] items-center lg:gap-28  xl:gap-40 2xl:gap-64 '>
                {/* left  */}
                {/* right  */}
                <div className=' block xs:hidden sm4:block lg:hidden mt-16 pic'>

                    <div className='relative  mt-20 '>
                        <img src={tag} alt="" className='absolute -left-36 top-3 hidden ' />
                        <img src={circle} alt="" className='h-[420px] lg:h-[500px] xl:h-full' />
                        <img src={heroGirl} alt="" className='absolute -top-20 right-4 h-[500px]' />
                    </div>

                </div>
                <div className=' mt-10  mx-10 lg:-mt-28'>
                    <h1 className="  text-2xl md:text-2xl xl:text-3xl text-gray-700 font-bold  tracking-wide bg-gradient-to-r from-green-500 to-green-600 text-transparent bg-clip-text drop-shadow-md">
                        Since 2011
                    </h1>
                    <h1 className=' text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold'>Dive into Delights <br /> <p className='mt-5'>Of Delectable <span className='text-[#39DB4A]'>Food</span></p></h1>

                    <p className='mt-12   text-2xl lg:text-xl text-gray-500 '>
                        Where Each Plate Weaves a Story of Culinary <br /> <p className='mt-2'>Mastery and Passionate Craftsmanship</p></p>
                    <div className='flex gap-10 items-center'>
         <Link to={'/contact'}>               <button className='mt-16 border p-4 px-10 rounded-full bg-[#39DB4A] text-white font-bold'>Order now </button></Link>

                    </div>
                </div>

                {/* right  */}
                <div className='relative lg:mt-28 xl:mt-40 2xl:mt-20 hidden lg:block'>
                    <img src={tag} alt="" className='absolute lg:-left-28 xl:-left-36 top-3 lg:h-32  xl:h-40 2xl:h-48' />
                    <img src={circle} alt="" className='h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-full ' />
                    <img src={heroGirl} alt="" className='absolute -top-20 right-4' />


                    <div>
                        <div className='relative xl:right-20 2xl:right-0'>
                            <img src={rectangle} alt="" className='relative -top-[88px] right-28 xl:right-8  lg:h-40 xl:h-52' />
                            <div className='absolute -top-14 -left-16 xl:-top-16 xl:left-5 flex justify-cente items-start lg:gap-5 xl:gap-8'>
                                <img src={food1} alt="" className='h-14 xl:h-full' />
                                <div className='flex flex-col'>
                                    <p className='font-bold'>Spicy noodles</p>
                                    <img src={stars} alt="" className='xl:mt-2 lg:mt-0 ' />
                                    <p className='xl:mt-2'>$18.0</p>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            <PopularCategories />
            <SpecialDish />
            <Service />
            <Contact />

            <Footer />
        </div>
    )
}

export default Home