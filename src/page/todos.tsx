import React, { useEffect, useState } from 'react';
import { clearStorage, getToken } from '../utils/storage';
import { useNavigate } from 'react-router-dom';
import { Api } from '../api/api';
import axios, { AxiosError } from 'axios';
import { TodoList } from '../components/TodoList';
import styled from 'styled-components';
import { Text } from '../components/text';
import { colors } from '../core/colors';
import { useForm } from 'react-hook-form';

export interface todos {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export const Todos = () => {
  const [todoData, setTodoData] = useState<todos[]>([]);
  const [isComposing, setIsComposing] = useState<boolean>(false);
  const { register, watch, reset } = useForm<Pick<todos, 'todo'>>();
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);


  const createTodo = async () => {
    try {
      await Api.createOneTodo.request(watch('todo'), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const res = await Api.getManyTodo.request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTodoData(res.data);
      reset({
        todo: '',
      });

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        const { response } = axiosError;

        if (response?.status === 404) {
          const { data } = response;
          // @ts-ignore
          alert(data?.message);
        }
      }
    }
  };

  const getManyTodos = async () => {
    try {
      const res = await Api.getManyTodo.request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        const { response } = axiosError;

        if (response?.status === 404) {
          const { data } = response;
          // @ts-ignore
          alert(data?.message);
        }
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getManyTodos();
      setTodoData(data);
    };
    fetchData();
  }, []);

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> | KeyboardEvent = async (e) => {
    if (isComposing) return;
    if (e.key === 'Enter') {
      e.preventDefault();
      await createTodo();
    }
  };

  const handleLogout = () => {
    clearStorage();
    navigate('/')
  }
  return (
    <FlexDivWrap>
      <LogOutButton onClick={handleLogout}>
        <Text color={colors.grey500} fontSize='S4' fontWeight='regular'>
          로그아웃
        </Text>
      </LogOutButton>
      <Text color={colors.primary700} fontSize='XL3' fontWeight='regular'>
        To Do List
      </Text>
      <InputWrap {...register('todo')} onKeyDown={(e) => onKeyDown(e)}
                 onCompositionStart={() => setIsComposing(true)}
                 onCompositionEnd={() => setIsComposing(false)} />
      <CreateButton onClick={createTodo}>생성하기</CreateButton>
      <TodoListDivWrap>
        {todoData.map(item => {
          return (
            <TodoList key={item.id} setTodo={setTodoData} {...item}>{item.todo}</TodoList>
          );
        })}
      </TodoListDivWrap>

    </FlexDivWrap>
  );
};

const FlexDivWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  position: relative;
`;

const TodoListDivWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 500px;
  overflow: scroll;

  margin: 30px 0;
  padding: 8px 0;
  border: 1px solid ${colors.grey500};
`;

const CreateButton = styled.button`
  height: 40px;
  background-color: ${colors.primary700};
  cursor: pointer;
  color: ${colors.white};
  width: 100%;

  margin-top: 8px;
`;

const InputWrap = styled.input`
  width: 100%;
  border: 1px solid ${colors.grey700};
  height: 40px;
  border-radius: 3px;
`;

const LogOutButton = styled.button`
  background: unset;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
`;