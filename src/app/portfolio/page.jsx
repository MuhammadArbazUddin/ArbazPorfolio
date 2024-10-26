"use client";

import PageTransitionProvider from "@/components/pageTransitionProvider";
import Project from "@/components/project";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Tapoos",
      image: "/watch_hub.png",
      liveLink: "https://zorka-clone.vercel.app/",
      codeLink: "https://github.com/MTalhashah/Zorka-clone",
    },
    {
      id: 2,
      title: "Iphone15 Pro Clone",
      image: "/art_n_craft_frontend.png",
      liveLink: "https://iphonebyarbaz.vercel.app",
      codeLink: "https://github.com/MuhammadArbazUddin/iphone15pro-clone",
    },
    {
      id: 3,
      title: "Brainwave",
      image: "/react_pizza.png",
      liveLink: "https://brainwavebyarbaz.vercel.app/",
      codeLink: "https://github.com/MuhammadArbazUddin/Brainwave",
    },
    {
      id: 4,
      title: "GPT-3",
      image: "/blog_api.png",
      liveLink: "https://arbaz-gpt-3.vercel.app/",
      codeLink:
        "https://github.com/MuhammadArbazUddin/GPT-3-OpenAI-LandingPage",
    },
    {
      id: 5,
      title: "Sundown Studio Clone",
      image: "/art_n_craft_backend.png",
      liveLink: "https://sundown-studio-clone-delta.vercel.app/",
      codeLink: "https://github.com/MuhammadArbazUddin/SundownStudio-clone",
    },
    {
      id: 6,
      title: "Awwward Loader",
      image: "/markdown_blog.png",
      liveLink: "https://loader-theta.vercel.app/",
      codeLink: "https://github.com/MuhammadArbazUddin/Loader",
    },
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(ref);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  return (
    <PageTransitionProvider>
      <div className="h-[calc(800vh-6rem)] relative" ref={ref}>
        <div className="min-h-screen min-w-screen flex items-center justify-center text-4xl md:text-5xl lg:text-8xl text-center text-black font-extrabold leading-tight font-body ">
          MY PROJECTS
        </div>

        <div className="flex h-screen sticky top-0 overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="w-screen h-screen bg-gray-50 "></div>

            {projects.map((project) => {
              return <Project key={project.id} project={project} />;
            })}
          </motion.div>
        </div>
      </div>
    </PageTransitionProvider>
  );
}

export default PortfolioPage;
