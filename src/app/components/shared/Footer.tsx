import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#23BE0A]/10 bg-[#f5fff3]">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 py-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-[#131313]"
            >
              App<span className="text-[#23BE0A]">Nest</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Discover powerful and productive apps designed to make your
              everyday life easier, faster, and better.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#131313]">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 transition hover:text-[#23BE0A]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/apps"
                  className="text-sm text-gray-500 transition hover:text-[#23BE0A]"
                >
                  Apps
                </Link>
              </li>

              <li>
                <Link
                  href="/installation"
                  className="text-sm text-gray-500 transition hover:text-[#23BE0A]"
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#131313]">
              Get the App
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Download our apps and stay productive wherever you go.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-xl bg-[#131313] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#23BE0A]">
                ▶ Google Play
              </button>

              <button className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#131313] shadow-sm transition hover:border-[#23BE0A] hover:text-[#23BE0A]">
                 App Store
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-[#23BE0A]/10 py-5 text-center text-sm text-gray-400 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} AppNest. All rights reserved.</p>

          <p>
            Built with <span className="text-[#23BE0A]">♥</span> for better
            productivity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;