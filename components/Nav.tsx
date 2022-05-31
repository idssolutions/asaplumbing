import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <nav className="py-8 bg-transparent">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuIsOpen(true)}
              className="block text-blue-500 navbar-burger hover:text-blue-700 focus:outline-none"
            >
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
          <ul
            className={`items-center ${
              mobileMenuIsOpen ? "" : "hidden"
            } w-auto ml-auto mr-10 space-x-12 lg:flex`}
          >
            <li>
              <Link
                className="text-sm font-medium hover:text-blue-700"
                href="/about"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className="text-sm font-medium hover:text-blue-700"
                href="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium hover:text-blue-700"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <a
            className="block px-5 py-3 text-sm font-semibold text-white transition duration-200 bg-blue-500 border border-blue-500 rounded hover:bg-blue-600 hover:border-blue-600"
            href="tel:4807964060"
          >
            Call Now
          </a>
        </div>
      </div>
      <div
        className={`fixed top-0 bottom-0 left-0 z-50 ${
          mobileMenuIsOpen ? "" : "hidden"
        } w-5/6 max-w-sm navbar-menu`}
      >
        <div className="fixed inset-0 bg-gray-800 opacity-25 navbar-backdrop" />
        <nav className="relative flex flex-col w-full h-full px-6 py-6 overflow-y-auto bg-white border-r">
          <div className="flex items-center mb-12">
            <a className="mr-auto text-2xl font-semibold leading-none" href="/">
              <img
                className="h-8"
                src="/logo.png"
                alt="ASA Plumbing"
                width="auto"
              />
            </a>
            <button
              className="navbar-close"
              onClick={() => setMobileMenuIsOpen(false)}
            >
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
                <Link
                  className="block p-4 text-sm font-semibold rounded hover:bg-blue-50 hover:text-blue-500"
                  href="/about"
                >
                  <a onClick={() => setMobileMenuIsOpen(false)}>About</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold rounded hover:bg-blue-50 hover:text-blue-500"
                  href="/services"
                >
                  <a onClick={() => setMobileMenuIsOpen(false)}>Services</a>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold rounded hover:bg-blue-50 hover:text-blue-500"
                  href="/contact"
                >
                  <a onClick={() => setMobileMenuIsOpen(false)}>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-5 py-3 mb-3 text-sm font-semibold text-center text-white transition duration-200 bg-blue-500 border border-blue-500 rounded hover:bg-blue-600 hover:border-blue-600"
                href="tel:4807964060"
              >
                Call Now
              </a>
            </div>
            <p className="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2022 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </nav>
  );
}
