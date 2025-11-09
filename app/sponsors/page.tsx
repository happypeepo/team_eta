"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowSquareOut, Sparkle, Star, Diamond, Check, CheckCircle, Medal as Award } from "@phosphor-icons/react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper, StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";
import sponsorsData from "@/data/sponsors.json";

const tierColors = {
  "Title Sponsors": "from-purple-500 to-indigo-600",
  "Gold Sponsors": "from-yellow-400 to-orange-500",
  "Silver Sponsors": "from-gray-300 to-gray-500",
  "Bronze Sponsors": "from-amber-600 to-amber-800",
  "Partners": "from-blue-400 to-cyan-500",
};

const sponsorshipTiers = [
  {
    name: "Title",
    icon: Diamond,
    color: "from-purple-500 to-indigo-600",
    benefits: [
      "Local & International Event Invites",
      "200×200 px logo on Website",
      "160×160 px logo on Homepage",
      "3\"×3\" logo on printed materials",
      "500×300 px logo on Instagram",
      "6\"×6\" logo on team shirts",
      "Logo on team luggage",
      "8\"×8\" logo on driver's suit",
      "Choose driver's suit color",
      "20\"×20\" logo on standees",
      "7\"×7\" logo on competition car"
    ],
  },
  {
    name: "Gold",
    icon: Star,
    color: "from-yellow-400 to-orange-500",
    benefits: [
      "Local Event Invites",
      "200×200 px logo on Website",
      "100×100 px logo on Homepage",
      "3\"×3\" logo on printed materials",
      "Instagram acknowledgement",
      "4\"×4\" logo on team shirts",
      "Logo on team luggage",
      "10\"×10\" logo on standees",
      "5\"×5\" logo on competition car"
    ],
  },
  {
    name: "Silver",
    icon: Award,
    color: "from-gray-300 to-gray-500",
    benefits: [
      "Local Event Invites",
      "100×100 px logo on Website",
      "3\"×3\" logo on printed materials",
      "Instagram acknowledgement",
      "3\"×3\" logo on team shirts",
      "5\"×5\" logo on standees",
      "3\"×3\" logo on competition car"
    ],
  },
  {
    name: "Bronze",
    icon: Sparkle,
    color: "from-amber-600 to-amber-800",
    benefits: [
      "Local Event Invites",
      "100×100 px logo on Website",
      "3\"×3\" logo on printed materials",
      "Instagram acknowledgement",
      "2\"×2\" logo on team shirts",
      "3\"×3\" logo on standees",
      "2\"×2\" logo on competition car"
    ],
  },
];

const getTierColor = (tierName: string): string => {
  switch (tierName) {
    case "Title":
      return "text-purple-500";
    case "Gold":
      return "text-yellow-400";
    case "Silver":
      return "text-gray-300";
    case "Bronze":
      return "text-amber-600";
    default:
      return "text-gray-500";
  }
};

export default function SponsorsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Sponsors"
          subtitle="We're grateful to our partners who support our mission to build sustainable vehicles."
        />

        {sponsorsData.map((tierGroup) => (
          <div key={tierGroup.tier} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">{tierGroup.tier}</h2>
            <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {tierGroup.sponsors.map((sponsor, index) => (
                <StaggerItem key={`${tierGroup.tier}-${index}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full hover:glow-hover transition-all">
                      <CardContent className="pt-6 flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 bg-secondary/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                          {sponsor.logo ? (
                            <Image
                              src={sponsor.logo}
                              alt={sponsor.name}
                              width={128}
                              height={128}
                              className="object-contain p-2"
                            />
                          ) : (
                            <span className="text-muted-foreground text-sm">Logo</span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${tierColors[tierGroup.tier as keyof typeof tierColors] || 'from-gray-500 to-gray-700'} text-white mb-4`}>
                          {tierGroup.tier}
                        </span>
                        {sponsor.website && sponsor.website !== '#' && (
                          <motion.a
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button variant="outline" size="sm">
                              Visit Website
                              <ArrowSquareOut className="h-4 w-4 ml-1" weight="bold" />
                            </Button>
                          </motion.a>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerWrapper>
          </div>
        ))}

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
                          <Icon className="w-5 h-5 mr-2" weight="fill" />
                        </div>
                        <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex-1 space-y-2 max-h-60 overflow-y-auto pr-2">
                          {tier.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start p-2 hover:bg-secondary/30 rounded-md transition-colors">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" weight="fill" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
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

