"use client";

import Link from "next/link";
import { Linkedin, Instagram, Twitter, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/team-eta" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/team_eta_" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:eta.engg@somaiya.edu" },
  { name: "Website", icon: Globe, href: "https://www.teameta.in" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-sans)' }}>
              Team ETA
            </h3>
            <p className="text-muted-foreground mb-2 font-serif uppercase tracking-wider" style={{ fontFamily: 'var(--font-serif)' }}>
              Engineering Tomorrow. Driving Innovation.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              K. J. Somaiya College of Engineering, Mumbai
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-2"
            >
              <Badge 
                variant="outline" 
                className="text-xs px-4 py-1 border border-primary/50 bg-gradient-to-r from-primary/10 via-cyan-400/10 to-primary/10 backdrop-blur-sm relative overflow-hidden group hashtag-glow"
              >
                <span className="relative z-10 bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent font-semibold tracking-wider">
                  #madovermiles
                </span>
              </Badge>
            </motion.div>
            <p className="text-sm text-muted-foreground">
              Designed by Team ETA
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Cars
                </Link>
              </li>
              <li>
                <Link href="/sem" className="text-muted-foreground hover:text-primary transition-colors">
                  Shell Eco-marathon
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-muted-foreground hover:text-primary transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-muted-foreground hover:text-primary transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="mb-2 font-serif uppercase tracking-wider" style={{ fontFamily: 'var(--font-serif)' }}>Team ETA — Engineering Tomorrow, Driving Innovation</p>
          <p>&copy; {new Date().getFullYear()} Team ETA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

