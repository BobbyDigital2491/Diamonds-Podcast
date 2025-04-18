"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

const Team = () => {
  const [active, setActive] = useState<(typeof teamMembers)[number] | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 flex items-center justify-center z-[100] px-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] max-h-[calc(100vh-2rem)] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="p-4">
                <Image
                  priority
                  width={500}
                  height={500}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-96 sm:rounded-lg object-contain mx-auto"
                />
              </motion.div>
              <div className="flex flex-col">
                <div className="flex items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="relative px-4 pb-6 max-h-[calc(100vh-32rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-800">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm md:text-base dark:text-neutral-400"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-4">
        {teamMembers.map((member) => (
          <motion.div
            layoutId={`card-${member.title}-${id}`}
            key={member.title}
            onClick={() => setActive(member)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${member.title}-${id}`}>
                <Image
                  width={400}
                  height={400}
                  src={member.src}
                  alt={member.title}
                  className="h-80 w-full rounded-lg object-contain"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${member.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {member.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${member.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {member.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
};

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const teamMembers = [
  {
    description: "Host",
    title: "Dizzy Spadez",
    src: "https://rslyhvvrmyezryvlmpva.supabase.co/storage/v1/object/public/images//Dizzy.jpg",
    ctaText: "Connect",
    ctaLink: "https://linkedin.com/in/robert-lawrence",
    content: () => {
      return (
        <p>
          Dizzy Spadez is the charismatic host of Diamonds are Forever, bringing captivating stories and unique insights to listeners. With years of experience in storytelling and podcasting, Dizzy has a knack for engaging audiences with his warm voice and thoughtful commentary. <br /> <br /> Based in Brooklyn NY, he leads the creative direction of the podcast, ensuring each episode resonates with fans worldwide.
        </p>
      );
    },
  },
  {
    description: "Producer",
    title: "Llama Lo3",
    src: "https://rslyhvvrmyezryvlmpva.supabase.co/storage/v1/object/public/images//Lo.jpg",
    ctaText: "Connect",
    ctaLink: "https://linkedin.com/in/robert-lawrence",
    content: () => {
      return (
        <p>
          Llama Lo3 is the talented producer behind Diamonds are Forever, ensuring every episode is polished and impactful. With a background in audio engineering and media production, D-Lo manages the technical aspects and coordinates with the team to bring the vision to life. <br /> <br /> Based in Brooklyn, he’s passionate about amplifying diverse voices through podcasting.
        </p>
      );
    },
  },
  {
    description: "Editor",
    title: "Charles Milles",
    src: "https://rslyhvvrmyezryvlmpva.supabase.co/storage/v1/object/public/images//Milles.jpg",
    ctaText: "Connect",
    ctaLink: "https://linkedin.com/in/robert-lawrence",
    content: () => {
      return (
        <p>
          Charles Milles is the skilled editor for Diamonds are Forever, crafting seamless episodes that captivate listeners. With expertise in sound design and narrative editing, Milles ensures the podcast’s pacing and quality are top-notch. <br /> <br /> Based in Brooklyn, he brings a meticulous ear to every recording session.
        </p>
      );
    },
  },
  {
    description: "Creative Director",
    title: "F.Classic",
    src: "https://rslyhvvrmyezryvlmpva.supabase.co/storage/v1/object/public/images//Bob.jpg",
    ctaText: "Connect",
    ctaLink: "https://linkedin.com/in/robert-lawrence",
    content: () => {
      return (
        <p>
          F.Classic is the creative director of Diamonds are Forever, shaping its visual and thematic identity. With a background in design and storytelling, Sofia collaborates with the team to create compelling episode art and promotional content. <br /> <br /> Based in Brooklyn NY, he infuses the podcast with a vibrant, artistic flair.
        </p>
      );
    },
  },
];

export default Team;