import React, { useState } from "react";
import styled from "styled-components";
import { mixin } from "../Styles/mixin";
import { ToggleName } from "../Config/config";

const Toggle = () => {
  const [check, setCheck] = useState(false);

  const onChangeCheck = (check) => {
    setCheck(!check);
  };

  return (
    <>
      <ToggleContainer>
        <ButtonWrapper check={check}></ButtonWrapper>
        {ToggleName.map((item) => {
          const { name } = item;
          return (
            <Btn name={name} onClick={() => onChangeCheck(check)}>
              {name}
            </Btn>
          );
        })}
      </ToggleContainer>
    </>
  );
};

export default Toggle;

const ToggleContainer = styled.div`
  ${mixin.flexSet("_", "center")}
  ${mixin.borderSet("1", "solid", "#EEEEEE")}
  position: relative;
  width: 460px;
  height: 60px;
  background-color: #eeeeee;
  border-radius: 70px;
`;

const Btn = styled.div`
  position: absolute;
  left: ${(props) => (props.name === "기본" ? "100px" : "320px")};
`;

const ButtonWrapper = styled.div`
  width: 49%;
  height: 50px;
  margin-left: 5px;
  background: white;
  border-radius: 70px;
  transition: transform 1s;
  ${(props) => props.check && `transform: translateX(100%);`}
`;
