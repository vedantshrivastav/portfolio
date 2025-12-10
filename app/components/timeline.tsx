"use client";
import { cn } from "@/lib/utils";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion, useInView } from "motion/react";
import { div } from "motion/react-client";
import { useRef } from "react";

type Data = {
  title: string;
  content: {
    title: string;
    description?: string;
  }[];
};
export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const data: Data[] = [
    {
      title: "2025",
      content: [
        {
          title: "Reached $20k MRR with my VScode fork",
          description:
            "Reached the raven milestones of $20k MRR with my VScode fork",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Launched my first developer SaaS",
          description:
            "Released a lightweight code analytics tool that grew to 5k users organically.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Built my first profitable side-project",
          description:
            "Created a Chrome extension that hit $2k/mo within four months.",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Transitioned into full-time software development",
          description:
            "Left my non-tech job and fully moved into engineering with React + Node.",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "Started my journey into programming",
          description:
            "Wrote my first line of JavaScript and built small UI clones for practice.",
        },
      ],
    },
    {
      title: "2020",
      content: [
        {
          title: "Published my first open-source project",
          description:
            "Released a simple utility library that unexpectedly got 50+ stars.",
        },
      ],
    },
  ];

  return (
    <div ref={ref} className="py-10">
      {data.map((year, idx) => (
        <div className="mb-4" key={year.title}>
          <motion.h2
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * idx,
            }}
            className="shadow-aceternity mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-black"
          >
            {year.title}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {year.content.map((item, idx) => (
              <div className="pl-4" key={item.title}>
                <div className="flex items-center gap-2">
                  <Step idx={idx} isInView={isInView} />
                  <motion.h3
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2 * idx,
                    }}
                    className="text-neutral-600"
                  >
                    {item.title}
                  </motion.h3>
                </div>
                {item.description && (
                  <motion.p
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.3 * idx,
                    }}
                    className="pt-1 pl-6 text-sm text-neutral-400"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({
  children,
  className,
  isInView,
  idx,
}: {
  children?: React.ReactNode;
  className?: string;
  isInView?: boolean;
  idx: number;
}) => {
  return (
    <motion.div
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * idx,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-0.7 h-4 w-4 text-neutral-500" />
    </motion.div>
  );
};
