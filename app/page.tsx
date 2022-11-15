import { FC } from 'react';

interface pageProps {};

const page: FC<pageProps> = ({}) => {
  return (
    <div className='h-screen w-screen bg-beige flex justify-center items-center'>
      <canvas width={750} height={750} className='border border-black bg-white rounded-md'/>
    </div>
  )
};

export default page;