
import React from 'react';

import { RootWrap } from './styles';
import { FontSizeKey, FontWeightKey, TextDecorationKey } from '../../core/typography'
import { toStyledProps } from '../../utils/styled.util'

type TextElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'pre' | 'span' | 'div';

export type TextProps = {
  color?: string;
  fontSize?: FontSizeKey;
  fontWeight?: FontWeightKey;
  textDecoration?: TextDecorationKey;
  lineClamp?: number;
};

interface Props extends TextProps {
  className?: string;
  children?: React.ReactNode;

  element?: TextElementType;
}

// util component
export const Text: React.FC<Props> = (props) => {
  const { className, children, element, ...rest } = props;

  const styledProps = toStyledProps(rest);

  return (
    <RootWrap className={className} as={element} {...styledProps}>
      {children}
    </RootWrap>
  );
};
