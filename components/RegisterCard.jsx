import React from 'react';
import { useState } from 'react';
import { CheckCircle, ToggleLeft } from 'lucide-react';
import validator from 'validator';

import toast from 'react-hot-toast';
import ButtonWithSpinner from './ButtonSpinner';

const RegisterCard = ({ toggleForm, switchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [validation, setValidation] = useState({
    isNameValid: false,
    isEmailValid: false,
    isPasswordValid: false,
    isConfirmPasswordValid: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    switch (name) {
      case 'name':
        setValidation((prev) => ({
          ...prev,
          isNameValid: value.trim().length > 0,
        }));
        break;
      case 'email':
        setValidation((prev) => ({
          ...prev,
          isEmailValid: validator.isEmail(value),
        }));
        break;
      case 'password':
        const isPasswordValid = validator.isLength(value, { min: 8 });
        setValidation((prev) => ({
          ...prev,
          isPasswordValid: isPasswordValid,
          isConfirmPasswordValid:
            isPasswordValid && value === formData.confirmPassword,
        }));
        break;
      case 'confirmPassword':
        setValidation((prev) => ({
          ...prev,
          isConfirmPasswordValid: value === formData.password,
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!validator.isEmail(formData.email)) {
      toast.error('Please enter a valid email address.');
      setLoading(false);
      return;
    }
    if (!validator.isLength(formData.password, { min: 8 })) {
      toast.error('Password must be at least 8 characters long.');
      setLoading(false);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Registration Successful!');
        switchToLogin();
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
    <div className='border-2  mx-auto w-[800px] h-auto p-16 rounded-2xl bg-gray-800 '>
      <div className='flex justify-center items-center'>
        <div
          className='cursor-pointer p-2 text-gray-400 hover:text-green-500'
          onClick={toggleForm}
        >
          <ToggleLeft size={34} />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className='text-3xl text-center font-semibold mb-6 col-span-2 text-white'>
          Register
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
          {/* <!-- Name --> */}
          <div className='mb-4 md:col-span-1'>
            <label
              htmlFor='name'
              className='block text-gray-300 font-bold mb-2'
            >
              <p className='flex items-center gap-2'>
                Name{' '}
                {validation.isNameValid && (
                  <CheckCircle className='text-green-500' size={18} />
                )}
              </p>
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
              <p className='flex items-center gap-2'>
                Email{' '}
                {validation.isEmailValid && (
                  <CheckCircle className='text-green-500' size={18} />
                )}
              </p>
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
              <p className='flex items-center gap-2'>
                Password
                {validation.isPasswordValid && (
                  <CheckCircle className='text-green-500' size={18} />
                )}
              </p>
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
              <p className='flex items-center gap-2'>
                Confirm Password{' '}
                {validation.isConfirmPasswordValid && (
                  <CheckCircle className='text-green-500' size={18} />
                )}
              </p>
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
            disabled={loading}
          >
            {loading ? <ButtonWithSpinner /> : 'Register'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterCard;
