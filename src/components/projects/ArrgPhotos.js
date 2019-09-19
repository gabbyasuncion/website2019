import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

function ArrgPhotos() {
  return (
    <PageContainer>
      <Title>ARrg Photos</Title>
      <div>
        <h2>Introduction</h2>We primarily wanted to explore the capabilities of
        augmented reality and decided to create a virtual tour of Brown's campus
        as well as a few other experiments. Ultimately, we were able to create
        an app that allowed users to "walk through" Brown's campus. This opens
        up possibilities in terms of providing students the opportunity to tour
        campuses that they cannot visit in person.
        <h2>Process</h2>
        We created TourAR using Google Streetview API, Google Static Maps API,
        Three.js, coding on Python, Javascript, and Mathematica. ​ My
        Contribution: Gathering photos using Google Maps API ​ I worked together
        with Jessica to create a Python script that queried the Google
        Streetview API for several photos around the coordinates of an area we
        chose. Using Python we looped through different latitude and longitude
        values and which we set as parameters in requests to Google Streetview
        API. The images returned by the request were saved and used in the AR.
        We plotted the positions of each image as markers on a satellite map
        using Google Static Maps API. Though the script itself was relatively
        slow with O(n^3) runtime, we both had yet to learn about algorithm
        efficiency and runtime analysis. See Hack2018.py in our Github repo for
        the exact code we used. ​ For using webAR we first tried hard to
        understand the examples that were given to us. Then we tried rendering a
        single image (image.html), and this we found we could simply do by
        rendering a mesh with a texture taken from the image. After that we
        tried putting a panel (panel 16.html). After that we put in little
        groups for the four points of interest. And finally we found it cool if
        above each group we had a little title for the region being looked at.
        We also randomized the positions of the images so that they would look
        more artsy!
        <h2>Conclusion</h2>
        This was my first time working collaboratively on a project and in a
        hackathon so I was incredibly intimidated by the whole event. However,
        by the end, I had met a huge number of people in the CS community and
        was proud of whatI was able to contribute after just one CS class. ​
        Having just finished an OOP class in Java, I had to learn how to use
        Python and Google's APIs rather quickly. I realized then that a lot of
        computer science can be learned outside of class by building on the
        fundamentals of the classes I'd taken. This also set the stage for the
        data structures and algorithms class I had taken spring semester,
        freshman year.
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

export default ArrgPhotos;
