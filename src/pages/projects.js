import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import { HireMe2 } from "@/components/HireMe2";

import wmftImg from "../../public/images/projects/wmft-thumbnail.png";
import houseImg from "../../public/images/projects/house-price-thumbnail.png";
import churnImg from "../../public/images/projects/churn-thumbnail.png";
import jobsImg from "../../public/images/projects/data-jobs-thumbnail.png";

const FramerImage = motion(Image);

const techColors = {
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  teal: "bg-teal-500/10 text-teal-400 border-teal-500/20",
};

const textColors = {
  cyan: "text-cyan-400",
  emerald: "text-emerald-400",
  purple: "text-purple-400",
  teal: "text-teal-400",
};

const TechPill = ({ label, color = "cyan" }) => (
  <span
    className={`rounded-full border px-3 py-1 text-xs font-medium ${techColors[color]}`}
  >
    {label}
  </span>
);

const ProjectButton = ({ link, small = false }) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`rounded-xl bg-white font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200 ${
      small ? "px-5 py-2.5 text-sm" : "px-6 py-3 text-base"
    }`}
  >
    View Project
  </Link>
);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  tech,
  color = "cyan",
}) => {
  return (
    <article className="relative flex w-full items-center justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#111111] p-10 shadow-xl transition-all duration-300 hover:border-white/25 lg:flex-col lg:p-8 xs:p-4">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[55%] cursor-pointer overflow-hidden rounded-2xl lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full object-cover"
          alt={title}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.25 }}
          priority
        />
      </Link>

      <div className="flex w-[45%] flex-col items-start justify-between pl-8 lg:w-full lg:pl-0 lg:pt-8">
        <span className={`text-lg font-semibold ${textColors[color]}`}>
          {type}
        </span>

        <h2 className="my-3 w-full text-left text-4xl font-bold leading-tight text-light lg:text-3xl xs:text-2xl">
          {title}
        </h2>

        <p className="my-2 text-base font-medium leading-relaxed text-light/80 sm:text-sm">
          {summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <TechPill key={item} label={item} color={color} />
          ))}
        </div>

        <div className="mt-6 flex w-full">
          <ProjectButton link={link} />
        </div>
      </div>
    </article>
  );
};

const Project = ({
  title,
  type,
  summary,
  img,
  link,
  tech,
  color = "cyan",
}) => {
  return (
    <article className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#111111] p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 xs:p-4">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full cursor-pointer overflow-hidden rounded-2xl"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.25 }}
        />
      </Link>

      <div className="mt-5 flex w-full flex-col items-start justify-between">
        <span className={`text-base font-semibold ${textColors[color]}`}>
          {type}
        </span>

        <h2 className="my-2 w-full text-left text-3xl font-bold leading-tight text-light lg:text-2xl">
          {title}
        </h2>

        <p className="my-2 text-sm font-medium leading-relaxed text-light/80">
          {summary}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((item) => (
            <TechPill key={item} label={item} color={color} />
          ))}
        </div>

        <div className="mt-5 flex w-full justify-end">
          <ProjectButton link={link} small />
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Sampath Portfolio</title>
        <meta
          name="description"
          content="AI, machine learning, data science, and analytics projects by Sampath Weerasekara"
        />
      </Head>

      <TransitionEffect />

      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Projects That Turn Data Into Solutions"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-16 gap-y-24 xl:gap-x-12 lg:gap-x-8 md:gap-y-16 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="AI Research & Healthcare"
                title="WMFT AI Assessment System"
                summary="Automates Wolf Motor Function Test task detection and clinical score prediction using Vision Language Models for stroke rehabilitation assessment."
                img={wmftImg}
                link="https://github.com/Ruchitha98/WMFT-VLM-Automation"
                tech={[
                  "Python",
                  "Qwen2.5-VL",
                  "PyTorch",
                  "Transformers",
                  "Computer Vision",
                ]}
                color="cyan"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Machine Learning"
                title="House Price Prediction"
                summary="Regression project predicting residential property prices using Linear Regression and Random Forest models."
                img={houseImg}
                link="https://github.com/Ruchitha98/House-Price-Prediction"
                tech={["Python", "Pandas", "Scikit-Learn", "Random Forest"]}
                color="emerald"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Machine Learning"
                title="Customer Churn Prediction"
                summary="Classification project predicting customer churn and identifying retention insights using ML models."
                img={churnImg}
                link="https://github.com/Ruchitha98/Customer-Churn-Prediction"
                tech={["Python", "Pandas", "Scikit-Learn", "Classification"]}
                color="purple"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Data Analytics"
                title="Data Job Market Analytics"
                summary="Analytics project exploring global data science salaries, remote work trends, and hiring patterns."
                img={jobsImg}
                link="https://github.com/Ruchitha98/Data-Job-Market-Analytics"
                tech={["Python", "Pandas", "Tableau", "Data Visualisation"]}
                color="teal"
              />
            </div>
          </div>

          <div className="mt-20 flex items-center justify-center">
            <Link
              href="/about/"
              target="_self"
              className="rounded-xl border border-white/10 bg-light px-6 py-3 text-lg font-semibold text-dark transition-all duration-300 hover:bg-dark hover:text-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light"
            >
              Get To Know Me
            </Link>
          </div>

          <HireMe2 />
        </Layout>
      </main>
    </>
  );
}