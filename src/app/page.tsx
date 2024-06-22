'use client';
import Image from 'next/image';
import { useCallback, useState } from 'react';

export default function Home() {
  const [ip, setIp] = useState('');
  const getIp = useCallback(
    async () => {
      const response = await fetch('https://api.ipify.org');
      setIp(await response.text());
    },
    [],
  );


  return (
    <main className='min-h-screen relative'>
      <div className='absolute top-1/4 gap-y-8 left-0 right-0 flex items-center justify-center flex-col'>
        <Image
          className='dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
        {
          ip
            ? (
              <h1 className='text-xl'>
                Server IP is:
                <span className='text-blue-500'> {ip}</span>
              </h1>
            )
            : (
              <button
                className='text-xl py-1 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                onClick={getIp}
              >
                Check server IP
              </button>
            )
        }
      </div>
    </main>
  );
}
