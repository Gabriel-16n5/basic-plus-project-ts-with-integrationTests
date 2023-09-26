import prisma from "../database/database";
import User from "../protocols/user-protocol";
import UserId from "../protocols/userId-protocol";

type CreateUser = Omit<User, "userId">

export async function getUsers() {
    const usersList = await prisma.users.findMany()
    return usersList;
  }

export async function getUsersId(userId:number) {
    const user = await prisma.users.findUnique({
       where: {
        userId
      }     
    })
    return user;
  }
  
  export async function getUserId(userId:number) {
    const uniqueUser = await prisma.users.findUnique({
      where: {
        userId
      }
    })
    return uniqueUser;
  }

  export async function getName(name:string) {
    const firstUserName = await prisma.users.findFirst({
      where: {
        name
      }
    })
    return firstUserName;
  }

export async function createUser(user: CreateUser) {
    const createUser = await prisma.users.create({
      data: user
    })
    return createUser
  }

export async function deleteUserr(userId:number) {
    const deletedUser = await prisma.users.delete({
      where: {userId: userId}
    })
    return deletedUser
  }  

  export async function updateUserr(user:User, userId:number) {
    const updatedUser = await prisma.users.update({
      data: user,
      where: {
        userId
      }
    })
    return updatedUser
  }