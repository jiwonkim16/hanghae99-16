import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const LargePrimaryButton = styled.button`
  background-color: white;
  padding: 10px 15px;
  border: 2px solid #55efc4;
  border-radius: 5px;
  font-weight: 600;
  margin-right: 10px;
  cursor: pointer;
  &:active {
    /* background-color: #dddddd; */
    filter: brightness(90%);
  }
  span {
    margin-left: 5px;
  }
`;
const PrimaryMediumButton = styled(LargePrimaryButton)`
  background-color: #55efc4;
  font-weight: 400;
  padding: 10px 30px;
  border: none;
  &:active {
    /* background-color: rgba(28, 35, 51, 0.3); */
    filter: brightness(90%);
    /* border: none; */
  }
`;
const PrimarySmallButton = styled(LargePrimaryButton)`
  padding: 7px 10px;
  background-color: #55efc4;
  font-weight: 400;
  padding: 10px 20px;
  border: none;
  &:active {
    filter: brightness(90%);
  }
`;
const LargeNegativeButton = styled(LargePrimaryButton)`
  border: 2px solid #fab1a0;
  margin-top: 15px;
  color: #d63063;
  &:active {
    filter: brightness(90%);
  }
  span {
    color: black;
    margin-left: 5px;
  }
`;
const NegativeMediumButton = styled(PrimaryMediumButton)`
  background-color: #fab1a0;
  border: none;
  color: #d63063;
  &:active {
    filter: brightness(90%);
  }
`;
const NegativeSmallButton = styled(PrimarySmallButton)`
  background-color: #fab1a0;
  border: none;
  color: #d63063;
  &:active {
    filter: brightness(90%);
  }
`;

function Button() {
  const primaryBtn = () => alert("버튼을 만들어 보세요");
  const negativeBtn = () => prompt("어렵나요?");
  return (
    <div>
      <h1>Button</h1>
      <div>
        <LargePrimaryButton onClick={primaryBtn}>
          Large Primary Button
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </LargePrimaryButton>
        <PrimaryMediumButton>Medium</PrimaryMediumButton>
        <PrimarySmallButton>Small</PrimarySmallButton>
      </div>
      <div>
        <LargeNegativeButton onClick={negativeBtn}>
          Large Negative Button
          <span>
            <FontAwesomeIcon icon={faBell} />
          </span>
        </LargeNegativeButton>
        <NegativeMediumButton>Medium</NegativeMediumButton>
        <NegativeSmallButton>Small</NegativeSmallButton>
      </div>
    </div>
  );
}

export default Button;
