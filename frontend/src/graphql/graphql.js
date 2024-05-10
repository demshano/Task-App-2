// graphql.js


import { gql } from '@urql/core';

export const GET_TODOS_QUERY = gql`
  query {
    getTodos {
      id
      text
      done
    }
  }
`;

export const CREATE_TODO_MUTATION = gql`
  mutation($text: String!) {
    createTodo(text: $text) {
      id
      text
      done
    }
  }
`;

