import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-cover bg-center py-32" style={{ backgroundImage: `url('/about-university-bg.jpg')` }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Left - Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-[#152e5a] mb-8">Leave us a message</h2>
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Name" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fec726]" />
              </div>
              <div>
                <input type="email" placeholder="Email" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fec726]" />
              </div>
              <div>
                <textarea placeholder="Message" rows="6" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fec726]"></textarea>
              </div>
              <div>
                <button type="submit" className="bg-[#fec726] text-[#152e5a] font-bold px-8 py-4 rounded-full hover:bg-[#152e5a] hover:text-white transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#152e5a] mb-4">Our Location</h3>
              <div className="w-full h-64 rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112019.45822765633!2d77.3221973!3d28.5670869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x351a88c012e10693!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1678886042683!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#fec726]" size={20} />
                <p className="text-gray-600">Noida, IN</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-[#fec726]" size={20} />
                <p className="text-gray-600">+91 9351946070</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#fec726]" size={20} />
                <p className="text-gray-600">Qeenster@university.edu.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
