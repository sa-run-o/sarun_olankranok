"use client";

import { skillCategories } from "@/src/lib/data/skills";

export default function Skills() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Comprehensive technical expertise across modern web development, cloud
          infrastructure, and specialized domains
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
          >
            {/* Category Header */}
            <div className="flex items-start gap-3 mb-6">
              <div className="text-4xl">{category.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
            </div>

            {/* Skills List */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                      • {skill.years} yrs
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {category.highlights && category.highlights.length > 0 && (
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {category.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
