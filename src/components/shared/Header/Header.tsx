import ButtonOne from "@/components/Buttons/ButtonOne";
import ThemeToggle from "@/components/shared/Header/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-base-100 header-main">
      <div className="container mx-auto">
        <div className="navbar text-base-content">
          <div className="navbar-start">
            <a className="text-xl normal-case">
              <div>
                <Image
                  src="/images/logo.png"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </div>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="#home" className="menu-item">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="menu-item">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="menu-item">
                  Skills
                </a>
              </li>
              <li>
                <a href="#about" className="menu-item">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="menu-item">
                  Contact
                </a>
              </li>
              {/* Optional */}
              <li>
                <a href="/resume.pdf" target="_blank" className="menu-item">
                  Resume
                </a>
              </li>
              <li>
                <a href="#blog" className="menu-item">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="me-3 mobile-none">
              <Link href="/">
                <ButtonOne text="Say Hello" />
              </Link>
            </div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
