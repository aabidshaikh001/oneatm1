"use client";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { AiFillApi } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import Image from "next/image";
import dynamic from "next/dynamic";

type MenuItem = {
  href: string;
  label: string;
  external?: boolean;
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  const menuItems: MenuItem[] = [
    { href: "/", label: "Home" },
    { href: "/Products", label: "Products" },
    { href: "/Services", label: "Services" },
    { href: "/Contact", label: "Contact Us" },
    { href: "http://forms.gle/jWmKpHaJW6gifv1n6", label: "Onboarding", external: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-10 shadow-md bg-white">
      <nav className="px-4 lg:px-6 py-2.5 max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Image src="/logo.png" alt="Tapirsoft Logo" width={130} height={40} priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium hover:text-blue-900"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`text-lg font-medium ${
                  isActive(item.href) ? "text-blue-900 font-bold" : "hover:text-blue-900"
                }`}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://login.oneatm.in/login"
            className="text-white bg-blue-800 hover:bg-blue-900 flex items-center px-4 py-2 rounded-lg"
          >
            Login <FaUser className="ml-2" />
          </a>
          <a
            href="https://api.oneatm.in/"
            className="text-white bg-blue-400 hover:bg-blue-500 flex items-center px-4 py-2 rounded-lg"
          >
            API Login <AiFillApi className="ml-2" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 lg:hidden"
        >
          {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}>
            <div
              className="w-3/4 h-full bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5">
                <button
                  onClick={toggleMenu}
                  className="text-xl self-end mb-6"
                  aria-label="Close menu"
                >
                  <IoClose />
                </button>
                {menuItems.map((item) =>
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg font-medium mb-4 hover:text-blue-900"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`block text-lg font-medium mb-4 ${
                        isActive(item.href) ? "text-blue-900 font-bold" : "hover:text-blue-900"
                      }`}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                
         {/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-2">
  <a
    href="https://login.oneatm.in/login"
    className="text-white bg-blue-800 hover:bg-blue-900 flex items-center justify-center px-3 py-2 rounded-lg text-sm sm:text-base sm:px-4"
  >
    Login <FaUser className="ml-2" />
  </a>
  <a
    href="https://api.oneatm.in/"
    className="text-white bg-blue-400 hover:bg-blue-500 flex items-center justify-center px-3 py-2 rounded-lg text-sm sm:text-base sm:px-4"
  >
    API Login <AiFillApi className="ml-2" />
  </a>
</div>
              </div>
              
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default dynamic (()=>Promise.resolve(Header),{ssr:false});
