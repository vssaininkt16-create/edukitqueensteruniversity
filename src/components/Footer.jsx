import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-600 bg-gray-900 text-white relative overflow-hidden">
      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* UNIVERSITY INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Queenster University
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              A leading institution dedicated to academic excellence, innovation,
              and global leadership. Shaping tomorrow's leaders today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Admissions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Academics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Campus Life</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Research</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Alumni</a></li>
            </ul>
          </motion.div>

          {/* PROGRAMS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 uppercase tracking-wider">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Undergraduate</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Graduate</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">PhD Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Online Learning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Certifications</a></li>
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">India</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+91 9351946070</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@queenster.edu</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative bg-gradient-to-r from-[#162b4a] to-[#0f1a2e] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 Queenster University. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
