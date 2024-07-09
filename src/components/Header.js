import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: #282c34;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Todo App</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/login">Login</Link>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
