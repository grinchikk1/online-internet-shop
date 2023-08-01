import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <h1 className="hero-title">Uuups, page not found</h1>
                <div className="four_zero_four_bg"></div>
                <div className="contant_box_404">
                  <h3 className="text-center">Look like you're lost</h3>
                  <p>the page you are looking for not avaible!</p>
                  <button onClick={() => navigate(-1)} className="link_404">
                    Go to back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
