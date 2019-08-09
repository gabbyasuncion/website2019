import React from "react";
import styled from "@emotion/styled";

function HomePage() {
  return (
    <React.Fragment>
      <Container>
        <Intro>>> hello world! i'm gabby :)</Intro>
        <SubIntro>
          i'm passionate about utilizing technology <br /> to build socially
          impactful solutions.
        </SubIntro>
        <Section>
          <About>
            i'm a rising junior at brown university studying computer science
            with a focus in design and artificial intelligence. i'm currently a
            fullstack software engineering intern at{" "}
            <a
              href="https://www.goguardian.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              GoGuardian
            </a>
            .
          </About>
          <About>
            outside of school, i dance with{" "}
            <a
              href="https://www.facebook.com/attitudeatbrown/"
              rel="noopener noreferrer"
              target="_blank"
            >
              attitude dance company
            </a>
            , coordinate the{" "}
            <a
              href="https://www.brown.edu/about/visit"
              rel="noopener noreferrer"
              target="_blank"
            >
              experience brown program
            </a>
            , and co-lead rogue fashion.
          </About>
        </Section>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  margin-right: 300px;
  margin-top: 180px;
  width: 900px;
  float: right;
`;

const Section = styled.div`
  width: 600px;
  float: right;
`;

const Intro = styled.div`
  font-size: 24pt;
  margin-bottom: 10px;
`;

const SubIntro = styled.div`
  font-size: 14pt;
  margin-bottom: 30px;
`;

const About = styled.div`
  font-size: 13pt;
  font-family: "Open Sans", sans-serif;
  text-align: justify;
  a {
    color: gray;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #79addc;
    }
  }
  padding: 7px 0px;
`;

export default HomePage;
