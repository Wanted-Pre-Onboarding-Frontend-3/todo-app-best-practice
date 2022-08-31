import React from 'react'
import styled from 'styled-components'
import { colors } from '../core/colors'

export interface LinkProps {
  className?: string;
  children: React.ReactNode;
  onClick?: ()=> void;
}

export const LinkButton: React.FC<LinkProps> = (props) => {
  const { children, onClick } = props

  return <LinkWrap onClick={onClick}>{children}</LinkWrap>
}

const LinkWrap = styled.button`
  background: ${colors.primary400};
  outline: none;
  border: none;
  height: 45px;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  &&:hover {
    background: ${colors.primary700};
  }
`;
