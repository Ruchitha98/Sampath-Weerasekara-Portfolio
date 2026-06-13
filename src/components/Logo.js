import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center"
      >
        <img
          src="/logo.png"
          alt="RS Owl Logo"
          className="w-20 h-20 object-contain"
        />
      </MotionLink>
    </div>
  );
};

export default Logo;