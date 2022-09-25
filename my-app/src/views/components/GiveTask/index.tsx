import React, { useEffect, useRef, useState } from 'react';
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
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(title);
  const editTitleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(isEdit) {
      editTitleInputRef?.current?.focus()
    }
  }, [isEdit]);

  return (
    <div className={ styles.inputValue }>
      <label className={ styles.inputValueLabel }>
        <input
          type='checkbox'
          disabled={isEdit}
          checked={checked}
          className={ styles.inputValueCheckbox}
          onChange={(evt) => {
            setChecked(evt.target.checked);
            if(evt.target.checked) {
              setTimeout(() => {
                onDone(id)
              }, 500);
            }
          }}
        />
        { isEdit ? (
          <input
            value={value}
            ref={editTitleInputRef}
            onChange={(evt) => {
              setValue(evt.target.value)
            }}
            className={ styles.inputValueEditTitle }
            onKeyDown={(evt) => {
              if(evt.key === 'Enter') {
                onEdited(id, value)
                setIsEdit(false)
              }
            }}
          />
        ) : (
          <h3 className={ styles.inputValueTitle }>{title}</h3>
        )}
      </label>
      { isEdit ? (
        <button
          aria-label='Save'
          className={ styles.inputValueSave }
          onClick={() => {
            onEdited(id, value)
            setIsEdit(false)
          }}
        />
      ) : (
        <button
          aria-label='Edit'
          className={ styles.inputValueEdit }
          onClick={() => {
            setIsEdit(true)
          }} 
        />
      )}
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
