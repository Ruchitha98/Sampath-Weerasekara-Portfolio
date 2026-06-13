import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thank You | Sampath Weerasekara</title>
      </Head>

      <TransitionEffect />

      <main className="flex min-h-screen w-full items-center justify-center dark:text-light">
        <Layout>
          <section className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-[#111111] p-10 text-center shadow-xl">
            <h1 className="text-5xl font-bold text-light sm:text-3xl">
              Thank you!
            </h1>

            <p className="mt-5 text-lg font-medium text-light/70 sm:text-base">
              Your message has been sent successfully. I will get back to you as
              soon as possible.
            </p>

            <Link
              href="/"
              className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-gray-200"
            >
              Back to Home
            </Link>
          </section>
        </Layout>
      </main>
    </>
  );
}