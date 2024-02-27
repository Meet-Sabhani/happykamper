import React from "react";
import iPhone13 from "../../images/iPhone 13.webp";
import shild from "../../images/shieldd2.webp";
import { SafetyStyle } from "../../styles/SafetyStyle";
import { DownloadNow } from "../download/DownloadNow";
import { Proffional } from "./proffional";

export const Safety = () => {
  return (
    <>
      <SafetyStyle id="safety">
        <div className="title">
          <h1>Your Children's Safety is Our #1 Priority</h1>
        </div>
        <div className="cardWrap">
          <div className="card">
            <div className="card-left">
              <img src={shild} alt="" />
              <h2>Safe and Vetted Activities</h2>
              <p>
                Happy Camper prioritizes safety and quality of every activity on
                the platform. Each undergoes a stringent vetting process,
                ensuring safety protocols, provider credentials, and alignment
                with our high standards. Additionally, user review and ratings
                offer insights from other parents, fostering a safe and
                enriching experience for your child.
              </p>
              <DownloadNow />
            </div>
            <div className="card-right">
              <img src={iPhone13} alt="" />
            </div>
          </div>
        </div>
        <Proffional />
      </SafetyStyle>
    </>
  );
};
