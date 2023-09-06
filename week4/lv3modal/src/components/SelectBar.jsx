import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 95vw;
  height: 200px;
  background-color: white;
  border: 4px solid #dddddd;
  margin-top: 40px;
  overflow: hidden;
`;
const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
`;
const SelectMenu = styled.button`
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  width: 80%;
  margin-right: 15px;
  display: inline;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const OptionContents = styled.div`
  border: 1px solid #dddddd;
  width: 40%;
  background-color: white;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 10px;
  line-height: 200%;
  position: absolute;
  top: 66%;
`;
const OtherOptionContents = styled.div`
  border: 1px solid #dddddd;
  width: 80%;
  background-color: white;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 10px;
  line-height: 200%;
`;

function SelectBar() {
  const [display, setDisplay] = useState(false);
  const [overFlow, setOverFlow] = useState(false);
  const [text, setText] = useState("");
  const [otherText, setOhterText] = useState("");
  const list = ["리액트", "스프링", "자바", "스크립트"];
  const handleText = (text) => {
    setText(text);
    setDisplay(false);
  };
  const handleOtherText = (text) => {
    setOhterText(text);
    setOverFlow(false);
  };
  return (
    <Container>
      <h1>Select</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <SelectGroup>
          <SelectMenu
            onClick={() => {
              setDisplay(!display);
            }}
          >
            {text}
            <FontAwesomeIcon icon={faAngleDown} />
          </SelectMenu>
          <OptionContents style={{ display: display ? "block" : "none" }}>
            <ul>
              {list.map((item, index) => (
                <li
                  onClick={() => {
                    handleText(item);
                  }}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </OptionContents>
        </SelectGroup>

        <SelectGroup>
          <SelectMenu
            onClick={() => {
              setOverFlow(!overFlow);
            }}
          >
            {otherText}
            <FontAwesomeIcon icon={faAngleDown} />
          </SelectMenu>
          <OtherOptionContents
            style={{ overflow: "hidden", display: overFlow ? "block" : "none" }}
          >
            <ul>
              {list.map((item, index) => (
                <li
                  onClick={() => {
                    handleOtherText(item);
                  }}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </OtherOptionContents>
        </SelectGroup>
      </div>
    </Container>
  );
}

export default SelectBar;
