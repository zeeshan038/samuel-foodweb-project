import React from 'react';

const OpeningHours = () => {
  const hours = [
    { day: 'Monday', time: '1:00 PM to 11:00 PM' },
    { day: 'Tuesday', time: '1:00 PM to 11:00 PM' },
    { day: 'Wednesday', time: '1:00 PM to 11:00 PM' },
    { day: 'Thursday', time: '1:00 PM to 11:00 PM' },
    { day: 'Friday', time: '1:00 PM to 11:00 PM' },
    { day: 'Saturday', time: '1:00 PM to 11:00 PM' },
    { day: 'Sunday', time: '1:00 PM to 11:00 PM' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]  text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Restaurant Opening Hours
      </h1>
      <p className="text-lg md:text-xl text-gray-600 italic mb-6">
        "Great food, great moments, all day long!"
      </p>
      <div className=" rounded-xl p-6 w-80 md:w-96">
        {hours.map((entry, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-lg text-gray-700 py-3 border-b border-gray-200 last:border-none"
          >
            <span className="font-medium">{entry.day}</span>
            <span>{entry.time}</span>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default OpeningHours;
