/** @format */

import apiClient from "../apiClient";
import { useMutation } from "@tanstack/react-query";

export const useStaffSigninMutation = () => {
  return useMutation({
    mutationFn: async ({ staffUniqueId }) => {
      const response = await apiClient.post(`staff/auth/login`, {
        staffUniqueId,
      });
      return response.data;
    },
  });
};
