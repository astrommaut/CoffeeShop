import React, { useRef } from "react";
import "./home.css";
import BackgroundVideo from "./bg_video.mp4";
import { motion, MotionConfig } from "framer-motion";
export default function Home() {
  const constraintsRef = useRef(null);
  return (
    <div className="container-fluid home text-center" ref={constraintsRef}>
      <video autoPlay loop muted className="bg_video">
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="heading_home text-light "
      >
        <span className="letter_heading secondary_color_span">B</span>
        <span className="letter_heading ">E</span>
        <span className="letter_heading secondary_color_span">S</span>
        <span className="letter_heading">T</span>
        <span className="letter_heading secondary_color_span">E</span>
        <span className="letter_heading">L</span>
        <span className="letter_heading secondary_color_span">E</span>
        <span className="letter_heading">S</span>
        <span className="letter_heading secondary_color_span">A</span>
      </motion.h1>
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="text-light slogan"
      >
        Because you can never have too much coffee in your life.
      </motion.p>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        drag
        dragConstraints={constraintsRef}
        className="btn text-light home_btn"
      >
        DRAG ME
      </motion.button>
    </div>
  );
}
<span className="letter_heading"></span>;
