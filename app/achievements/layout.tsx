import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements | Team ETA",
  description: "View Team ETA's awards, milestones, and achievements in Shell Eco-marathon competitions.",
  keywords: ["Team ETA achievements", "awards", "Shell Eco-marathon", "milestones", "recognition"],
  openGraph: {
    title: "Achievements | Team ETA",
    description: "Team ETA's awards, milestones, and achievements in Shell Eco-marathon",
    type: "website",
  },
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

