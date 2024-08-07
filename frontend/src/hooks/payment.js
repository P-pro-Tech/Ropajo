/** @format */

import { useMutation } from "@tanstack/react-query";
import apiClient from "../apiClient";

// make payment
export const useMakePaymentMutation = async () =>
  useMutation({
    mutationFn: async (payment) =>
      (await apiClient.post("payment/make-payment", payment)).data,
  });
