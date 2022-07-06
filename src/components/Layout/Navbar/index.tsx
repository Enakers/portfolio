import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import Nav from './Nav';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 mb-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Nav className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" />
        </div>

        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">Kane Allan</a>
        </Link>

        <div className="hidden lg:flex">
          <Nav className="menu menu-horizontal p-0" />
        </div>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/EnakNalla"
          target="_blank"
          rel="noreferrer"
          className="mr-2"
        >
          <BsGithub size="24" />
        </a>

        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
