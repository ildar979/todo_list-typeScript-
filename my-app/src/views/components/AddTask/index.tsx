import React, { useCallback, useState } from 'react';
import styles from './index.module.scss';

interface InputAddTask {
  onAdd: (title: string) => void;
}

export const AddTask: React.FC<InputAddTask> = ({
  onAdd,
}) => {

  const [input, setInput] = useState('');
  
  const addTask = useCallback(() => {
    onAdd(input);
    setInput('');
  }, [input, onAdd]);

  return (
    <div className={ styles.addTask }>
      <input
        type='text'
        className={ styles.addTaskValue }
        value={ input }
        onChange={((event) => {
          setInput(event.target.value)
        })}
        onKeyDown={(evt) => {
          if(evt.key === 'Enter') {
            addTask();
          }
        }}
        placeholder='Type task here...'
      />
      <button
        aria-label='Add'
        className={ styles.addTaskBtn }
        onClick={ addTask }
      />
    </div>
  )
}
