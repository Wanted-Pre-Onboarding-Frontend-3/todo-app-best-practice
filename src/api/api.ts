import { authSignIn, authSignUp } from './auth';
import { createOneTodo, getManyTodo, updateOneTodo, deleteOneTodo } from './todo';

export const Api = {
  authSignUp,
  authSignIn,
  createOneTodo,
  getManyTodo,
  updateOneTodo,
  deleteOneTodo
};