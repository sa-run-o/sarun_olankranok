"use client";

import { personalInfo, stats } from "@/src/lib/data/personal";

export function About() {
  return (
    <div className="container max-w-6xl mx-auto px-6">
      <div className="space-y-12">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Text */}
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            About Me
          </h2>

          <div className="text-lg text-muted-foreground leading-relaxed text-center">
            <p>{personalInfo.summary}</p>
          </div>
        </div>

        {/* Tech Stack Icons (Optional) */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {personalInfo.specialties?.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
