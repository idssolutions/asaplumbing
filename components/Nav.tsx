import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="relative px-10 py-8 bg-transparent">
      <div className="flex items-center justify-between">
        <a className="text-2xl leading-none text-gray-600" href="#">
          <Image src="/logo.png" alt="ASA Plumbing" width={250} height={200} />{" "}
        </a>
        <div className="lg:hidden">
          <button className="block text-blue-500 navbar-burger hover:text-blue-700 focus:outline-none">
            <svg
              className="w-4 h-4"
              fill="currentColor "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:flex lg:items-center lg:w-auto lg:space-x-10">
          <li>
            <a className="text-sm font-medium hover:text-blue-700" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-sm font-medium hover:text-blue-700" href="#">
              Company
            </a>
          </li>
          <li>
            <a className="text-sm font-medium hover:text-blue-700" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="text-sm font-medium hover:text-blue-700" href="#">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex">
          <input
            className="inline-block px-4 py-3 text-sm font-semibold border border-r-0 rounded-l"
            placeholder="Search"
          />
          <button className="px-2 border border-l-0 rounded-r">
            <svg
              className="w-4 h-4 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="fixed top-0 bottom-0 left-0 z-50 hidden w-5/6 max-w-sm navbar-menu">
        <div className="fixed inset-0 bg-gray-800 opacity-25 navbar-backdrop" />
        <nav className="relative flex flex-col w-full h-full px-6 py-6 overflow-y-auto bg-white border-r">
          <div className="flex items-center mb-12">
            <a className="mr-auto text-2xl font-semibold leading-none" href="#">
              <Image
                src="/logo.png"
                alt="ASA Plumbing"
                width={250}
                height={200}
              />{" "}
            </a>
            <button className="navbar-close">
              <svg
                className="w-6 h-6 cursor-pointer hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold rounded hover:bg-blue-50 hover:text-blue-500"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold rounded hover:bg-blue-50 hover:text-blue-500"
                  href="#"
                >
                  Company
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold rounded hover:bg-blue-50 hover:text-blue-500"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold rounded hover:bg-blue-50 hover:text-blue-500"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <p className="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2022 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </nav>
  );
}
