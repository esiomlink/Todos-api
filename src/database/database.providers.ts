import { Sequelize } from 'sequelize-typescript';
import { Todo } from '../todo/todo.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'todos',
      });
      sequelize.addModels([Todo]);
      await sequelize.connectionManager;
      return sequelize;
    },
  },
];
