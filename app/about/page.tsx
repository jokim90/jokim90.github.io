import type { Metadata } from "next";
import { site } from "@/lib/content";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
};

export default function AboutPage() {
  return <AboutContent />;
}
