import { Collapse } from "antd";
import React from "react";
import { QuestionsStyle } from "./QuestionsStyle";

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
        <Collapse
          items={[
            {
              key: "1",
              label: "Are the activities safe and vetted for quality?",
              children: (
                <p>
                  Happy Camper prioritizes the safety and quality of every
                  activity on the platform. Each undergoes a stringent vetting
                  process, ensuring safety protocols, provider credentials, and
                  alignment with our high standards. Additionally, user reviews
                  and ratings offer insights from other parents, fostering a
                  safe and enriching experience for your child.
                </p>
              ),
            },
          ]}
        />
        <Collapse
          items={[
            {
              key: "2",
              label:
                "How do I sign up as a parent or provider on the platform?",
              children: (
                <p>
                  Signing up is easy! Click on the 'Sign Up' button, choose your
                  role (parent or provider), and follow the simple steps to
                  create your account.
                </p>
              ),
            },
          ]}
        />
        <Collapse
          items={[
            {
              key: "3",
              label:
                "Can I list activities that are outside the usual categories?",
              children: (
                <p>
                  If you have an activity that does not align with our
                  standards, please contact support to discuss your needs and
                  we'll try to accommodate your request
                </p>
              ),
            },
          ]}
        />
        <Collapse
          items={[
            {
              key: "4",
              label:
                "How can I change or update my child's profile information? ",
              children: (
                <p>
                  Making updates is easy! Access your profile in the app to make
                  updates to your children's profiles or add additional children
                  at any time.
                </p>
              ),
            },
          ]}
        />
        <Collapse
          items={[
            {
              key: "5",
              label:
                "Why do is it recommended that I provide my geolocation data? What is it used for?",
              children: (
                <p>
                  Providing your geolocation data is optional, but highly
                  recommended. This data is utilized to personalize our
                  recommendations and provide you with activities that are
                  nearby your current location. We respect your privacy and do
                  not provide this data to any third party companies, it is
                  strictly used to provide with our best recommendations for
                  nearby activities.
                </p>
              ),
            },
          ]}
        />
      </div>
    </QuestionsStyle>
  );
};
