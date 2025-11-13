"use client";

import { personalInfo, socialLinks } from "@/src/lib/data/personal";

export default function Contact() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Interested in collaboration or have a project in mind? Feel free to
          reach out!
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Email Card */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              📧
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Email
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {personalInfo.email}
              </p>
            </div>
            <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
              →
            </div>
          </div>
        </a>

        {/* Phone Card */}
        <a
          href={`tel:${personalInfo.phone}`}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              📱
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Phone
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {personalInfo.phone}
              </p>
            </div>
            <div className="text-gray-400 group-hover:text-green-500 transition-colors">
              →
            </div>
          </div>
        </a>
      </div>

      {/* Social Links */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Connect With Me
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-2xl">
                {social.icon === "github" && "🐙"}
                {social.icon === "linkedin" && "💼"}
                {social.icon === "mail" && "📧"}
                {social.icon === "phone" && "📱"}
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {social.name}
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {social.icon === "mail" || social.icon === "phone"
                    ? social.value
                    : `@${social.value}`}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Location & Availability */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">📍</span>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Location
            </h4>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {personalInfo.location}
          </p>
        </div>

        <div className="bg-linear-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">✅</span>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Availability
            </h4>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {personalInfo.availability}
          </p>
        </div>
      </div>
    </div>
  );
}
