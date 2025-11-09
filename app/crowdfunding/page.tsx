"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CurrencyInr, ShareNetwork, InstagramLogo, LinkedinLogo, TwitterLogo, CreditCard, DeviceMobile } from "@phosphor-icons/react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MotionWrapper, StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";

const goalAmount = 500000; // ₹5,00,000
const raisedAmount = 0; // ₹0
const progressPercentage = (raisedAmount / goalAmount) * 100;

const donationTiers = [
  {
    amount: 500,
    title: "Supporter",
    description: "Help us get one step closer to our goal",
    benefits: [],
  },
  {
    amount: 1000,
    title: "Contributor",
    description: "Make a meaningful impact on our journey",
    benefits: [],
  },
  {
    amount: 5000,
    title: "Partner",
    description: "Become a key supporter of Team ETA",
    benefits: [],
  },
  {
    amount: 10000,
    title: "Patron",
    description: "Become a key supporter of Team ETA",
    benefits: [],
  },
];

export default function CrowdfundingPage() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  const handleDonate = (amount: number) => {
    // Placeholder for payment integration (UPI/Razorpay/PayPal)
    alert(`Redirecting to payment for ₹${amount.toLocaleString('en-IN')}`);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = "Support Team ETA for Shell Eco-marathon 2025! Help us build sustainable vehicles and drive innovation.";

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Support Team ETA for Shell Eco-Marathon 2025."
          subtitle="Your contribution will fuel our journey to design and build the most efficient and eco-friendly vehicles of tomorrow."
        />

        {/* Purpose Statement */}
        <MotionWrapper className="max-w-3xl mx-auto mb-20">
          <Card>
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Why We Need Your Support
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Competing in Shell Eco-marathon requires significant resources for vehicle development, 
                testing, travel, and competition expenses. Your contribution helps us:
              </p>
              <ul className="text-left max-w-xl mx-auto space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Develop and test cutting-edge vehicle prototypes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Purchase high-quality materials and components</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Cover travel and accommodation for the competition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Invest in advanced testing equipment and tools</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </MotionWrapper>

        {/* Progress Bar */}
        <MotionWrapper className="max-w-3xl mx-auto mb-20">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Raised</span>
                  <span className="text-sm font-medium">Goal</span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">
                    ₹{raisedAmount.toLocaleString('en-IN')}
                  </span>
                  <span className="text-muted-foreground">
                    / ₹{goalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <Progress value={progressPercentage} className="h-4" />
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  {progressPercentage.toFixed(1)}% of goal reached
                </p>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>

        {/* Donation Tiers */}
        <MotionWrapper className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Choose Your Support Level
          </h2>
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {donationTiers.map((tier, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`h-full flex flex-col hover:glow-hover transition-all ${
                    selectedTier === index ? 'ring-2 ring-primary' : ''
                  }`}>
                    <CardHeader>
                      <div className="flex items-baseline gap-2 mb-2">
                        <CurrencyInr className="h-4 w-4" weight="bold" />
                        <CardTitle className="text-3xl">{tier.amount.toLocaleString('en-IN')}</CardTitle>
                      </div>
                      <CardTitle className="text-xl">{tier.title}</CardTitle>
                      <CardDescription>{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2 mb-6">
                        {tier.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full"
                        onClick={() => handleDonate(tier.amount)}
                        onMouseEnter={() => setSelectedTier(index)}
                        onMouseLeave={() => setSelectedTier(null)}
                      >
                        Donate ₹{tier.amount.toLocaleString('en-IN')}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerWrapper>
        </MotionWrapper>

        {/* Payment Options */}
        <MotionWrapper className="max-w-2xl mx-auto mb-20">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-6 text-center">Payment Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4">
                  <DeviceMobile className="h-5 w-5" weight="fill" />
                  <span>UPI</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4">
                  <CreditCard className="h-5 w-5" weight="fill" />
                  <span>Razorpay</span>
                </Button>
                <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4">
                  <CreditCard className="h-5 w-5" weight="fill" />
                  <span>PayPal</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>

        {/* Social Share */}
        <MotionWrapper className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                <ShareNetwork className="h-4 w-4" weight="bold" />
                Share Our Campaign
              </h3>
              <p className="text-muted-foreground mb-6">
                Help us reach more supporters by sharing our campaign
              </p>
              <div className="flex justify-center gap-4">
                <motion.a
                  href={`https://www.instagram.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-shadow"
                >
                  <InstagramLogo className="h-5 w-5" weight="fill" />
                </motion.a>
                <motion.a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-blue-600 text-white hover:shadow-lg transition-shadow"
                >
                  <LinkedinLogo className="h-5 w-5" weight="fill" />
                </motion.a>
                <motion.a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-black text-white hover:shadow-lg transition-shadow"
                >
                  <TwitterLogo className="h-5 w-5" weight="fill" />
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </div>
  );
}

