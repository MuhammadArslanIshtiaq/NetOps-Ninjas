import Head from "next/head";
import AboutSection from "../components/sections/AboutSection";
import CtaSection from "../components/sections/CtaSection";
import HeroSectionComingSoon from "../components/sections/HeroSectionComingSoon";
import OurClientsSection from "../components/sections/OurClientsSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import WhatWeDoSection from "../components/sections/WhatWeDoSection";
import WhyNetopsSection from "../components/sections/WhyNetopsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Netops Ninjas</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main>
        <HeroSectionComingSoon /> 
      </main>
    </>
  );
}
