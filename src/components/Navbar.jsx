import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "How It Works", to: "howitworks" },
    { name: "Features", to: "features" },
    { name: "FAQ", to: "faqs" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="w-full bg-primary text-white fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <LockClosedIcon className="h-6 w-6 text-accent" />
          <h1 className="text-xl font-semibold tracking-wide">
            Message Encryptor
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-white/90">
          {navLinks.map((link, idx) => (
            <li key={idx} className="hover:text-white cursor-pointer">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80} // optional: offset for fixed header
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ACTION BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 border border-accent rounded-lg text-accent hover:bg-accent hover:text-primary transition">
            Login
          </button>
          <button className="px-4 py-2 bg-accent rounded-lg text-primary hover:bg-white transition">
            Sign Up
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden block focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-primary border-t border-white/20">
          <ul className="flex flex-col gap-4 py-4 px-6 font-medium">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setOpen(false)} // close menu on click
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <button className="px-4 py-2 border border-accent rounded-lg text-accent hover:bg-accent hover:text-primary transition">
              Login
            </button>
            <button className="px-4 py-2 bg-accent rounded-lg text-primary hover:bg-white transition">
              Sign Up
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
