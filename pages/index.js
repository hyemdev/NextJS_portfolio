import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/layout";
import Hero from "../components/home/hero";
import Animation from "@/components/animation";
import Study from "./study";
import Project from "./project";
import Contact from "./contact";
import AboutMe from "./aboutMe";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="wrap-color">
        <Head>
          <title> Hyem's dev PORTFOLIO </title>
          <meta name="description" content="hyem dev"></meta>
        </Head>

        <section className="flex min-h-screen flex-col items-center justfy-center">
          <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
            <Hero />
            {/* <Animation /> */}
          </div>
        </section>
        {/* <section>
          <AboutMe />
        </section>
        <section>
          <Study />
        </section>
        <section>
          <Project />
        </section>
        <section>
          <Contact />
        </section> */}
      </div>
    </Layout>
  );
}
