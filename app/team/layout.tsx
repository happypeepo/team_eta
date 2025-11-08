import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Team ETA",
  description: "Meet the talented engineers and innovators driving Team ETA forward. Mechanical, Electrical, Autonomous, and Management teams.",
  keywords: ["Team ETA members", "engineering team", "mechanical engineers", "electrical engineers"],
  openGraph: {
    title: "Our Team | Team ETA",
    description: "Meet the talented engineers and innovators of Team ETA",
    type: "website",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

