import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, DivWrap, FormWrap, InputTitle, SubmitButton } from './style';
import { Api } from '@/api/api';
import { Text } from '@/components/text';
import { TextField } from '@/components/text-field';
import { colors } from '@/styles/colors';
import { setToken } from '@/utils/storage';

export interface SignIn {
  email: string;
  password: string;
}

export interface AxiosResponseData {
  data: {
    error: string;
    message: string;
    statusCode: number;
  };
}

export const SignIn = () => {
  const navigate = useNavigate();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    await onClickLoginButton({ email, password });
  };

  const onClickLoginButton = async (data: { email: string; password: string }) => {
    const { password, email } = data;

    try {
      const { data: resData } = await Api.authSignIn.request(email, password);
      setToken({ email, token: resData?.access_token });
      navigate('/todos');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        const { response } = axiosError;

        if (response?.status === 404) {
          const { data } = response as AxiosResponseData;
          alert(data?.message);
        }
      }
    }
  };

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<{ message: string; emailError?: boolean; confirm?: boolean }>({
    message: '',
    confirm: true,
  });
  const [passwordError, setPasswordError] = useState<{ message: string; passwordError?: boolean; confirm?: boolean }>({
    message: '',
    confirm: true,
  });
  const isValidByEmailRegex =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isValidOrSetEmailError = () => {
    if (!email.length) {
      return setEmailError({
        message: '이메일을 입력해주세요',
        emailError: true,
        confirm: true,
      });
    }

    if (!isValidByEmailRegex.test(email)) {
      return setEmailError({
        message: '이메일 포맷이 맞지 않습니다.',
        emailError: true,
        confirm: true,
      });
    }

    return setEmailError({
      message: 'ok',
      emailError: false,
      confirm: false,
    });
  };

  const isValidOrSetPasswordError = (password: string) => {
    if (password.length < 1) {
      return setPasswordError({
        message: '비밀번호를 입력해주세요',
        passwordError: true,
        confirm: true,
      });
    }

    if (password.length < 8) {
      return setPasswordError({
        message: '비밀번호는 8자리 이상으로 작성해주세요',
        passwordError: true,
        confirm: true,
      });
    }

    return setPasswordError({
      message: 'ok',
      passwordError: false,
      confirm: false,
    });
  };

  return (
    <DivWrap>
      <FormWrap onSubmit={onSubmit}>
        <Container>
          <InputTitle>Email</InputTitle>
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
              isValidOrSetEmailError();
            }}
            error={emailError.emailError}
            helpText={emailError.emailError && emailError.message}
          />
        </Container>

        <Container>
          <InputTitle>Password</InputTitle>
          <TextField
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
              isValidOrSetPasswordError(e.currentTarget.value);
            }}
            error={passwordError.passwordError}
            helpText={passwordError.passwordError && passwordError.message}
            type="password"
          />
        </Container>

        <SubmitButton
          type="submit"
          $isActive={passwordError.confirm && passwordError.confirm}
          onClick={() => onClickLoginButton({ password, email })}
        >
          <Text color={colors.white} fontSize="M2" fontWeight="regular">
            로그인하기
          </Text>
        </SubmitButton>
      </FormWrap>
    </DivWrap>
  );
};
