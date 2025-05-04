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
      name: "Enrollment System",
      description: "A Full-Stack ROTC Enrollment System.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      website: "https://example.com/ecommerce",
      github: "https://github.com/username/ecommerce",
      color: "purple",
      logo: "📑",
      image: "/images/Rotc.png",
      hasMobile: false,
      mobileUrl: "https://example.com/enrollment-mobile"
    },
    {
      id: 3,
      name: "Community Bulletin App",
      description: "A Full-Stack Community Bulletin App.",
      technologies: ["Flutter", "Supabase"],
      website: "",
      github: "",
      color: "purple",
      logo: "📑",
      image: "/images/ogol.png",
      hasMobile: true,
      mobileUrl: "https://example.com/bulletin-app"
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white text-gray-800 px-4 py-16 max-w-4xl mx-auto"
    >
      <div className={`transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="text-sm font-bold mb-4 border border-black rounded-full px-4 py-1 w-fit mx-auto bg-black text-white">
          <span className="mr-2">My Projects</span>
        </h2>
        <h2 className="text-5xl font-extrabold mb-8 text-center text-black">Some of my Projects</h2>
        <p className="text-gray-600 text-center mb-8 text-sm md:text-base">
          Here are some of the projects I&#39;ve worked on. Click on the links to view them.
        </p>
        {/* Projects List */}
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`bg-gray-50 rounded-lg p-6 transition-all duration-500 shadow-sm hover:shadow-md ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Project Image */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-lg">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJNAO5XLPrJgAAAABJRU5ErkJggg=="
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-4xl">{project.logo}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div className="flex items-center">
                      <span
                        className="mr-2 text-xl"
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
                      <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                    </div>

                    <div className="flex gap-2 mt-2 md:mt-0">
                      {/* MOBILE button */}
                      {project.hasMobile && (
                        <Link
                          href={project.mobileUrl!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs font-medium rounded border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
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
                          className="px-3 py-1 text-xs font-medium rounded border border-black text-black hover:bg-gray-900 hover:text-white transition-colors"
                        >
                          WEB
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mt-2 text-sm md:text-base">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-block text-xs md:text-sm bg-black text-white px-2 py-1 rounded"
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
