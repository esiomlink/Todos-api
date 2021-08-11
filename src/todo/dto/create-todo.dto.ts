import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class CreateTodoDto {
  @Field(() => ID)
  id!: number;

  @Field()
  name: string;
}
