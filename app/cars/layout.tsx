import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Cars | Team ETA",
  description: "Explore Team ETA's fleet of sustainable vehicles designed for Shell Eco-marathon. Innovation meets efficiency.",
  keywords: ["Team ETA cars", "sustainable vehicles", "electric vehicles", "Shell Eco-marathon vehicles"],
  openGraph: {
    title: "Our Cars | Team ETA",
    description: "Explore Team ETA's innovative sustainable vehicles",
    type: "website",
  },
};

export default function CarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

