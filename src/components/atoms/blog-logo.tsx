import Image from "next/image";
import { Link } from "./link";

export function BlogLogo() {
  return (
    <Link href="/">
      <Image src="/static/logo.svg" width={60} height="100%" alt="blog.rbjr" />
    </Link>
  );
}