import Link from 'next/link';

export default function Home() {
  return (
    <div className='text-center m-4'>
      <h1 className='text-2xl font-bold text-primary'>Hello, Next.js!</h1>
      <div className='m-2'>
        <Link href='/about'>
          <p className='font-semibold text-info hover:scale-105 hover:text-sky-600'>
            About Page
          </p>
        </Link>
      </div>
    </div>
  );
}
