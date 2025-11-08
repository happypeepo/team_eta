"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Users, Lightbulb, Award, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionWrapper, StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Pushing the boundaries of sustainable vehicle technology through cutting-edge engineering solutions.",
  },
  {
    icon: Lightbulb,
    title: "Excellence",
    description: "Striving for perfection in every aspect of design, development, and competition performance.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together as a unified team to achieve common goals and overcome challenges.",
  },
  {
    icon: Rocket,
    title: "Sustainability",
    description: "Committed to building vehicles that contribute to a greener, more sustainable future.",
  },
];

const departments = [
  {
    name: "Mechanical Engineering",
    description: "Designing and optimizing vehicle chassis, aerodynamics, and mechanical systems for maximum efficiency.",
    members: 8,
  },
  {
    name: "Electrical Engineering",
    description: "Developing advanced battery systems, power electronics, and motor control systems.",
    members: 7,
  },
  {
    name: "Autonomous Systems",
    description: "Creating AI-powered autonomous driving solutions and sensor integration systems.",
    members: 5,
  },
  {
    name: "Management",
    description: "Coordinating projects, managing sponsorships, and ensuring smooth team operations.",
    members: 5,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Team ETA"
          subtitle="Representing K. J. Somaiya School of Engineering in the Shell Eco-marathon competition. Engineering tomorrow, driving innovation."
        />

        {/* Mission Section */}
        <MotionWrapper className="max-w-4xl mx-auto mb-20">
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Team ETA is a student engineering team from K. J. Somaiya School of Engineering, 
                    dedicated to designing and building ultra-efficient, sustainable vehicles for the 
                    Shell Eco-marathon competition.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We combine cutting-edge engineering with innovative design to push the boundaries 
                    of energy efficiency and sustainable mobility, inspiring the next generation of 
                    engineers and contributing to a greener future.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">K. J. Somaiya School of Engineering</h4>
                      <p className="text-sm text-muted-foreground">
                        Our home institution, providing the foundation for innovation and excellence.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Competition Excellence</h4>
                      <p className="text-sm text-muted-foreground">
                        Competing in Shell Eco-marathon to showcase our engineering capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>

        {/* Values Section */}
        <MotionWrapper className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={index}>
                  <Card className="h-full hover:glow-hover transition-all">
                    <CardContent className="pt-6 text-center">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerWrapper>
        </MotionWrapper>

        {/* Departments Section */}
        <MotionWrapper className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Our Departments
          </h2>
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <StaggerItem key={index}>
                <Card className="h-full hover:glow-hover transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl">{dept.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{dept.members} members</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{dept.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerWrapper>
        </MotionWrapper>

        {/* CTA Section */}
        <MotionWrapper className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Join Our Journey
              </h3>
              <p className="text-muted-foreground mb-6">
                Interested in learning more about our team or getting involved? 
                Explore our achievements, meet our team, or support our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/achievements">
                    View Achievements
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </div>
  );
}

