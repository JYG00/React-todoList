import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ToDoTemplate from './components/todoTemplate';
import ToDoHead from './components/todoHead';
import TodoList from './components/todoList';
import TodoCreate from './components/todoCreate';
import { TodoProvider } from './todoContext';
import './App.css';

// yarn add react-icons
// yarn add styled-components

const GlobalStyle = createGlobalStyle`
body{
  background:#e9ecef;
}`;

function App() {
  return (
    <div>
      <TodoProvider>
      <GlobalStyle/>
      <ToDoTemplate>
        <ToDoHead/>
        <TodoList/>
        <TodoCreate/>
      </ToDoTemplate>
      </TodoProvider>
    </div>
  );
}

export default App;
