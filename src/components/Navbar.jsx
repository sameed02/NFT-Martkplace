import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import Logo from './Logo.jsx';
import NavItem from './NavItem.jsx';
import NavBtn from './NavBtn.jsx';

function Navbar() {
  const Navlinks = ['Home', 'Market', 'Explore', 'Exhibition', 'Collectors'];
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav((prev) => !prev);
  return (
    <nav className="bg-slate-900 p-4 text-white">
      <div className="container relative mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between text-white">
          {/* logo */}
          <Logo />

          {/* nav elements */}
          <div className="hidden items-center space-x-6 lg:flex">
            {Navlinks.map((link, i) => (
              <NavItem key={i} link={link} />
            ))}

            <NavBtn />
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
                  <NavItem key={i} link={link} />
                ))}

                <NavBtn />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
