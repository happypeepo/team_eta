"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  Calendar, 
  CaretRight, 
  Leaf, 
  Lightning, 
  BatteryHigh, 
  Gauge, 
  Trophy, 
  Sparkle, 
  Users, 
  Target, 
  Clock, 
  MapPin, 
  Flag, 
  Rocket
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper, StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";

export default function ShellEcoMarathonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
          <div className="absolute inset-0 bg-[url('/images/shell-circuit-bg.jpg')] bg-cover bg-center opacity-30" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <MotionWrapper>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Shell Eco-marathon</h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-8">Thirst for Innovation</p>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
              The Shell Eco-marathon is a global competition challenging students to design, build, and test ultra-efficient vehicles that push the limits of fuel economy and sustainable innovation.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What is the Shell Eco-marathon?"
            subtitle="About the Competition"
            className="mb-12"
          />
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg mb-6">
              The Shell Eco-marathon is an annual international competition sponsored by Shell, where student teams from around the world design and build vehicles to achieve the highest possible fuel efficiency.
            </p>
            <p className="text-lg mb-8">
              Events are held across Europe, the Americas, Asia, and the Middle East, making it one of the world's leading energy efficiency programs. The competition aims to answer a single question: <em className="text-primary font-medium">"How can we go further with less?"</em>
            </p>
            
            <div className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4">Competition Categories</h3>
              <p className="mb-4">
                The competition is divided into two main vehicle types — <strong>Prototype</strong> and <strong>Urban Concept</strong> — each further subdivided by <strong>energy type</strong>:
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Badge variant="outline" className="px-4 py-2 text-base">Internal Combustion</Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">Battery Electric</Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">Hydrogen Fuel Cell</Badge>
              </div>
            </div>
          </div>

          {/* Prototype Category Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <div>
              <Badge variant="secondary" className="mb-4">VEHICLE CATEGORY</Badge>
              <h2 className="text-3xl font-bold mb-6">Prototype Category</h2>
              <p className="text-lg mb-6">
                The Prototype class represents maximum energy efficiency through innovation and lightweight design. Teams optimize aerodynamics, size, and materials to minimize energy use.
              </p>
              <p className="text-lg mb-8">
                Team ETA competes in the <strong>Prototype Gasoline</strong> and <strong>Battery-Electric</strong> subcategories.
              </p>
              <Button size="lg">
                View Our Prototypes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
              <Image
                src="/images/prototype.jpg"
                alt="Team ETA's carbon fiber monocoque prototype"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-sm text-white/90">Team ETA's carbon fiber monocoque prototype — redefining efficiency and design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Team ETA Achievements"
            subtitle="Our Journey in Shell Eco-marathon"
            className="mb-16"
          />

          <StaggerWrapper className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <StaggerItem key={index}>
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 text-amber-500" />
                      <span className="font-medium">{achievement.year}</span>
                    </div>
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {achievement.achievements.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Trophy className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerWrapper>
        </div>
      </section>

      {/* 2026 Program Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4">SHELL ECO-MARATHON 2026</Badge>
            <h2 className="text-3xl font-bold mb-6">A New Chapter in Energy Innovation</h2>
            <p className="text-lg mb-6">
              For four decades, Shell Eco-marathon has been the global stage for energy efficiency and innovation, bringing together the world's best student teams in a battle of brains, bold ideas and breakthrough engineering. At its core lies a single, powerful question: <strong>"How can we go further with less?"</strong>
            </p>
            <p className="text-lg mb-8">
              The 2026 season opens a new chapter that reflects the changing face of STEM and introduces a comprehensive competition experience. This year welcomes participants to our core competitions—the <strong>Mileage Challenge</strong>, the <strong>Off-Track Awards</strong>, and the <strong>Autonomous Driving Competition</strong>—in a refreshed format.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="outline" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Read the 2026 Official Rules, Chapter 1
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Frequently Asked Questions
                </a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {events2026.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{event.name}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-amber-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{event.location}</div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild>
                    <a href={event.link} target="_blank" rel="noopener noreferrer">
                      Learn More <CaretRight className="h-4 w-4" weight="bold" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href="https://www.shell.com/make-the-future/shell-ecomarathon.html" target="_blank" rel="noopener noreferrer">
                View Official SEM 2026 Rules
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Competition Formats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="On-Track Competitions"
            subtitle="Global Championship"
            className="mb-6"
          />
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg mb-6">
              Shell Eco-marathon's On-Track Competitions challenge student teams to push the boundaries of energy efficiency and autonomous mobility. These competitions are designed to inspire fresh thinking, technical excellence, and real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Mileage Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Teams complete laps to determine energy efficiency rankings by category, pushing the boundaries of what's possible in fuel economy.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Autonomous Driving Competition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Teams design and test self-driving prototypes to explore the future of automation in sustainable mobility solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">A cleaner energy future requires brilliant Changemakers</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Shell Eco-marathon aims to empower the next generation of energy leaders. The competition embodies the spirit of these Changemakers – their perseverance, collaboration, and innovation – and ties it to Shell's purpose of helping achieve a cleaner energy future for all.
            </p>
            <Button size="lg" className="group" asChild>
              <a href="/team" className="flex items-center">
                <span>Meet the Changemakers of Tomorrow</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const achievements = [
  {
    year: "2021",
    title: "Bonus Challenge (Virtual)",
    achievements: ["First in Asia, Regional Winners of Road to 2050 – Bonus Challenge"]
  },
  {
    year: "2021",
    title: "Virtual Technical Inspection (VTI)",
    achievements: ["First in Asia, Regional Winners"]
  },
  {
    year: "2020",
    title: "Pitch The Future (EV Battery Charging Challenge)",
    achievements: ["First in Asia, Regional Winners"]
  },
  {
    year: "2020",
    title: "Pitch The Future (CO₂ Reduction)",
    achievements: ["Top 5 Globally – Tracking & Reducing CO₂ Emissions"]
  },
  {
    year: "2019",
    title: "Mahil Prototype",
    achievements: [
      "First in India (270 km/l Gasoline)",
      "Winner of Off-Track Safety Award"
    ]
  },
  {
    year: "2017",
    title: "Triton Prototype",
    achievements: [
      "First Indian student team to manufacture a carbon fiber monocoque body",
      "Mastered Vacuum Infusion Technique for FRP manufacturing",
      "Implemented Dog Clutch Mechanism for improved coasting",
      "First Indian team to clear all technical inspections on first attempt"
    ]
  },
  {
    year: "2015",
    title: "Arya Prototype",
    achievements: ["First in India, 5th in Asia (153 km/l Gasoline)"]
  }
];

const events2026 = [
  {
    name: "Shell Eco-marathon Qatar 2026",
    type: "Mileage Challenge",
    date: "January 21–25, 2026",
    location: "Lusail International Circuit, Doha",
    link: "#"
  },
  {
    name: "Shell Eco-marathon United States 2026",
    type: "Mileage Challenge",
    icon: Lightning,
    date: "April 7–11, 2026",
    location: "Indianapolis Motor Speedway, Indiana",
    link: "#"
  },
  {
    name: "Shell Eco-marathon Poland 2026",
    type: "Mileage Challenge | Autonomous Driving",
    date: "June 24–28, 2026",
    location: "Silesia Ring, Kamień Śląski",
    link: "#"
  },
  {
    name: "Shell Eco-marathon Brazil 2026",
    type: "Mileage Challenge",
    date: "To be announced",
    location: "Details coming soon",
    link: "#"
  }
];
