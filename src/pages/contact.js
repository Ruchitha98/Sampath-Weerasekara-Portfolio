import { useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myForm = e.target;
    const formData = new FormData(myForm);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        router.push("/thanks");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Sampath Weerasekara </title>
        <meta
          name="description"
          content="Contact Sampath Weerasekara for software engineering, AI, data science, and machine learning opportunities."
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Let's Start a Conversation"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <section className="grid w-full grid-cols-12 gap-10 rounded-3xl border border-white/10 bg-[#111111] p-10 shadow-xl lg:p-8 xs:p-4">
            <div className="col-span-5 flex flex-col justify-center md:col-span-12">
              <span className="text-lg font-semibold text-primary dark:text-primaryDark">
                Contact
              </span>

              <h2 className="mt-3 text-4xl font-bold leading-tight text-light lg:text-3xl">
                Have a role, project, or collaboration in mind?
              </h2>

              <p className="mt-5 text-base font-medium leading-relaxed text-light/70">
                Send me a message and I will get back to you as soon as possible.
                I am open to conversations around software engineering, AI, data
                science, machine learning, and project opportunities.
              </p>

              <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/10 p-5">
  <p className="text-sm font-medium text-primary dark:text-primaryDark">
    I usually respond within 24 hours.
  </p>
</div>
            </div>

            <div className="col-span-7 md:col-span-12">
              <form
                name="contact-form"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 xs:p-4"
              >
                <input type="hidden" name="form-name" value="contact-form" />

                <p className="hidden">
                  <label>
                    Do not fill this out:
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>

                <div className="mb-5">
                  <label className="block text-sm font-semibold text-light/70">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-light outline-none transition-all duration-300 placeholder:text-light/30 focus:border-primary"
                    placeholder="Enter your name"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-semibold text-light/70">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-light outline-none transition-all duration-300 placeholder:text-light/30 focus:border-primary"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-light/70"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="6"
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-light outline-none transition-all duration-300 placeholder:text-light/30 focus:border-primary"
                    placeholder="Write your message..."
                    onChange={handleChange}
                  />
                </div>

                <div className="flex w-full justify-end">
                  <button
                    type="submit"
                    className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
}