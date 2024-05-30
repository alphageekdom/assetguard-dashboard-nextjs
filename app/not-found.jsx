import BackButton from '@/components/BackButton';

const NotFoundPage = () => {
  return (
    <section className='min-h-screen bg-black flex flex-col items-center justify-center'>
      <div className='text-white text-4xl sm:text-6xl text-center mb-4'>
        404 <span className='text-green-500'>|</span> Page Not Found
      </div>
      <BackButton />
    </section>
  );
};

export default NotFoundPage;
