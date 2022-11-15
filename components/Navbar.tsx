import { FC } from 'react';
import Image from 'next/image';
import Eraser from '../public/images/eraser.svg';
import Lightbulb from '../public/images/lightbulb.svg';

interface pageProps {};

const Navbar: FC<pageProps> = ({}) => {
  return (
    <nav className='px-2 sm:px-4 rounded bg-beige'>
      <div className='container flex flex-wrap justify-between items-center mx-auto space-y-6'>
      <a href='/' className='flex items-center'>
        <Image src="/images/logo.gif" alt="Paint Cafe Logo" width={300} height={300}/>
      </a>
      <ul className='flex flex-row'>
          <li>
            <a href="/" className="px-6 flex items-center">
              <Eraser/>
              <span className='font-bold text-xl'>
                Erase
              </span>
            </a>
          </li>
          <li>
          <a href="/" className="px-6 flex items-center">
              <Lightbulb/>
              <span className='font-bold text-xl'>
                Help
              </span>
            </a>
          </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;