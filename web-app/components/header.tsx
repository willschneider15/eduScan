import { memo, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";


function header() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    return(
        <nav className="flex items-center flex-wrap pb-10 pt-2  max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className='relative flex h-16 items-center justify-between'>
                <Link
                    className="flex items-center gap-4 px-2 lg:px-0"
                    href="/"
                >
                    <div className='flex'>
                        <Image className="" src="/eduScan-no-bg.svg" alt="eduScan Logo" width={200} height={200}/>
                    </div>
                    
                </Link>
            </div>
            <button
            className='inline-flex p-3 bg-purple-700 hover:bg-purple-800 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
            className={`${
                active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto md:pt-0 pt-2`}
            >
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto '>
                   
                    <Link href="/about">
                        <h1 className="font-medium text-black hover:text-purple-700 transition-in duration-1000 ease-out 
                      border-b-2 border-transparent hover:border-purple-700 px-3">
                            About
                        </h1>
                    </Link> 
                </div>
            </div>

        </nav>
    );
}


export default memo(header);