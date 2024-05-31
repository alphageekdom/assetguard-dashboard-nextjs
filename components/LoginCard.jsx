'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import validator from 'validator';
import { ToggleRight } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';

import toast from 'react-hot-toast';
import ButtonWithSpinner from './ButtonSpinner';

const LoginCard = ({ toggleForm }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session) {
      router.replace('/');
    }
  }, [session, router]);

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

    const email = validator.trim(formData.email);
    const password = validator.trim(formData.password);

    if (!validator.isEmail(email)) {
      toast.error('Invalid email format');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'Login failed. Please try again.');
      } else {
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });

        if (result.error) {
          toast.error(result.error || 'Login failed. Please try again.');
        } else {
          toast.success('Login successful');
          router.replace('/');
        }
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='border-2 w-[800px] h-auto p-20 rounded-2xl bg-gray-800 text-black'>
      <div className='flex justify-center items-center'>
        <div
          className='cursor-pointer  text-gray-400 hover:text-green-500'
          onClick={toggleForm}
        >
          <ToggleRight size={34} />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className='text-3xl text-center font-semibold mb-6 text-white'>
          Login
        </h2>
        {/* <!-- Email --> */}
        <div className='mb-4'>
          <label className='block text-gray-300 font-bold mb-2' htmlFor='email'>
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
            autoComplete='current-email'
          />
        </div>

        {/* <!-- Password --> */}
        <div className='mb-4'>
          <label
            className='block text-gray-300 font-bold mb-2'
            htmlFor='password'
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
            autoComplete='current-password'
          />
        </div>

        {/* <!-- Submit Button --> */}
        <div>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
            type='submit'
            disabled={loading}
          >
            {loading ? <ButtonWithSpinner /> : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
