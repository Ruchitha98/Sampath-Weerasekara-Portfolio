import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export const HireMe2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06 }}
      className="fixed left-6 bottom-6 z-50 md:left-4 md:bottom-4"
    >
      <Link
        href="/contact"
        className="group flex items-center gap-3 rounded-full border-2 border-dark bg-primary px-5 py-3 text-sm font-bold text-dark shadow-3xl transition-all duration-300 hover:bg-dark hover:text-primary dark:border-light dark:hover:bg-light dark:hover:text-dark"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-dark opacity-75 group-hover:bg-primary" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-dark group-hover:bg-primary" />
        </span>

        Let’s Connect
      </Link>
    </motion.div>
  );
};