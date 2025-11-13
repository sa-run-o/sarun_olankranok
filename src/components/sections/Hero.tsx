"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { personalInfo } from "@/src/lib/data/personal";

export function Hero() {
  return (
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
      </div>
    </div>
  );
}
