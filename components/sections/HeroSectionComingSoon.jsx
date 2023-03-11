import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../utils/Container";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroSection = () => {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <section className="relative pt-20">
      <span className="z-10 absolute top-0 left-0 w-full h-screen opacity-90">
        <Image
          className="object-cover opacity-50"
          fill
          src="/assets/images/bg-hero.png"
          alt="..."
        />

        <Particles
          className="h-screen"
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: true,
              zIndex: 1,
            },

            fps_limit: 60,

            particles: {
              color: { value: "#ffffff" },
              line_linked: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
                bounce: false,
                direction: "none",
                enable: true,
                out_mode: "out",
                random: false,
                speed: 2,
                straight: false,
              },
              number: { density: { enable: true, value_area: 800 }, value: 80 },
              opacity: {
                anim: {
                  enable: false,
                  opacity_min: 0.1,
                  speed: 1,
                  sync: false,
                },
                random: false,
                value: 0.5,
              },
              shape: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                image: {
                  height: 100,
                  replace_color: true,
                  src: "images/github.svg",
                  width: 100,
                },
                polygon: { nb_sides: 5 },
                stroke: { color: "#000000", width: 0 },
                type: "circle",
              },
              size: {
                anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
                random: true,
                value: 5,
              },
            },
            polygon: {
              draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
              move: { radius: 10 },
              scale: 1,
              type: "none",
              url: "",
            },
            retina_detect: true,
          }}
        />
      </span>
      <span className="absolute top-0 left-0 w-full h-full"></span>
      <div className="relative z-10 py-10 sm:py-32 md:py-44  text-white">
        <Container>
          <div className="flex justify-center">
            <img
              width={480}
              height={260}
              src="/assets/images/logo.gif"
              alt=".."
            />
          </div>
          <div className="text-center mx-auto ">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-suiGeneris font-normal mb-10">
              Website Under Construction
            </h1>
            <p className="text-lg md:text-2xl font-DMSans font-normal max-w-xl mx-auto mb-4">
              Something really cool is Coming Soon. Stay Tuned!
            </p>
            <p className="text-lg font-bold">Contact us @</p>
            <p>Support@netopsninjas.com | Sales@netopsninjas.com</p>
          </div>
          <div className="text-center mx-auto pt-5">
          <p className="text-lg font-bold">Our Partners</p>
          <div className="flex justify-center gap-x-5">
            <img
              width={100}
              height={83}
              src="/assets/images/partner-cisco.png"
              alt=".."
            />
             <img
              width={150}
              height={125}
              src="/assets/images/partner-meraki.png"
              alt=".."
            />
          </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
