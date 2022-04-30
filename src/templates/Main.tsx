import React, { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Navbar } from '../navigation/Navbar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();

  return (
    <div className="antialiased w-full text-gray-700 px-3 md:px-0">
      {props.meta}

      <div className="max-w-screen-md mx-auto">
        <div className="border-gray-300">
          <div className="my-8">
            <Navbar>
              <li className="mr-6">
                <Link href="/">
                  <a
                    style={{ color: router.pathname === '/' ? '#78b3e0' : '' }}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/blog/">
                  <a
                    style={{
                      color: router.pathname === '/blog' ? '#78b3e0' : '',
                    }}
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/resume/">
                  <a
                    style={{
                      color: router.pathname === '/resume' ? '#78b3e0' : '',
                    }}
                  >
                    Resume
                  </a>
                </Link>
              </li>
            </Navbar>
          </div>
        </div>

        <div className="text-lg py-5">{props.children}</div>
      </div>
    </div>
  );
};

export { Main };
