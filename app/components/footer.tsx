import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { Container } from "./container";

export const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-neutral-100 px-6 py-3">
      <p className="text-xs text-neutral-500">
        Built with love by Vedant Shrivastav
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link href="">
          <IconBrandX className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="">
          <IconBrandLinkedin className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="">
          <IconBrandGithub className="h-4 w-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
};
