import styled from "styled-components";
import React from "react";
import "./App.css";

const Home = () => {
  return (
    <Header>
      <h1>The Last Slice!</h1>

      <h2>Select "Place Online Order!" To Get Your Slice Now!</h2>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: black;
  padding: 10px 0px;
`;
export default Home;
