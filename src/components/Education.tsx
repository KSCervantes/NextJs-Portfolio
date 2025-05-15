"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    const section = document.getElementById("education");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      id: 1,
      institution: "North Eastern Mindanao State University",
      degree: "Bachelor of Science in Computer Science",
      period: "2022 – Present",
      description: "Specialized in software development with projects in mobile apps and ML.",
      website: "https://nemsu.edu.ph",
      color: "blue",
      courses: ['Data Structures', 'Algorithms', 'Web Development', 'Mobile Development', 'Database Systems'],
      logo: "/images/Nemsu-logo.jpg"
    },
    {
      id: 2,
      institution: "Lianga National Comprehensive High School",
      degree: "Senior High School",
      period: "2016-2022",
      description: "Focus on societal issues and human conditions.",
      website: "https://web.facebook.com/304859lianganchs/?_rdc=1&_rdr#",
      color: "purple",
      logo: "/images/lnchs-logo.jpg"
    },
    {
      id: 3,
      institution: "Lianga Central Elementary School",
      degree: "Primary School",
      period: "2009-2015",
      description: "Foundational skills and early education.",
      website: "https://web.facebook.com/liangacentralelementaryschool",
      color: "green",
      logo: "/images/central-logo.jpg"
    }
  ];

  return (
    <section id="education" className="bg-white text-gray-800 px-4 py-16 max-w-4xl mx-auto relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-white rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-56 h-56 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-56 h-56 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>

      <div className={`transition-all duration-1000 delay-300 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl font-black mb-5 text-left relative">
          <span className="mr-2 bg-black bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">Education</span>
          <div className="absolute bottom-0 left-0 w-32 h-1 rounded-full transform hover:scale-x-110 transition-transform duration-300 origin-left"></div>
        </h2>

        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`backdrop-blur-md bg-white/40 rounded-2xl p-6 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start">
                <Link href={edu.website} target="_blank" rel="noopener noreferrer"
                  className="flex-shrink-0 mr-4 text-2xl bg-white w-16 h-16 flex items-center justify-center rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:rotate-12"
                  style={{ color: edu.color === 'blue' ? '#3b82f6' : edu.color === 'purple' ? '#8b5cf6' : '#10b981' }}>
                  <Image src={edu.logo} alt={`${edu.institution} logo`} className="w-full h-full object-cover" width={64} height={64} />
                </Link>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <Link href={edu.website} target="_blank" rel="noopener noreferrer"
                      className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                      {edu.institution}
                    </Link>
                    <span className="text-xs font-medium text-gray-500 sm:ml-2 bg-gray-100 px-3 py-1 rounded-full">{edu.period}</span>
                  </div>
                  <p className="text-base font-semibold mt-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {edu.degree}
                  </p>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{edu.description}</p>
                  {edu.courses && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {edu.courses.map((course, idx) => (
                        <span key={idx} className="text-xs bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-3 py-1 rounded-lg border border-gray-700/50 hover:scale-105 hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-300">
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
