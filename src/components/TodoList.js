import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TodoForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/todos');
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching todos', error);
            }
        };

        fetchTodos();
    }, []);

    const addTodo = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/todos', { title: newTodo });
            setTodos([...todos, response.data]);
            setNewTodo('');
        } catch (error) {
            console.error('Error adding todo', error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/todos/${id}`);
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo', error);
        }
    };

    return (
        <TodoListContainer>
            <h2>Todo List</h2>
            <TodoForm onSubmit={addTodo}>
                <Input
                    type="text"
                    placeholder="New todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <Button type="submit">Add</Button>
            </TodoForm>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
            ))}
        </TodoListContainer>
    );
};

export default TodoList;
