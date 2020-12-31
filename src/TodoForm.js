import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import { PinDropSharp } from '@material-ui/icons';

const TodoForm = ({ saveTodo, opacityBox,...props }) => {
  const { value, reset, onChange } = useInputState();
  const {color}= props.colorBox
  const {opacit}=opacityBox
  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}>
      <TextField
        style={{backgroundColor: color, opacity: opacit}}
        className='TextField'
        variant='outlined'
        placeholder='Add todo'
        margin='normal'
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
