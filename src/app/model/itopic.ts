import {Itask} from './itask';

export interface Itopic{
  id?: string;
  name: string;
  tasks: Itask[];
}
