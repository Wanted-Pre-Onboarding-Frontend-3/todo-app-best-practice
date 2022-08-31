import React from 'react'
import styled from 'styled-components'
import { colors } from '../core/colors'

export interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props

  return <LayoutDiv>{children}</LayoutDiv>
}

const LayoutDiv = styled.div`
  width:500px;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height:100vh;
  background-color: ${colors.grey200}
`
