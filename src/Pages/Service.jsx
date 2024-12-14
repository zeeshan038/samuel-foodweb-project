import React from 'react'

// pic imports 
import sevice from '../assets/service .png'
import onlineOrder from '../assets/onlineOrder.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.png'
import reservation from '../assets/reservation .png'
import takeout from '../assets/takeout.png'
import delievery from '../assets/fastdelvery.png'
import catering from '../assets/partyPlatter.jpg'
import privateDining from '../assets/PrivateDining 2.jpg'
import events from '../assets/events.png'
import loyality from '../assets/loyalityProgram.png'
import mealPlan from '../assets/meal planniing .webp'
import diet from '../assets/dietOPtions.jpeg'
import giftCard from '../assets/giftcard.webp'
import outDoor from '../assets/outdoorgreenn.jpeg'
import petFriendly from '../assets/petFriendly.webp'
import liveMusic from '../assets/liveMusic.jpg'
import happyHour from '../assets/happyHour .jpeg'
import kidsArea from '../assets/kidsPlay.jpeg'
const Service = () => {
    return (
        <div className='mx-auto mt-36  gap-36'>
            <div className='mx-6'>
                <img src={sevice} alt="" className='h-4' />
                <p className=' lg:text-3xl xl:text-4xl 2xl:text-5xl mt-3 font-bold'>Our Culinary Journey <br /> And Services</p>
               
            </div>
            <div className='flex flex-col gap-4 justify-center mt-10 '>
                {/* //boxes */}
                    <div className='flex justify-center flex-wrap gap-8'>
                    <div className='border p-7   w-full md:w-72 mx-8 md:mx-0 flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl'>
                           <img src={onlineOrder} alt="" className='h-20 mt-4'/>
                           <h1 className=' mt-5 font-bold'>Oline Ordering</h1>
                           <p className='text-gray-500 mt-3'>
                           Order your favorite dishes from the comfort of your own home and have them delivered or ready for pickup
                           </p>
                      </div>
                      {/* reservation  */}
                      <div className='border p-7 w-full md:w-72 mx-8 md:mx-0  flex flex-col justify-around items-center bg-white shadow-lg rounded-2xl'>
                           <img src={reservation} alt="" className='h-20'/>
                         <div className='flex flex-col items-center justify-center'>
                         <h1 className='   font-bold'> ⁠RESERVATIONS</h1>
                           <p className=' text-gray-500 mt-2'>
                           Book a table in advance to ensure a smooth and hassle-free dining experience.
                           </p>
                         </div>
                      </div>
                <div className='border p-7 w-full md:w-72 mx-8 md:mx-0  flex flex-col justify-around items-center bg-white shadow-lg rounded-2xl'>
                           <img src={takeout} alt="" className='h-28' />
                         <div className='flex flex-col items-center justify-center'>
                         <h1 className='   font-bold'>Takeout</h1>
                           <p className='text-gray-500 mt-3'>
                           Enjoy our delicious food from the comfort of your own home.
                           </p>
                         </div>
                      </div>
                      <div className='border p-7  flex  w-full md:w-72 mx-8 md:mx-0  flex-col justify-around items-center bg-white shadow-lg rounded-2xl'>
                           <img src={delievery} alt="" className='h-28'/>
                        <div className='flex flex-col items-center justify-centers'>
                        <h1 className=' font-bold'>⁠Delivery</h1>
                        <p className='text-gray-500 mt-3'>We deliver your order promptly to your  door</p>
                        </div>
                      </div>
                   
                  
                    </div>
                    {/* 2nd row  */}
               
                    <div className='flex  justify-center flex-wrap  gap-8'>
                    <div className='border p-7  w-full md:w-72 mx-8 md:mx-0 flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl'>
                           <img src={catering} alt="" className='h-32 mt-4'/>
                           <h1 className='  font-bold '> ⁠Catering</h1>
                           <p className='text-gray-500 mt-3'>
                           Let us handle the food for your next event or party.
                           </p>
                      </div>
                      {/* reservation  */}
                      <div className='border p-7 w-full md:w-72 mx-8 md:mx-0  flex flex-col justify-around items-center bg-white shadow-lg rounded-2xl'>
                           <img src={loyality} alt="" className='h-20'/>
                         <div className='flex flex-col items-center justify-center'>
                         <h1 className='   font-bold'> ⁠ ⁠Loyalty Program</h1>
                           <p className=' text-gray-500 mt-2'>
                           Join our loyalty program and earn rewards and discounts.
                           </p>
                         </div>
                      </div>
                <div className='border p-7 w-full md:w-72 mx-8 md:mx-0  flex flex-col justify-around items-center bg-white shadow-lg rounded-2xl'>
                           <img src={privateDining} alt="" className='h-28' />
                         <div className='flex flex-col items-center justify-center'>
                         <h1 className='   font-bold'>⁠Private Dining</h1>
                           <p className='text-gray-500 mt-2'>
                           Book our private room for special occasions or events.
                           </p>
                         </div>
                      </div>
                      <div className='border p-7  flex  w-full md:w-72 mx-8 md:mx-0  flex-col justify-around items-center bg-white shadow-lg rounded-2xl'>
                           <img src={events} alt="" className='h-24'/>
                        <div className='flex flex-col items-center justify-centers'>
                        <h1 className=' font-bold'>⁠⁠Events</h1>
                        <p className='text-gray-500 mt-2'> 
                        Host your next event or party with us, and let us take care of the food and atmosphere. </p>
                        </div>
                      </div>
                   
                  
                    </div>  

                    {/* 3rd  row */}
                    <div className='flex justify-center  flex-wrap gap-8'>
                    <div className='border p-7  w-full md:w-72 mx-8 md:mx-0 flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl'>
                           <img src={giftCard} alt="" className='h-20 mt-4'/>
                           <h1 className=' mt-5 font-bold'>⁠ ⁠Gift Cards</h1>
                           <p className='text-gray-500 mt-3'>
                           Purchase gift cards for friends and family.
                           </p>
                      </div>
                      {/* reservation  */}
                      <div className='border p-7 w-full md:w-72 mx-8 md:mx-0  flex flex-col justify-around items-center bg-white shadow-lg rounded-2xl'>
                           <img src={mealPlan} alt="" className='h-20'/>
                         <div className='flex flex-col items-center justify-center'>
                         <h1 className='   font-bold'> ⁠⁠Meal Plans</h1>
                           <p className=' text-gray-500 mt-2'>
                         Sign up for our meal plans and enjoy our food at a discounted rate.
                           </p>
                         </div>
                      </div>
                <div className='border p-7 w-full md:w-72 mx-8 md:mx-0  flex flex-col justify-around items-center bg-white shadow-lg rounded-2xl'>
                           <img src={catering} alt="" className='h-28' />
                         <div className='flex flex-col items-center justify-center'>
                         <h1 className='   font-bold'>⁠ ⁠Party Platters</h1>
                           <p className='text-gray-500 mt-2'>
                         Order large quantities of our dishes for your next gathering or event.
                           </p>
                         </div>
                      </div>
                      <div className='border p-7  flex  w-full md:w-72 mx-8 md:mx-0  flex-col justify-around items-center bg-white shadow-lg rounded-2xl'>
                           <img src={diet} alt="" className='h-20'/>
                        <div className='flex flex-col items-center justify-centers'>
                        <h1 className=' font-bold'>⁠⁠ ⁠Dietary Options</h1>
                        <p className='text-gray-500 mt-2'>
                        We offer gluten-free, vegan, and other options to cater to your dietary needs.
                        </p>
                        </div>
                      </div>
                   
                  
                    </div>
            </div>

            <div className='mx-6 mt-20'>
                
                <p className=' text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-3 font-bold'>Our Special  Services</p>
               
            </div>

            <div className='flex justify-center flex-wrap  gap-8 mt-8'>
                    <div className='border p-7  w-full md:w-56 mx-8 md:mx-0 flex flex-col justify-center items-center bg-white shadow-lg rounded-2xl'>
                           <img src={liveMusic} alt="" className='h-20 mt-4'/>
                           <h1 className=' mt-5 font-bold'>Live Music</h1>
                           
                      </div>
                      {/* reservation  */}
                      <div className='border p-7 w-full md:w-56 mx-8 md:mx-0  flex flex-col justify-around items-center bg-white shadow-lg rounded-2xl'>
                           <img src={outDoor} alt="" className='h-20'/>
                         <div className='flex flex-col items-center justify-center'>
                         <h1 className='   font-bold'> ⁠Outdoor seating</h1>
                          
                         </div>
                      </div>
                <div className='border p-7 w-full md:w-56 mx-8 md:mx-0  flex flex-col justify-around items-center bg-white shadow-lg rounded-2xl'>
                           <img src={petFriendly} alt="" className='h-28' />
                         <div className='flex flex-col items-center justify-center'>
                         <h1 className='   font-bold'> ⁠Pet-friendly dining <br /> area</h1>
                         
                         </div>
                      </div>
                      <div className='border p-7  flex  w-full md:w-56 mx-8 md:mx-0  flex-col justify-around items-center bg-white shadow-lg rounded-2xl'>
                           <img src={kidsArea} alt="" className='h-28'/>
                        <div className='flex flex-col items-center justify-centers'>
                        <h1 className=' font-bold'>⁠⁠Kids menu </h1>
                        
                        </div>
                      </div>
                      <div className='border p-7  flex  w-full md:w-56 mx-8 md:mx-0  flex-col justify-around items-center bg-white shadow-lg rounded-2xl'>
                           <img src={happyHour} alt="" className='h-28'/>
                        <div className='flex flex-col items-center justify-centers'>
                        <h1 className=' font-bold'>⁠⁠⁠Happy hour & <br /> special deals</h1>
                        
                        </div>
                      </div>
                  
                    </div>



            
        </div>
    )
}

export default Service