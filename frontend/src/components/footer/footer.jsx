import React from "react";
import styles from "../../style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className={`footer relative z-0 footer-horizontal footer-center bg-sky-600 text-white p-10 mt-16 md:mt-10`}
    >
      <div className="w-full flex flex-col items-center justify-center text-center">
        <nav className="mb-2">
          <Link to="/" className="link link-hover">
            Home
          </Link>
        </nav>
        <aside className="text-center">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            DocOnTime
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;