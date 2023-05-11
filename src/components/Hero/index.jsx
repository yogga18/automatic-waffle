const Hero = () => {
  return (
    <div className='container pt-12'>
      <div className='flex justify-between w-screen h-96'>
        <div className='w-screen bg-gray-100 py-16 rounded-lg'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-4xl font-bold text-gray-800 leading-tight mb-4'>
              Welcome <b className='text-orange-500'>to</b> SIMPEG
            </h1>
            <p className='text-gray-700 text-xl mb-8'>
              In publishing and graphic design, Lorem ipsum may be used as a
              placeholder before final copy is available.
            </p>
            <a
              title='Go to Beranda'
              href='/beranda'
              className='inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg uppercase tracking-wider transition duration-700 ease-in-out'
            >
              Get started
            </a>
          </div>
        </div>

        <div className='hidden sm:block w-screen'>
          <img
            src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt='hero image'
            className='object-cover w-full h-full grayscale-0 hover:grayscale transition duration-500 ease-in-out'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
