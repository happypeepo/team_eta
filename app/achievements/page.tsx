"use client";

import { motion } from "framer-motion";
import { Medal, Trophy, Calendar, Star, ChartLineUp } from "@phosphor-icons/react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionWrapper, StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";
import achievementsData from "@/data/achievements.json";

export default function AchievementsPage() {
  const stats = achievementsData.stats;
  const awards = achievementsData.awards;

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Achievements"
          subtitle="Celebrating our milestones, awards, and recognition in Shell Eco-marathon competitions."
        />

        {/* Stats Section */}
        <MotionWrapper className="mb-20">
          <StaggerWrapper className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StaggerItem>
              <Card className="text-center hover:glow-hover transition-all">
                <CardContent className="pt-6">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stats.yearsActive}+
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5" weight="bold" />
                    <span>Years Active</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="text-center hover:glow-hover transition-all">
                <CardContent className="pt-6">
                  <Trophy className="h-8 w-8 text-amber-400 mx-auto mb-4" weight="fill" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stats.competitions}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5" weight="bold" />
                    <span>Competitions</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="text-center hover:glow-hover transition-all">
                <CardContent className="pt-6">
                  <Medal className="h-8 w-8 text-primary mx-auto mb-4" weight="fill" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stats.awards}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5" weight="bold" />
                    <span>Awards</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="text-center hover:glow-hover transition-all">
                <CardContent className="pt-6">
                  <Star className="h-8 w-8 text-amber-400 mx-auto mb-4" weight="fill" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stats.teamMembers}+
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5" weight="bold" />
                    <span>Team Members</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerWrapper>
        </MotionWrapper>

        {/* Awards Section */}
        <MotionWrapper className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Awards & Recognition
          </h2>
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full hover:glow-hover transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                          <Medal className="h-5 w-5 text-primary" weight="fill" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold mb-2 text-lg">{award.title}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{award.competition}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Calendar className="h-3 w-3 text-primary" />
                            <p className="text-xs text-primary font-medium">{award.year}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerWrapper>
        </MotionWrapper>

        {/* Milestones Section */}
        <MotionWrapper className="mb-20">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <ChartLineUp className="h-5 w-5 text-green-500" weight="fill" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  Key Milestones
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">2024 - Best Design & Innovation Awards</h4>
                    <p className="text-sm text-muted-foreground">
                      Won both Best Design Award and Innovation Award at Shell Eco-marathon Asia 2024, 
                      showcasing our engineering excellence and innovative approach.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">2023 - Top 10 Efficiency</h4>
                    <p className="text-sm text-muted-foreground">
                      Achieved Top 10 position in energy efficiency category, demonstrating our 
                      commitment to sustainable vehicle design.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">2022 - Best Newcomer Award</h4>
                    <p className="text-sm text-muted-foreground">
                      Recognized as Best Newcomer at Shell Eco-marathon Asia 2022, marking our 
                      successful entry into the competition.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </div>
  );
}

