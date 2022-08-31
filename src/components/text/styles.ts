import styled from 'styled-components';
import type { TextProps } from './';
import { colors } from '@/styles/colors';
import { fontSizeCSS, fontWeightCSS, getLineClampCSS, textDecorationCSS } from '@/styles/typography';
import { ToStyledProps } from '@/utils/styled.util';

type StyledProps = ToStyledProps<TextProps>;

export const RootWrap = styled.p<StyledProps>`
  ${(props) => fontSizeCSS[props.$fontSize || 'M2']};
  ${(props) => fontWeightCSS[props.$fontWeight || 'regular']};
  ${(props) => textDecorationCSS[props.$textDecoration || 'none']};
  ${(props) => (props.$lineClamp ? getLineClampCSS(props.$lineClamp) : undefined)};

  margin: 0;
  padding: 0;
  color: ${(props) => props.$color || colors.black};

  transition: color 0.1s ease;
`;
