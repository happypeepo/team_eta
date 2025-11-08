"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Trophy, Users, Calendar, Award, Car, Target, Lightbulb, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper, StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";
import achievementsData from "@/data/achievements.json";

export default function Home() {
  const stats = achievementsData.stats;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)] animate-pulse" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Badge 
                  variant="outline" 
                  className="text-sm md:text-base px-6 py-2 border-2 border-primary/50 bg-gradient-to-r from-primary/10 via-cyan-400/10 to-primary/10 backdrop-blur-sm relative overflow-hidden group hashtag-glow"
                >
                  <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent font-bold tracking-wider">
                    #madovermiles
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-400/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                    style={{
                      width: "50%",
                      height: "100%",
                    }}
                    animate={{
                      x: ["-100%", "300%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1,
                    }}
                  />
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-xl opacity-30"
                    style={{
                      background: "radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%)",
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </Badge>
              </motion.div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              TEAM ETA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto font-serif uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Engineering Tomorrow. Driving Innovation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              An interdisciplinary student innovation team from K. J. Somaiya College of Engineering, Mumbai, 
              dedicated to developing fuel-efficient and sustainable vehicles.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="group">
                <Link href="/cars">
                  Our Prototypes
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/crowdfunding">
                  Support Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerWrapper className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StaggerItem>
              <Card className="text-center hover:glow-hover transition-all">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stats.teamMembers}
                  </div>
                  <div className="text-sm text-muted-foreground">Active Team Members</div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="text-center hover:glow-hover transition-all">
                <CardContent className="pt-6">
                  <Car className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stats.prototypes}
                  </div>
                  <div className="text-sm text-muted-foreground">Prototypes Designed</div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="text-center hover:glow-hover transition-all">
                <CardContent className="pt-6">
                  <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stats.awards}
                  </div>
                  <div className="text-sm text-muted-foreground">Awards Won</div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="text-center hover:glow-hover transition-all">
                <CardContent className="pt-6">
                  <Trophy className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stats.nationalVictories}
                  </div>
                  <div className="text-sm text-muted-foreground">National Victory</div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerWrapper>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper className="max-w-4xl mx-auto text-center">
            <Target className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              OUR VISION
            </h2>
            <Card className="hover:glow-hover transition-all">
              <CardContent className="pt-6">
                <p className="text-xl font-semibold mb-4 text-center">
                  To engineer a fuel-efficient, sustainable future through innovation and collaboration.
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  We aim to combat the global challenge of carbon emissions by reimagining the way vehicles are designed.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Team ETA represents a generation of engineers passionate about green mobility, smart design, 
                  and sustainable technology, working towards a carbon-neutral Earth.
                </p>
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Lightbulb className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                ABOUT US
              </h2>
            </div>
            <Card className="hover:glow-hover transition-all">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Established in <span className="text-primary font-semibold">2012</span> at K. J. Somaiya College of Engineering (KJSCE), Team ETA is an interdisciplinary team focused on designing and manufacturing fuel-efficient, sustainable prototype vehicles.
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Our mission is to reduce carbon emissions and promote sustainable mobility. We participate annually in the Shell Eco-marathon across Asia and are the only Indian team in KJSCE to manufacture a carbon fiber monocoque in-house.
                </p>
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </section>

      {/* Shell Eco-marathon Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper className="max-w-4xl mx-auto text-center">
            <Trophy className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Shell Eco-marathon
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              The Shell Eco-Marathon is a global competition that has been running since 1939, with events held across Asia, Europe, and America. It challenges students to design, build, and drive ultra-efficient vehicles.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Team ETA competes in the Prototype category, utilizing gasoline, battery-electric, and hydrogen fuel cell systems to push the boundaries of fuel efficiency.
            </p>
            <Button asChild size="lg">
              <Link href="/sem">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </MotionWrapper>
        </div>
      </section>

      {/* Key Achievements Preview */}
      <section className="py-20 border-t border-border bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper className="text-center mb-12">
            <Award className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              KEY ACHIEVEMENTS
            </h2>
          </MotionWrapper>
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievementsData.awards.slice(0, 6).map((award, index) => (
              <StaggerItem key={index}>
                <Card className="h-full hover:glow-hover transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={award.type === "International" ? "default" : "secondary"}>
                        {award.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{award.year}</span>
                    </div>
                    <CardTitle className="text-lg">{award.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{award.competition}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerWrapper>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/achievements">
                View All Achievements
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper className="max-w-4xl mx-auto text-center">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              OUR IMPACT
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              We are driven by innovation, collaboration, and sustainability — committed to building vehicles 
              that inspire a greener tomorrow.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{stats.teamMembers}</div>
                <div className="text-sm text-muted-foreground">Active Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{stats.prototypes}</div>
                <div className="text-sm text-muted-foreground">Prototypes Designed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{stats.awards}</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{stats.nationalVictories}</div>
                <div className="text-sm text-muted-foreground">National Victory</div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Institution Section */}
      <section className="py-20 border-t border-border bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              OUR INSTITUTION
            </h2>
            <Card className="hover:glow-hover transition-all">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">K. J. Somaiya College of Engineering (KJSCE)</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Part of the Somaiya Trust, an institution known for fostering innovation, technology, and social impact.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Team ETA proudly represents KJSCE at national and international stages of the Shell Eco-marathon.
                </p>
              </CardContent>
            </Card>
          </MotionWrapper>
        </div>
      </section>

      {/* Crowdfunding CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper className="max-w-3xl mx-auto text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              CROWDFUNDING INITIATIVE
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Let's save the future together. 🌱
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Help us in this race towards sustainability — by supporting, mentoring, or sponsoring Team ETA.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Your ideas, expertise, and contributions fuel our journey to design the most efficient and 
              eco-friendly vehicles of tomorrow.
            </p>
            <p className="text-xl font-semibold text-primary mb-8">
              🖤 Lend a helping hand. Be part of the revolution.
            </p>
            <Button asChild size="lg">
              <Link href="/crowdfunding">
                Support Team ETA
                <Heart className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
}
