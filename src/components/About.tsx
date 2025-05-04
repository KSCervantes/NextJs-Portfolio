"use client";
import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

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
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const information = {
    name: "Kyle Cervantes",
    role: "Web & Mobile Developer",
    address: "Lianga, Surigao del Sur",
    email: "kylecervantes2003@gmail.com",
    phone: "+639692091713",
    freelance: "Available",
    age: "21 Years",
    nationality: "Filipino",
    languages: ["Filipino", "English"],
  };

  const skills = [
    { name: "Python", category: "" },
    { name: "React", category: "" },
    { name: "Next.js", category: "" },
    { name: "JavaScript", category: "" },
    { name: "HTML", category: "" },
    { name: "PHP", category: "" },
    { name: "Flutter", category: "" },
    { name: "Tailwind CSS", category: "" },
    { name: "MySQL", category: "" },
    { name: "Firebase", category: "" },
    { name: "Supabase", category: "" },
  ];

  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="about"
      className="bg-white text-gray-800 px-4 py-0 max-w-4xl mx-auto"
    >
      <div
        className={`transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-2xl font-extrabold mb-0 text-left">
          <span className="mr-2">About Me</span>
        </h2>

        {/* Code Block - Updated to show address and freelance status */}
        <div className="bg-gray-50 rounded-lg mb-8 overflow-hidden border border-gray-200 shadow-sm">
          <div className="flex items-center bg-gray-100 px-4 py-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="ml-4 text-black text-sm">profile.js</span>
          </div>
          <div className="p-4 text-gray-700 font-mono text-md">
            <div>const information = {"{"}</div>
            <div className="ml-4">
              <span className="text-blue-500">name</span>: "{information.name}",
            </div>
            <div className="ml-4">
              <span className="text-blue-500">role</span>: "{information.role}",
            </div>
            <div className="ml-4">
              <span className="text-blue-500">address</span>: "{information.address}",
            </div>
            <div className="ml-4">
              <span className="text-blue-500">freelance</span>: "{information.freelance}",
            </div>
            <div className="ml-4">
              <span className="text-blue-500">age</span>: "{information.age}",
            </div>
            <div className="ml-4">
              <span className="text-blue-500">nationality</span>: "{information.nationality}",
            </div>
            <div className="ml-4">
              <span className="text-blue-500">languages</span>: [
              {information.languages.map((lang, i) => (
                <span key={i}>
                  "{lang}"{i < information.languages.length - 1 && ", "}
                </span>
              ))}
              ],
            </div>
            <div className="ml-4">
              <span className="text-blue-500">phone</span>: "{information.phone}",
            </div>
            <div>{"};"}</div>
          </div>
        </div>

        {/* Soft Skills - Updated to light theme */}
        <div className="bg-gray-50 rounded-lg mb-8 p-4 border border-gray-200 shadow-sm">
          <h3 className="text-black font-bold mb-6 flex items-center">
            <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            SOFT SKILLS
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-2 border-blue-100"></div>
                <div
                  className="absolute inset-0 rounded-full border-2 border-blue-500"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)",
                    transform: "rotate(-90deg)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-xs">
                  60%
                </div>
              </div>
              <span className="mt-2 text-sm">Leadership</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-2 border-blue-100"></div>
                <div
                  className="absolute inset-0 rounded-full border-2 border-blue-500"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)",
                    transform: "rotate(-90deg)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-xs">
                  75%
                </div>
              </div>
              <span className="mt-2 text-sm">Teamwork</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-2 border-purple-100"></div>
                <div
                  className="absolute inset-0 rounded-full border-2 border-purple-500"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)",
                    transform: "rotate(-90deg)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-xs">
                  75%
                </div>
              </div>
              <span className="mt-2 text-sm">Communication</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
                <div
                  className="absolute inset-0 rounded-full border-2 border-gray-500"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 50% 0%, 100% 0%, 100% 70%, 50% 70%)",
                    transform: "rotate(-90deg)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-xs">
                  85%
                </div>
              </div>
              <span className="mt-2 text-sm">Problem Solving</span>
            </div>
          </div>
        </div>

        {/* Technical Expertise - Updated to light theme */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
          <h3 className="text-black font-bold mb-6 flex items-center">
            <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            TECHNICAL EXPERTISE
          </h3>

          <div className="flex flex-wrap gap-2">
            {filteredSkills.map((skill, index) => {
              return (
                <span
                  key={index}
                  className="bg-gray-950 text-white px-3 py-1 rounded-full text-sm border border-black transition-transform duration-200"
                >
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}