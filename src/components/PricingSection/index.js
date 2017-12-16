import React from "react";
import Button from "../Button";
import styled from "styled-components";

import Colors from "../../colors";
import greenTickSrc from "../../assets/green_tick.svg";
import redCrossSrc from "../../assets/red_cross.svg";

const Section = styled.div`
  width: 80%;
  margin: auto;
`;

const PricingContainer = styled.section`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: center;
  position: relative;
  /* box-shadow: 0px 0px 35px #082aa3; */
  z-index: 2;
`;

const Pricing = props => (
  <PricingContainer>
    <Section {...props} />
  </PricingContainer>
);

const Heading = styled.h1`
  text-align: center;
  color: ${Colors.primaryColor};
  font-size: 1.5em;
`;

const PricingTable = styled.table`
  width: 100%;
`;

const Row = styled.tr``;

const Cell = styled.td`
  border: 1px solid #eee;
  padding: 15px;
  text-align: center;

  @media (max-width: 375px){
    padding-left: 0;
    padding-right: 0;
  }
`;

const FeatureCell = styled.td`
  border: 1px solid #eee;
  padding: 20px;
  padding-bottom: 5px;
  background-color: #eee;
  text-align: left;

  @media (max-width: 375px){
    padding: 10px 0;
    text-align: center;
  }
`;

const TitleCell = styled.th`
  border: 1px solid #eee;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;

  @media (max-width: 375px){
    padding-left: 0;
    padding-right: 0;
  }
`;

const Icon = styled.img`
  max-width: 30px;
`;

const ButtonContainer = styled.div`
  margin-top: 100px;
`;

export default function PricingSection() {
  return (
    <Pricing>
      <Heading>Pricing Plans</Heading>
      <PricingTable cellSpacing="0">
        <Row>
          <TitleCell>Starter Pack</TitleCell>
          <TitleCell>Growth Pack</TitleCell>
          <TitleCell>Pro Pack</TitleCell>
        </Row>
        <Row>
          <FeatureCell colSpan="3">Product Development Hours</FeatureCell>
        </Row>
        <Row>
          <Cell>200-500 hrs/month</Cell>
          <Cell>500-1000 hrs/month</Cell>
          <Cell>1000-5000 hrs/month</Cell>
        </Row>
        <Row>
          <FeatureCell colSpan="3">Ship With Feature Flags</FeatureCell>
        </Row>
        <Row>
          <Cell><Icon src={redCrossSrc}/></Cell>
          <Cell>
            <Icon src={greenTickSrc} />
          </Cell>
          <Cell>
            <Icon src={greenTickSrc} />
          </Cell>
        </Row>
        <Row>
          <FeatureCell colSpan="3">Rollover Development Hours</FeatureCell>
        </Row>
        <Row>
          <Cell>40%</Cell>
          <Cell>80%</Cell>
          <Cell>100%</Cell>
        </Row>
        <Row>
          <FeatureCell colSpan="3">Design Specs</FeatureCell>
        </Row>
        <Row>
          <Cell><Icon src={redCrossSrc}/></Cell>
          <Cell><Icon src={redCrossSrc}/></Cell>
          <Cell>
            <Icon src={greenTickSrc} />
          </Cell>
        </Row>
        <Row>
          <FeatureCell colSpan="3">Code Reviews</FeatureCell>
        </Row>
        <Row>
          <Cell>Unlimited</Cell>
          <Cell>Unlimited</Cell>
          <Cell>Unlimited</Cell>
        </Row>
        <Row>
          <FeatureCell colSpan="3">Tech Specs</FeatureCell>
        </Row>
        <Row>
          <Cell>
            <Icon src={greenTickSrc} />
          </Cell>
          <Cell>
            <Icon src={greenTickSrc} />
          </Cell>
          <Cell>
            <Icon src={greenTickSrc} />
          </Cell>
        </Row>
        <Row>
          <FeatureCell colSpan="3">QA Coverage</FeatureCell>
        </Row>
        <Row>
          <Cell><Icon src={redCrossSrc}/></Cell>
          <Cell>100%</Cell>
          <Cell>100%</Cell>
        </Row>
        <Row>
          <FeatureCell colSpan="3">Customer Usage Analytics</FeatureCell>
        </Row>
        <Row>
          <Cell><Icon src={redCrossSrc}/></Cell>
          <Cell><Icon src={redCrossSrc}/></Cell>
          <Cell>
            <Icon src={greenTickSrc} />
          </Cell>
        </Row>
        <Row>
          <FeatureCell colSpan="3">Critical Bug Fixes SLA</FeatureCell>
        </Row>
        <Row>
          <Cell>24-72 hours</Cell>
          <Cell>3-10 hours</Cell>
          <Cell>1-2 hours</Cell>
        </Row>
      </PricingTable>
      {/* <ButtonContainer>
        <Button>Get in touch</Button>
      </ButtonContainer> */}
    </Pricing>
  );
}
