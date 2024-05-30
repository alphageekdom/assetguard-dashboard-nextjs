import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar';
import { Roboto } from 'next/font/google';

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
    <html lang='en' className={roboto_init}>
      <body>
        <div className='flex'>
          <Navbar />
          <main className='flex-1'>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default MainLayout;
