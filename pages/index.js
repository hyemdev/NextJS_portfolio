import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/layout";
import Hero from "../components/home/hero";
import Animation from "@/components/animation";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title> Hyem's dev PORTFOLIO </title>
          <meta name="description" content="hyem dev"></meta>
        </Head>

        <section className="flex min-h-screen flex-col items-center justfy-center">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <Hero />
            <Animation />
          </div>
        </section>
      </div>
    </Layout>
  );
}
