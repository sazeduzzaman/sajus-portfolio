import Link from "next/link";
import React from "react";
import './commonBanner.css'

interface CommonBannerProps {
  title: string;
  currentPage: string;
  parentPage?: { href: string };
}

const CommonBanner: React.FC<CommonBannerProps> = ({
  title,
  currentPage,
  parentPage,
}) => {
  return (
    <div className="contact-banner">
      <div className="noise-overlay" />
      <div className="container mx-auto">
        <div className="banner-content">
          <nav className="mb-0 breadcrumb">
            <Link href="/" className="hover-underline">
              Home
            </Link>
            {parentPage && (
              <>
                {" / "}
                <Link href={parentPage.href} className="hover-underline">
                  {/* {parentPage.name} */}
                </Link>
              </>
            )}
            <span>{currentPage}</span>
          </nav>
          <h1 className="banner-title">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
