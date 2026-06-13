import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
       <div className="mb-16 text-center">
      <span className="text-lg font-semibold text-primary dark:text-primaryDark">
          Career Timeline
        </span>

        <h2 className="mt-3 text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl">
          Experience
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-dark/60 dark:text-light/60">
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-dark/60 dark:text-light/60">
          Building software, AI solutions, and digital products across research, freelance work, and enterprise environments.
        </p>
        </p>
        </div>
      

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
  position="Freelance AI & Software Developer"
  company="Self-Employed"
  time="Nov 2025 - Present"
  address="Norwich, United Kingdom"
  companyLink="#"
  work="Delivering freelance software engineering and AI solutions for clients, including web applications, backend services, automation workflows, data analytics dashboards, and machine learning projects. Collaborate with stakeholders to design scalable solutions, optimize workflows, and transform business requirements into production-ready software."
/>
<Details
  position="Machine Learning Researcher"
  company="University of East Anglia"
  time="Jan 2025 - Sep 2025"
  address="Norwich, United Kingdom"
  companyLink="#"
  work="Developed a Python-based Vision Language Model pipeline using Qwen-VL to automate Wolf Motor Function Test task detection and scoring for stroke rehabilitation assessment, applying data preprocessing, model evaluation, and software engineering practices."
/>

<Details
  position="Freelance Software Developer"
  company="Self-Employed"
  time="Oct 2023 - Aug 2024"
  address="Sri Lanka"
  companyLink="#"
  work="Developed custom software solutions for individual clients, including database-driven applications, REST APIs, business process automation tools, and responsive web platforms. Focused on delivering maintainable code, efficient system design, and user-centric functionality across multiple projects."
/>

<Details
  position="Software Engineer Intern"
  company="Persistent Systems"
  time="Jan 2022 - Jul 2022"
  address="Colombo, Sri Lanka"
  companyLink="https://www.persistent.com/"
  work="Supported backend development, REST API testing, automation, and Linux-based testing workflows for telecom systems, collaborating with development and QA teams to improve software reliability and reduce manual testing effort."
/>
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Articles
        </Link>
      </div>
    </div>
  );
};

export default Experience;
