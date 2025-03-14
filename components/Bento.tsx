"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { IconClipboardCopy, IconTableColumn } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";

export function Bento() {
  return (
    <div>
      <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/2348/2348268.png"
          alt="avatar"
          height="100"
          width="100"
          className="h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Thinking trough how to achive the goal and what is needed.
        </p>
        <p className="border border-red-500  bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Concept
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border  flex flex-col items-center justify-center">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/1157/1157109.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Implement the concept and make it work.
        </p>
        <p className="border border-green-500 bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Code
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border  flex flex-col items-center justify-center"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/6404/6404558.png"
          alt="avatar"
          height="100"
          width="100"
          className="h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Make peer reviews and create auto tests.
        </p>
        <p className="border border-orange-500 bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Review & Test
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const email = "maxiboy44yt@gmail.com";
    const textarea = document.createElement("textarea");
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2 justify-center items-center"
    >
      <button
        onClick={copyEmail}
        className="px-6 py-6 mt-4 bg-gray-800 text-white rounded-full relative overflow-hidden border-2"
        data-umami-event="Copy Email"
      >
        <span className="relative z-10">
          {copied ? "Email Copied!" : "Copy Email Address"}
        </span>

        <style jsx>{`
          @keyframes border-spin {
            0% {
              border-color: rgba(147, 112, 219, 1); /* Light purple */
            }
            25% {
              border-color: rgba(85, 45, 108, 1); /* Medium purple */
            }
            50% {
              border-color: rgba(48, 25, 52, 1); /* Darker, deeper purple */
            }
            75% {
              border-color: rgba(85, 45, 108, 1); /* Medium purple */
            }
            100% {
              border-color: rgba(147, 112, 219, 1); /* Light purple */
            }
          }

          button {
            position: relative;
            animation: border-spin 3s linear infinite;
            background-color: #000319;
            color: white;
            border-radius: 9999px;
            padding: 20px;
            font-size: 16px;
          }
        `}</style>
      </button>
    </motion.div>
  );
};

const items = [
  {
    title: "Workflow",
    description: (
      <span className="text-sm">
        Max dont forget to add thre some marketing text so it looks like you
        have something to say.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Contact",
    description: (
      <span className="text-sm">
        Do you want to work together, simply email me ❤️
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
];
