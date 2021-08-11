import { Injectable, Inject } from '@nestjs/common';
import { TodoInput, CreateTodoInput } from './dto/inputs/todo.input';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @Inject('TODOS_REPOSITORY') private readonly TODOS_REPOSITORY: typeof Todo,
  ) {}

  async findAllTodos(): Promise<Todo[]> {
    try {
      return this.TODOS_REPOSITORY.findAll<Todo>();
    } catch (err) {
      console.log('findAllTodos:', err);
    }
  }

  async getTodo(id: number): Promise<Todo> {
    try {
      return this.TODOS_REPOSITORY.findByPk<Todo>(id);
    } catch (err) {
      console.log('getTodo:', err);
    }
  }

  async createTodo(Todo: CreateTodoInput): Promise<Todo> {
    try {
      return await this.TODOS_REPOSITORY.create<Todo>(Todo);
    } catch (err) {
      console.log('createTodo:', err);
    }
  }
  async update(todo: TodoInput): Promise<Todo> {
    try {
      const { name, id } = todo;
      const response = await this.TODOS_REPOSITORY.update(
        { name, id },
        { where: { id }, returning: true },
      );
      const [updated, updatedTodo] = response;
      if (!!updated) {
        return (updatedTodo[0].getDataValue as unknown) as Todo;
      }
      return;
    } catch (err) {
      console.log('update:', err);
    }
  }
  async delete(id: number): Promise<number> {
    try {
      return this.TODOS_REPOSITORY.destroy({
        where: { id: id },
      });
    } catch (err) {
      console.log('deleteTodo:', err);
    }
  }
}
