import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Sponsors | Team ETA",
  description: "Meet our sponsors who support Team ETA's mission to build sustainable vehicles. Become a sponsor today!",
  keywords: ["Team ETA sponsors", "sponsorship", "partners", "support sustainable vehicles"],
  openGraph: {
    title: "Our Sponsors | Team ETA",
    description: "Meet Team ETA's sponsors and partners",
    type: "website",
  },
};

export default function SponsorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

