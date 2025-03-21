"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
const Tools = ({
  approach,
}: {
  approach: { title: string; phase: string; description: string };
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className="mb-3 sm:mb-8 last:mb-0"
    >
      <div className="p-6 rounded-2xl flex flex-col items-center text-center border border-gray-300">
        <span className="text-5xl font-semibold text-white mb-2">
          {approach.phase}
        </span>
        <h3 className="text-3xl font-semibold mb-4">{approach.title}</h3>
        <p className="text-xl">{approach.description}</p>
      </div>
    </motion.div>
  );
};

export default Tools;
