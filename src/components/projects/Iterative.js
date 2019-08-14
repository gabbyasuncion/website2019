import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

function Iterative() {
  return (
    <PageContainer>
      <Title>/iterative</Title>
      <ProjectSpecs>
        <h2>Introduction</h2>
        This project serves as an experiment in iterative design and eye
        tracking analysis. After selecting Canary Technologies, my group decided
        to create a high-fidelity prototype for their desktop software. Canary
        offers an intuitive and centralized solution to hotel management and
        customer service. My group sought to alter design with the intention to
        maximize efficiency. To achieve this, we decided to identify the core
        goals that employee would use this software to achieve. We then used
        those goals to create a flow of control that left little room for
        confusion.
        <h2>Sketches</h2>
        While sketching, each of us conceptualized one approach to the design
        but also took suggestions from each other while sketching to develop the
        idea further.
        <h3>My Sketch: Bubbles & Breadcrumbs</h3>
        This first sketch was very focused on being easy to learn and limited in
        use. We wanted to avoid confusing employees, and tried to make something
        that minimized error. As a result, I created a simple interface with
        large icons responsible for most of the navigation, as well as clear
        step-like breadcrumbs in the upper left corner.
        <h3>Our other sketches</h3>
        Guest-centric and color-coded (Figure 3): focused on memorability, but
        not necessarily learnability, as you need to select the guest to see the
        booking, amenities, and contract information, might not align best with
        the employee’s goals -- contributed to color-coding in final prototype
        <br />
        Universal navigation & lists (Figure 4): uses a universal navigation
        bar, could potentially confuse new employees, heavily relied on
        list-style layouts, which can be overwhelming with large amounts of
        information -- contributed to list-style layout for guests
        <br />
        Date-centric & boxes (Figure 5): relied heavily on a calendar style
        interface, resulted in too many clicks, could be frustrating to use when
        the date is unknown or uncertain -- contributed to calendar aspect of
        booking lifecycle
        <h2>High-Fidelity Prototype</h2>
        Despite their differences, we felt that each sketch had some valuable
        features we should include in our final prototype. While some sketches
        did a good job of representing a large quantity of information, others
        did a better job of controlling the flow of navigation concisely. For
        our high-fidelity prototype, we wanted to take a step back and
        reconsider some of the company’s goals. As a result, we came up with a
        prototype that incorporated many of the different sketches together: the
        navigation came from sketch 1, the calendars came from sketch 4, the
        filter/search layouts came from sketch 3, and the information grid
        layout came from sketch 2. The interactive prototype can be accessed{" "}
        <a href="https://www.figma.com/proto/f4bIRsOei5Z3gbAo67J8wK2D/Iterative?node-id=2%3A0&scaling=scale-down">
          here
        </a>
        .<h2>Critique / Feedback</h2>
        After engaging in a critique session and an eye-tracking session, we
        made some additional improvements from the feedback we received. <br />
        Limited universal navigation: We seemed to get a lot of opposing
        feedback, but ultimately we felt that having universal navigation didn’t
        line up with the company’s goals, as it would make learning how to use
        the app more difficult, and we wouldn’t be able to control the flow of
        navigation as well. <br /> Messaging functionality between employees:
        Because several commenters emphasized the importance of communication
        between hotel employees, we added a messaging feature that is available
        from every screen of the app and allows logged-in users to message other
        employees, and even filter by their department. ​ <br />
        Short-cut modifications: Someone critiqued that there was no clear way
        to modify the dates of a reservation. In response, we created drop down
        menus in the guest profile page to enable users to extend or shorten a
        guest’s stay.
        <h2>Conclusion</h2>
        We sent our prototype to Canary Technologies with a brief explanation of
        our design choices and are still awaiting their reply. While we haven't
        yet made any impact on their company, this project showed me the
        advantage of designing a product with a group. The issue with design is
        that so much of it is subjective. As a result, it can be incredibly
        difficult to critique and reconsider my own design since I created it.
        Though artistically it can sometimes be hard to work in a group, it
        makes sense design-wise to get different perspectives to explore all
        approaches before deciding on one. Working iteratively with a group
        provides several opportunities to reevaluate our design and fine-tune it
        to achieve the ultimate goal.
      </ProjectSpecs>
    </PageContainer>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: 24pt;
  margin-right: 150px;
`;

const Title = styled.div`
  font-size: 24pt;
  float: left;
  text-align: left;
`;

const ProjectSpecs = styled.div`
  height: 550px;
  width: 1100px;
  background-color: #fffbe6;
  overflow: scroll;
  margin-top: 50px;
  padding: 30px;
  text-align: left;
  font-family: "Open Sans", sans serif;
  color: #545454;
`;

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0px 50px;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
`;

export default Iterative;
