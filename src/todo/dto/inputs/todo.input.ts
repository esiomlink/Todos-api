import { Field, InputType, ID } from 'type-graphql';

@InputType()
export class TodoInput {
  @Field(() => ID! )
  readonly id!: number;
  @Field()
  readonly name: string;
}
@InputType()
export class CreateTodoInput {
  @Field()
  readonly name: string;
}

