/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type TodoInput = {
  id: string,
  title: string,
  done: boolean,
};

export type Event = {
  __typename: "Event",
  result?: string | null,
};

export type Todo = {
  __typename: "Todo",
  id?: string,
  title?: string,
  done?: boolean,
};

export type AddTodoMutationVariables = {
  todo?: TodoInput,
};

export type AddTodoMutation = {
  addTodo?:  {
    __typename: "Event",
    result?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  todo?: TodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Event",
    result?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  todoId?: string,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Event",
    result?: string | null,
  } | null,
};

export type GetTodosQuery = {
  getTodos?:  Array< {
    __typename: "Todo",
    id: string,
    title: string,
    done: boolean,
  } | null > | null,
};
