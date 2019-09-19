import React from "react";
import styled from "@emotion/styled";
import Face from "./my-face.png";

function HomePage() {
  return (
    <React.Fragment>
      <Container>
        <FaceContainer>
          <img src={Face} alt="lol" width="350px" />
        </FaceContainer>
        <TextContainer>
          <Intro>>> hello world! i'm gabby :)</Intro>
          <SubIntro>
            i'm passionate about utilizing technology <br /> to build socially
            impactful solutions.
          </SubIntro>
          <Section>
            <About>
              i'm a junior at brown university studying computer science with a
              focus in design and artificial intelligence. i was formerly a
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
        </TextContainer>
      </Container>
    </React.Fragment>
  );
}

const TextContainer = styled.div`
  float: right;
`;

const Container = styled.div`
  margin-right: 200px;
  margin-top: 100px;
  float: right;
  display: flex;
  justify-content: space-around;
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

const FaceContainer = styled.div`
  float: left;
  padding-top: 50px;
  padding-right: 150px;
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
