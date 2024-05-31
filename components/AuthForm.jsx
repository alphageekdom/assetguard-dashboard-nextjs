'use client';

import { useState } from 'react';
import RegisterCard from './RegisterCard';
import LoginCard from './LoginCard';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  const switchToLogin = () => setIsLogin(true);

  return (
    <div className='flex justify-center items-center h-full w-full md:max-w-2xl'>
      {isLogin ? (
        <LoginCard isLogin={isLogin} toggleForm={toggleForm} />
      ) : (
        <RegisterCard toggleForm={toggleForm} switchToLogin={switchToLogin} />
      )}
    </div>
  );
}

export default AuthForm;
