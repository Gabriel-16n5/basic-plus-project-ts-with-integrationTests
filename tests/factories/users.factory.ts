import prisma from "../../src/database/database";
import { faker } from '@faker-js/faker';
import User from "../../src/protocols/user-protocol";

export type UserInput = Omit<User, ("userId")>;

export async function buildUser(email: string, password?: string, name?: string) {
    const userData: UserInput = {
      name,
      email,
      password
    };
  
    const user = await prisma.users.create({ data: userData });
    return user;
  }

  export async function buildUserRandom() {
    const email = faker.internet.email();
    const password = faker.internet.password();
    const name = faker.internet.userName();
    return buildUser(email, password, name);
  }

  export async function randomUser() {
    const email = faker.internet.email();
    const password = faker.internet.password();
    const name = faker.internet.userName();
    const user = {email, name, password};
    return user;
  }