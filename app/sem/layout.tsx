import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shell Eco-marathon | Team ETA",
  description: "Learn about Team ETA's participation in Shell Eco-marathon, the world's most challenging energy efficiency competition.",
  keywords: ["Shell Eco-marathon", "competition", "sustainable vehicles", "energy efficiency", "Team ETA"],
  openGraph: {
    title: "Shell Eco-marathon | Team ETA",
    description: "Team ETA's journey in Shell Eco-marathon - the world's most challenging energy efficiency competition",
    type: "website",
  },
};

export default function SEMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

