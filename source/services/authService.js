import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";
import {
  createUser,
  findUserByEmail,
} from "../repositories/userRepository.js";

export const registerService = async ({
  name,
  email,
  password,
  role,
}) => {
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await createUser({
  name,
  email,
  password: hashedPassword,
  role: role || "USER",
});

  return user;
};

export const loginService = async ({
  email,
  password,
}) => {

  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid Email");
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new Error("Invalid Password");
  }

 const token = generateToken(user);
  return {
    user,
    token,
  };
};