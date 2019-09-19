import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

function Castyr() {
  return (
    <PageContainer>
      <Title>Castyr</Title>
      <div>
        <h2>Coming soon!</h2>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
`;

export default Castyr;
