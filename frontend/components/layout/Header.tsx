import React, { useEffect, useState } from 'react';

// libs
import { motion } from 'framer-motion';

// Components
import Navbar from '../navigation/Navbar';

const navLinks = [
  {
    href: '#projects',
    text: 'Projects',
  },
  {
    href: '#skills',
    text: 'Skills',
  },
];

const Header = () => {
  const [bgColor, setBgColor] = useState('white');
  const [padding, setPadding] = useState('8');
  const [shadow, setShadow] = useState('');

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setBgColor('secondary');
      setPadding('2');
      setShadow('shadow');
    } else {
      setBgColor('white');
      setPadding('4');
      setShadow('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`w-full sticky top-0 ${shadow} bg-${bgColor} p-${padding} z-50`}
      style={{ transition: 'padding 0.3s ease-in-out' }}
      initial={{ y: '-100%' }}
      animate={{ y: 0, transition: { delay: 1 } }}
    >
      <Navbar links={navLinks} />
    </motion.header>
  );
};

export default Header;
