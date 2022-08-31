import React, { useRef } from 'react';

import { toStyledProps } from '../../utils/styled.util';
import { Text } from '../text';
import { DivWrap, HelpTextDivWRap, TextFieldDivWrap, TextFieldWrap } from './styles';
import { colors } from "../../styles/colors";

export type TextFieldProps = {
  disabled?: boolean;
  error?: boolean;
};

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, TextFieldProps {
  className?: string;

  onClickClear?: () => void;
  helpText?: string | boolean;
}

export const TextField: React.FC<Props> = (props) => {
  const {
    className,
    error,
    disabled,
    helpText,
    onClickClear: _onClickClear,
    onFocus: _onFocus,
    ...rest
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const isError = !disabled ? error : false;
  const styledProps = toStyledProps({ disabled, error: isError });

  const onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    _onFocus?.(e);
  };

  return (
    <DivWrap className={className} >
      <TextFieldDivWrap {...styledProps}>
        <TextFieldWrap ref={ref}
                       disabled={disabled}
                       onFocus={onFocus} {...styledProps} {...rest} />
      </TextFieldDivWrap >

      {helpText && (
        <HelpTextDivWRap >
          <Text fontSize="S2"
                fontWeight="medium"
                color={error ? colors.error500 : colors.grey600} >
            {helpText}
          </Text >
        </HelpTextDivWRap >
      )}
    </DivWrap >
  );
};
