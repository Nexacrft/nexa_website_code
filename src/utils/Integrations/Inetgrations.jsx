import React from "react";
import { motion } from "framer-motion";

const Integrations = ({ data, reverse }) => {
  // Duplicate the data to create a seamless infinite scroll effect
  const extendedData = [...data, ...data];

  return (
    <motion.div
      initial={{
        y: reverse ? "-50%" : 0,
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex flex-col gap-4 pb-4 px-4"
    >
      {extendedData.map((tool, index) => (
        <div key={`${tool.name}-${index}`} className="rounded-3xl">
          <div className="flex justify-center">
            <img
              className="rounded-3xl border-[2px] h-[250px] w-[600px] border-[#F1F660]"
              src={tool.icon}
              alt={tool.name}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Integrations;
