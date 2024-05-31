import AuthForm from '@/components/AuthForm';
import React from 'react';

const AuthPage = () => {
  return (
    <section className='h-screen flex-grow '>
      <div className='container m-auto p-4 md:p-8 h-full max-w-4xl'>
        <AuthForm />
      </div>
    </section>
  );
};

export default AuthPage;
