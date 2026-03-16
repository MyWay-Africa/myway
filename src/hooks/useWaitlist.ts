import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";

// ==================== Types ====================

/**
 * API Response wrapper
 */
interface WaitlistApiResponse<T> {
  success: boolean;
  statusCode?: string;
  message: string;
  data: T;
  errors?: null | unknown;
}

/**
 * Interest options returned from API
 */
export type InterestOption =
  | "PremiumSharedAirportRides"
  | "DriverWaitList"
  | "PartnershipOrInvestment"
  | "Other";

/**
 * Years of experience options returned from API
 */
export type YearsOfExperienceOption =
  | "LessThan1Year"
  | "OneToThreeYears"
  | "ThreeToFiveYears"
  | "MoreThanFiveYears";

/**
 * Car type options returned from API
 */
export type CarTypeOption = "Sedan" | "SUV" | "Minivan" | "Other";

/**
 * Notice period options returned from API
 */
export type NoticePeriodOption =
  | "ImmediatelyAtLaunch"
  | "WithinTheFirstMonth"
  | "IAmJustExploringForNow";

/**
 * Availability options returned from API
 */
export type AvailabilityOption =
  | "AlwaysAvailable"
  | "Weekends"
  | "Weekdays"
  | "EarlyMorningsOrLateNights";

/**
 * User waitlist join payload
 */
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

/**
 * Driver waitlist join payload
 */
export type DriverWaitlistPayload = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  yearsOfExperience: YearsOfExperienceOption | string;
  carOwner: boolean;
  carType?: CarTypeOption | string;
  noticePeriod: NoticePeriodOption | string;
  availability: AvailabilityOption | string;
};

// ==================== Display Label Helpers ====================

/**
 * Map interest option to display label
 */
export const interestDisplayLabels: Record<InterestOption, string> = {
  PremiumSharedAirportRides: "Premium shared airport rides",
  DriverWaitList: "Driver waitlist",
  PartnershipOrInvestment: "Partnership / Investment",
  Other: "Other",
};

/**
 * Map years of experience option to display label
 */
export const yearsOfExperienceDisplayLabels: Record<
  YearsOfExperienceOption,
  string
> = {
  LessThan1Year: "Less than 1 year",
  OneToThreeYears: "1-3 years",
  ThreeToFiveYears: "3-5 years",
  MoreThanFiveYears: "More than 5 years",
};

/**
 * Map car type option to display label
 */
export const carTypeDisplayLabels: Record<CarTypeOption, string> = {
  Sedan: "Sedan",
  SUV: "SUV",
  Minivan: "Minivan",
  Other: "Other",
};

/**
 * Map notice period option to display label
 */
export const noticePeriodDisplayLabels: Record<NoticePeriodOption, string> = {
  ImmediatelyAtLaunch: "Immediately at launch",
  WithinTheFirstMonth: "Within the first month",
  IAmJustExploringForNow: "I am just exploring for now",
};

/**
 * Map availability option to display label
 */
export const availabilityDisplayLabels: Record<AvailabilityOption, string> = {
  AlwaysAvailable: "Always available",
  Weekends: "Weekends",
  Weekdays: "Weekdays",
  EarlyMorningsOrLateNights: "Early mornings or late nights",
};

// ==================== API Functions ====================

export const waitlistApi = {
  /**
   * Fetch interest options
   */
  getInterests: async (): Promise<InterestOption[]> => {
    const response = await api.get<WaitlistApiResponse<InterestOption[]>>(
      "/api/waitlist/interests",
    );
    return response.data;
  },

  /**
   * Fetch years of experience options
   */
  getYearsOfExperience: async (): Promise<YearsOfExperienceOption[]> => {
    const response = await api.get<
      WaitlistApiResponse<YearsOfExperienceOption[]>
    >("/api/waitlist/years-of-experience");
    return response.data;
  },

  /**
   * Fetch car type options
   */
  getCarTypes: async (): Promise<CarTypeOption[]> => {
    const response = await api.get<WaitlistApiResponse<CarTypeOption[]>>(
      "/api/waitlist/car-types",
    );
    return response.data;
  },

  /**
   * Fetch notice period options
   */
  getNoticePeriods: async (): Promise<NoticePeriodOption[]> => {
    const response = await api.get<WaitlistApiResponse<NoticePeriodOption[]>>(
      "/api/waitlist/notice-periods",
    );
    return response.data;
  },

  /**
   * Fetch availability options
   */
  getAvailabilities: async (): Promise<AvailabilityOption[]> => {
    const response = await api.get<WaitlistApiResponse<AvailabilityOption[]>>(
      "/api/waitlist/availabilities",
    );
    return response.data;
  },

  /**
   * Join user waitlist
   */
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

  /**
   * Join driver waitlist
   */
  joinDriverWaitlist: async (
    payload: DriverWaitlistPayload,
  ): Promise<string> => {
    const response = await api.post<WaitlistApiResponse<string>>(
      "/api/waitlist/join-driver",
      {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        city: payload.city,
        yearsOfExperience: payload.yearsOfExperience,
        carOwner: payload.carOwner,
        carType: payload.carType,
        noticePeriod: payload.noticePeriod,
        availability: payload.availability,
      },
    );
    return response.data;
  },
};

// ==================== Query Keys ====================

export const waitlistQueryKeys = {
  all: ["waitlist"] as const,
  interests: () => [...waitlistQueryKeys.all, "interests"] as const,
  yearsOfExperience: () =>
    [...waitlistQueryKeys.all, "yearsOfExperience"] as const,
  carTypes: () => [...waitlistQueryKeys.all, "carTypes"] as const,
  noticePeriods: () => [...waitlistQueryKeys.all, "noticePeriods"] as const,
  availabilities: () => [...waitlistQueryKeys.all, "availabilities"] as const,
};

// ==================== Query Hooks ====================

/**
 * Hook to fetch interest options
 */
export const useWaitlistInterests = () => {
  return useQuery({
    queryKey: waitlistQueryKeys.interests(),
    queryFn: waitlistApi.getInterests,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

/**
 * Hook to fetch years of experience options
 */
export const useWaitlistYearsOfExperience = () => {
  return useQuery({
    queryKey: waitlistQueryKeys.yearsOfExperience(),
    queryFn: waitlistApi.getYearsOfExperience,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

/**
 * Hook to fetch car type options
 */
export const useWaitlistCarTypes = () => {
  return useQuery({
    queryKey: waitlistQueryKeys.carTypes(),
    queryFn: waitlistApi.getCarTypes,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

/**
 * Hook to fetch notice period options
 */
export const useWaitlistNoticePeriods = () => {
  return useQuery({
    queryKey: waitlistQueryKeys.noticePeriods(),
    queryFn: waitlistApi.getNoticePeriods,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

/**
 * Hook to fetch availability options
 */
export const useWaitlistAvailabilities = () => {
  return useQuery({
    queryKey: waitlistQueryKeys.availabilities(),
    queryFn: waitlistApi.getAvailabilities,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
