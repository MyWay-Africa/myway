import { useQuery } from "@tanstack/react-query";

import { api } from "@/services/api";

interface WaitlistApiResponse<T> {
  success: boolean;
  statusCode?: string;
  message: string;
  data: T;
  errors?: null | unknown;
}

export type InterestOption =
  | "PremiumSharedAirportRides"
  | "DriverWaitList"
  | "PartnershipOrInvestment"
  | "Other";

export type UserInterestOption = {
  label: string;
  value: string;
};

export type DriverSelectOption = {
  label: string;
  value: string;
};

export type WaitlistPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  interest: InterestOption | string;
};

export type WaitlistUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  interest: string;
  createdAt: string;
};

export type DriverWaitlistPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  city: string;
  yearsOfExperience: string;
  carOwner: boolean;
  carType?: string;
  startWhen: string;
};

export const interestDisplayLabels: Record<InterestOption, string> = {
  PremiumSharedAirportRides: "Premium shared airport rides",
  DriverWaitList: "Driver waitlist",
  PartnershipOrInvestment: "Partnership / Investment",
  Other: "Other",
};

export const waitlistApi = {
  getInterests: async (): Promise<UserInterestOption[]> => {
    const response = await api.get<WaitlistApiResponse<UserInterestOption[]>>(
      "/api/waitlist/user-interest-options",
    );
    return response.data;
  },

  getYearsOfExperience: async (): Promise<DriverSelectOption[]> => {
    const response = await api.get<WaitlistApiResponse<DriverSelectOption[]>>(
      "/api/waitlist/driver-experience-options",
    );
    return response.data;
  },

  getCarTypes: async (): Promise<DriverSelectOption[]> => {
    const response = await api.get<WaitlistApiResponse<DriverSelectOption[]>>(
      "/api/waitlist/driver-car-type-options",
    );
    return response.data;
  },

  getDriverStartTimes: async (): Promise<DriverSelectOption[]> => {
    const response = await api.get<WaitlistApiResponse<DriverSelectOption[]>>(
      "/api/waitlist/driver-start-time-options",
    );
    return response.data;
  },

  joinWaitlist: async (payload: WaitlistPayload): Promise<WaitlistUser> => {
    const response = await api.post<WaitlistApiResponse<WaitlistUser>>(
      "/api/waitlist/users",
      {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phone: payload.phone,
        city: payload.city,
        interest: payload.interest,
      },
    );
    return response.data;
  },

  joinDriverWaitlist: async (
    payload: DriverWaitlistPayload,
  ): Promise<string> => {
    const response = await api.post<WaitlistApiResponse<string>>(
      "/api/waitlist/drivers",
      {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phone: payload.phone,
        city: payload.city,
        yearsOfExperience: payload.yearsOfExperience,
        carOwner: payload.carOwner,
        carType: payload.carType,
        startWhen: payload.startWhen,
      },
    );
    return response.data;
  },
};

export const waitlistQueryKeys = {
  all: ["waitlist"] as const,
  interests: () => [...waitlistQueryKeys.all, "interests"] as const,
  yearsOfExperience: () =>
    [...waitlistQueryKeys.all, "yearsOfExperience"] as const,
  carTypes: () => [...waitlistQueryKeys.all, "carTypes"] as const,
  driverStartTimes: () => [...waitlistQueryKeys.all, "driverStartTimes"] as const,
};

export const useWaitlistInterests = () => {
  return useQuery({
    queryKey: waitlistQueryKeys.interests(),
    queryFn: waitlistApi.getInterests,
    staleTime: 1000 * 60 * 60,
  });
};

export const useWaitlistYearsOfExperience = () => {
  return useQuery({
    queryKey: waitlistQueryKeys.yearsOfExperience(),
    queryFn: waitlistApi.getYearsOfExperience,
    staleTime: 1000 * 60 * 60,
  });
};

export const useWaitlistCarTypes = () => {
  return useQuery({
    queryKey: waitlistQueryKeys.carTypes(),
    queryFn: waitlistApi.getCarTypes,
    staleTime: 1000 * 60 * 60,
  });
};

export const useWaitlistDriverStartTimes = () => {
  return useQuery({
    queryKey: waitlistQueryKeys.driverStartTimes(),
    queryFn: waitlistApi.getDriverStartTimes,
    staleTime: 1000 * 60 * 60,
  });
};
