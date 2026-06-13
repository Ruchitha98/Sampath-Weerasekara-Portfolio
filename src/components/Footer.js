import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 text-sm font-medium text-dark/70 dark:text-light/70">
      <Layout className="flex items-center justify-between py-8 lg:flex-col lg:gap-3 lg:py-6">
        <span>
          © {new Date().getFullYear()} Sampath Weerasekara. All rights reserved.
        </span>

        <div className="flex items-center gap-6">
          <Link
            href="/projects"
            className="transition-colors duration-300 hover:text-primary dark:hover:text-primaryDark"
          >
            Projects
          </Link>

          <Link
            href="/articles"
            className="transition-colors duration-300 hover:text-primary dark:hover:text-primaryDark"
          >
            Articles
          </Link>

          <Link
            href="/contact"
            className="transition-colors duration-300 hover:text-primary dark:hover:text-primaryDark"
          >
            Contact
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;