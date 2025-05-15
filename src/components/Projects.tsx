"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
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
    const section = document.getElementById("projects");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const projectsData = [
    {
      id: 1,
      name: "Services Website",
      description: "A modern Services Website showcasing various offerings like Frontend, Backend, Web, Mobile, Development and etc.",
      technologies: ["React", "Supabase", "Tailwind CSS"],
      website: "https://kyle-services.vercel.app/",
      github: "https://github.com/KSCervantes/kyle-services",
      color: "blue",
      logo: "🌐",
      image: "/images/image.png",
      hasMobile: false
    },
    {
      id: 2,
      name: "Community Bulletin App",
      description: "A Full-Stack Community Bulletin App, where the Barangay Officials can post Announcements, Event Schedules, and Emergency Alerts",
      technologies: ["Flutter", "Supabase", "Firebase"],
      github: "#",
      color: "purple",
      logo: "📱",
      image: "/images/BULLETIN.jpg",
      hasMobile: true,
      mobileUrl: "https://drive.google.com/file/d/1OYuRqjbYosS77LGPX_n5vXXeMyNB_pRR/view?usp=drive_link"
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-white to-gray-50 text-gray-800 px-4 py-24 max-w-5xl mx-auto"
    >
      <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-sm font-bold mb-6 border border-black rounded-full px-6 py-2 w-fit mx-auto bg-black text-white shadow-lg hover:scale-105 transition-transform">
          <span className="mr-2">My Projects</span>
        </h2>
        <h2 className="text-5xl font-extrabold mb-6 text-center text-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          Some of my Projects
        </h2>
        <p className="text-gray-600 text-center mb-12 text-sm md:text-base max-w-2xl mx-auto">
          Here are some of the projects I&#39;ve worked on. This show my expertise in web and mobile development.
        </p>
        {/* Projects List */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl p-8 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Project Image */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-xl shadow-md group">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJNAO5XLPrJgAAAABJRU5ErkJggg=="
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <span className="text-5xl transform transition-transform duration-300 group-hover:scale-110">{project.logo}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div className="flex items-center">
                      <span
                        className="mr-3 text-2xl transform transition-transform duration-300 hover:scale-110"
                        style={{
                          color:
                            project.color === "blue"
                              ? "#3b82f6"
                              : project.color === "purple"
                                ? "#8b5cf6"
                                : "#10b981",
                        }}
                      >
                        {project.logo}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    </div>

                    <div className="flex gap-3 mt-3 md:mt-0">
                      {/* MOBILE button */}
                      {project.hasMobile && (
                        <Link
                          href={project.mobileUrl!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm font-medium rounded-lg border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 shadow-sm"
                        >
                          MOBILE
                        </Link>
                      )}

                      {/* WEB button */}
                      {project.website && (
                        <Link
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm font-medium rounded-lg border-2 border-black text-black hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 shadow-sm"
                        >
                          WEB
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-block text-xs md:text-sm bg-gray-900 text-white px-3 py-1.5 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
                      >
                        {tech}
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
