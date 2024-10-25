"use client";

import PageTransitionProvider from "@/components/pageTransitionProvider";
import Project from "@/components/project";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "WatchHUB",
      image: "/watch_hub.png",
      liveLink: "https://watch-hub.netlify.app/",
      codeLink: "https://github.com/SucksToBeAnik/movie-hub-REACT",
    },
    {
      id: 2,
      title: "Art & Craft Eshop Frontend",
      image: "/art_n_craft_frontend.png",
      liveLink: "https://art-craft-eshop-frontend.vercel.app/",
      codeLink: "https://github.com/SucksToBeAnik/art-craft-eshop-frontend",
    },
    {
      id: 3,
      title: "React PIZZA",
      image: "/react_pizza.png",
      liveLink: "https://fast-react-pizza-theta-rouge.vercel.app/",
      codeLink: "https://github.com/SucksToBeAnik/fast-react-pizza-REACT",
    },
    {
      id: 4,
      title: "Task Manager API",
      image: "/task_manager_api.png",
      liveLink: "https://task-manager-backend-fastapi.onrender.com",
      codeLink: "https://github.com/SucksToBeAnik/task-manager-backend-FastAPI",
    },
    {
      id: 5,
      title: "Art & Craft Eshop Backend",
      image: "/art_n_craft_backend.png",
      liveLink: "https://art-craft-eshop-backend.onrender.com/docs",
      codeLink: "https://github.com/SucksToBeAnik/art-craft-eshop-backend",
    },
    {
      id: 6,
      title: "Markdown BLOG",
      image: "/markdown_blog.png",
      liveLink: "https://md-blog-basic.netlify.app/",
      codeLink: "https://github.com/SucksToBeAnik/markdown-blog-REACT",
    },
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(ref);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  return (
    <PageTransitionProvider>
      <div className="h-[calc(800vh-6rem)] relative" ref={ref}>
        <div className="min-h-screen min-w-screen flex items-center justify-center text-4xl md:text-5xl lg:text-8xl text-center text-stone-900 tracking-wider ">
          MY PROJECTS
        </div>

        <div className="flex h-screen sticky top-0 overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="w-screen h-screen bg-gray-50"></div>

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
