import { motion } from "motion/react";
export const SectionHeading = ({ children }: { children: string }) => {
  return (
    <h2 className="max-w-lg pt-4 text-sm font-normal md:text-sm">
      {children.split(" ").map((word, idx) => (
        <motion.span
          initial={{
            opacity: 0,
            filter: "blur(2px)",
            y: 5,
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
          viewport={{ once: true }}
          key={word + idx}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
};
