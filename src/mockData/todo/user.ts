import { UserType } from "../../types";
import { fakerEN } from "@faker-js/faker";
import cloneDeep from "lodash.clonedeep";

fakerEN.seed(5);

const userTodo: UserType = {
  age: fakerEN.number.int({ min: 18, max: 80 }),
  email: fakerEN.internet.email(),
  createdAt: fakerEN.date.past(),
  id: fakerEN.string.uuid(),
  name: fakerEN.person.fullName(),
  isActive: fakerEN.datatype.boolean(),
  updatedAt: fakerEN.date.recent(),
};

const createUserTodo = (overrides: Partial<UserType> = {}): UserType => {
  return cloneDeep({
    ...userTodo,
    ...overrides,
  });
};

export default createUserTodo;
