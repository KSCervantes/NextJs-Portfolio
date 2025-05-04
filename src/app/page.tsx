import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <main className="bg-white text-gray-900">
        <Hero />
        <About />
        <Education />
        <WorkExperience />
        <Projects />
      </main>
      <Contact />
      <Footer />

    </>
  );
}
