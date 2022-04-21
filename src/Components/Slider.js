import React, { useState } from "react";
import styled from "styled-components";
import { mixin } from "../Styles/mixin";

const Cnt = [1, 25, 50, 75, 100];
const Slider = () => {
  const [count, setCount] = useState(1);

  const percentChange = (e) => {
    setCount(e.target.value);
  };

  const onClickBtn = (item) => {
    setCount(item);
  };

  return (
    <>
      <Container>
        <input value={count} readOnly />
        <PercentBox>%</PercentBox>
        <CountBtnWrapper>
          {Cnt.map((item) => {
            return (
              <CountBtn onClick={() => onClickBtn(item)}>{item}%</CountBtn>
            );
          })}
        </CountBtnWrapper>
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

  input {
    width: 350px;
    height: 60px;
    border: 1px solid black;
    padding-left: 260px;
    border: 1px solid rgb(190, 190, 190);
    font-size: 20px;
    font-weight: bold;
  }
`;

const PercentBox = styled.div`
  position: absolute;
  right: 45px;
  bottom: 121px;
`;

const CountBtnWrapper = styled.div`
  ${mixin.flexSet("space-around", "center", "_")}
  width: 100%;
`;

const CountBtn = styled.button`
  width: 40px;
  height: 20px;
  margin-top: 40px;
  border-radius: 20px;
  background-color: rgb(240, 250, 250);

  &:hover {
    background-color: rgb(79, 172, 174);
  }
`;
