"use client";

import { useState } from "react";
import { projects } from "@/src/lib/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  // Get unique categories
  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  // Filter projects
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const featuredProjects = filteredProjects.filter((p) => p.featured);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Selected Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A curated selection of my most impactful projects in full-stack
          development, Google Maps Platform integration, and AI-powered
          solutions
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            }`}
          >
            {cat === "all" ? "All Projects" : cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
          >
            {/* Thumbnail */}
            <div className="relative h-48 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                  {project.category === "Full Stack" && "💻"}
                  {project.category === "AI/Chatbot" && "🤖"}
                  {project.category === "Automation" && "⚙️"}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Category & Year */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                  {project.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              {/* Tagline */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {project.tagline}
              </p>

              {/* Tech Stack Preview */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.frontend.core
                  .slice(0, 3)
                  .map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                {project.techStack.frontend.core.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded">
                    +{project.techStack.frontend.core.length - 3} more
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Team Size
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {project.teamSize}{" "}
                    {project.teamSize === 1 ? "person" : "people"}
                  </p>
                </div>
                {project.duration && (
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Duration
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {project.duration}
                    </p>
                  </div>
                )}
              </div>

              {/* Impact Preview */}
              {project.impact?.users && (
                <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                    📊 {project.impact.users}
                  </p>
                </div>
              )}

              {/* Links */}
              <div className="flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors text-center"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-colors text-center"
                  >
                    GitHub
                  </a>
                )}
                {!project.demoUrl && !project.githubUrl && (
                  <button className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    View Details
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {featuredProjects.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4 opacity-50">🔍</div>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No projects found in this category
          </p>
        </div>
      )}
    </div>
  );
}
