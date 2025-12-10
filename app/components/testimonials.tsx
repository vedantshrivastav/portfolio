"use client";
import { div } from "motion/react-client";
import Marquee from "react-fast-marquee";
import { SectionHeading } from "./section-heading";

export const Testimonials = () => {
  const data = [
    {
      quote:
        "Vedant is so great with his work, our production was shut down within the first day itself. Highly recommended.",
      name: "Elon Musk",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      quote:
        "Amazing attention to detail. Vedu delivered exactly what we needed with zero revisions.",
      name: "Sundar Pichai",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      quote:
        "Working with Vedant was a delight. The project quality exceeded all expectations.",
      name: "Satya Nadella",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      quote:
        "Fast, reliable, and super professional. Would definitely collaborate again.",
      name: "Tim Cook",
      avatar:
        "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      quote:
        "Vedu consistently delivers world-class work. Easily one of the best engineers I've worked with.",
      name: "Mark Zuckerberg",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="py-10">
      <SectionHeading>People love my work</SectionHeading>
      <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] py-4">
        <Marquee speed={30} pauseOnHover={true} className="py-4">
          {data.map((item, idx) => (
            <TestimonialCards key={`testimonial-${idx}`} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};
const TestimonialCards = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="shadow-aceternity bg-gre mx-4 flex h-full w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 transition duration-300 hover:shadow-md">
      <p className="text-sm text-neutral-700">{quote}</p>
      <div className="flex items-center gap-4 pt-4">
        <img
          src={avatar}
          alt={name}
          className="size-4 rounded-full object-cover"
        />
        <p className="text-sm text-neutral-500">{name}</p>
      </div>
    </div>
  );
};
