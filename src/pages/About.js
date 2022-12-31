import React, { useEffect } from "react";
import NavigationBar from "../Components/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import challenges from "../assets/AboutPageImages/thoughtprocess.svg";
import eth from "../assets/AboutPageImages/ether.svg";
import devImage from "../assets/AboutPageImages/devImage.svg";
import ReCAPTCHA from "react-google-recaptcha";

const About = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <Container fluid>
          <Row className="justify-content-md-center" align="center">
            <Col xs lg="4" className="justify-content-start d-flex">
              <img
                className="about-section-illustration"
                src={eth}
                alt="secure computer"
              />
            </Col>
            <Col xs lg="4" align="right" className="d-flex align-items-center">
              <div>
                <h2 className="about-section-title">How it works</h2>
                <h4 className="about-section-paragraph">
                  This Ethereum Mining Tax Calculator is an open source web
                  application built with ReactJS, NodeJS, and Express
                </h4>
                <h4 className="about-section-paragraph">
                  Using a public Ethereum wallet address that has your Ethereum
                  mining income transactions, and a raw transactions report from
                  Coinbase, we can generate an 8949 form for Sales and Other
                  Dispositions of Capital Assets
                </h4>
                <h4 className="about-section-paragraph">
                  Your data is never collected or stored and your financial
                  transactions are safe with you
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="d-flex align-items-center">
        <Container fluid>
          <Row className="justify-content-md-center" align="left">
            <Col xs lg="4">
              <h2 className="about-section-title">Challenges</h2>
              <ul style={{ paddingLeft: "1.6rem" }}>
                <li>
                  Using a reducer pattern to manage state and dispatching user
                  actions to manage steps of the process
                </li>
                <li>
                  Using conditional rendering to only render the steps the user
                  has completed
                </li>
                <li>
                  Learning how to use useEffect to fetch data and update
                  components
                </li>
                <li>Implementing and testing my capital gain/loss algorithm</li>
                <li>
                  Using middleware to return test data when the user is trying
                  the demo
                </li>
              </ul>
            </Col>
            <Col xs lg="4" className="justify-content-end d-flex">
              <img width={"450"} src={challenges} alt="Challenges" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="d-flex align-items-center">
        <Container fluid>
          <Row className="justify-content-md-center" align="center">
            <Col xs lg="4" className="justify-content-start d-flex">
              <img
                className="about-section-illustration"
                src={devImage}
                alt="secure computer"
              />
            </Col>
            <Col xs lg="4" align="right">
              <h2 className="about-section-title">About Me</h2>
              <h4 className="about-section-paragraph">
                My name is Timothy Naumov
              </h4>
              <h4 className="about-section-paragraph">
                I am a student at the University of Texas at Dallas studying
                Software Engineering with an application domain in Information
                Assurance and Networking
              </h4>
              <h4 className="about-section-paragraph">
                I am passionate about learning new technology and spend my free
                time building web apps like the one you're looking at now!
              </h4>
              <h4>
                Add me on{" "}
                <a href="https://www.linkedin.com/in/timothy-naumov/">
                  LinkedIn
                </a>{" "}
                to keep up with what I've been working on
              </h4>
            </Col>
          </Row>
          <Row className="justify-content-md-center" align="center"></Row>
        </Container>
      </div>
    </>
  );
};

export default About;
