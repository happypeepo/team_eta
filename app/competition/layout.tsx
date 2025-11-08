import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shell Eco-marathon | Team ETA",
  description: "Learn about Team ETA's journey in Shell Eco-marathon, our achievements, timeline, and competition history.",
  keywords: ["Shell Eco-marathon", "competition", "sustainable vehicles", "energy efficiency", "Team ETA achievements"],
  openGraph: {
    title: "Shell Eco-marathon | Team ETA",
    description: "Team ETA's journey in Shell Eco-marathon - achievements, timeline, and competition history",
    type: "website",
  },
};

export default function CompetitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

