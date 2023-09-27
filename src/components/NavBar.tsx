import { useEffect, useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const className = isMenuOpen ? 0 : 100;

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
      <nav className='flex'>
        <ul className='gap-6 font-bold flex'>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
