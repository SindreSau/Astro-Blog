import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    const path = window.location.pathname;
    const pathName = path === '/' ?? 'posts' ? 'home' : path.slice(1);
    setCurrentPage(pathName);
  }, []);

  const navItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Authors',
      path: '/authors',
    },
  ];

  return (
    <>
      <nav>
        {/* Desktop */}
        <ul className='hidden gap-6 sm:flex'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={
                item.name.toLowerCase() === currentPage ? 'border-b border-slate-600 dark:border-slate-200' : ''
              }>
              <a className='text-lg md:text-xl transition-colors duration-100 dark:text-white' href={item.path}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button className='text-white flex flex-col gap-1.5 sm:hidden'>
          <motion.div className='w-8 h-0.5 rounded-full bg-white'></motion.div>
          <motion.div className='w-8 h-0.5 rounded-full bg-white'></motion.div>
          <motion.div className='w-8 h-0.5 rounded-full bg-white'></motion.div>
        </button>
        <ul className='absolute md:hidden left-full '>
          {navItems.map((item, index) => (
            <li key={index} className={item.name.toLowerCase() === currentPage ? 'border-b' : ''}>
              <a className='text-lg md:text-xl transition-colors duration-100 ' href={item.path}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
