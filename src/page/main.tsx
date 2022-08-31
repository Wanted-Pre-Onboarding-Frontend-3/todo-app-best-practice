import React from 'react'
import { colors } from '@/styles/colors'
import { Text } from '@/components/text'
import styled from 'styled-components'
import { LinkButton } from '@/components/LinkButton'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <FlexColumnDivWrap>
      <FlexColumnDivWrap>
        <Text color={colors.grey800} fontSize="XL3" fontWeight="regular">
          Hello
        </Text>
        <Text color={colors.primary700} fontSize="XL1" fontWeight="bold">
          To Do List
        </Text>
        <Text color={colors.grey800} fontSize="XL1" fontWeight="regular">
          App
        </Text>
      </FlexColumnDivWrap>

      <LinkContainer>
        <LinkButtonWrap>
          <Link to={'/signin'}>
            <Text color={colors.white} fontSize="M2" fontWeight="regular">
              로그인 하러 가기
            </Text>
          </Link>
        </LinkButtonWrap>
      </LinkContainer>

      <Link to={'/signup'}>
        <Text color={colors.grey500} fontSize="M2" fontWeight="regular">
          회원가입
        </Text>
      </Link>
    </FlexColumnDivWrap>
  )
}

const FlexColumnDivWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

const LinkContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: 40px;
  margin-bottom: 8px;
`

const LinkButtonWrap = styled(LinkButton)``
