import React from 'react';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
      <div className="w-full max-w-4xl p-8 md:p-12 text-center bg-white  rounded-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-[#39DB4A] italic mb-6">
          "The Taste House"
        </p>
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <p className="text-md md:text-lg text-gray-700 mb-4 leading-relaxed">
            Since July 2011, our restaurant has been dedicated to serving the most delicious and memorable meals in town.
            With a passion for culinary excellence, we blend flavors from around the world to bring you an unforgettable dining experience.
          </p>
          <p className="text-md md:text-lg text-gray-700 mb-4 leading-relaxed">
            Whether you’re visiting us for a family meal, a special celebration, or simply to enjoy a delightful dish, 
            we aim to make every visit exceptional. Your satisfaction is at the heart of everything we do.
          </p>
          <p className="text-md md:text-lg text-gray-700 mb-4 leading-relaxed">
            Thank you for being part of our journey. Here's to many more years of great food, great service, and great memories!
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
