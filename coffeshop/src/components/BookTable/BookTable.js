import React from "react";
import "./booktable.css";
import {
  BsFillPeopleFill,
  BsFillCalendarEventFill,
  BsFillClockFill,
} from "react-icons/bs";
export default function BookTable() {
  return (
    <div className="container-fluid about_coffee text-center">
      <p data-aos="fade-up" className="sub_text2 mt-4">
        BESTELESA
      </p>
      <h1 data-aos="fade-up" className="book_a_table_title">
        <span className="two_letter_span">BO</span>OK A TABLE.
      </h1>
      <div className="col-7 mx-auto">
        <form className="forma">
          <div className="col-6  m-auto input-group flex-nowrap  mb-3">
            <select
              data-aos="fade-right"
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>1 Person</option>
              <option value="1">Two People</option>
              <option value="1">Three People</option>
              <option value="1">Four People</option>
              <option value="1">Five People</option>
              <option value="1">Six People</option>
            </select>
            <span className="input-group-text" data-aos="fade-left">
              <BsFillPeopleFill />
            </span>
          </div>
          <div className="col-6 mb-3  m-auto input-group flex-nowrap ">
            <input
              data-aos="fade-right"
              type="text"
              className="form-control"
              placeholder="Date:"
              aria-label="Date"
              aria-describedby="basic-addon1"
            />
            <span
              className="input-group-text"
              id="basic-addon1"
              data-aos="fade-left"
            >
              <BsFillCalendarEventFill />
            </span>
          </div>
          <div className="col-6  m-auto input-group flex-nowrap ">
            <input
              data-aos="fade-right"
              type="text"
              className="form-control"
              placeholder="Time:"
              aria-label="Time"
              aria-describedby="basic-addon1"
            />
            <span
              className="input-group-text"
              id="basic-addon1"
              data-aos="fade-left"
            >
              <BsFillClockFill />
            </span>
          </div>
          <button className="mt-3 btn book_btn" data-aos="fade-up">
            BOOK A TABLE
          </button>
        </form>
      </div>
    </div>
  );
}
