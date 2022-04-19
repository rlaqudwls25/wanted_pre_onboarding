import React, { useState } from "react";
import styled from "styled-components";
import { mixin } from "../Styles/mixin";
import { TabMenu } from "../Config/config";

const Tab = () => {
  const [name, setName] = useState("감자");

  const onChangeTab = (name) => {
    setName(name);
  };

  return (
    <TabContainer>
      {TabMenu.map((item, idx) => {
        return (
          <>
            <TabList key={idx} onClick={() => onChangeTab(item)}>
              {item}
            </TabList>
          </>
        );
      })}
      <TabBottomSlider name={name} />
    </TabContainer>
  );
};

export default Tab;

const TabContainer = styled.div`
  ${mixin.flexSet("space-evenly", "center")}
  width: 400px;
  height: 50px;
  position: relative;
  background-color: #eeeeee;
`;

const TabList = styled.div`
  ${mixin.flexSet("center", "center")}
  width: 33%;
  cursor: pointer;
`;

const TabBottomSlider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 33%;
  ${mixin.borderSet("1", "solid", "black")}
  transform: translateX(
    ${({ name }) => {
    if (name === "감자") {
      return "0%";
    } else if (name === "고구마") {
      return "100%";
    } else if (name === "카레라이스") {
      return "200%";
    }
  }}
  );
  transition: 1s;
`;
