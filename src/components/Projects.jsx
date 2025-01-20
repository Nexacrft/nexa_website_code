import React from "react";
import Integrations from "../utils/Integrations/Inetgrations";
const tools = [
  {
    name: "Figma",
    icon: "/assets/projects/project1.jpeg",
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon:  "/assets/projects/project2.jpeg",
    description: "Notion is an all-in-one workspace for notes and tasks.",
  },
  {
    name: "Slack",
    icon:  "/assets/projects/project3.jpeg",
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: "/assets/projects/project4.jpeg",
    description: "Relume is a no-code website builder and design tool.",
  },
  {
    name: "Framer",
    icon:  "/assets/projects/project5.jpeg",
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "Sketch",
    icon: "/assets/projects/project6.jpeg",
    description: "Sketch is a vector graphics editor for macOS.",
  },
  {
    name: "Canva",
    icon: "/assets/projects/project7.png",
    description: "Canva is an online design and publishing tool.",
  },
  {
    name: "Webflow",
    icon: "/assets/projects/project8.png",
    description: "Webflow is a no-code website design platform.",
  },
  {
    name: "Adobe XD",
    icon: "/assets/projects/project9.jpeg",
    description: "Adobe XD is a vector-based user experience design tool.",
  },
  {
    name: "InVision",
    icon: "/assets/projects/project10.jpeg",
    description: "InVision is a prototyping and collaboration platform.",
  },
  {
    name: "Zeplin",
    icon: "/assets/projects/project11.jpeg",
    description: "Zeplin is a collaboration app for designers and developers.",
  },
  {
    name: "Rohit",
    icon: "/assets/projects/project5.jpeg",
    description: "Overflow is a design presentation and storytelling tool.",
  },
];


const Projects = () => {
  return (
    <div className="integrations-con  py-24 overflow-hidden">
      <div className="flex flex-col gap-10">
        <div className=" text-center flex flex-col lg:flex-row justify-between px-20 items-center">
           <div>
           <h1 className="monigue-font text-6xl">OUR</h1>
           <h1 className="text-6xl md:text-9xl monigue-font text-[#F1F660]"> PROJECTS</h1>
           </div>
           <div>
            <h1 className="text-3xl anton-sc-regular text-[#f4fada]">" Cool way to show projects " <br /> ~ Sun Tzu</h1>
           </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="h-[400px]  w-full mt-8 overflow-hidden grid md:grid-cols-3 gap-2 lg:h-[500px] rounded-3xl"
            // style={{
            //   maskImage:
            //     "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            //   WebkitMaskImage:
            //     "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            // }}
          >
            <Integrations data={tools.slice(0, 4)} className="hidden md:flex" />
            <Integrations data={tools.slice(4, 8)} reverse />
    <Integrations data={tools.slice(8, 12)} className="hidden md:flex" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
