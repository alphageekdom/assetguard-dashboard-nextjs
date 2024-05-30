'use client';

import { useState } from 'react';
import Logo from './Logo';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div className='flex flex-col mobile-navbar'>
      <nav
        className='bg-gray-800 text-white w-full z-50 border-b-2 border-green-500'
        aria-label='Main Navigation'
      >
        <div className='flex items-center justify-between px-4 py-2'>
          <button
            onClick={toggleMenu}
            className={`p-2 text-white focus:outline-none ${
              isMobileMenuOpen
                ? 'outline outline-2 outline-white rounded-sm'
                : ''
            }`}
          >
            <Menu size={24} aria-label='Toggle Menu' />
          </button>
          <div className='flex-1 text-center'>
            <Logo />
          </div>
          <div className='opacity-0'>
            <Menu size={24} aria-hidden='true' />
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <MobileMenu
          toggleMenu={toggleMenu}
          isMobileMenuOpen={isMobileMenuOpen}
          isActive={isActive}
        />
      )}
    </div>
  );
};

export default Navbar;
