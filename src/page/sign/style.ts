import styled from 'styled-components';
import { colors } from "../../styles/colors";
import { fontSize, fontWeight } from "../../styles/typography";


export const DivWrap = styled.div`
  display: flex;
  flex: 1;
  padding: 0 20px;
`;

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Container = styled.div`
  margin-bottom: 8px;
`;

export const InputTitle = styled.div`
  color: ${colors.primary700};
  font-weight: ${fontWeight.medium};
  font-size: ${fontSize.M4};
  margin-bottom: 8px;
`;

export const InputWrap = styled.input`
  width: 100%;
  border: 1px solid ${colors.grey700};
  height: 40px;
  border-radius: 3px;
`;

export const SubmitButton = styled.button<{ $isActive?: boolean }>`
  height: 40px;
  background-color: ${(props) => (props.$isActive ? `${colors.grey500}` : `${colors.primary700}`)};
  cursor: ${(props) => (props.$isActive ? 'unset' : 'pointer')};
  color: ${colors.white};
`;