import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoProviders } from './todo.providers';
import { DatabaseModule } from '../database/database.module';
import { TodosResolver } from './todo.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [TodoService, TodosResolver, ...TodoProviders],
})
export class TodoModule {}
