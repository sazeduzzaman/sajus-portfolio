import SocialIcons from "@/components/SocialIcons/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./footer.css"; // Assuming you have a CSS file for styles

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="blob1"></div>
      <div className="blob2"></div>
      <div className="blob3"></div>
      <footer className="container p-10 mx-auto footer sm:footer-horizontal py-15">
        <aside>
          <Link href={"/"} className="text-xl normal-case">
            <div>
              <Image
                src="/images/logo.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
          </Link>
          <p className="mt-2 text-base leading-relaxed text-justify md:text-sm">
            <strong>Saju</strong> — Frontend & Full Stack Developer focused on{" "}
            <br />
            crafting high-performance web applications with <br /> clean code
            and a user-centered design approach.
          </p>

          <SocialIcons />
        </aside>
        <nav>
          <h6 className="flex items-center footer-title">
            Projects <span className="title-line"></span>
          </h6>
          <Link href="/" className="mb-2 link link-hover">
            Mern Stack
          </Link>
          <Link href={"/"} className="mb-2 link link-hover">
            CMS (Wordpress)
          </Link>
          <Link href={"/"} className="mb-2 link link-hover">
            Php (Larvel Frontend)
          </Link>
          <Link href={"/"} className="link link-hover">
            Frontend Templates
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">
            Pages <span className="title-line"></span>
          </h6>
          <Link
            href="/about"
            className="flex items-center gap-1 mb-2 link link-hover"
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-1 mb-2 link link-hover"
          >
            Contact
          </Link>
          <Link
            href="/skills"
            className="flex items-center gap-1 mb-2 link link-hover"
          >
            Skills
          </Link>
          <Link
            href="/resume"
            className="flex items-center gap-1 link link-hover"
          >
            Resume
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">
            Contact <span className="title-line"></span>
          </h6>

          <Link
            href="tel:+8801234567890"
            className="flex items-center gap-2 mb-3"
          >
            <FaPhoneAlt className="site-text" /> +880 1576614451
          </Link>

          <Link
            href="mailto:szamansaju@gmail.com"
            className="flex items-center gap-2 mb-3"
          >
            <FaEnvelope className="site-text" /> szamansaju@gmail.com
          </Link>

          <a
            href="https://maps.google.com?q=Bastola,Khilkhet,Dhaka,Bangladesh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaMapMarkerAlt className="site-text" />
            Bastola, Khilkhet <br /> Dhaka, Bangladesh
          </a>
        </nav>
      </footer>
      <div className="footer-bottom-top">
        <div className="container p-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center md:text-left ">
              © {new Date().getFullYear()} - All rights reserved by{" "}
              <span className="font-semibold ">Saju</span>
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/faqs" className="font-normal">
                Faq's
              </Link>
              <Link href="/terms" className="font-normal">
                Terms
              </Link>
              <Link href="/privacy" className="font-normal">
                Privacy & Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
