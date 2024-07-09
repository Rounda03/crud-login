import React from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const TodoItem = ({ todo, onDelete }) => {
    return (
        <TodoContainer>
            <span>{todo.title}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </TodoContainer>
    );
};

export default TodoItem;
