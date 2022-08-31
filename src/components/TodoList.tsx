import React, { useState } from 'react';
import { Api } from '../api/api';
import axios, { AxiosError } from 'axios';
import { getToken } from '../utils/storage';
import { todos } from '../page/todos';
import styled from 'styled-components';
import { colors } from '../core/colors';
import { CheckIcon } from './icon/check';
import { Text } from './text';
import { TrashIcon } from './icon/trash';
import { Modal } from './Modal';
import { useForm } from 'react-hook-form';


interface TodoListProps {
  children: React.ReactNode;
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
  setTodo: (StatusType: todos[]) => void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  const { isCompleted, todo, id, setTodo } = props;
  const { register, watch, reset } = useForm();
  const [isComposing, setIsComposing] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const token = getToken();

  const updateOneTodos = async (args: Pick<TodoListProps, 'isCompleted' | 'todo' | 'id'>) => {
    const { isCompleted, todo, id } = args;
    const body = {
      todo,
      isCompleted,
    };
    try {
      await Api.updateOneTodo.request(body, id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const res = await Api.getManyTodo.request({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodo(res.data);
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

  const deleteOneTodos = (id: number) => {
    return async () => {
      try {
        await Api.deleteOneTodo.request(id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const res = await Api.getManyTodo.request({
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTodo(res.data);
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
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> | KeyboardEvent = async (e) => {
    if (isComposing) return;
    if (e.key === 'Enter') {
      e.preventDefault();
      await updateOneTodos({ isCompleted, todo: watch(`todo${id}`), id });
    }
  };

  return (
    <DivWrap>
      <FlexDivWrap>
        <IconButton onClick={() => updateOneTodos({ isCompleted: !isCompleted, todo, id })}>
          <CheckIcon size={18} fillColor={isCompleted ? `${colors.primary500}` : `${colors.grey500}`} />
        </IconButton>
        <Text color={colors.primary700} fontSize='M3'>
          {todo}
        </Text>
      </FlexDivWrap>
      {modalOpen && <Modal closeModal={() => setModalOpen(prev => !prev)}>
        <InputWrap {...register(`todo${id}`)} defaultValue={todo} onKeyDown={(e) => onKeyDown(e)}
                   onCompositionStart={() => setIsComposing(true)}
                   onCompositionEnd={() => setIsComposing(false)} />
        <ModalModifyButton
          onClick={() => updateOneTodos({ isCompleted, todo: watch(`todo${id}`), id })}>수정하기</ModalModifyButton>
      </Modal>}
      <ModifyButton onClick={() => setModalOpen(prev => !prev)}>
        <Text color={colors.white} fontSize='S4'>
          수정
        </Text>
      </ModifyButton>
      <IconButton onClick={deleteOneTodos(id)}>
        <TrashIcon size={15} />
      </IconButton>
    </DivWrap>
  );
};


const DivWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;

  &:not(:last-child) {
    content: '';
    display: flex;
    border-bottom: 1px solid ${colors.grey500};
  }
`;

const InputWrap = styled.input`
  width: 100%;
  border: 1px solid ${colors.grey700};
  height: 40px;
  border-radius: 3px;
`;

const FlexDivWrap = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin: 0 8px;


`;

const ModifyButton = styled.button`
  background: ${colors.grey600};
  cursor: pointer;
  margin: 0 8px;
`;


const ModalModifyButton = styled.button`
  height: 40px;
  background-color: ${colors.primary700};
  cursor: pointer;
  color: ${colors.white};
  width: 100%;

  margin-top: 8px;
`;

const IconButton = styled.button`
  background: unset;
  cursor: pointer;
  margin: 0 8px;
`;

