"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Sparkles, Award, Star, Gem, Check } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper, StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";
import sponsorsData from "@/data/sponsors.json";

const tierColors = {
  Platinum: "from-cyan-400 to-blue-500",
  Gold: "from-yellow-400 to-orange-500",
  Silver: "from-gray-300 to-gray-500",
  Bronze: "from-amber-600 to-amber-800",
};

const sponsorshipTiers = [
  {
    name: "Platinum",
    icon: Gem,
    color: "from-cyan-400 to-blue-500",
    benefits: [
      "Logo placement on vehicle",
      "Prominent website placement",
      "Social media recognition",
      "Event invitations",
      "Team presentation opportunities",
      "Exclusive behind-the-scenes access",
    ],
    investment: "₹5,00,000+",
  },
  {
    name: "Gold",
    icon: Star,
    color: "from-yellow-400 to-orange-500",
    benefits: [
      "Logo on team apparel",
      "Website placement",
      "Social media mentions",
      "Event invitations",
      "Team presentation opportunities",
    ],
    investment: "₹2,00,000 - ₹4,99,999",
  },
  {
    name: "Silver",
    icon: Award,
    color: "from-gray-300 to-gray-500",
    benefits: [
      "Website listing",
      "Social media recognition",
      "Event invitations",
      "Team updates",
    ],
    investment: "₹1,00,000 - ₹1,99,999",
  },
  {
    name: "Bronze",
    icon: Sparkles,
    color: "from-amber-600 to-amber-800",
    benefits: [
      "Website listing",
      "Social media mention",
      "Team updates",
    ],
    investment: "₹25,000 - ₹99,999",
  },
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Sponsors"
          subtitle="We're grateful to our partners who support our mission to build sustainable vehicles."
        />

        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sponsorsData.map((sponsor) => (
            <StaggerItem key={sponsor.id}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover:glow-hover transition-all">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 bg-secondary/50 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Logo</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${tierColors[sponsor.tier as keyof typeof tierColors]} text-white mb-4`}>
                      {sponsor.tier}
                    </span>
                    <motion.a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" size="sm">
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerWrapper>

        {/* Sponsorship Tiers */}
        <MotionWrapper className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Sponsorship Tiers
          </h2>
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full flex flex-col hover:glow-hover transition-all">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center mb-4`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{tier.name}</CardTitle>
                        <CardDescription className="text-primary font-semibold">
                          {tier.investment}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-3">
                          {tier.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerWrapper>
        </MotionWrapper>

        {/* Why Sponsor Section */}
        <MotionWrapper className="mb-20">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Why Sponsor Team ETA?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Brand Visibility</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Reach a global audience through Shell Eco-marathon competitions and our digital presence.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Innovation Partnership</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Associate your brand with cutting-edge sustainable technology and engineering excellence.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Talent Pipeline</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with top engineering students from K. J. Somaiya School of Engineering.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">CSR Impact</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Support sustainability initiatives and contribute to a greener future.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>

        {/* CTA Section */}
        <MotionWrapper>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
              <p className="text-muted-foreground mb-6">
                Join us in our mission to build sustainable vehicles. Your support helps us push the boundaries of innovation 
                and represent K. J. Somaiya School of Engineering on the global stage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/contact">Contact Us</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/about">Learn More About Us</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </div>
  );
}

