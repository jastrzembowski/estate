import React, { useState } from "react";

export default function Faq() {
  const [isFirstActive, setIsFirstActive] = useState(false);
  const [isSecondActive, setIsSecondActive] = useState(false);
  const [isThirdActive, setIsThirdActive] = useState(false);

  return (
    <>
      <section className="faq">
        <div className="faq-intro">
          <p className="heading-label">Question</p>
          <h3 className="sub-heading">Frequently Asked Questions</h3>
          <p className="faq-body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            omnis minus dolor corrupti facere nihil!
          </p>
          <button className="btn">See More</button>
        </div>
        <div className="accordion">
          <div className="accordion-item" data-visible="false">
            <div
              className="question flex"
              onClick={
                !isFirstActive
                  ? (e) => setIsFirstActive(true)
                  : (e) => setIsFirstActive(false)
              }
            >
              <p>Do you offer home loan services?</p>
              {!isFirstActive ? (
                <i
                  className="fa-solid fa-angle-down"
                  style={{ fontSize: "25px" }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-angle-up"
                  style={{ fontSize: "25px" }}
                ></i>
              )}
            </div>
            {isFirstActive && (
              <div className="answer">
                <p>
                  Yes, Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Et, facere. Lorem ipsum dolor sit amet.
                </p>
              </div>
            )}
          </div>
          <div className="accordion-item" data-visible="false">
            <div className="question flex">
              <p>What are Capital Gains on property purchase?</p>
              <i
                className="fa-solid fa-angle-down"
                style={{ fontSize: "25px" }}
              ></i>{" "}
            </div>
            <div className="answer">
              <p>
                The capital gains are dolor sit amet, consectetur adipisicing
                elit. Et, facere. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="accordion-item" data-visible="false">
            <div className="question flex">
              <p>What kind of properties are listed on your website?</p>
              <i
                className="fa-solid fa-angle-down"
                style={{ fontSize: "25px" }}
              ></i>{" "}
            </div>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                facere. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
