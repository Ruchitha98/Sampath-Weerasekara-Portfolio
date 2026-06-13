import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";

import blog1 from "../../public/images/articles/1.webp";
import blog2 from "../../public/images/articles/2.webp";
import blog3 from "../../public/images/articles/2.webp";
import blog4 from "../../public/images/articles/2.webp";
import blog5 from "../../public/images/articles/2.webp";

const FramerImage = motion(Image);

const mediumArticles = [
  {
    title: "What Are Visual Language Models (VLMs)?",
    summary:
      "An introduction to Visual Language Models and how they combine computer vision with natural language understanding.",
    time: "3 min read",
    date: "Oct 5, 2025",
    img: blog1,
    link: "https://medium.com/@rssampath21/visionmeetslanguage-what-are-visual-language-models-vlms-57d4901f8455",
    tags: ["AI", "VLMs", "Computer Vision"],
  },
  {
    title: "How Visual Language Models Combine Vision and Text",
    summary:
      "A practical explanation of how VLMs connect images and language to form shared understanding.",
    time: "4 min read",
    date: "Oct 6, 2025",
    img: blog2,
    link: "https://medium.com/@rssampath21/visionmeetslanguage-how-visual-language-models-combine-vision-and-text-b957c34d7a6d",
    tags: ["AI", "Vision", "Language"],
  },
  {
    title: "Inside the Architecture of Visual Language Models",
    summary:
      "A look inside VLM architecture and how data flows from pixels and text to reasoning and response.",
    time: "5 min read",
    date: "Oct 9, 2025",
    img: blog3,
    link: "https://medium.com/@rssampath21/visionmeetslanguage-episode-3-inside-the-architecture-of-visual-language-models-b04d6744da57",
    tags: ["Architecture", "Transformers", "AI"],
  },
  {
    title: "Real-World Applications of Visual Language Models",
    summary:
      "Exploring how VLMs are being used in healthcare, accessibility, education, robotics, and enterprise systems.",
    time: "4 min read",
    date: "Oct 18, 2025",
    img: blog4,
    link: "https://medium.com/@rssampath21/visionmeetslanguage-episode-4-real-world-applications-of-visual-language-models-8ed69ba6dfca",
    tags: ["Applications", "Healthcare", "AI"],
  },
  {
    title: "Challenges and Limitations of Visual Language Models",
    summary:
      "A discussion of hallucinations, bias, data limitations, evaluation challenges, and the future of VLM research.",
    time: "4 min read",
    date: "Nov 16, 2025",
    img: blog5,
    link: "https://medium.com/@rssampath21/visionmeetslanguage-episode-5-challenges-and-limitations-of-visual-language-models-b4ed110270cd",
    tags: ["Limitations", "Ethics", "AI"],
  },
];

const TagPill = ({ label }) => (
  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
    {label}
  </span>
);

const ArticleButton = ({ link }) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200"
  >
    Read Article
  </Link>
);

const FeaturedArticle = ({ img, title, time, summary, link, tags }) => {
  return (
    <article className="relative flex w-full items-center justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#111111] p-10 shadow-xl transition-all duration-300 hover:border-white/25 lg:flex-col lg:p-8 xs:p-4">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[52%] cursor-pointer overflow-hidden rounded-2xl lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.25 }}
          priority
        />
      </Link>

      <div className="flex w-[48%] flex-col items-start justify-between pl-8 lg:w-full lg:pl-0 lg:pt-8">
        <span className="text-lg font-semibold text-cyan-400">
          Featured Article
        </span>

        <h2 className="my-3 w-full text-left text-4xl font-bold leading-tight text-light lg:text-3xl xs:text-2xl">
          {title}
        </h2>

        <p className="my-2 text-base font-medium leading-relaxed text-light/80 sm:text-sm">
          {summary}
        </p>

        <div className="mt-3 flex items-center gap-3 text-sm font-medium text-light/50">
          <span>{time}</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>

        <div className="mt-6 flex w-full justify-end">
          <ArticleButton link={link} />
        </div>
      </div>
    </article>
  );
};

const ArticleCard = ({ img, title, time, date, summary, link, tags }) => {
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
        <span className="text-base font-semibold text-cyan-400">
          Medium Article
        </span>

        <h2 className="my-2 w-full text-left text-3xl font-bold leading-tight text-light lg:text-2xl">
          {title}
        </h2>

        <p className="my-2 text-sm font-medium leading-relaxed text-light/80">
          {summary}
        </p>

        <div className="mt-2 flex items-center gap-3 text-sm font-medium text-light/50">
          <span>{date}</span>
          <span>•</span>
          <span>{time}</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>

        <div className="mt-5 flex w-full justify-end">
          <ArticleButton link={link} />
        </div>
      </div>
    </article>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Articles | Sampath Weerasekara </title>
        <meta
          name="description"
          content="Medium articles by Sampath Weerasekara on AI, data science, software engineering, and Visual Language Models."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Writing About AI, Data & Software"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid grid-cols-12 gap-16 gap-y-24 xl:gap-x-12 lg:gap-x-8 md:gap-y-16 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedArticle
                img={mediumArticles[0].img}
                title={mediumArticles[0].title}
                time={mediumArticles[0].time}
                summary={mediumArticles[0].summary}
                link={mediumArticles[0].link}
                tags={mediumArticles[0].tags}
              />
            </div>

            {mediumArticles.slice(1).map((article) => (
              <div key={article.title} className="col-span-6 sm:col-span-12">
                <ArticleCard
                  img={article.img}
                  title={article.title}
                  time={article.time}
                  date={article.date}
                  summary={article.summary}
                  link={article.link}
                  tags={article.tags}
                />
              </div>
            ))}
          </div>

          <div className="mt-20 flex items-center justify-center gap-4 sm:flex-col">
            <Link
              href="/about/"
              target="_self"
              className="rounded-xl border border-white/10 bg-light px-6 py-3 text-lg font-semibold text-dark transition-all duration-300 hover:bg-dark hover:text-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light"
            >
              Get To Know Me
            </Link>

            <Link
              href="/projects/"
              target="_self"
              className="rounded-xl border border-white/10 bg-dark px-6 py-3 text-lg font-semibold text-light transition-all duration-300 hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light"
            >
              View Projects
            </Link>
          </div>

          <HireMe2 />
        </Layout>
      </main>
    </>
  );
}