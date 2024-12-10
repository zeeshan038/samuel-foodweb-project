import React from 'react'

// picture imports
import customerFav from '../assets/CustomerFavorites.png'
import burgur from '../assets/popBur.png'
import sandWich from '../assets/popSand.png'
import desert from '../assets/popDeserts.png'
import drink from '../assets/popDrink.png'
const PopularCategories = () => {
    return (
        <div className='mt-36 md:mt-10'>
            <div className='flex flex-col items-center justify-center'>
                <img src={customerFav} alt="" className='h-5 ' />
                <h1 className='text-center mt-3 text-bold font-bold text-5xl tracking-widest'>Popular Categories</h1>

            </div>
            <div className='flex gap-10 items-center mt-10 flex-wrap justify-center'>
                {/* box 1  */}
                <div className='border bg-white  w-full md:w-56 mx-8 md:mx-0 shadow-lg rounded-xl p-7 flex flex-col justify-center items-center px-11 '>
                    <img src={burgur} alt="" className='' />
                    <p className='mt-2 font-bold'>Main Dish</p>
                </div>
                {/* box 2  */}
                <div className='border bg-white shadow-lg w-full md:w-52 mx-8 md:mx-0  rounded-xl p-11 px-12 flex flex-col justify-center items-center '>
                    <img src={sandWich} alt="" className='' />
                    <p className='mt-2 font-bold'>Break Fast</p>
                </div>
                {/* box 3  */}
                <div className='border bg-white shadow-lg w-full md:w-52 mx-8 md:mx-0  rounded-xl p-8 px-12 flex flex-col justify-center items-center '>
                    <img src={desert} alt="" className='' />
                    <p className='mt-2 font-bold'>Desert</p>
                </div>
                {/* box 4  */}
                <div className='border bg-white shadow-lg w-full md:w-52 mx-8 md:mx-0  rounded-xl p-9 px-16  flex flex-col justify-center items-center '>
                    <img src={drink} alt="" className='h-24' />
                    <p className='mt-2 font-bold'>Drinks</p>
                </div>
            </div>
        </div>
    )
}

export default PopularCategories