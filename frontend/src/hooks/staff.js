/** @format */

import apiClient from "../apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";
// add staff
export const useAddStaffMutation = () => {
  return useMutation({
    mutationFn: async (staff) => {
      const response = await apiClient.post("staff/add-staff", staff);
      return response.data;
    },
  });
};

// fetch all staffs
export const useGetStaffsQuery = () => {
  return useQuery({
    queryKey: ["staffs"],
    queryFn: async () => {
      const response = await apiClient.get("staff/all-staff");
      return response.data;
    },
  });
};
