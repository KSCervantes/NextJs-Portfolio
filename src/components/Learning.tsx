"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Learning = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        const section = document.getElementById("learning");
        if (section) observer.observe(section);
        return () => observer.disconnect();
    }, []);

    const learningItems = [
        {
            title: "Improving my AI model accuracy using TensorFlow",
            description: "Deep diving into machine learning optimization techniques",
            icon: "🤖",
            color: "blue",
            gradient: "from-blue-500 to-blue-600",
            progress: 50
        },
        {
            title: "Learning advanced Flutter animations",
            description: "Mastering complex UI animations and transitions",
            icon: "📱",
            color: "purple",
            gradient: "from-purple-500 to-purple-600",
            progress: 60
        },
        {
            title: "Exploring backend scalability with Supabase",
            description: "Understanding real-time database and authentication systems",
            icon: "⚡",
            color: "green",
            gradient: "from-green-500 to-green-600",
            progress: 85
        },
        {
            title: "Mastering Django Framework",
            description: "Building robust web applications with Django's powerful features and best practices",
            icon: "🐍",
            color: "emerald",
            gradient: "from-emerald-500 to-emerald-600",
            progress: 45
        },
        {
            title: "Advanced Node.js Development",
            description: "Exploring microservices architecture and real-time applications with Node.js",
            icon: "🟢",
            color: "lime",
            gradient: "from-lime-500 to-lime-600",
            progress: 55
        },
        {
            title: "C++ Programming Excellence",
            description: "Deep diving into memory management, STL, and advanced C++ concepts",
            icon: "⚙️",
            color: "cyan",
            gradient: "from-cyan-500 to-cyan-600",
            progress: 40
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="learning" className="bg-gradient-to-b from-white to-gray-50 text-gray-800 px-4 py-24 max-w-5xl mx-auto">
            <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={containerVariants}
                className="relative"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 opacity-50 rounded-3xl -z-10" />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold mb-6 border border-black rounded-full px-6 py-2 w-fit mx-auto bg-black text-white shadow-lg hover:scale-105 transition-transform">
                        <span className="mr-2">Current Focus</span>
                    </h2>
                    <h2 className="text-5xl font-extrabold mb-6 text-center text-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                        What I'm Learning Now
                    </h2>
                    <p className="text-gray-600 text-center mb-12 text-sm md:text-base max-w-2xl mx-auto">
                        Here are the technologies and skills I'm currently mastering to enhance my development capabilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {learningItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative group`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-500 
                                ${hoveredIndex === index ? 'shadow-2xl -translate-y-2' : ''}
                                border border-gray-100 hover:border-${item.color}-200`}
                            >
                                <div className="flex items-center mb-6">
                                    <span
                                        className={`text-4xl mr-4 transform transition-transform duration-300 
                                            ${hoveredIndex === index ? 'scale-110' : ''}`}
                                        style={{
                                            color:
                                                item.color === "blue"
                                                    ? "#3b82f6"
                                                    : item.color === "purple"
                                                        ? "#8b5cf6"
                                                        : "#10b981",
                                        }}
                                    >
                                        {item.icon}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                                    {item.description}
                                </p>

                                <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600">
                                                Progress
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-semibold inline-block text-gray-600">
                                                {item.progress}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.progress}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${item.gradient}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Learning; 