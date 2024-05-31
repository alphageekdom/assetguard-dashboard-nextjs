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
  User,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

const Sidebar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const isActive = (path) => pathname === path;

  const handleLogout = async () => {
    await signOut({ redirect: false });
    toast.success('Successfully logged out');
    router.replace('/');
  };

  return (
    <div className='flex sidebar'>
      <nav
        className={`bg-gray-800 text-white ${
          isCollapsed ? 'w-16' : 'w-64'
        } h-screen space-y-6 py-4 px-2 fixed inset-x-0 left-0 transform transition-all duration-300 ease-in-out z-50 border-r-2 border-green-500`}
        aria-label='Main Navigation'
      >
        <div
          className={`flex ${
            isCollapsed ? 'justify-center' : 'justify-end'
          } p-2 absolute top-0 right-0 w-full`}
        >
          <button
            className='rounded-full text-white '
            onClick={toggleSidebar}
            style={{ marginBottom: '1rem' }} // Adds margin bottom to push down slightly from the top
          >
            <Menu aria-label='Toggle Menu' />
          </button>
        </div>
        <div className='mx-auto my-5'>
          <Logo variant={`${isCollapsed ? 'shield' : 'full'}`} />
        </div>
        <ul className='flex flex-col gap-5'>
          <li>
            <Link
              href='/'
              className={`flex items-center ${
                isCollapsed ? 'justify-center' : 'justify-start'
              } ${
                isCollapsed ? 'py-3' : 'py-3 px-5'
              } rounded transition duration-200 ${
                isActive('/') ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              <Home style={{ color: isActive('/') ? 'green' : 'inherit' }} />
              <span
                className={`${isCollapsed ? 'hidden' : 'inline-block ml-4'}`}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              href='/budget'
              className={`flex items-center ${
                isCollapsed ? 'justify-center' : 'justify-start'
              } ${
                isCollapsed ? 'py-3' : 'py-3 px-5'
              } rounded transition duration-200 ${
                isActive('monthly-reports')
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
              aria-current={isActive('/budget') ? 'page' : undefined}
            >
              <NotebookPen
                aria-label='Monthly Reports'
                style={{
                  color: isActive('/budget') ? 'green' : 'inherit',
                }}
              />
              <span
                className={`${isCollapsed ? 'hidden' : 'inline-block ml-4'}`}
              >
                Budget
              </span>
            </Link>
          </li>
          <li>
            <Link
              href='/transactions'
              className={`flex items-center ${
                isCollapsed ? 'justify-center' : 'justify-start'
              } ${
                isCollapsed ? 'py-3' : 'py-3 px-5'
              } rounded transition duration-200 ${
                isActive('monthly-reports')
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
              aria-current={isActive('/transactions') ? 'page' : undefined}
            >
              <ArrowLeftRight
                aria-label='Monthly Reports'
                style={{
                  color: isActive('/transactions') ? 'green' : 'inherit',
                }}
              />
              <span
                className={`${isCollapsed ? 'hidden' : 'inline-block ml-4'}`}
              >
                Transactions
              </span>
            </Link>
          </li>
          <li>
            <Link
              href='/monthly-reports'
              className={`flex items-center ${
                isCollapsed ? 'justify-center' : 'justify-start'
              } ${
                isCollapsed ? 'py-3' : 'py-3 px-5'
              } rounded transition duration-200 ${
                isActive('monthly-reports')
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
              <span
                className={`${isCollapsed ? 'hidden' : 'inline-block ml-4'}`}
              >
                {' '}
                Monthly
              </span>
            </Link>
          </li>
          <li>
            <Link
              href='/annual-reports'
              className={`flex items-center ${
                isCollapsed ? 'justify-center' : 'justify-start'
              } ${
                isCollapsed ? 'py-3' : 'py-3 px-5'
              } rounded transition duration-200 ${
                isActive('monthly-reports')
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
              aria-current={isActive('/annual-reports') ? 'page' : undefined}
            >
              <Hourglass
                aria-label='Monthly Reports'
                style={{
                  color: isActive('/annual-reports') ? 'green' : 'inherit',
                }}
              />
              <span
                className={`${isCollapsed ? 'hidden' : 'inline-block ml-4'}`}
              >
                Yearly
              </span>
            </Link>
          </li>
          <li>
            <Link
              href='/settings'
              className={`flex items-center ${
                isCollapsed ? 'justify-center' : 'justify-start'
              } ${
                isCollapsed ? 'py-3' : 'py-3 px-5'
              } rounded transition duration-200 ${
                isActive('monthly-reports')
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
              aria-current={isActive('/settings') ? 'page' : undefined}
            >
              <Settings
                aria-label='Monthly Reports'
                style={{
                  color: isActive('/settings') ? 'green' : 'inherit',
                }}
              />
              <span
                className={`${isCollapsed ? 'hidden' : 'inline-block ml-4'}`}
              >
                Settings
              </span>
            </Link>
          </li>
          <li>
            <Link
              href='/help'
              className={`flex items-center ${
                isCollapsed ? 'justify-center' : 'justify-start'
              } ${
                isCollapsed ? 'py-3' : 'py-3 px-5'
              } rounded transition duration-200 ${
                isActive('monthly-reports')
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
              aria-current={isActive('/help') ? 'page' : undefined}
            >
              <CircleHelp
                aria-label='Monthly Reports'
                style={{
                  color: isActive('/help') ? 'green' : 'inherit',
                }}
              />
              <span
                className={`${isCollapsed ? 'hidden' : 'inline-block ml-4'}`}
              >
                Help
              </span>
            </Link>
          </li>
          {session ? (
            <li>
              <button
                onClick={handleLogout}
                className={`flex items-center ${
                  isCollapsed ? 'justify-center' : 'justify-start'
                } ${
                  isCollapsed ? 'py-3' : 'py-3 px-5'
                } rounded transition duration-200 ${
                  isActive('monthly-reports')
                    ? 'bg-gray-700'
                    : 'hover:bg-gray-700'
                }`}
                aria-current={isActive('/auth') ? 'page' : undefined}
              >
                <User
                  aria-label='Logout'
                  style={{
                    color: 'inherit',
                  }}
                />
                <span
                  className={`${isCollapsed ? 'hidden' : 'inline-block ml-4'}`}
                >
                  Logout
                </span>
              </button>
            </li>
          ) : (
            <li>
              <Link
                href='/auth'
                className={`flex items-center ${
                  isCollapsed ? 'justify-center' : 'justify-start'
                } ${
                  isCollapsed ? 'py-3' : 'py-3 px-5'
                } rounded transition duration-200 ${
                  isActive('monthly-reports')
                    ? 'bg-gray-700'
                    : 'hover:bg-gray-700'
                }`}
                aria-current={isActive('/auth') ? 'page' : undefined}
              >
                <User
                  aria-label='Monthly Reports'
                  style={{
                    color: isActive('/auth') ? 'green' : 'inherit',
                  }}
                />
                <span
                  className={`${isCollapsed ? 'hidden' : 'inline-block ml-4'}`}
                >
                  Login/Register
                </span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
