import { Todo } from './todo.entity';

export const TodoProviders = [
  {
    provide: 'TODOS_REPOSITORY',
    useValue: Todo,
  },
];
