import Image from "next/image";
import { Inter } from "next/font/google";
import { Container } from "../components/container";
import { Collage } from "../components/collage";
import { Timeline } from "../components/timeline";
import { Projects } from "../components/projects";
import { Heading } from "../components/heading";
import { SubHeading } from "../components/subheading";
import { projects } from "@/constants/projects";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <Heading>Projects</Heading>
        <SubHeading>
          I am a passionate software engineer dedicated to crafting elegant
          solutions for complex problems. With expertise in full-stack
          development, I enjoy building user-centric applications that make a
          difference.
        </SubHeading>
        <Projects projects={projects} />
      </Container>
    </div>
  );
}
