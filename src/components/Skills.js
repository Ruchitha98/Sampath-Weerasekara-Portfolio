import { motion } from "framer-motion";
import React from "react";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "Java", "JavaScript", "SQL", "C++", "C#"],
  },
  {
    title: "Backend Development",
    skills: ["REST APIs", "FastAPI", "Java Backend", "Node.js", "OOP"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQL Server", "DynamoDB"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git", "Linux", "CI/CD"],
  },
  {
    title: "AI & Data",
    skills: [
      "Machine Learning",
      "PyTorch",
      "Hugging Face",
      "Pandas",
      "Scikit-learn",
    ],
  },
];

const Skills = () => {
  return (
    <section className="mt-64 mb-64 w-full md:mt-32 md:mb-32">
      <div className="mb-16 text-center">
      <span className="text-lg font-semibold text-primary dark:text-primaryDark">
          Technical Toolkit
        </span>

        <h2 className="mt-3 text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl">
          Skills
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-dark/60 dark:text-light/60">
          A focused set of technologies I use to build backend systems, web
          applications, data pipelines, and AI-powered solutions.
        </p>
      </div>

      <div className="grid w-full grid-cols-3 gap-6 xl:gap-5 lg:grid-cols-2 sm:grid-cols-1">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-[#111111] p-6 shadow-xl transition-all duration-300 hover:border-primary/40"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-primary">
                {group.title}
              </h3>

              
            </div>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-light/80 transition-all duration-300 hover:border-primary/30 hover:text-primary dark:hover:text-primaryDark"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;