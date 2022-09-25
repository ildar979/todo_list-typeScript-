import React from 'react';
import styles from './index.module.scss';
import { useToDoStore } from '../../data/stores/useToDoStore';
import { AddTask } from '../components/AddTask/index';

export const App: React.FC = () => {
  const [
    tasks,
    createTask,
    updateTask,
    removeTask 
  ] = useToDoStore(state => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  return (
    <article className={ styles.article }>
      <h1 className={ styles.articleTitle }>To Do App</h1>
      <section className={ styles.articleSection }>
        <AddTask
          onAdd={(title) => {
            if(title) {
              createTask(title)
            }
          }}
        />
      </section>
      <section className={ styles.articleSection }></section>
    </article>
  )
}
