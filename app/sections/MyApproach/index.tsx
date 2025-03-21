"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Tools from "@/app/components/Skills";
import { div } from "motion/react-client";
import { Timeline } from "@/app/components/ui/Timeline";
const data = [
  {
    title: "phase 1",
    content: (
      <div className="max-w-2xl">
        <span className="text-purple-400 font-bold con-text-lg">
          Planning & Strategy
        </span>
        <p className="con-text-md">
          We'll collaborate to map out your website's <b>goals</b>,{" "}
          <b>target audience</b>, and <b>key functionalities</b>. We'll discuss
          things like site structure, navigation, and content requirements.
        </p>
      </div>
    ),
  },
  {
    title: "phase 2",
    content: (
      <div className="max-w-2xl">
        <span className="text-blue-400 font-bold con-text-lg">
          Development & Progress Update
        </span>
        <p className="con-text-md">
          Once we agree on the plan, I cue my <i>lofi playlist</i> and dive into
          coding. From <b>initial sketches</b> to <b>polished code</b>, I keep
          you updated every step of the way.
        </p>
      </div>
    ),
  },
  {
    title: "Phase 3",
    content: (
      <div className="max-w-2xl">
        <span className="text-green-400 font-bold con-text-lg">
          Development & Launch
        </span>

        <p className="con-text-md">
          This is where the <b>magic happens</b>! Based on the approved design,
          I'll translate everything into <b>functional code</b>, building your
          website from the ground up.
        </p>
      </div>
    ),
  },
];

const ApproachSection = () => {
  return (
    <section className="w-full py-20 bg-black text-white px-6">
      <Timeline data={data} />
    </section>
  );
};

export default ApproachSection;
