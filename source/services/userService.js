import { getUserById, updateUser } from "../repositories/userRepository.js";

export const getProfile = async (userId) => {
  return await getUserById(userId);
};

export const updateProfile = async (userId, body) => {
  return await updateUser(userId, body);
};