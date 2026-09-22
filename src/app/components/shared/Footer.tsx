import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-[#131313] text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 py-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              App<span className="text-[#23BE0A]">Nest</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Discover powerful and productive apps designed to make your
              everyday life easier, faster, and better.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 transition hover:text-[#23BE0A]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/apps"
                  className="text-sm text-gray-400 transition hover:text-[#23BE0A]"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/installation"
                  className="text-sm text-gray-400 transition hover:text-[#23BE0A]"
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get the App
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Download our apps and stay productive wherever you go.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-xl border border-gray-700 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-[#23BE0A] hover:bg-[#23BE0A]">
                ▶ Google Play
              </button>

              <button className="rounded-xl border border-gray-700 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-[#23BE0A] hover:bg-[#23BE0A]">
                 App Store
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-gray-800 py-5 text-center text-sm text-gray-500 md:flex-row md:items-center md:justify-between md:text-left">
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