"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LinkedinLogo, Envelope } from "@phosphor-icons/react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { StaggerWrapper, StaggerItem } from "@/components/MotionWrapper";
import teamData from "@/data/team.json";

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <StaggerWrapper className="flex flex-wrap justify-center gap-8">
                {department.members.map((member) => (
                  <StaggerItem key={member.id}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <Card className="h-full w-64 hover:glow-hover transition-all">
                        <CardContent className="pt-6">
                          <div className="flex flex-col items-center text-center">
                            <div className="relative w-32 h-32 rounded-full bg-secondary/50 mb-4 overflow-hidden flex items-center justify-center">
                              <span className="text-muted-foreground text-sm">Photo</span>
                            </div>
                            <div className="relative">
                              <h3 className="text-xl font-semibold relative group">
                                {member.name}
                                {member.isHead && (
                                  <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    <span className="px-2 py-0.5 bg-white dark:bg-slate-900 border border-red-500 rounded text-xs font-bold text-red-500">
                                      HEAD
                                    </span>
                                  </span>
                                )}
                              </h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                            <div className="flex justify-center gap-6 mt-4">
                              <motion.a
                                href={`mailto:${member.email}`}
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-foreground/70 hover:text-primary transition-all"
                                title="Email"
                              >
                                <Envelope className="w-5 h-5" />
                              </motion.a>
                              <motion.a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${member.name}'s LinkedIn`}
                                title="LinkedIn"
                              >
                                <LinkedinLogo className="w-5 h-5" />
                              </motion.a>
                            </div>
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

