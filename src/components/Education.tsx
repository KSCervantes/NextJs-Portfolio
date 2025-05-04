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
    <section id="education" className="bg-white text-gray-800 px-4 py-16 max-w-4xl mx-auto">
      <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-2xl font-extrabold mb-4 text-left">Education</h2>
        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`bg-white rounded-lg p-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start">
                <Link href={edu.website} target="_blank" rel="noopener noreferrer"
                  className="flex-shrink-0 mr-3 text-3xl bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full overflow-hidden"
                  style={{ color: edu.color === 'blue' ? '#3b82f6' : edu.color === 'purple' ? '#8b5cf6' : '#10b981' }}>
                  <Image src={edu.logo} alt={`${edu.institution} logo`} className="w-full h-full object-cover" width={40} height={40} />
                </Link>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <Link href={edu.website} target="_blank" rel="noopener noreferrer"
                      className="text-md font-medium text-gray-900 hover:underline">
                      {edu.institution}
                    </Link>
                    <span className="text-xs font-medium text-gray-500 sm:ml-2">{edu.period}</span>
                  </div>
                  <p className="text-sm font-medium mt-0"
                    style={{ color: edu.color === 'blue' ? '#3b82f6' : edu.color === 'purple' ? '#8b5cf6' : '#10b981' }}>
                    {edu.degree}
                  </p>
                  <p className="text-gray-500 text-xs mt-0">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
