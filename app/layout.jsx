import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Roboto } from 'next/font/google';

import ToasterConfig from '@/components/ToasterConfig';
import AuthProvider from '@/components/AuthProvider';

const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'AssetGuard —— Dashboard',
  description: 'Revitalize your budgeting/finances',
  keywords: 'personal finance, budgeting, forecasting, retirement',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en' className={roboto_init}>
        <body className='flex'>
          <Sidebar />
          <div className='flex flex-col flew-grow w-full'>
            <Navbar />
            <main className='flex-grow'>{children}</main>
          </div>
          <ToasterConfig />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
