import React from 'react';

const Navbar = () => (
  <div className="w-full px-4 py-2 bg-gray-900 text-white tracking-widest">
    <div className="flex justify-between">
      <ul>
        <li className="font-semibold">
          Hello World!
          </li>
      </ul>
      <ul className="hidden space-x-1 text-sm cursor-pointer lg:flex">
        <li className="px-2 rounded border border-gray-700 hover:border-blue-400 hover:text-blue-400">
          Login
        </li>
        <li className="px-2 rounded border border-gray-700 hover:border-blue-400 hover:text-blue-400">
          Login
        </li>
        <li className="px-2 rounded border border-gray-700 hover:border-blue-400 hover:text-blue-400">
          Login
        </li>
        <li className="px-2 rounded border border-gray-700 hover:border-blue-400 hover:text-blue-400">
          Login
        </li>
        <li className="px-2 rounded border border-gray-700 hover:border-blue-400 hover:text-blue-400">
          Sign up
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;