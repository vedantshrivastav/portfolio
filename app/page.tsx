import Image from "next/image";
import { Inter } from "next/font/google";
import { Container } from "./components/container";
import { Projects } from "./components/projects";
import { Heading } from "./components/heading";
import { SubHeading } from "./components/subheading";
import { projects } from "../constants/projects";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  //there was min-h-screen in the outer div and height-[200vh] in the container here
  return (
    <div className="flex items-start justify-start">
      <Container className="px-10 md:pt-20 md:pb-10">
        <Heading>Vedant</Heading>
        <SubHeading>
          I am a software engineer with a passion for building scalable and
          effecient system. I am currently working at some company
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} />
        <Testimonials />
      </Container>
    </div>
  );
}
