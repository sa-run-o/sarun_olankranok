"use client";

import { useState, useMemo } from "react";
import { getYears, getEventsByYear } from "@/src/lib/data/timeline";
import type { TimelineEvent } from "@/src/types/timeline";

export default function Experience() {
  const years = useMemo(() => getYears().reverse(), []); // Reverse to get ascending order (oldest to newest)
  const eventsByYear = useMemo(() => getEventsByYear(), []);

  // Set initial year to the most recent year
  const [selectedYear, setSelectedYear] = useState(years[0]);

  // Get events for selected year
  const currentEvents = eventsByYear[selectedYear] || [];

  // Get min and max years for slider
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  // Helper to get icon based on event type
  const getEventIcon = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "work":
        return "💼";
      case "education":
        return "🎓";
      case "certification":
        return "📜";
      case "achievement":
        return "🏆";
      case "course":
        return "📚";
      default:
        return "📍";
    }
  };

  // Helper to get color based on event type
  const getEventColor = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "work":
        return "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400";
      case "education":
        return "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400";
      case "certification":
        return "bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400";
      case "achievement":
        return "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400";
      case "course":
        return "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400";
      default:
        return "bg-gray-500/10 border-gray-500/20 text-gray-600 dark:text-gray-400";
    }
  };

  // Render event details based on type
  const renderEventDetails = (event: TimelineEvent) => {
    if (!event.details) return null;

    if (event.type === "work" && "position" in event.details) {
      return (
        <div className="space-y-4">
          {event.details.achievements &&
            event.details.achievements.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Key Achievements
                </h4>
                <ul className="space-y-1.5">
                  {event.details.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                    >
                      <span className="mr-2 mt-1.5 text-blue-500">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          {event.details.technologies &&
            event.details.technologies.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {event.details.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
        </div>
      );
    }

    if (event.type === "education" && "degree" in event.details) {
      return (
        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Degree:</span>{" "}
            {event.details.degree}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Field:</span> {event.details.field}
          </p>
          {event.details.honors && (
            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
              {event.details.honors}
            </p>
          )}
        </div>
      );
    }

    if (event.type === "certification" && "issuer" in event.details) {
      return (
        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Issuer:</span>{" "}
            {event.details.issuer}
          </p>
          {event.details.expiryDate && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Expires:</span>{" "}
              {event.details.expiryDate}
            </p>
          )}
          {event.details.skills && event.details.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {event.details.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (event.type === "achievement" && "title" in event.details) {
      return (
        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Type:</span> {event.details.type}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {event.details.description}
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <section
      id="experience"
      className="min-h-screen max-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900/50 flex flex-col"
    >
      <div className="max-w-7xl mx-auto flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Timeline & Experience
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Journey through my professional career, education, and achievements
          </p>
        </div>

        {/* Year Slider */}
        <div className="mb-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {selectedYear}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {currentEvents.length}{" "}
                {currentEvents.length === 1 ? "event" : "events"}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {minYear} - {maxYear}
              </p>
            </div>
          </div>

          {/* Slider */}
          <div className="relative">
            <input
              type="range"
              min={minYear}
              max={maxYear}
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
              style={{
                background: `linear-gradient(to right, 
                  rgb(59 130 246) 0%, 
                  rgb(59 130 246) ${
                    ((selectedYear - minYear) / (maxYear - minYear)) * 100
                  }%, 
                  rgb(229 231 235) ${
                    ((selectedYear - minYear) / (maxYear - minYear)) * 100
                  }%, 
                  rgb(229 231 235) 100%)`,
              }}
            />

            {/* Year markers */}
            <div className="flex justify-between mt-2 px-1">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`text-xs transition-colors ${
                    year === selectedYear
                      ? "text-blue-600 dark:text-blue-400 font-bold"
                      : "text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 flex-1 overflow-hidden">
          {/* Left: Event Details */}
          <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
            {currentEvents.length === 0 ? (
              <div
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center transition-all duration-500 ease-in-out"
                style={{
                  animation: `fadeInUp 0.5s ease-out both`,
                }}
              >
                <div className="text-4xl mb-3 opacity-50">📭</div>
                <p className="text-gray-500 dark:text-gray-400">
                  No events for this year
                </p>
              </div>
            ) : (
              currentEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border transition-all duration-500 ease-in-out hover:shadow-xl ${getEventColor(
                    event.type
                  )}`}
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Event Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-2 flex-1">
                      <span
                        className="text-2xl"
                        role="img"
                        aria-label={event.type}
                      >
                        {getEventIcon(event.type)}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                          {event.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {event.organization}
                        </p>
                        {event.location && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            📍 {event.location}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right ml-3">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 capitalize">
                        {event.type}
                      </span>
                      {event.current && (
                        <span className="block mt-1 text-xs text-green-600 dark:text-green-400 font-medium">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Date Range */}
                  {event.startDate && (
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      {event.startDate} {event.endDate && `- ${event.endDate}`}
                    </div>
                  )}

                  {/* Description */}
                  {event.description && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      {event.description}
                    </p>
                  )}

                  {/* Event Details */}
                  {renderEventDetails(event)}

                  {/* URL Link */}
                  {event.url && (
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-blue-600 dark:text-blue-400 hover:underline mt-3"
                    >
                      View Details
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Right: Image/Visual (Placeholder for now) */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="h-full bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-5xl mb-3">📸</div>
                <p className="text-gray-500 dark:text-gray-400 text-base font-medium">
                  Photo for {selectedYear}
                </p>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
                  Image placeholder - will be added later
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgb(59 130 246);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(59, 130, 246, 0.4);
          transition: all 0.2s ease;
        }

        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 3px 10px rgba(59, 130, 246, 0.6);
        }

        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgb(59 130 246);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(59, 130, 246, 0.4);
          transition: all 0.2s ease;
        }

        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 3px 10px rgba(59, 130, 246, 0.6);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgb(209 213 219);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgb(156 163 175);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
