import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Team ETA | K. J. Somaiya School of Engineering",
  description: "Learn about Team ETA, a student engineering team from K. J. Somaiya School of Engineering participating in Shell Eco-marathon.",
  keywords: ["Team ETA", "K. J. Somaiya", "engineering team", "Shell Eco-marathon", "sustainable vehicles"],
  openGraph: {
    title: "About Team ETA | K. J. Somaiya School of Engineering",
    description: "Student engineering team building sustainable vehicles for Shell Eco-marathon",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

