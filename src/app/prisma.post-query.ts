import { Prisma } from "../generated/prisma/client"
import {prisma} from "@/lib/prisma";
import {v4 as uuidv4} from "uuid";

const id = uuidv4();

type User = {
  id: string;
  username: string;
  email: string;
  password: string;
}

export const getUser = async (id: string): Promise<User | null> => {
  const user = await prisma.user.findFirst({
    where: { id }
  });
  return user;
}

export const createUser = async (user: User): Promise<User | null> => {
  const res = await prisma.user.create({
    data: {
      id,
      username: user.username,
      email: user.email,
      password: user.password,
    }
  });
  return res;
}

export const deleteUser = async (id: string): Promise<User | null> => {
  const res = await prisma.user.delete({
    where: { id }
  });
  return res;
}

export type UserType = Prisma.PromiseReturnType<typeof getUser>;
