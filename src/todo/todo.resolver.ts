/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoInput, CreateTodoInput } from './dto/inputs/todo.input';
import { TodoService } from './todo.service';
import { ID, Int } from 'type-graphql';

@Resolver()
export class TodosResolver {
  constructor(private TodoService: TodoService) {}

  @Query(returns => String)
  async Hello(@Args({ name: 'name', type: () => String }) name: string) {
    return `Hello => ${name}`;
  }

  @Query(() => [CreateTodoDto])
  async todo() {
    return this.TodoService.findAllTodos();
  }

  @Query(() => CreateTodoDto)
  async getTodo(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.TodoService.getTodo(id);
  }

  @Mutation(() => CreateTodoDto)
  async create(@Args('input') todot: CreateTodoInput) {
    return this.TodoService.createTodo(todot);
  }

  @Mutation(() => CreateTodoDto)
  async updateTodo(@Args('input') todo: TodoInput) {
    return this.TodoService.update(todo);
  }

  @Mutation(() => ID)
  async deleteTodo(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.TodoService.delete(id);
  }
}
