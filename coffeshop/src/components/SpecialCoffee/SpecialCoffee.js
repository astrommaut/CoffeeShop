import React, { useEffect, useState } from "react";
import "./specialcoffee.css";
import image from "./image.png";
import { CiCoffeeBean } from "react-icons/ci";
import aos from "aos";
import "aos/dist/aos.css"
export default function SpecialCoffee() {
  useEffect(()=>{
    aos.init({duration:2000})
  },[])
  return (
    <div className="container-fluid special_coffee text-center">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6">
          <img data-aos="fade-right" className="img-fluid img" src={image}></img>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 special_beans_side" data-aos="fade-left">
          <p className="sub_text3 mt-4">BESTELESA</p>
          <h1 className="special_beans_heading">
            <span className="two_letter_span">SP</span>ECIAL BEANS.
          </h1>
          <CiCoffeeBean className="icon mb-2" />
          <p>
            Coffee’s always given us a way to slow down and enjoy life, but the
            specialty coffee movement has enhanced that in powerful ways.
            Before, it was just about sipping a simple mug.{" "}
          </p>
          <CiCoffeeBean className="icon" />
          <br />
          <button className="btn disabled beans_btn mt-3">SOLD OUT</button>
        </div>
      </div>
    </div>
  );
}
