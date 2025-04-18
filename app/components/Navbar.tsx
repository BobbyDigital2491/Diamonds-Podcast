/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // Corrected import
import Link from "next/link";
import Image from "next/image";

// Transition config from your example
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// MenuItem component
const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-90"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-gray-800 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

// Menu component
const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-white/20 bg-black shadow-lg flex justify-center space-x-6 px-8 py-4"
    >
      {children}
    </nav>
  );
};

// ProductItem component
const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
        <p className="text-neutral-400 text-sm max-w-[10rem]">{description}</p>
      </div>
    </Link>
  );
};

// HoveredLink component
const HoveredLink = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <Link href={""} {...rest} className="text-neutral-200 hover:text-teal-400 transition-colors">
      {children}
    </Link>
  );
};

// RAFCE Navbar Component
const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <Menu setActive={setActive}>
          <HoveredLink href="/"> Home</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Episodes">
          <div className="flex flex-col space-y-4">
            <ProductItem
              title="Latest Episode"
              description="Check out our newest release!"
              href="/episodes"
              src="https://wallpapers.com/images/hd/android-apple-xddzdvfueo0kfvj7.jpg"
            />
            <HoveredLink href="/episodes">All Episodes</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <HoveredLink href="/about">Learn More</HoveredLink>
        </MenuItem>
          <HoveredLink href="/contact">Contact Us</HoveredLink>
        
      </Menu>
    </div>
  );
};

export default Navbar;