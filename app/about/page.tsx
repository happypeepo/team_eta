"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Users, Lightbulb, Trophy, Rocket, Car, Globe, Student, Medal } from "@phosphor-icons/react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionWrapper, StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const values = [
  {
    icon: Rocket,
    title: "Our Vision",
    description: "To engineer a fuel-efficient, sustainable future through innovation, collaboration, and eco-conscious design — driving the world toward a carbon-neutral tomorrow.",
  },
  {
    icon: Lightbulb,
    title: "Our Mission",
    description: "To create practical, sustainable solutions to today's mobility challenges by pushing the boundaries of automotive innovation and clean technology.",
  },
  {
    icon: Trophy,
    title: "Our Achievements",
    description: "Multiple awards including 1st in India (2019), 3rd in Asia (2022), and recognition for innovation in sustainable mobility.",
  },
  {
    icon: Users,
    title: "Our Prototypes",
    description: "Six high-efficiency vehicles built, featuring innovations like in-house carbon fiber monocoque and advanced aerodynamics.",
  },
];

const departments = [
  {
    name: "Mechanical Engineering",
    description: "Designing and optimizing vehicle chassis, aerodynamics, and mechanical systems for maximum efficiency. Key to our in-house carbon fiber monocoque development.",
    members: 12,
  },
  {
    name: "Electrical & Electronics",
    description: "Developing advanced battery systems, power electronics, and motor control systems. Pioneering our custom telemetry and performance monitoring.",
    members: 10,
  },
  {
    name: "Autonomous Systems",
    description: "Creating AI-powered autonomous driving solutions and sensor integration systems. Driving our shift toward autonomous vehicle technology.",
    members: 6,
  },
  {
    name: "Management",
    description: "Coordinating projects, managing sponsorships, and ensuring smooth team operations.",
    members: 5,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28">
      <SectionHeader
        title="About Team ETA"
        subtitle="Official Supermileage Team of K. J. Somaiya School of Engineering, Mumbai"
      />
      
      {/* Team Introduction */}
      <section className="py-12 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <GraduationCap className="h-5 w-5 mr-2" weight="fill" />
              <span>Proudly Representing K. J. Somaiya School of Engineering</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Journey Since 2013</h2>
            <p className="text-lg text-muted-foreground mb-8">
              What began as a small initiative by engineering students has evolved into one of India's leading collegiate research and design teams. 
              Team ETA integrates Mechanical, Electrical, Software, and Management disciplines to create groundbreaking prototypes and drive real-world change.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-background p-6 rounded-lg border">
                <div className="text-4xl font-bold text-primary mb-2">6+</div>
                <div className="text-muted-foreground">Prototypes Built</div>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <div className="text-4xl font-bold text-primary mb-2">40+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  Team ETA is a student engineering team from K. J. Somaiya College of Engineering, 
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
                  <Student className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">K. J. Somaiya School of Engineering</h4>
                    <p className="text-sm text-muted-foreground">
                      Our home institution, providing the foundation for innovation and excellence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Medal className="h-6 w-6 text-primary mt-1 flex-shrink-0" weight="fill" />
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

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-background p-6 rounded-lg border">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Excellence */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Engineering Excellence</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge innovations and technical achievements that power our success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center">
                  <Car className="h-5 w-5 text-primary mr-2" weight="fill" />
                  <CardTitle className="text-lg">Advanced Aerodynamics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimized body design with CFD analysis to achieve minimal drag coefficient and maximum energy efficiency.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center">
                  <Lightbulb className="h-5 w-5 text-primary mr-2" weight="fill" />
                  <CardTitle className="text-lg">Smart Energy Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Custom battery management system with real-time monitoring and optimization for peak performance.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center">
                  <Rocket className="h-5 w-5 text-primary mr-2" weight="fill" />
                  <CardTitle className="text-lg">Innovative Propulsion</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  High-efficiency electric drivetrain with regenerative braking system to maximize range and performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Rocket className="h-5 w-5 mr-2" />
            <span>Be Part of Our Journey</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">Join Team ETA</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in contributing to the future of sustainable mobility?
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Engineering Excellence</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our interdisciplinary approach combines multiple engineering disciplines to create innovative, efficient, and sustainable vehicle solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <StaggerItem key={index}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{dept.members} members</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{dept.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
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
      </section>
    </div>
  );
}

