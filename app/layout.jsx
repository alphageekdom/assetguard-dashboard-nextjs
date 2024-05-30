import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
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
        <Sidebar />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
