'use client';

import { useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import {
  ArrowLeftRight,
  CalendarDays,
  CircleHelp,
  Home,
  Hourglass,
  Menu,
  NotebookPen,
  Settings,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import MobileNavbar from './MobileNavbar';

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
    <div className='flex flex-col md:flex-row md:h-screen'>
      <nav
        className='bg-gray-800 text-white w-full md:w-64 space-y-6 py-4 px-2 fixed inset-x-0 top-0 md:static transform md:transform-none transition duration-200 ease-in-out z-50'
        aria-label='Main Navigation'
      >
        <div className='flex items-center justify-between md:block'>
          <button
            onClick={toggleMenu}
            className={`text-white block md:hidden ml-2 ${
              isMobileMenuOpen
                ? 'outline outline-2 outline-white rounded-sm'
                : ''
            }`}
          >
            <Menu size={24} />
          </button>
          <div className='flex-1 flex justify-center'>
            <Logo className='block md:hidden' />
          </div>
          {isMobileMenuOpen && (
            <MobileNavbar
              toggleMenu={toggleMenu}
              isMobileMenuOpen={isMobileMenuOpen}
              isActive={isActive}
            />
          )}
          <ul className='hidden md:flex md:flex-col gap-5 mt-4 md:mt-8'>
            <li>
              <Link
                href='/'
                className={`flex justify-start items-center py-3 px-5 rounded transition duration-200 gap-4 ${
                  isActive('/') ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                <Home
                  aria-label='Home'
                  style={{ color: isActive('/') ? 'green' : 'inherit' }}
                />
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/monthly-reports'
                className={`flex justify-start items-center py-3 px-5 rounded transition duration-200 gap-4 ${
                  isActive('/monthly-reports')
                    ? 'bg-gray-700'
                    : 'hover:bg-gray-700'
                }`}
                aria-current={isActive('/monthly-reports') ? 'page' : undefined}
              >
                <CalendarDays
                  aria-label='Monthly Reports'
                  style={{
                    color: isActive('/monthly-reports') ? 'green' : 'inherit',
                  }}
                />
                Monthly
              </Link>
            </li>
            <li>
              <Link
                href='/annual-reports'
                className={`flex justify-start items-center py-3 px-5 rounded transition duration-200 gap-4 ${
                  isActive('/annual-reports')
                    ? 'bg-gray-700'
                    : 'hover:bg-gray-700'
                }`}
                aria-current={isActive('/annual-reports') ? 'page' : undefined}
              >
                <Hourglass
                  aria-label='Annual Reports'
                  style={{
                    color: isActive('/annual-reports') ? 'green' : 'inherit',
                  }}
                />
                Annual
              </Link>
            </li>
            <li>
              <Link
                href='/transactions'
                className={`flex justify-start items-center py-3 px-5 rounded transition duration-200 gap-4 ${
                  isActive('/transactions')
                    ? 'bg-gray-700'
                    : 'hover:bg-gray-700'
                }`}
                aria-current={isActive('/transactions') ? 'page' : undefined}
              >
                <ArrowLeftRight
                  aria-label='Transactions'
                  style={{
                    color: isActive('/transactions') ? 'green' : 'inherit',
                  }}
                />
                Transactions
              </Link>
            </li>
            <li>
              <Link
                href='/budget'
                className={`flex justify-start items-center py-3 px-5 rounded transition duration-200 gap-4 ${
                  isActive('/budget') ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
                aria-current={isActive('/budget') ? 'page' : undefined}
              >
                <NotebookPen
                  aria-label='Budget'
                  style={{ color: isActive('/budget') ? 'green' : 'inherit' }}
                />
                Budget
              </Link>
            </li>
            <li>
              <Link
                href='/settings'
                className={`flex justify-start items-center py-3 px-5 rounded transition duration-200 gap-4 ${
                  isActive('/settings') ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
                aria-current={isActive('/settings') ? 'page' : undefined}
              >
                <Settings
                  aria-label='Settings'
                  style={{ color: isActive('/settings') ? 'green' : 'inherit' }}
                />
                Settings
              </Link>
            </li>
            <li>
              <Link
                href='/help'
                className={`flex justify-start items-center py-3 px-5 rounded transition duration-200 gap-4 ${
                  isActive('/help') ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
                aria-current={isActive('/help') ? 'page' : undefined}
              >
                <CircleHelp
                  aria-label='Help'
                  style={{ color: isActive('/help') ? 'green' : 'inherit' }}
                />
                Help
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
