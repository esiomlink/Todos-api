import { Table, Model, Column } from 'sequelize-typescript';
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';

const tableOption: IDefineOptions = {
  tableName: 'todos',
  timestamps: false,
} as IDefineOptions;

@Table(tableOption)
export class Todo extends Model<Todo> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;
  @Column
  name: string;
}
