import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Search } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarVariants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <motion.div
      className="fixed top-0 right-0 w-full sm:w-[500px] h-full bg-black text-white z-50 overflow-hidden font-['Anton',sans-serif]"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
    >
      <div className="flex flex-col h-full relative p-10">
        <button onClick={onClose} className="absolute top-10 right-10 hover:text-pink-500 transition-colors duration-300">
          <X size={24} />
        </button>
        <div className="flex-grow flex flex-col justify-start pt-24">
          <nav>
            <ul className="text-[62px] font-black leading-[1.05] tracking-tight">
              {['WORK', 'CLIENTS', 'ABOUT', 'CONTACT'].map((item) => (
                <li key={item} className="-mb-1">
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="hover:text-pink-500 transition-colors duration-300 block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-auto">
          <div className="relative mb-8">
            <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-white text-lg pl-8 pr-4 py-2 border-b border-white focus:outline-none focus:border-pink-500 transition-colors duration-300"
            />
          </div>
          <ul className="flex justify-between text-sm">
            {['Facebook', 'Twitter', 'Instagram', 'Youtube'].map((social) => (
              <li key={social}>
                <a 
                  href="#" 
                  className="hover:text-pink-500 transition-colors duration-300"
                >
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;