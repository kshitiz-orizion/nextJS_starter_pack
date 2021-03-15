import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav className="bg-gray-400 w-full h-20">
    <ul className="h-full flex items-center">
      <li className="inline px-20">
        <Link href="/">Home</Link>
      </li>
      <li className="inline px-20">
        <Link href="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
