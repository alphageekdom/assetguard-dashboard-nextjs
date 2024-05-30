import { Shield } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={'/'}>
      <div className='flex justify-center items-center'>
        <Shield color='white' fill='green' size={34} />
        <h1 className='text-2xl'>AssetGuard</h1>
      </div>
    </Link>
  );
};

export default Logo;
