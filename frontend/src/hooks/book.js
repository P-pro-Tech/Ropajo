/** @format */

import apiClient from "../apiClient";
import { useMutation } from "@tanstack/react-query";

// make booking
export const useMakeBookingMutation = () => {
  return useMutation({
    mutationFn: async (book) => {
      const response = await apiClient.post("guest/booking/book", book);
      return response.data;
    },
  });
};
