"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function WorkExperience() {
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
    const section = document.getElementById("experience");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const experienceData = [
    {
      id: 1,
      company: "Freelance",
      position: "Full Stack Web & Mobile Developer",
      period: "2022 – Present",
      description: "Developing custom web and mobile applications for various clients using modern frameworks and technologies.",
      skills: ["NextJS", "React", "Tailwind CSS", "Flutter", "Databases", "Python",],
      website: "#",
      color: "blue",
      logo: "💻"
    },

  ];

  return (
    <section
      id="experience"
      className=" bg-white text-gray-800 px-4 py- max-w-4xl mx-auto mb-20"
    >
      <div className={`transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="text-2xl font-extrabold mb-8 text-left">
          <span className="mr-2">Work Experience</span>
        </h2>
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex items-start">
                <Link
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mr-4 text-3xl bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full"
                  style={{ color: exp.color === 'blue' ? '#3b82f6' : exp.color === 'purple' ? '#8b5cf6' : '#10b981' }}
                >
                  {exp.logo}
                </Link>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <Link
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium text-gray-900 hover:underline"
                    >
                      {exp.company}
                    </Link>
                    <span className="text-md font-medium text-gray-500 sm:ml-2 mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-md font-medium mt-1"
                    style={{ color: exp.color === 'blue' ? '#3b82f6' : exp.color === 'purple' ? '#8b5cf6' : '#10b981' }}>
                    {exp.position}
                  </p>
                  <p className="text-gray-500 text-md mt-2">{exp.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-block text-xs bg-black text-white px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}