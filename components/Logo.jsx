import { Shield } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Logo = ({ variant = 'full' }) => {
  return (
    <Link href={'/'}>
      <div className='flex justify-center items-center'>
        <Shield color='white' fill='green' size={34} />
        {variant === 'full' && <h1 className='text-2xl ml-2'>AssetGuard</h1>}
      </div>
    </Link>
  );
};

export default Logo;
