import React from 'react';
import Link from 'next/link';
import {
  ArrowLeftRight,
  CalendarDays,
  CircleHelp,
  Home,
  Hourglass,
  NotebookPen,
  Settings,
  User,
} from 'lucide-react';

const MobileMenu = ({ isMobileMenuOpen, isActive }) => {
  return (
    isMobileMenuOpen && (
      <div
        className={`transition-all ease-linear duration-300 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } bg-gray-800 text-white w-72`}
      >
        <div className='flex flex-col space-y-6 py-3 px-4'>
          <ul className='space-y-5'>
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
            <li>
              <Link
                href='/auth'
                className={`flex justify-start items-center py-3 px-5 rounded transition duration-200 gap-4 ${
                  isActive('/auth') ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
                aria-current={isActive('/auth') ? 'page' : undefined}
              >
                <User
                  aria-label='Auth'
                  style={{ color: isActive('/auth') ? 'green' : 'inherit' }}
                />
                Login/Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default MobileMenu;
