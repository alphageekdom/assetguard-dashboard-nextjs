'use client';

import { useState } from 'react';
import { ToggleLeft, ToggleRight } from 'lucide-react';
import RegisterCard from './RegisterCard';
import LoginCard from './LoginCard';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div
      className='flex justify-center items-center w-full'
      style={{ minHeight: '100vh' }}
    >
      <div style={{ width: '800px' }}>
        {isLogin ? (
          <LoginCard isLogin={isLogin} toggleForm={toggleForm} />
        ) : (
          <RegisterCard isLogin={isLogin} toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default AuthForm;
