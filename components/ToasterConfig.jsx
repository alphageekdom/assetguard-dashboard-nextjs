import { Toaster } from 'react-hot-toast';

const ToasterConfig = () => {
  return (
    <Toaster
      position='top-right'
      reverseOrder={false}
      toastOptions={{
        success: {
          iconTheme: {
            primary: '#008001',
            secondary: 'white',
          },
        },
      }}
    />
  );
};

export default ToasterConfig;
