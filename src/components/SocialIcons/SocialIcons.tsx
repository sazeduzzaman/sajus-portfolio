import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import "./SocialIcons.css"; // Import the custom CSS

const SocialIcons = () => {
  return (
    <div className="social-icons-wrapper">
      <a
        href="https://facebook.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialIcons;
