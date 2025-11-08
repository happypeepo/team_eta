"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";
import teamData from "@/data/team.json";

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Team"
          subtitle="Meet the talented engineers and innovators driving Team ETA forward."
        />

        <div className="space-y-16">
          {teamData.departments.map((department, deptIndex) => (
            <motion.div
              key={department.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: deptIndex * 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                {department.name}
              </h2>
              <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {department.members.map((member) => (
                  <StaggerItem key={member.id}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full hover:glow-hover transition-all">
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center text-center">
                            <div className="relative w-32 h-32 rounded-full bg-secondary/50 mb-4 overflow-hidden flex items-center justify-center">
                              <span className="text-muted-foreground text-sm">Photo</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                            <motion.a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-primary hover:text-cyan-400 transition-colors"
                            >
                              <Linkedin className="h-5 w-5" />
                            </motion.a>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerWrapper>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

