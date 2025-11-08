import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Team ETA | Crowdfunding | Team ETA",
  description: "Support Team ETA for Shell Eco-marathon 2025. Help us build sustainable vehicles and drive innovation. Donate now!",
  keywords: ["crowdfunding", "donate", "support Team ETA", "Shell Eco-marathon 2025", "sustainable vehicles"],
  openGraph: {
    title: "Support Team ETA | Crowdfunding",
    description: "Help Team ETA compete in Shell Eco-marathon 2025. Your support drives innovation.",
    type: "website",
  },
};

export default function CrowdfundingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

