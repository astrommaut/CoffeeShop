import React from "react";
import "./contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function Contact() {
  return (
    <footer className="container-fluid contact" data-aos="fade-down">
      <footer className="bg-light text-center">
        <div className="container p-4 pb-0">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>
                      <span className="two_letter_span">SI</span>GN UP FOR OUR
                      NEWSLETTER
                    </strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn beans_btn mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </footer>
    </footer>
  );
}
