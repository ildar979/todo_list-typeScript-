import React, { useState } from 'react';
import styles from './index.module.scss';

interface InputTaskProps {
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
}
export const GivenTask: React.FC<InputTaskProps> = ({ 
  id,
  title,
  onDone,
  onEdited,
  onRemoved,
 }) => {

  const [checked, setChecked] = useState(false);

  return (
    <div className={ styles.inputValue }>
      <label>
        <input
          type='checkbox'
          checked={checked}
          className={ styles.inputValueCheckbox}
          onChange={(evt) => {
            setChecked(evt.target.checked);
            if(evt.target.checked) {
              onDone(id)
            }
          }}
        />
        <h3 className={ styles.inputValueTitle }>{title}</h3>
      </label>
      <button
        aria-label='Edit'
        className={ styles.inputValueEdit }
        onClick={() => {

        }} 
      />
      <button
        aria-label='Remove'
        className={ styles.inputValueRemove }
        onClick={() => {
            onRemoved(id)
        }} 
      />
    </div>
  )
}
