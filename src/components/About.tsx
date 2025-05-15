"use client";
import { useState, useEffect } from "react";
import { FaPython, FaReact, FaJs, FaHtml5, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiTailwindcss, SiMysql, SiFirebase, SiSupabase } from "react-icons/si";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab,] = useState("All");

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
    { name: "Python", icon: <FaPython />, category: "" },
    { name: "React", icon: <FaReact />, category: "" },
    { name: "Next.js", icon: <SiNextdotjs />, category: "" },
    { name: "JavaScript", icon: <FaJs />, category: "" },
    { name: "HTML", icon: <FaHtml5 />, category: "" },
    { name: "PHP", icon: <FaPhp />, category: "" },
    { name: "Flutter", icon: <SiFlutter />, category: "" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "" },
    { name: "MySQL", icon: <SiMysql />, category: "" },
    { name: "Firebase", icon: <SiFirebase />, category: "" },
    { name: "Supabase", icon: <SiSupabase />, category: "" },
  ];

  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="about"
      className="bg-white text-gray-800 px-4 py-24 max-w-4xl mx-auto relative overflow-hidden"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>

      <div
        className={`transition-all duration-1000 delay-300 relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <h2 className="text-3xl font-black mb-5 text-left relative">
          <span className="mr-2 bg-black bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">About Me</span>
          <div className="absolute bottom-0 left-0 w-40 h-1.5 rounded-full transform hover:scale-x-110 transition-transform duration-300 origin-left"></div>
        </h2>

        {/* Code Block - Enhanced with 3D effect */}
        <div className="backdrop-blur-md bg-white/40 rounded-3xl mb-20 overflow-hidden border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
          <div className="flex items-center bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 px-8 py-5">
            <div className="flex space-x-2">
              <div className="w-3.5 h-3.5 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full animate-pulse delay-75"></div>
              <div className="w-3.5 h-3.5 bg-green-500 rounded-full animate-pulse delay-150"></div>
            </div>
            <span className="ml-4 text-gray-300 text-sm font-mono tracking-wider">profile.js</span>
          </div>
          <div className="p-10 text-gray-700 font-mono text-md bg-gradient-to-br from-white/60 to-gray-50/60 backdrop-blur-md">
            <div>const information = {"{"}</div>
            <div className="ml-4">
              <span className="text-blue-500">name</span>: &quot;{information.name}&quot;,
            </div>
            <div className="ml-4">
              <span className="text-blue-500">role</span>: &quot;{information.role}&quot;,
            </div>
            <div className="ml-4">
              <span className="text-blue-500">address</span>: &quot;{information.address}&quot;,
            </div>
            <div className="ml-4">
              <span className="text-blue-500">freelance</span>: &quot;{information.freelance}&quot;,
            </div>
            <div className="ml-4">
              <span className="text-blue-500">age</span>: &quot;{information.age}&quot;,
            </div>
            <div className="ml-4">
              <span className="text-blue-500">nationality</span>: &quot;{information.nationality}&quot;,
            </div>
            <div className="ml-4">
              <span className="text-blue-500">languages</span>: [
              {information.languages.map((lang, i) => (
                <span key={i}>
                  &quot;{lang}&quot;{i < information.languages.length - 1 && ", "}
                </span>
              ))}
              ],
            </div>
            <div className="ml-4">
              <span className="text-blue-500">phone</span>: &quot;{information.phone}&quot;,
            </div>
            <div>{"};"}</div>
          </div>
        </div>

        {/* Soft Skills - Enhanced with 3D cards */}
        <div className="backdrop-blur-md bg-white/40 rounded-3xl mb-20 p-10 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
          <h3 className="text-black font-black mb-10 flex items-center text-xl">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl w-11 h-11 flex items-center justify-center mr-4 shadow-lg transform hover:rotate-12 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center transform hover:scale-105 transition-all duration-300 group">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-pulse group-hover:border-blue-200 transition-colors duration-300"></div>
                <div
                  className="absolute inset-0 rounded-full border-4 border-blue-500 group-hover:border-blue-600 transition-colors duration-300"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)",
                    transform: "rotate(-90deg)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  60%
                </div>
              </div>
              <span className="mt-4 text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Leadership</span>
            </div>

            <div className="flex flex-col items-center transform hover:scale-105 transition-all duration-300 group">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-pulse group-hover:border-blue-200 transition-colors duration-300"></div>
                <div
                  className="absolute inset-0 rounded-full border-4 border-blue-500 group-hover:border-blue-600 transition-colors duration-300"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)",
                    transform: "rotate(-90deg)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  75%
                </div>
              </div>
              <span className="mt-4 text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Teamwork</span>
            </div>

            <div className="flex flex-col items-center transform hover:scale-105 transition-all duration-300 group">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border-4 border-purple-100 animate-pulse group-hover:border-purple-200 transition-colors duration-300"></div>
                <div
                  className="absolute inset-0 rounded-full border-4 border-purple-500 group-hover:border-purple-600 transition-colors duration-300"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)",
                    transform: "rotate(-90deg)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                  75%
                </div>
              </div>
              <span className="mt-4 text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Communication</span>
            </div>

            <div className="flex flex-col items-center transform hover:scale-105 transition-all duration-300 group">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border-4 border-gray-200 animate-pulse group-hover:border-gray-300 transition-colors duration-300"></div>
                <div
                  className="absolute inset-0 rounded-full border-4 border-gray-500 group-hover:border-gray-600 transition-colors duration-300"
                  style={{
                    clipPath:
                      "polygon(50% 50%, 50% 0%, 100% 0%, 100% 70%, 50% 70%)",
                    transform: "rotate(-90deg)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  85%
                </div>
              </div>
              <span className="mt-4 text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Problem Solving</span>
            </div>
          </div>
        </div>

        {/* Technical Expertise - Enhanced with 3D cards */}
        <div className="backdrop-blur-md bg-white/40 rounded-3xl p-8 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
          <h3 className="text-black font-black mb-8 flex items-center text-lg">
            <span className="bg-white rounded-xl w-10 h-10 flex items-center justify-center mr-4 shadow-lg transform hover:rotate-12 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
                  className="group flex items-center gap-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-2 rounded-lg text-xs border border-gray-700/50 hover:scale-105 hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-300 cursor-default transform hover:-translate-y-0.5"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                  <span className="font-medium tracking-wide">{skill.name}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
