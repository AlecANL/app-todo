import { firestore } from 'firebase/firebase.utils';

export function createTask() {
  return {
    date: new Date().getTime(),
    task: 'new task',
    taskArea: 'programing',
  };
}

export function createNewNote() {
  return async () => {
    const id = 'ABDEF';
    const task = createTask();
    const docRef = await firestore.collection(`${id}/app/tasks`).add(task);
    console.log(docRef);
  };
}
