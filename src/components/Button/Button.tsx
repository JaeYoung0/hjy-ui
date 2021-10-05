import React from "react";
import styled from "@emotion/styled";

const MyButton = styled.button`
  color: white;

  width: 10rem;
  height: 5rem;
  border: none;
  border-radius: 10px;
  font-size: 1.6rem;
`;

export interface ButtonProps {
  backgroundColor?: string;
  //   size?: "small" | "medium" | "large";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text?: string;
}

function Button({ backgroundColor, onClick, text }: ButtonProps) {
  return (
    <MyButton onClick={onClick} style={{ background: `${backgroundColor}` }}>
      {text}
    </MyButton>
  );
}

export default Button;
