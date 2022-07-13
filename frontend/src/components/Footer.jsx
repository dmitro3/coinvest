import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full py-4 bg-gray-900">
    <div className="container flex flex-col mx-auto text-white">
      <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo"/>
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Escoin</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-200 sm:mb-0 dark:text-gray-400">
              <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
              </li>
              <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
              </li>
              <li>
                  <a href="#" className="hover:underline">Contact</a>
              </li>
          </ul>
      </div>
      <div>
        <hr className="my-6 sm:mx-auto border-gray-800 lg:my-8"/>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
      </div>
    </div>
</footer>
  );
};

export default Footer;
