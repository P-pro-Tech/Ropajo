/** @format */

import apiClient from "../apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";
// add guest
export const useAddGuestMutation = () => {
  return useMutation({
    mutationFn: async (guest) => {
      const response = await apiClient.post("guest/add-guest", guest);
      return response.data;
    },
  });
};

// fetch all guests
export const useGetGuestsQuery = () => {
  return useQuery({
    queryKey: ["guests"],
    queryFn: async () => {
      const response = await apiClient.get("guest/all-guest");
      return response.data;
    },
  });
};

export const useGetGuestDetailsQuery = (userUniqueId) => {
  return useQuery({
    queryKey: ["guest", userUniqueId],
    queryFn: async () => {
      const response = await apiClient.get(`guest/${userUniqueId}`);
      return response.data;
    },
  });
};
