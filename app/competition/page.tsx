"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar, Target, Award } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionWrapper, StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";
import achievementsData from "@/data/achievements.json";

export default function CompetitionPage() {
  const timeline = achievementsData.timeline;
  const awards = achievementsData.awards;

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Shell Eco-marathon"
          subtitle="The world's most challenging energy efficiency competition. Where innovation meets sustainability."
        />

        {/* About Shell Eco-marathon */}
        <MotionWrapper className="max-w-4xl mx-auto mb-20">
          <Card className="mb-12">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    About the Competition
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Shell Eco-marathon is a global competition that challenges student teams to design, 
                    build, and drive the most energy-efficient vehicles. Teams compete in two vehicle 
                    categories: Urban Concept and Prototype, pushing the boundaries of fuel efficiency 
                    and sustainable mobility.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The competition tests not just engineering excellence, but also innovation, 
                    teamwork, and dedication to creating a more sustainable future for transportation.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Our Goal</h4>
                      <p className="text-sm text-muted-foreground">
                        Achieve maximum energy efficiency while maintaining safety and reliability standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Trophy className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Our Approach</h4>
                      <p className="text-sm text-muted-foreground">
                        Combine cutting-edge technology with innovative design to create sustainable vehicles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>

        {/* Timeline */}
        <MotionWrapper className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cyan-400 to-primary transform md:-translate-x-1/2" />
            
            <StaggerWrapper className="space-y-12">
              {timeline.map((item, index) => (
                <StaggerItem key={index}>
                  <div className={`flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-shrink-0 w-16 md:w-1/2 flex justify-end md:justify-center">
                      <div className="relative">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg"
                        />
                        <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-20" />
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex-1 md:w-1/2"
                    >
                      <Card className="hover:glow-hover transition-all">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <CardTitle className="text-primary">{item.year}</CardTitle>
                          </div>
                          <h3 className="text-xl font-semibold">{item.event}</h3>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                    {index % 2 === 1 && <div className="hidden md:block w-1/2" />}
                  </div>
                </StaggerItem>
              ))}
            </StaggerWrapper>
          </div>
        </MotionWrapper>

        {/* Awards Section */}
        <MotionWrapper>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Our Achievements
          </h2>
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <StaggerItem key={index}>
                <Card className="hover:glow-hover transition-all h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Award className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">{award.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{award.competition}</p>
                        <p className="text-xs text-primary">{award.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerWrapper>
        </MotionWrapper>
      </div>
    </div>
  );
}

