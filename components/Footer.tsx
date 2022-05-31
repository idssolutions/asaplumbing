import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20">
      <div className="container px-4 mx-auto text-center">
        <Link href="/">
          <div className="inline-block mx-auto text-2xl leading-none text-gray-600">
            <img
              className="h-8"
              src="/logo.png"
              alt="ASA Plumbing"
              width="auto"
            />
          </div>
        </Link>
        <ul className="flex flex-wrap items-center justify-center my-6">
          <li className="mx-4 mb-2 md:mb-0">
            <Link
              className="text-sm font-medium hover:text-blue-700"
              href="/about"
            >
              About
            </Link>
          </li>
          <li className="mx-4 mb-2 md:mb-0">
            <Link
              className="text-sm font-medium hover:text-blue-700"
              href="/services"
            >
              Services
            </Link>
          </li>
          <li className="mx-4 mb-2 md:mb-0">
            <Link
              className="text-sm font-medium hover:text-blue-700"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-12 mb-8 border-b" />
      <div className="container px-4 mx-auto">
        <p className="text-sm text-center text-gray-500">
          All rights reserved. © ASA Plumbing Inc.
        </p>
        <p className="text-sm text-center text-gray-500">
          Designed and developed by{" "}
          <a href="https://www.irasanchez.com">Ira Sanchez</a>.
        </p>
      </div>
    </footer>
  );
}
