"use client";
import { useState, useEffect } from "react";
import {
  LucideGithub,
  LucideFacebook,
  LucideArrowUp,
  LucideInstagram
} from "lucide-react";
import Image from "next/image";

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Social links data for easy management
  const socialLinks = [
    {
      href: "https://web.facebook.com/kylecervantes2003",
      title: "Facebook",
      icon: <LucideFacebook strokeWidth={1.5} size={22} />,
      hoverColor: "hover:text-[#1877F2]"
    },
    {
      href: "https://github.com/KSCervantes",
      title: "GitHub",
      icon: <LucideGithub strokeWidth={1.5} size={22} />,
      hoverColor: "hover:text-gray-900"
    },
    {
      href: "https://www.instagram.com/_kylcrvnts/",
      title: "Instagram",
      icon: <LucideInstagram strokeWidth={1.5} size={22} />,
      hoverColor: "hover:text-[#E4405F]"
    },
  ];

  return (
    <>
      {/* Footer content */}
      <footer className="py-3 px-4 sm:py-4 sm:px-6 text-center sticky bottom-0 bg-white/80 backdrop-blur-sm z-40 border-t border-gray-200 shadow-sm">
        <div className="flex justify-between items-center relative">
          {/* Logo section */}
          <div className="flex items-center">
            <Image
              src="/images/Profile.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>

          {/* Social icons container */}
          <div className="flex-1 flex justify-center">
            <div className="flex justify-center gap-3 sm:gap-6 mb-0 text-gray-500 border border-gray-200 rounded-full px-4 sm:px-8 py-2.5 sm:py-3 bg-white shadow-md hover:shadow-lg transition-all duration-300">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.hoverColor} transition-all duration-300 hover:scale-110`}
                  title={link.title}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Modernized scroll to top button */}
          <button
            onClick={scrollToTop}
            className={`bg-black text-white p-2 sm:p-2.5 rounded-full shadow-lg transition-all duration-300 z-50 hover:from-indigo-600 hover:to-purple-600 hover:shadow-xl focus:outline-none transform hover:scale-110 ${showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label="Scroll to top"
          >
            <LucideArrowUp strokeWidth={2} size={18} />
          </button>
        </div>
      </footer>
    </>
  );
}
