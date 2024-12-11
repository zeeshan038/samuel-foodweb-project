import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto mt-16 md:mt-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 py-16">
      <div className="w-full max-w-4xl p-8 md:p-12 text-center bg-white rounded-2xl ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About Us
        </h1>
        
        <p className="text-lg md:text-xl text-[#39DB4A] italic mb-6">
          "The Taste House"
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Story</h2>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to our restaurant, where food, passion, and community come together. Our story began with a simple idea: to share delicious, homemade-style cuisine with our neighbors and friends.
          </p>

          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Vision</h2>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
            We aim to create a warm and inviting space where everyone feels at home. Our chefs are dedicated to crafting dishes that not only taste amazing but also use only the freshest ingredients, sourced locally whenever possible.
          </p>

          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Team</h2>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
            Meet our talented team of chefs, servers, and managers who work together to bring you an exceptional dining experience.
          </p>

          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Values</h2>
          <ul className="text-md md:text-lg text-gray-700 leading-relaxed mb-6 list-disc list-inside">
            <li><strong>Quality:</strong> We're committed to serving only the best.</li>
            <li><strong>Community:</strong> We believe in supporting local businesses and events.</li>
            <li><strong>Hospitality:</strong> We strive to make every guest feel welcome and valued.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our History</h2>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
            From our humble beginnings to our current location, learn about our journey and how we've grown.
          </p>

          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Awards and Recognition</h2>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-6">
            We're proud to have received <em>[awards or recognition]</em> for our efforts in providing excellent food and service.
          </p>

          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed">
            Contact us to learn more about our story, or to share your own experience with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
