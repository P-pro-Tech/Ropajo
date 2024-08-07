/** @format */

import apiClient from "../apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";

// make booking
export const useMakeBookingMutation = () => {
  return useMutation({
    mutationFn: async (book) => {
      const response = await apiClient.post("guest/booking/book", book);
      return response.data;
    },
  });
};
// fetch all bookings
export const useGetBookingsQuery = () => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const response = await apiClient.get("guest/booking/bookings");
      return response.data;
    },
  });
};
