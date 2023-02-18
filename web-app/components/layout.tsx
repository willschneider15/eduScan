import React from 'react';
import { MetaProps } from '../types/layout';
import Header from './header';
import Footer from './footer';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
        <div className='bg-zinc-50 px-10'>
            <div className='justify-between mx-auto flex min-h-screen max-w-7xl flex-col'>
                <Header/>
                    <main>
                        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
                    </main>
                <Footer/>
            </div>
        </div>
    </>
  );
};

export default Layout;