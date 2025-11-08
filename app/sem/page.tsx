"use client";

import { motion } from "framer-motion";
import { Trophy, Zap, Car, Target, Award, Rocket, Fuel, Battery, Flame, ExternalLink, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionWrapper, StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";

const achievements = [
  {
    year: "2022",
    event: "Pitch The Future (Virtual Event)",
    awards: [
      "3rd in Asia — Regional Winners of Pitch the Future Challenge",
    ],
    icon: Trophy,
  },
  {
    year: "2021",
    event: "Virtual Events",
    awards: [
      "1st in Asia — Regional Winners of Road to 2050 – Bonus Challenge",
      "1st in Asia — Regional Winners of Virtual Technical Inspection",
    ],
    icon: Zap,
  },
  {
    year: "2020",
    event: "Pitch The Future (Virtual Event)",
    awards: [
      "1st in Asia — Regional Winners of Electric Vehicle Battery Charging Challenge",
      "Top 5 Worldwide — Tracking and Reducing CO₂ Emissions from Vehicles",
    ],
    icon: Battery,
  },
  {
    year: "2019",
    event: "Shell Eco-Marathon India (On Track)",
    awards: [
      "1st in India — Achieved a fuel efficiency of 270 km/l (Gasoline)",
      "Winner of Off-Track Safety Award — For exceptional safety practices and team discipline",
    ],
    icon: Award,
  },
  {
    year: "2017",
    event: "Shell Eco-Marathon Asia (Singapore)",
    awards: [
      "First Indian Team to manufacture a carbon fiber monocoque body",
      "Successfully implemented the Dog Clutch Mechanism for improved coasting",
      "Mastered the Vacuum Infusion Technique for lightweight FRP construction",
      "First team from India to pass all technical inspections in a single attempt",
    ],
    icon: Rocket,
  },
  {
    year: "2015",
    event: "Shell Eco-Marathon Asia",
    awards: [
      "Ranked 1st in India and 5th in Asia — Achieved 153 km/l fuel efficiency with Arya",
    ],
    icon: Trophy,
  },
];

export default function SEMPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Shell Eco-marathon"
          subtitle="Thirst for Innovation"
        />

        {/* Introduction Section */}
        <MotionWrapper className="max-w-4xl mx-auto mb-20">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                What is Shell Eco-marathon?
              </h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Shell Eco-marathon is one of the world's leading energy-efficiency engineering programmes for students. 
                It aims to push the boundaries of what is technically possible and inspire young people to become leading 
                scientists and engineers of future energy solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                The programme provides a platform for high school and university teams to explore every aspect of design 
                and technology, using their Science, Technology, Engineering, and Maths (STEM) skills to build their own 
                ultra-energy-efficient cars, and then take them out on the track in competition.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                The Shell Eco-marathon (SEM) is a globally recognized annual energy efficiency competition 
                organized by Shell. It challenges student teams from around the world to design, build, and 
                drive the most energy-efficient vehicles possible, redefining the limits of engineering 
                innovation and sustainable mobility.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The competition is held across Asia, Europe, and the Americas, and serves as a platform for 
                students to demonstrate creativity, teamwork, and technical excellence in tackling real-world 
                energy challenges.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="group">
                  <a 
                    href="https://www.shellecomarathon.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Learn More About Shell Eco-marathon
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>

        {/* Competition Format */}
        <MotionWrapper className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            COMPETITION FORMAT
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            The Shell Eco-marathon is divided into two main vehicle categories, each focusing on unique innovation challenges:
          </p>
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <StaggerItem>
              <Card className="h-full hover:glow-hover transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Rocket className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">1. Prototype</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A futuristic and ultra-streamlined design optimized for maximum fuel efficiency.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Teams work to minimize weight, size, and drag, creating record-breaking vehicles that push technological boundaries.
                  </p>
                  <Badge variant="secondary" className="mt-2">
                    Our Legacy (2013-2023)
                  </Badge>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full hover:glow-hover transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Car className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">2. Urban Concept</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Focuses on practical, road-ready vehicle designs that balance efficiency with real-world usability.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Features headlights, wipers, and comfort features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Designed for real-world road conditions</span>
                    </li>
                  </ul>
                  <Badge variant="default" className="mt-4 animate-pulse">
                    🚀 Team ETA's New Journey (2025+)
                  </Badge>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerWrapper>
        </MotionWrapper>

        {/* Transition Section */}
        <MotionWrapper className="mb-20">
          <Card className="max-w-4xl mx-auto border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-6">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-4 mb-6"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Rocket className="h-12 w-12 text-primary" />
                    <Badge variant="secondary" className="text-xs">Prototype</Badge>
                    <span className="text-xs text-muted-foreground">2013-2023</span>
                  </div>
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-primary"
                  >
                    <ArrowRight className="h-8 w-8" />
                  </motion.div>
                  <div className="flex flex-col items-center gap-2">
                    <Car className="h-12 w-12 text-primary animate-pulse" />
                    <Badge variant="default" className="text-xs bg-gradient-to-r from-primary to-cyan-400">
                      Urban Concept
                    </Badge>
                    <span className="text-xs text-primary font-semibold">2025+</span>
                  </div>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  A New Chapter Begins
                </h3>
                <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
                  After a decade of excellence in the Prototype category, Team ETA is stepping into a new era. 
                  This year marks our transition to the <span className="text-primary font-semibold">Urban Concept</span> category, 
                  bringing our engineering expertise to practical, road-ready vehicle designs.
                </p>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                  Building on our legacy of record-breaking fuel efficiency and innovative design, we're now 
                  applying our knowledge to create vehicles that balance efficiency with real-world usability — 
                  vehicles that could one day drive on actual roads.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <Badge variant="outline" className="px-4 py-2">
                    <Rocket className="h-3 w-3 mr-2" />
                    6 Prototypes Built
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    <Trophy className="h-3 w-3 mr-2" />
                    270 km/l Achieved
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    <Car className="h-3 w-3 mr-2" />
                    New Category
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>

        {/* Fuel Categories */}
        <MotionWrapper className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            FUEL CATEGORIES
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Teams can compete using a variety of energy sources within both categories, including:
          </p>
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <StaggerItem>
              <Card className="h-full hover:glow-hover transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Flame className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">Internal Combustion</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Gasoline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Diesel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Ethanol</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Synthetic fuels</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="h-full hover:glow-hover transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Battery className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">Electric Mobility</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Battery electric powertrains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Hydrogen fuel cell powertrains</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    These categories aim to promote innovation in cleaner energy technologies and reduction in global carbon emissions.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerWrapper>
        </MotionWrapper>

        {/* Team ETA & SEM */}
        <MotionWrapper className="mb-20">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                TEAM ETA & THE SHELL ECO-MARATHON
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Team ETA proudly represents <span className="text-primary font-semibold">K. J. Somaiya College of Engineering, Mumbai</span>, 
                in the Shell Eco-marathon Asia and virtual international editions.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Since <span className="text-primary font-semibold">2013</span>, Team ETA has consistently designed, manufactured, and tested 
                advanced prototypes that embody sustainable engineering and innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Their participation in SEM has been marked by record-breaking fuel efficiencies, technical excellence, and international 
                recognition for innovation and safety.
              </p>
            </CardContent>
          </Card>
        </MotionWrapper>

        {/* Achievements Section */}
        <MotionWrapper className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            OUR ACHIEVEMENTS AT SHELL ECO-MARATHON
          </h2>
          <StaggerWrapper className="space-y-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <StaggerItem key={index}>
                  <Card className="hover:glow-hover transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">{achievement.year}</Badge>
                          <CardTitle className="text-xl">{achievement.event}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2">
                        {achievement.awards.map((award, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <Trophy className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span>{award}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerWrapper>
        </MotionWrapper>

        {/* Legacy Section */}
        <MotionWrapper className="mb-20">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                OUR LEGACY
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Through the Shell Eco-marathon, Team ETA has:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Represented India at global energy-efficiency stages</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Inspired sustainable engineering practices among future innovators</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Consistently demonstrated excellence in vehicle design, manufacturing, and safety</span>
                </li>
              </ul>
              <blockquote className="text-xl font-semibold text-primary italic border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
                "We believe the future of transportation lies in energy-efficient, sustainable solutions — 
                and we are proud to be at the forefront of that transformation."
              </blockquote>
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </div>
  );
}
