"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaFileAlt, FaArrowUp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Footer content */}
      <footer className="py-4 px-6 text-center sticky bottom-0 bg-white/80 backdrop-blur-sm z-40 border-t border-gray-200 shadow-sm">
        <div className="flex justify-center items-center relative">
          {/* Social icons container */}
          <div className="flex justify-center gap-6 mb-0 text-xl text-gray-600 border border-gray-200 rounded-full px-8 py-3 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <a
              href="https://www.linkedin.com/in/kyle-cervantes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition-colors hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://web.facebook.com/kylecervantes2003"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877F2] transition-colors hover:scale-110"
              title="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/KSCervantes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors hover:scale-110"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/its_kylcrvnts/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4405F] transition-colors hover:scale-110"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="/images/Kylee.pdf"
              download="Kyle_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors hover:scale-110"
              title="Resume"
            >
              <FaFileAlt />
            </a>
          </div>

          {/* Back to top button - now positioned inline with the icons */}
          <button
            onClick={scrollToTop}
            className={`absolute right-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 z-50 hover:from-indigo-700 hover:to-purple-700 focus:outline-none transform hover:scale-110 ${
              showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </footer>
    </>
  );
}
