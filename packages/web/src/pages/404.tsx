import React from 'react';
import { Button } from '@components/common/Button';
import Link from 'next/link';
import { Footer } from '@components/common/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-8"></div>
      <div
        className="flex h-full absolute"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <div className="m-auto text-center">
          <h1>404</h1>
          <p className="text-gray-300 text-lg mt-4">
            Oh no! That page doesn’t exist... <br />
            <Button className="mt-4">
              <Link href="/">
                <a>Home</a>
              </Link>
            </Button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
