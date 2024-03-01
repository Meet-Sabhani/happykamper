import React from "react";
import { Collapse } from "antd";
import { QuestionsStyle } from "./QuestionsStyle";
import { faqDataArray } from "./faqDataArray";

export const Questions = () => {
  return (
    <QuestionsStyle>
      <h1>Frequently Asked Questions</h1>
      <p>
        Explore our Frequently Asked Questions to find helpful answers. Get the
        details on common queries and make the most of your experience
        effortlessly.
      </p>
      <div className="CollapseWrap">
        {faqDataArray.map((item) => (
          <Collapse key={item.key} items={[item]} className="collapse" />
        ))}
      </div>
    </QuestionsStyle>
  );
};
