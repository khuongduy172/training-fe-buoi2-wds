import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import {useState} from 'react';
import './style.css';
import { green } from '@material-ui/core/colors';
const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  const [color,setColor] = useState('blue')
  return (
    <div style={{backgroundColor: color}}className='App'>
      <Typography className='h1' component='h1' variant='h2'>
        Todos
        <span>Get things done, one item at a time.</span>
      </Typography>

      <TodoForm
        colorBox={{color: 'red'}}
        opacityBox={{opacit: 0.5}}
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <button  onClick={()=>setColor('aqua')}>Đổi màu</button>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
