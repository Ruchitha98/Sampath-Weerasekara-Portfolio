import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/profile4.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sampath Weerasekara | Portfolio</title>
        <meta
          name="description"
          content="Software engineering, AI, data science, and machine learning portfolio of Sampath Weerasekara."
        />
      </Head>

      <TransitionEffect />

      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
        <Layout className="!pt-24 md:!pt-16 sm:!pt-28">
          <div className="flex w-full items-start justify-between pt-10 pb-24 md:flex-col md:items-center">
            <div className="w-1/2 justify-center lg:hidden md:flex md:w-full md:justify-center">
              <Image
                priority
                src={profilePic}
                alt="Sampath Weerasekara"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>

            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hey, I’m Sampath"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <div className="flex w-full items-start lg:w-full lg:!justify-center sm:!justify-center md:inline-block md:w-full md:!text-center">
                <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
                  I build backend systems, web applications, and AI-powered
                  solutions.
                </h2>
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-sm">
                I am a Software Engineer with commercial experience developing
                enterprise applications, REST APIs, and database driven systems.
                <br />
                <br />
                I recently completed an MSc in Data Science at the University of
                East Anglia, where I combined software engineering with machine
                learning and AI research.
                <br />
                <br />
                My experience includes backend development, full-stack web
                applications, databases, cloud technologies, and automation.
              </p>

              
              <div className="mt-2 flex items-center gap-3 self-start lg:self-center">
                <Link
                  href="/about/"
                  target="_self"
                  className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                >
                  Get To Know Me
                </Link>

                <Link
                  href="/projects/"
                  target="_self"
                  className="flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold capitalize text-dark hover:border-light hover:bg-dark hover:text-light dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark md:p-2 md:px-4 md:text-base"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-dark text-light shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary dark:bg-light dark:text-dark"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        <HireMe />
      </article>
    </>
  );
}