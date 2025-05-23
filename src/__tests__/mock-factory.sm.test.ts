import { expect, it, describe } from "vitest";
import createUserTodo from "../mockData/todo/user";

describe("User TODO", () => {
  it("make sure factory", () => {
    const user = createUserTodo({ isActive: true });

    /**
     * Expect override and correct types
     */
    expect(user.isActive).toBe(true);

    expect(user).toMatchObject({
      id: expect.any(String),
      name: expect.any(String),
      email: expect.any(String),
      isActive: expect.any(Boolean),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });
});
