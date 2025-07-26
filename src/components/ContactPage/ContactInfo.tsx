import React from "react";
import { FaHandsClapping, FaLocationDot } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";

const ContactInfo = () => {
  return (
    <div className="bg-white">
      <div className="container px-4 py-20 mx-auto">
        <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Column */}
          <div>
            <h1 className="flex items-center mb-5 text-xl font-bold text-black">
              <FaHandsClapping className="text-2xl me-3 site-text-two" />
              Latest News
            </h1>

            <h4 className="mb-4 text-3xl font-semibold text-black banner-title">
              Have a Project in Mind?
              <br />
              <span className="typing-text text-primary">Let’s Talk!</span>
            </h4>

            <p className="leading-relaxed text-gray-700">
              Are you looking to create a seamless and engaging user experience? <br />
              I’m here to help! Call Now
            </p>

            <div className="mt-10 space-y-6">
              {/* Phone */}
              <div className="flex items-center">
                <PiPhoneCallLight className="p-3 text-3xl bg-gray-100 rounded-full h-15 w-15 site-text-two" />
                <div className="ps-4">
                  <p className="font-semibold typing-text">Call Now</p>
                  <p className="text-gray-700">014-12345678</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <TfiEmail className="p-3 text-3xl bg-gray-100 rounded-full h-15 w-15 site-text-two" />
                <div className="ps-4">
                  <p className="font-semibold typing-text">Email</p>
                  <p className="text-gray-700">szamansaju@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center">
                <IoLocationOutline  className="p-3 text-3xl bg-gray-100 rounded-full h-15 w-15 site-text-two" />
                <div className="ps-4">
                  <p className="font-semibold typing-text">Address</p>
                  <p className="text-gray-700">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div>
            <div className="w-full h-80 md:h-[550px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Dhaka Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.357040765057!2d90.4125188758499!3d23.806019286790587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71cbecdb2a1%3A0xe1efb7d92f5c6df6!2sDhaka!5e0!3m2!1sen!2sbd!4v1623937008764!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
