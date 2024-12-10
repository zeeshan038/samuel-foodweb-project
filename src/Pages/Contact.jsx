import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("xdkovzbk");

  // Trigger success toast message when form is successfully submitted
  React.useEffect(() => {
    if (state.succeeded) {
      toast.success("Email sent successfully");
      reset(); // Reset the form fields after successful submission
    }
  }, [state.succeeded, reset]);

  return (
    <div className="flex justify-center items-center mt-10 md:mt-36">
      <div className="w-full max-w-6xl p-8 bg-white ">
        <h2 className="text-5xl font-bold  text-gray-800 text-center md:text-start ">Visit Us</h2>

        <div className="flex flex-col lg:flex-row gap-40 mt-16">
          {/* Left Side - Contact Form */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
                Phone
                </label>
                <input
                  id="phone"
                  type="number"
                  name="phone"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Message Field */}
              <div>
               
            
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we serve you?"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#39DB4A] text-white font-bold py-3 rounded-lg hover:bg-green-400 transition disabled:opacity-50"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Side - Restaurant Info */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Our Restaurant</h3>
            <p className="mb-4 text-gray-700">
              <strong>Address:</strong><br />
              Priestpopple, Hexham, Northumberland, NE46 1PH
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Phone:</strong><br />
              0141 611 2870
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Email:</strong><br />
              clearbusinessbyadrian@gmail.com
            </p>
            <p className="text-gray-700">
              <strong>Opening Hours:</strong><br />
              1:00 PM to 11:00 PM (7 days a week) <br />
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
