import React from "react";
import styled from "@emotion/styled";
import Face from "./big-face-layered-gray.png";

function HomePage() {
  return (
    <React.Fragment>
      <Container>
        <FaceContainer>
          <img src={Face} alt="lol" />
        </FaceContainer>
        <TextContainer>
          <Intro>>> hello world! i'm gabby ★</Intro>
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
              , and co-lead rogue fashion group.
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
  margin: 0 100px;
  float: right;
  display: flex;
  @media only screen and (min-width: 1300px) {
    margin-top: 100px;
  }
  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    margin: 40px;
  }
  justify-content: space-between;
`;

const Section = styled.div`
  float: right;
  @media only screen and (min-width: 1300px) {
    max-width: 800px;
    margin-left: -80px;
  }
  @media only screen and (max-width: 1299px) {
    max-width: 1000px;
  }
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
  display: flex;
  img {
    @media only screen and (min-width: 1300px) {
      width: 325px;
      padding-top: 70px;
      padding-right: 200px;
    }
    @media only screen and (max-width: 1300px) {
      height: 300px;
      padding-bottom: 50px;
    }
  }
  justify-content: center;
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
