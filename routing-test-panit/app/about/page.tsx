import Link from 'next/link';

const About = () => {
  return (
    <div className='text-center m-4'>
      <h1 className='text-2xl font-bold text-info'>About Page</h1>
      <div className='m-2'>
        <Link href='/'>
          <p className='font-semibold text-primary hover:scale-105 hover:text-blue-800'>
            Home Page
          </p>
        </Link>
      </div>
    </div>
  );
};

export default About;
