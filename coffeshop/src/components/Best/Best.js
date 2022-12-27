import React from "react";
import "./best.css";
import coffee1 from "./coffee1.jpg";
import coffee2 from "./coffee2.webp";
import coffee3 from "./coffee3.jpg";
import coffee4 from "./coffee4.jpg";
import { motion } from "framer-motion";
export default function Best() {
  return (
    <div className="container best text-center">
      <p className="sub_text" data-aos="fade-up">
        BESTELESA
      </p>
      <h1 className="name_heading pb-4" data-aos="fade-up">
        <span className="two_letter_span">TH</span>E COFFEE ART.
      </h1>
      <div className="row mx-auto">
        <div className="col-xs-6 col-sm-6 col-md-3 mx-auto m-1">
          <motion.img
            initial={{ scale: 0.9 }}
            whileHover={{
              scale: 1,
              transition: { duration: 0.2 },
            }}
            src={coffee1}
            data-aos="fade-right"
            className="img-fluid"
          />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 mx-auto m-1">
          <motion.img
            initial={{ scale: 0.9 }}
            whileHover={{
              scale: 1,
              transition: { duration: 0.2 },
            }}
            src={coffee2}
            data-aos="fade-up"
            className="img-fluid"
          />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 mx-auto m-1">
          <motion.img
            initial={{ scale: 0.9 }}
            whileHover={{
              scale: 1,
              transition: { duration: 0.2 },
            }}
            src={coffee3}
            data-aos="fade-up"
            className="img-fluid"
          />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 mx-auto m-1">
          <motion.img
            initial={{ scale: 0.9 }}
            whileHover={{
              scale: 1,
              transition: { duration: 0.2 },
            }}
            src={coffee4}
            data-aos="fade-left"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
