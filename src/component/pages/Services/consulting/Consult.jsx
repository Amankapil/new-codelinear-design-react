import React from "react";
import "./cunsult.scss";

const Consult = () => {
  return (
    <div className="consulting pt-40 scroll-mt-80">
      <div className="main-consulting">
        <div className="head-consult">
          <h1>consulting and strategy</h1>
        </div>

        <div className="consult-content pt-20">
          <div className="main-content flex flex-wrap">
            <div className="market-research flex flex-col gap-8">
              <h1>Market Research</h1>
              <p>
                As technology is propelling the world into a new realm of
                disruptions, our strategic market research enables you to
                identify the viability of the product by directly taking
                insights from targeted consumers and market trends, enabling you
                to make decisions driven by consumer behaviour and data.
              </p>
            </div>
            <div className="market-research flex flex-col gap-8">
              <h1>Stakeholder Workshops</h1>
              <p>
                In order to create a sense of shared purpose and build momentum,
                we take a step ahead and organise stakeholder workshops to gain
                an edge over current scenarios and strategically develop an
                action plan.
              </p>
            </div>
            <div className="market-research flex flex-col gap-8">
              <h1>Product Strategy And Roadmapping</h1>
              <p>
                We align your product vision with strategy to differentiate you
                in a market and drive your business goals.We envision the future
                state of the product and develop a conscious roadmap to
                transform theoretical conjectures into working models.
              </p>
            </div>
            <div className="market-research flex flex-col gap-8">
              <h1>Technology Consulting And Platform Planning</h1>
              <p>
                Technology is becoming ubiquitous, and so is its impact. We
                assess your entire tech infrastructure, identify gaps, mitigate
                associated threats, and devise strategies that enable you to
                adapt and lead the digital transformation.
              </p>
            </div>
            <div className="market-research flex flex-col gap-8">
              <h1>GTM Strategy</h1>
              <p>
                Our Go-To-Market Strategy entails extensive research into the
                market condition. We devise comprehensive launch and marketing
                strategies for you to position yourself in the market by
                mitigating the risks and capitalising on data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;
