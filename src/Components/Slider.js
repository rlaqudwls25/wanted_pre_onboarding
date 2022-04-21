import React, { useState } from "react";
import styled from "styled-components";
import { mixin } from "../Styles/mixin";
import { Numbers } from "../Config/config";

const Slider = () => {
  const [number, setNumber] = useState(1);

  const percentChange = (e) => {
    setNumber(e.target.value);
  };

  const onClickBtn = (number) => {
    setNumber(number);
  };

  return (
    <>
      <Container>
        <PercentInput value={number} readOnly />
        <PercentBox>%</PercentBox>
        <ProgressBar
          type="range"
          onChange={percentChange}
          value={number}
          min="1"
        />
        <CountWrapper>
          {Numbers.map((number, idx) => {
            return (
              <CountBtn key={idx} onClick={() => onClickBtn(number)}>
                {number}%
              </CountBtn>
            );
          })}
        </CountWrapper>
      </Container>
    </>
  );
};

export default Slider;

const Container = styled.div`
  ${mixin.flexSet("center", "center", "column")}
  position: relative;
  width: 400px;
  height: 200px;
  background-color: #eeeeee;
`;

const PercentInput = styled.input`
  width: 350px;
  height: 60px;
  border: 1px solid rgb(190, 190, 190);
  font-size: 20px;
  font-weight: bold;
  padding-left: 260px;
`;

const PercentBox = styled.div`
  position: absolute;
  right: 45px;
  bottom: 121px;
`;

const CountWrapper = styled.div`
  ${mixin.flexSet("space-around", "center", "_")}
  width: 100%;
`;

const ProgressBar = styled.input`
  width: 350px;
  height: 20px;
  margin-top: 20px;
`;

const CountBtn = styled.button`
  width: 40px;
  height: 20px;
  margin-top: 5px;
  border-radius: 20px;
  background-color: rgb(240, 250, 250);

  &:hover {
    background-color: rgb(79, 172, 174);
  }
`;
