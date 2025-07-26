import ButtonOne from "@/components/Buttons/ButtonOne";
import ThemeToggle from "@/components/shared/Header/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-base-100 header-main">
      <div className="container mx-auto">
        <div className="navbar text-base-content">
          <div className="navbar-start">
            <Link href="/" className="text-xl normal-case">
              <div>
                <Image
                  src="/images/logo.png"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </div>
            </Link>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="px-1 menu menu-horizontal">
              <li>
                <Link
                  href="/"
                  className="relative inline-block bg-transparent menu-item after-effect"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="relative inline-block bg-transparent menu-item after-effect"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="relative inline-block bg-transparent menu-item after-effect"
                >
                  Skills & Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="relative inline-block bg-transparent menu-item after-effect"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="relative inline-block bg-transparent menu-item after-effect"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="relative inline-block bg-transparent menu-item after-effect"
                >
                  Blog
                </Link>
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
                  className="w-5 h-5"
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
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
