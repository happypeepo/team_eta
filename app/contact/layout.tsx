import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Team ETA",
  description: "Get in touch with Team ETA. Have questions or want to collaborate? Contact us today.",
  keywords: ["contact Team ETA", "collaboration", "partnership", "sponsorship"],
  openGraph: {
    title: "Contact Us | Team ETA",
    description: "Get in touch with Team ETA - questions, collaborations, and partnerships",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

