import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { ToggleLeft } from 'lucide-react';

const RegisterCard = ({ isLogin, toggleForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedFormData),
      });

      if (res.ok) {
        toast.success('Registration Successful!');
        router.push('/login');
      } else if (res.status === 409) {
        toast.error('Email Already In Use');
      } else {
        const data = await res.json();
        toast.error(data.message || 'Registration Failed');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something Went Wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='border-2  mx-auto md:w-[800px] h-auto p-6 sm:p-12 rounded-2xl'>
      <div className='flex justify-center items-center mt-4'>
        <div
          className='cursor-pointer p-2 text-gray-400 hover:text-green-500'
          onClick={toggleForm}
        >
          <ToggleLeft size={34} />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className='text-3xl text-center font-semibold mb-6 col-span-2'>
          Register Account
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
          {/* <!-- Name --> */}
          <div className='mb-4 md:col-span-1'>
            <label
              htmlFor='name'
              className='block text-gray-300 font-bold mb-2'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='border rounded w-full py-2 px-3 mb-2'
              placeholder='Full Name'
              required
              value={formData.name}
              onChange={handleChange}
              autoComplete='new-name'
            />
          </div>

          {/* <!-- Email --> */}
          <div className='mb-4 md:col-span-1'>
            <label
              htmlFor='email'
              className='block text-gray-300 font-bold mb-2'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='border rounded w-full py-2 px-3 mb-2'
              placeholder='Email address'
              required
              value={formData.email}
              onChange={handleChange}
              autoComplete='new-email'
            />
          </div>

          {/* <!-- Password --> */}
          <div className='mb-4 md:col-span-1'>
            <label
              htmlFor='password'
              className='block text-gray-300 font-bold mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='border rounded w-full py-2 px-3 mb-2'
              placeholder='Password'
              required
              value={formData.password}
              onChange={handleChange}
              autoComplete='new-password'
            />
          </div>

          {/* <!-- Confirm Password --> */}
          <div className='mb-4 md:col-span-1'>
            <label
              htmlFor='confirmPassword'
              className='block text-gray-300 font-bold mb-2'
            >
              Confirm Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              className='border rounded w-full py-2 px-3 mb-2'
              placeholder='Confirm Password'
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete='new-password'
            />
          </div>
        </div>
        <div className='col-span-2'>
          <button
            className='bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterCard;
