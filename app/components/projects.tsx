"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
export const Projects = () => {
  const projects = [
    {
      title: "Macbook Mockup",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
      href: "#",
      description:
        "A smooth MacBook mockup showcasing interactive scrolling animations.",
    },
    {
      title: "Macbook Mockup",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
      href: "#",
      description:
        "A clean and minimal device preview designed to display UI layouts elegantly.",
    },
    {
      title: "Instant Feedback",
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/apple-cards-carousel.png",
      href: "#",
      description:
        "A responsive card carousel that provides instant UI feedback with smooth transitions.",
    },
    {
      title: "Flight Simulator",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/background-lines.webp",
      href: "#",
      description:
        "A dynamic visual experience with animated background lines resembling a flight simulator.",
    },
  ];

  return (
    <div className="py-10">
      <p>
        I love building web apps and products that can impact millions of lives
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            className="group relative mb-20 h-72"
            key={idx}
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                height={300}
                width={300}
                alt="projectImage"
                className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                {project.title}
              </h2>
              <p className="mt-2 max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
