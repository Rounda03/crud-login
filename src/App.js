import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import TodoList from './components/TodoList';
import GlobalStyle from './styles';

const App = () => {
  return (
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  );
};

export default App;
