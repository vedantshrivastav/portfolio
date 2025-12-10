"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Project } from "@/constants/projects";
import { SectionHeading } from "./section-heading";
export const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="py-10">
      <SectionHeading>A lifetime of projects</SectionHeading>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
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
