import styled from "styled-components";

export default function Input({ ...props }) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 8px;
  padding: 0 12px;
  outline: none;
  border: 1px solid rgb(51, 51, 51);
`;
