import React from "react";
import { FaHandsClapping } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section Title */}
        <div className="mb-10 text-center">
          <h1 className="flex items-center justify-center mb-5 text-xl font-bold text-black">
            <FaHandsClapping className="text-2xl me-3 site-text-two" />
            Get in Touch
          </h1>
          <h4 className="mb-4 text-3xl font-semibold text-black banner-title">
            Drop a <span className="typing-text text-primary">Message!</span>
          </h4>
        </div>

        {/* Contact Form */}
        <div className="p-20 bg-gray-100 rounded-lg">
          <form className="grid grid-cols-1 gap-6 mx-auto">
            <div>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="block w-full px-5 py-3 placeholder-gray-400 transition border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d7fa00] focus:border-[#d7fa00]"
                required
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="block w-full px-5 py-3 placeholder-gray-400 transition border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d7fa00] focus:border-[#d7fa00]"
                required
              />
            </div>

            <div>
              <textarea
                id="message"
                rows={5}
                placeholder="Type your message..."
                className="block w-full px-5 py-3 placeholder-gray-400 transition border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#d7fa00] focus:border-[#d7fa00]"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="site-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
