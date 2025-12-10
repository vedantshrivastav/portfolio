"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { div } from "motion/react-client";

export const SubHeading = ({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
}) => {
  return (
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
        delay: 0.2,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      <Tag className={cn("text-secondary max-w-lg pt-4 text-sm md:text-sm")}>
        {children}
      </Tag>
    </motion.div>
  );
};
