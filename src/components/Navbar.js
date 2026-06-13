import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MediumIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} relative rounded text-dark transition-colors duration-300 hover:text-primary dark:text-light dark:hover:text-primaryDark`}
    >
      {title}
      <span
        className={`absolute -bottom-1 left-0 inline-block h-[2px] rounded-full bg-primary transition-all duration-300 dark:bg-primaryDark ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      />
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      type="button"
      className={`${className} relative rounded text-light transition-colors duration-300 hover:text-primaryDark dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`absolute -bottom-1 left-0 inline-block h-[2px] rounded-full bg-primaryDark transition-all duration-300 dark:bg-primary ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      />
    </button>
  );
};

const SocialIcon = ({ href, label, children }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-6 text-dark transition-colors duration-300 hover:text-primary dark:text-light dark:hover:text-primaryDark"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.92 }}
      aria-label={label}
    >
      {children}
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/projects", title: "Projects" },
    { href: "/articles", title: "Articles" },
    { href: "/contact", title: "Contact" },
  ];

  return (
    <header className="relative z-10 flex w-full items-center justify-between px-32 pb-8 pt-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8">
      <button
        type="button"
        className="z-50 hidden flex-col items-center justify-center lg:flex"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>

        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
          }`}
        />

        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />

        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
          }`}
        />
      </button>

      <div className="flex w-full items-center justify-between lg:hidden">
        <div className="flex items-center gap-10">
          <Logo />

          <nav className="flex items-center justify-center">
            {navLinks.map((link, index) => (
              <CustomLink
                key={link.href}
                href={link.href}
                title={link.title}
                className={index === 0 ? "mr-4" : "mx-4"}
              />
            ))}
          </nav>
        </div>

        <nav className="flex items-center justify-center gap-5">
          <SocialIcon href="https://github.com/Ruchitha98" label="GitHub profile" className="w-5 text-dark transition-colors duration-300 hover:text-primary dark:text-light dark:hover:text-primaryDark">
            <GithubIcon />
          </SocialIcon>

          <SocialIcon
            href="https://www.linkedin.com/in/ruchitha-18/"
            label="LinkedIn profile"
            className="w-5 text-dark transition-colors duration-300 hover:text-primary dark:text-light dark:hover:text-primaryDark"
          >
            <LinkedInIcon />
          </SocialIcon>

          
        </nav>
      </div>

      {isOpen && (
        <motion.div
          id="mobile-menu"
          className="fixed left-1/2 top-1/2 z-40 flex h-[75vh] min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-3xl border border-white/10 bg-[#111111]/95 px-8 py-20 shadow-2xl backdrop-blur-md dark:bg-light/95 sm:min-w-[90vw]"
          initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex flex-col items-center gap-8">
            <Logo />

            <nav className="flex flex-col items-center justify-center gap-5">
              {navLinks.map((link) => (
                <CustomMobileLink
                  key={link.href}
                  toggle={handleClick}
                  href={link.href}
                  title={link.title}
                  className="text-lg font-semibold"
                />
              ))}
            </nav>
          </div>

          <nav className="flex items-center justify-center gap-6">
            <SocialIcon href="https://github.com/Ruchitha98" label="GitHub profile">
              <GithubIcon />
            </SocialIcon>

            <SocialIcon
              href="https://www.linkedin.com/in/YOUR-LINKEDIN"
              label="LinkedIn profile"
            >
              <LinkedInIcon />
            </SocialIcon>

            <SocialIcon href="https://medium.com/@rssampath21" label="Medium profile">
              <MediumIcon />
            </SocialIcon>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;