import {database, initializeApp} from 'firebase';
import {environment} from '../src/environments/environment';
import {tasks} from './tasks-db';
import {user} from './users-db';

initializeApp(environment.firebaseConfig);

const tasksRef = database().ref('task');

async function populate(name: string, data: any[]): Promise<any> {
  const ref = database().ref(name);

  await ref.set(null);

  const promises = data.map(i => ref.push(i));

  return Promise.all(promises);
}
async function populateAll() {
  await populate('tasks', tasks);
  // await populate('user', user);

  // tslint:disable-next-line
  console.log('🔥 db populated 🔥');
  process.exit();
}
populateAll();

