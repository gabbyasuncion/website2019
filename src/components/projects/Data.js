import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

function Data() {
  return (
    <PageContainer>
      <Title>Data Configuration Script</Title>
      <div>
        <h2>Introduction</h2>​ While working at my internship this past summer
        (2018), I was tasked with pulling data from our database and configuring
        it to make it presentable to business partners. Towards the tail-end of
        my internship, I realized that this task, which took both my boss and me
        about an hour to complete, took a lot longer than it need to. ​ In order
        to fix this, I decided to write a Python script that read a large
        spreadsheet, pulled from our database, and created a new spreadsheet
        that was easy to read. I cannot share my exact code primarily because I
        lost access to it when they closed my company domain account and it
        contains some information I should keep private (such as business
        partners).
        <h2>Reading & Writing to an Excel Spreadsheet</h2>
        In order to actually read and write to a spreadsheet, I had to​ do some
        research about Excel interaction using Python. There are several options
        out there but I decided to use the very basic xlrd and xlwrt packages in
        Python that allowed me to interact with the spreadsheets as if they were
        2D arrays. ​<h2>Filtering and Pulling Relevant Data</h2>In the script
        itself, I hardcoded a list of promocodes unique to each of our partners.
        I also pulled the monthly data from our database. The data I pulled had
        headers similar to the following: <br />
        In a nested for-loop, I compared each of the promocodes in the list to
        the elements from the promocode column to pull all the rows that
        contained our partner promocodes. This also ensured that all the data
        for a given company was grouped together when it's written to the new
        spreadsheet. If the promocode were not used in that month, the loop
        would just continue onto the next code in the list. ​ Furthermore, I
        wrote the script to only copy over data from fields relevant to the
        partner. For example, our original data has fields with contractor
        information -- information that isn't necessarily relevant to the
        monthly summary that a partner would want to see. For that, I had also
        hard-coded a list of relevant fields. As I pulled data from the selected
        rows, I also made sure to only copy over fields that matched the fields
        in the list.
        <h2>Result & Reflection</h2>
        In the end, my script was able to decrease the duration of the task to
        about 5 minutes. Given that this script was made in my last week, I did
        not have the time to develop it and make it more user-friendly. ​ If I
        were to continue to develop this script, I'd ultimately like to have it
        pull directly from the database rather than having to pull the data
        manually. I would've been able to do this with a SQL query and read this
        directly instead of exporting to an Excel sheet. ​ I also would've liked
        to make the script into an executable that can be run either locally or
        ideally via web application. This way, the user (i.e. my boss) would be
        able to alter the promocode list and relevant field list without having
        to deal with Python syntax. Also, it could be run with the click of a
        button rather than with a terminal command. ​ Knowing C now, I'd feel
        comfortable creating an executable in C that could be executed with a
        nice GUI that would be optimized to be user friendly and more easily
        expandable.
        <h2>Conclusion</h2>
        While this wasn't an overly complicated project, it was one of the first
        CS projects I attempted outside of class assignments. It turned out to
        be incredibly rewarding when it decreased the duration of such a tedious
        task to 5 minutes. Having been in a startup environment, I learned that
        plenty of tasks have to be bootstrapped and cannot necessarily be the
        most efficient due to limited resources. I also learned situations like
        these are perfect for both my creative and CS minds. ​ I enjoyed
        applying my CS background to an issue outside of school that actually
        made my life easier later on. I want to continue to apply myself to
        issues like these and ultimately use my creativity and CS background to
        come up with solutions to larger issues that affect the world outside of
        my company.
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

export default Data;
