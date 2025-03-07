"use client";
import React, { useState, JSX } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Define the type for the navItems
type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[]; // Use the NavItem type here
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Navbar is visible on page load

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true); // Ensure visibility at the top of the page
      } else {
        setVisible(direction < 0); // Show on scroll up, hide on scroll down
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex fixed top-10 left-1/2 -translate-x-1/2 border border-[#6971A229] rounded-full bg-white dark:bg-black shadow-lg z-[5000] px-6 py-3 items-center justify-center space-x-6",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className="relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 font-bold text-lg"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
