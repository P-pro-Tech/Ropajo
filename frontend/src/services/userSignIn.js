/** @format */

import apiClient from "../apiClient";
import { useMutation } from "@tanstack/react-query";

export const useSigninMutation = () => {
  return useMutation({
    mutationFn: async ({ userUniqueId }) => {
      const response = await apiClient.post(`guest/auth/login`, {
        userUniqueId,
      });
      return response.data;
    },
  });
};
