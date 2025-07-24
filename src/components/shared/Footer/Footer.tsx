import SocialIcons from "@/components/SocialIcons/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserTie,
  FaTools,
  FaFileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="blob1"></div>
      <div className="blob2"></div>
      <div className="blob3"></div>
      <footer className="container mx-auto footer sm:footer-horizontal text-base-content p-10 py-15">
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
          <p className="mt-2 text-base md:text-sm leading-relaxed text-justify">
            <strong>Saju</strong> — Frontend & Full Stack Developer focused on <br />
            crafting high-performance web applications with <br /> clean code and a 
            user-centered design approach.
          </p>

          <SocialIcons />
        </aside>
        <nav>
          <h6 className="footer-title flex items-center">
            Projects <span className="title-line"></span>
          </h6>
          <Link href={"/"} className="link link-hover mb-2">
            Mern Stack
          </Link>
          <Link href={"/"} className="link link-hover mb-2">
            CMS (Wordpress)
          </Link>
          <Link href={"/"} className="link link-hover mb-2">
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
            href={"/"}
            className="link link-hover flex items-center gap-1 mb-2"
          >
            About us
          </Link>
          <Link
            href={"/"}
            className="link link-hover flex items-center gap-1 mb-2"
          >
            Contact
          </Link>
          <Link
            href={"/"}
            className="link link-hover flex items-center gap-1 mb-2"
          >
            Skills
          </Link>
          <Link href={"/"} className="link link-hover flex items-center gap-1">
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
            <FaPhoneAlt className="site-text" /> +880 1234 567890
          </Link>

          <Link
            href="mailto:saju@example.com"
            className="flex items-center gap-2 mb-3"
          >
            <FaEnvelope className="site-text" /> saju@example.com
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
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left ">
              © {new Date().getFullYear()} - All rights reserved by{" "}
              <span className=" font-semibold">Saju</span>
            </p>
            <div className="gap-4 flex justify-center">
              <Link href="/resume.pdf" target="_blank" className="font-normal">
                Faq's
              </Link>
              <Link href="/resume.pdf" target="_blank" className="font-normal">
                Terms
              </Link>
              <Link href="/resume.pdf" target="_blank" className="font-normal">
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
