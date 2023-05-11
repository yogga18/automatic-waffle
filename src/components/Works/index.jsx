import Card from './Card';

const Works = () => {
  return (
    <div className='mt-20 mb-52'>
      <div className='flex justify-center align-middle flex-col items-center'>
        <h5 className='font-bold text-center text-2xl'>Feature</h5>
        <div className='w-16 h-1 rounded-md bg-yellow-500' />
      </div>
      <div className='flex flex-wrap m-5 justify-center gap-3'>
        <Card title={'Monitoring Users'} />
        <Card title={'Track Surat Jalan'} />
        <Card title={'Generate Documents'} />
      </div>
    </div>
  );
};

export default Works;
