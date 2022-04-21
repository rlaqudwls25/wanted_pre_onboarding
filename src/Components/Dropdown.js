import React, { useState } from "react";
import styled from "styled-components";
import { mixin } from "../Styles/mixin";
import { AiFillCaretDown } from "react-icons/ai";
import { DropdownOptions } from "../Config/config";

const Dropdown = () => {
  const [inputValue, setInputValue] = useState(DropdownOptions[0].value);
  const [filteredData, setFilteredData] = useState(DropdownOptions);
  const [open, setOpen] = useState(false);

  const onInputValueChange = (e) => {
    const searchWord = e.target.value;
    const newFilter = DropdownOptions.filter((item) => {
      return item.value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData(DropdownOptions);
    } else {
      setFilteredData(newFilter);
    }
  };

  const openList = () => {
    setOpen(!open);
  };

  const onItemClick = (item) => {
    setInputValue(item.value);
    setOpen(false);
  };
  return (
    <>
      <Container>
        <DropdownContainer>
          <InputContainer onClick={openList}>
            <input value={inputValue} readOnly />
            <AiFillCaretDown />
          </InputContainer>
        </DropdownContainer>
        <DropdownListBox open={open}>
          <input
            type="text"
            placeholder="Search..."
            onChange={onInputValueChange}
          />
          {filteredData.map((item) => {
            const { id, value } = item;
            return (
              <DropdownWrapper key={id} onClick={() => onItemClick(item)}>
                <DropdownContent>{value}</DropdownContent>
              </DropdownWrapper>
            );
          })}
        </DropdownListBox>
      </Container>
    </>
  );
};

export default Dropdown;

const Container = styled.div`
  ${mixin.flexSet("_", "center", "column")}
`;

const DropdownContainer = styled.div`
  ${mixin.borderSet("1", "solid", "rgb(190,190,190)")}
  height: 30px;
  width: 200px;
  background-color: #eeeeee;
  padding: 8px 4px 0px 5px;
`;

const DropdownListBox = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  ${mixin.borderSet("1", "solid", "rgb(190,190,190)")};
  width: 200px;
  margin-top: 5px;
  background-color: #eeeeee;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: hidden;

  input {
    border-bottom: 1px solid rgb(190, 190, 190);
    height: 30px;
    width: 200px;
    padding: 5px;
    background-color: #eeeeee;
  }
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;

  svg {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 18px;
  }
`;

const DropdownWrapper = styled.div`
  ${mixin.flexSet("_", "center")}
  height: 33px;
  cursor: pointer;
  &:hover {
    background-color: rgb(190, 190, 190);
  }
`;

const DropdownContent = styled.div`
  margin: 10px 5px;
`;
