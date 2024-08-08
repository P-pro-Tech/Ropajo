/** @format */

import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";

// make payment
export const useMakePaymentMutation = () => {
  return useMutation({
    mutationFn: async (payment) => {
      const response = await apiClient.post("payment/make-payment", payment);
      return response.data;
    },
  });
};
// fech all payments
export const useGetPaymentsQuery = () => {
  return useQuery({
    queryKey: ["payments"],
    queryFn: async () => (await apiClient.get("payment/all-payments")).data,
  });
};

// fetch payment
export const useGetPaymentDetailQuery = (userUniqueId) => {
  return useQuery({
    queryKey: ["payment", userUniqueId],
    queryFn: async () => (await apiClient.get(`payment/${userUniqueId}`)).data,
  });
};
// update payment
export const useUpdatePaymentMutation = (userUniqueId) => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await apiClient.patch("payment", data);
      return response.data;
    },
  });
};
