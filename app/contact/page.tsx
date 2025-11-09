"use client";

import { ContactInfo } from "@/components/contact/ContactInfo";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";

export default function ContactPage() {
  return (
    <MotionWrapper className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Get in Touch"
          subtitle="We'd love to hear from you"
          description="Have questions about our team, projects, or want to collaborate? Reach out to us using the contact information below."
          className="text-center max-w-3xl mx-auto mb-12"
        />
        <ContactInfo />
      </div>
    </MotionWrapper>
  );
}
