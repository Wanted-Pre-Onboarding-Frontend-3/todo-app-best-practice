import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'
import { colors } from '../core/colors'
import { fontSize, fontWeight } from '../core/typography'
import { Api } from '../api/api'
import { setToken } from '../utils/storage'
import axios, { AxiosError } from 'axios'
import { Text } from '../components/text'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export interface SignIn {
  email: string;
  password: string
}

export interface AxiosResponseData {
  data: {
    error: string;
    message: string;
    statusCode: number;
  }
}

export const SignIn = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignIn>()

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<SignIn> = async (data) => {
    const { email, password } = data;


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
  }


  const isAbleButton = watch('email')?.length > 0 && watch('password')?.length > 0

  return (
    <DivWrap>
      <FormWrap onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <InputTitle>Email</InputTitle>
          <InputWrap  {...register('email', {
            required: true,
            pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
          })} placeholder='Email' />
          {errors?.email?.type === 'pattern' && (
            <ErrorInputMessage>{errors.email && '이메일 포멧이 맞지 않습니다.'}</ErrorInputMessage>
          )}
        </Container>

        <Container>
          <InputTitle>Password</InputTitle>
          <InputWrap {...register('password', { required: true, minLength: 8 })} placeholder='Password' />
          {errors?.password?.type === 'minLength' && (
            <ErrorInputMessage>{errors.password && '비밀번호는 8자리 이상으로 설정해주세요.'}</ErrorInputMessage>
          )}
        </Container>


        <SubmitButton $isActive={!isAbleButton}>
          <Text color={colors.white} fontSize='M2' fontWeight='regular'>
            로그인하기
          </Text>
        </SubmitButton>
      </FormWrap>
    </DivWrap>
  )
}

const DivWrap = styled.div`
  display: flex;

  flex: 1;
  padding: 0 20px;
`

const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Container = styled.div`
  margin-bottom: 8px;
`

const InputTitle = styled.div`
  color: ${colors.primary700};
  font-weight: ${fontWeight.medium};
  font-size: ${fontSize.M4};
  margin-bottom: 8px;
`

const InputWrap = styled.input`
  width: 100%;
  border: 1px solid ${colors.grey700};
  height: 40px;
  border-radius: 3px;
`

const ErrorInputMessage = styled.p`
  color: red;
  font-size: ${fontSize.S2};
  margin-top: 8px;
`

const SubmitButton = styled.button<{ $isActive?: boolean }>`
  height: 40px;
  background-color: ${(props) => (props.$isActive ? `${colors.grey500}` : `${colors.primary700}`)};
  cursor: pointer;
  color: ${colors.white};
`