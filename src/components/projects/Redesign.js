import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

function Redesign() {
  return (
    <PageContainer>
      <Title>Interace Redesign</Title>
      <div>
        <h2>Introduction</h2>
        This project serves as redesign for Vivi Bubble Tea's website. I mainly
        wanted to improve the site's general usability and learnability since
        users would visit the site a limited number of times. As a boba lover, I
        knew that I'd primarily visit the website for two purposes: to look at
        their menu and to find a nearby location. When I approached the
        redesign, I prioritized these functions. ​ I also made the site
        responsive so that it would adjust to different screen sizes and be
        usable whether someone is at home or on the go.
        <h2>Redesign Mockups</h2>
        Before writing any code, I first created mockups of five redesigned
        pages. I decided to redesign the homepage, locations page, contact page,
        menu page, and the about page. In general, I wanted the pages to be
        relatively simple and utilized a universal navigation bar to make the
        page learnable for a customer visiting the site for the first time. I
        went off the designs from other restaurants and bubble tea stores since
        experience with other websites puts an expectation into customers' minds
        regarding how the site should function. <br />
        Home page: For the home page, I decided to include a banner that would
        have a changing image of menu items. Below that banner, I included a
        store locator as well as some menu items with descriptions. This ensures
        that the primary purposes of the website are accessible from the home
        page. ​ <br />
        Contact page: The contact page is made to be very simple so that the
        customer can complete their task with ease. The page can be reached from
        any page and only requests the necessary information. Similarly, the
        location page provides a map and makes it very easy for a customer to
        find nearby locations. Should a customer be uncomfortable providing
        their actual location, the map allows for locations in state and even
        filters by zipcode on the home page. ​ <br />
        Menu page: Then menu page utilizes a grid layout to make it easier to
        see a lot of items at once without being overwhelmed. Furthermore, in
        the actual development of the site, I would create a filter so that
        customers can also decrease the content they see. This allows menu
        selections and exploration to be learnable for any first time visitor
        while also giving them the ability to explore the whole menu. ​ <br />
        About page: Lastly, the about page has more content since a customer
        would only navigate to this page if they would like to know about Vivi.
        For this, I used the same general branches of information from their
        site but organized it in a grid and used whitespace as a natural
        boundary between sections. This grouping makes it obvious that
        information is relevant while also maximizing the amount of content on
        screen at once.
        <h2>High Fidelity Prototype and Responsiveness</h2>I created a
        high-fidelity prototype for the homepage. I decided to keep Vivi's
        general color-scheme since I thought it established a clear sense of
        contrast while maintaining their playful branding. Click the image to
        see responsiveness annotations. Figure 3: Annotated prototype The 4K
        computer monitor view of the site corresponds to the F-shaped way in
        which we utilize computers and was inspired by the flow of hierarchy
        employed by Google. In order to present information in a landscape
        format, I displayed information with a grid layout then used color
        hierarchy and whitespace / text grouping to create a clear flow from one
        piece of information to the next. As for the tablet layout, I still
        utilized a grid but took inspiration instead from a newspaper, laying
        the photos on the outside and placing the text on the inside to increase
        readability from one menu item to the next. I also placed the map below
        the menu items now because the new user thought process while using a
        tablet is to check out what’s available then find a location if it seems
        interesting. Lastly for the phone design, I created a linear grid that
        displays all information on its own row so not to crowd the smaller
        screen and overwhelm the user. However, I utilized some whitespace
        manipulation to distinguish between new menu items and customer
        favorites. The map is kept below the menu information for the same
        reason as the tablet layout: it is easier to attract users to explore
        the site by placing inviting and appealing information above the fold of
        the page.
        <h2>Developed Site with Responsiveness</h2>
        Check out this repository to see my HTML and CSS implementation of this
        prototype: https://github.com/gabbyasuncion/redesign. I used media
        queries to make it responsive and CSS grid to create the layout I had
        developed in the mockup.
        <h2>Conclusion</h2>
        This project really targeted my ability to identify design principles,
        such as memorability and usability, and apply them. After developing the
        mockups and the prototype, I also realized how much our devices
        influence how we read and process information. The F-format and the
        hierarchy of colors, for example, takes inspiration from search engines
        and other websites. ​ Furthermore, I understood the importance of being
        responsive. Besides make the company itself seem more legitimate, a
        responsive site can be customized for any context that a user may be
        viewing a site. In particular, someone sitting at home on their computer
        doesn't have the same urgency to make a menu decision as someone heading
        to the restaurant and looking at the site on their phone. ​ Lastly, this
        project was the first I'd coded from scratch using HTML and CSS. I
        learned the cascade of control when using classes and IDs in CSS to
        style my divs. Though it was difficult, I genuinely enjoyed taking
        something from a concept to an actual site while employing design
        concepts from UI class, art class, and my experience designing the
        newspaper.
      </div>
    </PageContainer>
  );
}

const Title = styled.div`
  font-size: 24pt;
  float: left;
  text-align: left;
  font-family: "Fira Code", monospace;
`;

const PageContainer = styled.div`
  margin: 20px 75px 60px;
  text-align: left;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
`;

export default Redesign;
