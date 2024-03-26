import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

function Navbar() {
  const Navlinks = ['Home', 'Market', 'Explore', 'Exhibition', 'Collectors'];
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav((prev) => !prev);
  return (
    <nav className="bg-slate-900 p-4 text-white">
      <div className="container relative mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between text-white">
          {/* logo */}
          <a
            href="/"
            className="bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 bg-clip-text  text-2xl font-bold uppercase text-transparent"
          >
            <span>NFT</span> Market...
          </a>

          {/* nav elements */}
          <div className="hidden items-center space-x-6 lg:flex">
            {Navlinks.map((link, i) => (
              <a
                key={i}
                className="duration-200 ease-in-out hover:text-indigo-600"
              >
                {link}
              </a>
            ))}

            <button className="rounded-md border-indigo-600 bg-indigo-600 px-5 py-2 font-medium hover:border-indigo-700 hover:bg-indigo-700">
              Connect Wallet
            </button>
          </div>

          {/* hamburger */}
          <div className="lg:hidden" onClick={toggleNav}>
            {nav ? (
              <IoClose size={28} className="text-white" />
            ) : (
              <HiOutlineMenu size={28} />
            )}
          </div>

          {/* mobile nav */}
          {nav && (
            <div className="absolute top-14 z-50 w-full rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-600 to-indigo-500 px-28 py-8 lg:hidden">
              <div className="flex flex-col items-center space-y-6 ">
                {Navlinks.map((link, i) => (
                  <a
                    key={i}
                    className="duration-200 ease-in-out hover:text-indigo-600"
                  >
                    {link}
                  </a>
                ))}

                <button className="rounded-md border-indigo-600 bg-indigo-600 px-5 py-2 font-medium hover:border-indigo-700 hover:bg-indigo-700">
                  Connect Wallet
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
