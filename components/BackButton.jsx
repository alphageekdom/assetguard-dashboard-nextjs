'use client';

import Link from 'next/link';

const handleBack = (e) => {
  e.preventDefault();
  window.history.back();
};

const BackButton = () => (
  <Link
    href={'#'}
    onClick={handleBack}
    className='text-green-500 hover:bg-green-500 hover:text-white font-bold py-2 px-20 rounded-md text-xl shadow-lg border border-green-500'
  >
    Back
  </Link>
);

export default BackButton;
