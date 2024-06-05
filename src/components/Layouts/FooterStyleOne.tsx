// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterStyleOne: React.FC = () => {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-area">
        <div className="container">
          <div className="footer-content">
            <Link href="/" className="logo">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={138}
                height={44}
              />
            </Link>

            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/TeminosTechnologyOfficial" target="_blank">
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/teminostechnologyofficial" target="_blank">
                  <i className="ri-instagram-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/teminostechnologyofficial/" target="_blank">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>
              {/* <li>
                <a href="https://twitter.com/" target="_blank">
                  <i className="ri-twitter-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.messenger.com/" target="_blank">
                  <i className="ri-messenger-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank">
                  <i className="ri-github-fill"></i>
                </a>
              </li> */}
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-modern" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/privacy-policy" className="nav-link">
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/terms-conditions" className="nav-link">
                  Terms & Conditions
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              {/*<li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/faq" className="nav-link">
                  FAQ's
                </Link>
              </li> */}
            </ul>

            <p className="copyright">
              Copyright &copy; {currentYear} <strong>Teminos</strong>. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterStyleOne;
