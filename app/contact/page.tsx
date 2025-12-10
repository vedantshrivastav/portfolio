import Image from "next/image";
import { Inter } from "next/font/google";
import { Container } from "../components/container";
import { Projects } from "../components/projects";
import { Heading } from "../components/heading";
import { SubHeading } from "../components/subheading";
import { ContactForm } from "../components/Contact-form";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <Heading>Contact Me</Heading>
        <SubHeading>
          I am open to freelancing offers. Reach out to me to enquire more about
          my work.
        </SubHeading>
        <ContactForm />
      </Container>
    </div>
  );
}
