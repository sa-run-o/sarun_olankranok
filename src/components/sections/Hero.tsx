"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Download, Mail, Github, Linkedin, Phone } from "lucide-react";
import { personalInfo, socialLinks } from "@/src/lib/data/personal";
import { useState } from "react";

export function Hero() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  return (
    <TooltipProvider>
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              {personalInfo.fullName}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {personalInfo.jobTitle}
            </p>
            <p className="text-lg text-muted-foreground">
              {personalInfo.yearsOfExperience} Years • {personalInfo.location}
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href={personalInfo.resumeUrl} download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-6">
            {socialLinks.map((social) => {
              const Icon =
                social.icon === "github"
                  ? Github
                  : social.icon === "linkedin"
                  ? Linkedin
                  : social.icon === "phone"
                  ? Phone
                  : Mail;

              const isCopyable =
                social.icon === "mail" || social.icon === "phone";

              const handleClick = async (e: React.MouseEvent) => {
                if (isCopyable && social.value) {
                  e.preventDefault();
                  try {
                    await navigator.clipboard.writeText(social.value);
                    setCopiedId(social.name);
                    setTimeout(() => setCopiedId(null), 2000);
                  } catch (err) {
                    console.error("Failed to copy:", err);
                  }
                }
              };

              const isCopied = copiedId === social.name;

              return (
                <Tooltip
                  key={social.name}
                  open={isCopied ? true : undefined}
                  delayDuration={0}
                >
                  <TooltipTrigger asChild>
                    <a
                      href={social.url}
                      target={isCopyable ? undefined : "_blank"}
                      rel={isCopyable ? undefined : "noopener noreferrer"}
                      onClick={handleClick}
                      className="flex items-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer w-fit"
                      aria-label={social.name}
                    >
                      <Icon className="h-6 w-6 mr-2" />
                      <span>{social.value}</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {isCopied
                        ? "Copied!"
                        : isCopyable
                        ? `Click to copy`
                        : `Open ${social.name}`}
                    </p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
