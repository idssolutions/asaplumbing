import React from "react";

export default function Footer() {
  return (
    <footer className="py-20">
      <div className="container px-4 mx-auto text-center">
        <a
          className="inline-block mx-auto text-2xl leading-none text-gray-600"
          href="#"
        >
          <img
            className="h-8"
            src="/logo.png"
            alt
            width="auto"
          />
        </a>
        <ul className="flex flex-wrap items-center justify-center my-6">
          <li className="mx-4 mb-2 md:mb-0">
            <a className="text-sm font-medium hover:text-blue-700" href="#">
              About
            </a>
          </li>
          <li className="mx-4 mb-2 md:mb-0">
            <a className="text-sm font-medium hover:text-blue-700" href="#">
              Company
            </a>
          </li>
          <li className="mx-4 mb-2 md:mb-0">
            <a className="text-sm font-medium hover:text-blue-700" href="#">
              Services
            </a>
          </li>
          <li className="mx-4 mb-2 md:mb-0">
            <a className="text-sm font-medium hover:text-blue-700" href="#">
              Testimonials
            </a>
          </li>
        </ul>
        <div>
          <a className="inline-block mr-2 lg:mr-10" href="#">
            <img src="plain-assets/socials/facebook.svg" />
          </a>
          <a className="inline-block mr-2 lg:mr-10" href="#">
            <img src="plain-assets/socials/twitter.svg" />
          </a>
          <a className="inline-block mr-2 lg:mr-10" href="#">
            <img src="plain-assets/socials/github.svg" />
          </a>
          <a className="inline-block mr-2 lg:mr-10" href="#">
            <img src="plain-assets/socials/instagram.svg" />
          </a>
          <a className="inline-block" href="#">
            <img src="plain-assets/socials/linkedin.svg" />
          </a>
        </div>
      </div>
      <div className="mt-12 mb-8 border-b" />
      <div className="container px-4 mx-auto">
        <p className="text-sm text-center text-gray-500">
          All rights reserved. © ASA Plumbing Inc.
        </p>
      </div>
    </footer>
  );
}
