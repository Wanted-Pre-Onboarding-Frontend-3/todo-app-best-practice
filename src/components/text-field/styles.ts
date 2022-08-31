import styled from 'styled-components';
import { TextFieldProps } from './index';
import { ToStyledProps } from '../../utils/styled.util';
import { fontSizeCSS, fontWeightCSS, getLineClampCSS } from "../../styles/typography";
import { colors } from "../../styles/colors";

type StyledProps = ToStyledProps<Omit<TextFieldProps, 'size'>>;

export const DivWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-direction: column;
`;

export const HelpTextDivWRap = styled.div`
  padding: 16px;
`;

export const TextFieldDivWrap = styled.div<StyledProps>`
  width: 100%;
`;

export const TextFieldWrap = styled.input<StyledProps>`
  padding-left: 16px;
  padding-right: 16px;
  height: 54px;
  ${fontSizeCSS.M3};
  ${fontWeightCSS.medium};

  // this will prevent to display webkit search field styling
  // https://stackoverflow.com/a/9422689
  &[type='search']::-webkit-search-decoration,
  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-results-button,
  &[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  &[type='radio'],
  &[type='checkbox'] {
    cursor: pointer;
  }

  ${getLineClampCSS(1)};

  width: 100%;
  color: ${(props) => (props.$error ? colors.error500 : colors.grey800)};
  background-color: ${colors.white};
  border: 1px solid ${(props) => (props.$error ? colors.error500 : colors.grey500)};

  transition-property: background-color, color, border-color;
  transition-duration: 0.1s;
  transition-timing-function: ease;

  &:hover {
    @media (hover: hover) {
      border-color: ${(props) => (props.$error ? colors.error500 : colors.grey800)};
    }
  }

  &:focus {
    border-color: ${(props) => (props.$error ? colors.error500 : colors.grey800)};
  }

  &::placeholder {
    color: ${colors.grey600};
  }

  &:disabled {
    color: ${colors.grey600};
    background-color: ${colors.grey300};
    border-color: ${colors.grey500};
  }
`;