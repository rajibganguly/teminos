"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const SignUpForm: React.FC = () => {
  return (
    <>
      <div className="profile-authentication-area">
        <div className="logo">
          <Link href="/" className="d-inline-block">
            <Image
              src="/images/black-logo.png"
              alt="logo"
              width={138}
              height={44}
            />
          </Link>
        </div>

        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="signup-form">
                <h2>Sign Up</h2>

                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <button type="submit">Sign Up</button>

                  <span className="dont-account">
                    Already have an account?{" "}
                    <Link href="/sign-in">Sign In Now!</Link>
                  </span>
                </form>

                <div className="sign-in-with-button">
                  <button type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                    >
                      <title>Google</title>
                      <g fill="none" fillRule="evenodd">
                        <path
                          fill="#4285F4"
                          d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"
                        ></path>
                        <path
                          fill="#34A853"
                          d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"
                        ></path>
                        <path
                          fill="#FBBC05"
                          d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"
                        ></path>
                        <path
                          fill="#EA4335"
                          d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"
                        ></path>
                      </g>
                    </svg>
                    Sign up with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="social-links d-flex align-items-center justify-content-center">
          <li>
            <span>Follow Us On:</span>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="facebook"
              target="_blank"
            >
              <i className="ri-facebook-fill"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" className="twitter" target="_blank">
              <i className="ri-twitter-fill"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              className="linkedin"
              target="_blank"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className="instagram"
              target="_blank"
            >
              <i className="ri-instagram-line"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SignUpForm;
