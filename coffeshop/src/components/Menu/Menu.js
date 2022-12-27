import React from "react";
import "./menu.css";
export default function Menu() {
  return (
    <div className="container text-center menu">
      <p className="sub_text"  data-aos="fade-up">BESTELESA</p>
      <h1 className="name_heading pb-4"  data-aos="fade-up">
      <span className="two_letter_span">EX</span>PLORE OUR MENU.
      </h1>
      <div className="row m-auto ">
        <div className="col-md-5 col-sm-12 m-auto">
          <ul className="list-group list-group-flush">
            <li  data-aos="fade-right" className="list-group-item d-flex justify-content-between">
              <span className="name_product">CAFFE LATTE</span>{" "}
              <span className="price_product ">$2.95</span>
            </li>

            <li data-aos="fade-right" className="list-group-item d-flex justify-content-between">
              <span className="name_product">CAFFE MOCHA</span>{" "}
              <span className="price_product ">$3.67</span>
            </li>

            <li data-aos="fade-right" className="list-group-item d-flex justify-content-between">
              <span className="name_product">WHITE CHOCOLATE MOCHA</span>{" "}
              <span className="price_product ">$2.79</span>
            </li>

            <li data-aos="fade-right" className="list-group-item d-flex justify-content-between">
              <span className="name_product">CAFFE AMERICANO</span>{" "}
              <span className="price_product ">$3.06</span>
            </li>

            <li data-aos="fade-right" className="list-group-item d-flex justify-content-between">
              <span className="name_product">CAPUCCINO</span>{" "}
              <span className="price_product ">$4.03</span>
            </li>
          </ul>
        </div>
        <div className="col-md-5 col-sm-12 m-auto">
          <ul className="list-group list-group-flush">
            <li data-aos="fade-left" className="list-group-item d-flex justify-content-between">
              <span className="name_product">ICED CARAMEL LATTE</span>{" "}
              <span className="price_product ">$4.67</span>
            </li>
            <li data-aos="fade-left"  className="list-group-item d-flex justify-content-between">
              <span className="name_product">ESPRESSO MACCHIATO</span>{" "}
              <span className="price_product ">$2.98</span>
            </li>
            <li data-aos="fade-left"  className="list-group-item d-flex justify-content-between">
              <span className="name_product">ICED SMOKED LATTE</span>{" "}
              <span className="price_product ">$2.54</span>
            </li>
            <li data-aos="fade-left"  className="list-group-item d-flex justify-content-between">
              <span className="name_product">ICED CAFFE MOCHA</span>{" "}
              <span className="price_product ">$2.60</span>
            </li>
            <li data-aos="fade-left"  className="list-group-item d-flex justify-content-between">
              <span className="name_product">VANILLA LATTE</span>{" "}
              <span className="price_product ">$3.65</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
