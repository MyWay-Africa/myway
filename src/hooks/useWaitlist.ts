import { api } from "@/services/api";

export type WaitlistPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  city: string;
  interest: string;
};

export type DriverWaitlistPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  city: string;
  yearsExperience: string;
  hasCar: string;
  carType?: string;
  availableFullTime: string;
  startTimeline: string;
};

export const waitlistApi = {
  joinWaitlist: async (payload: WaitlistPayload) => {
    return api.post<unknown>("/waitlist/users", {
      first_name: payload.firstName,
      last_name: payload.lastName,
      email: payload.email,
      phone_number: payload.phone,
      city: payload.city,
      interest_reason: payload.interest,
    });
  },

  joinDriverWaitlist: async (payload: DriverWaitlistPayload) => {
    return api.post<unknown>("/waitlist/drivers", {
      first_name: payload.firstName,
      last_name: payload.lastName,
      email: payload.email,
      phone_number: payload.phone,
      city: payload.city,
      years_experience: payload.yearsExperience,
      has_car: payload.hasCar === "Yes" ? true : payload.hasCar === "No, I plan to get one" ? false : null,
      availability: payload.availableFullTime,
      start_timeline: payload.startTimeline,
    });
  },
};
