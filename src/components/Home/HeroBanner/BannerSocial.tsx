import React from "react";

const BannerSocial = () => {
  return (
    <div className="flex items-center justify-center h-full mobile-none">
      <div className="flex items-center gap-6 rotate-container">
        {[
          { name: "Facebook", url: "#" },
          { name: "Instagram", url: "#" },
          { name: "LinkedIn", url: "#" },
          { name: "GitHub", url: "#" },
        ].map((link) => (
          <p key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="site-text-two banner-link transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-4px] inline-block font-medium"
            >
              {link.name}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default BannerSocial;
