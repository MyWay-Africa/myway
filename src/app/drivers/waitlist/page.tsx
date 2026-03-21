"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { Button, Input } from "@/components/ui";
import {
  waitlistApi,
  useWaitlistCarTypes,
  useWaitlistDriverStartTimes,
  useWaitlistYearsOfExperience,
  type DriverWaitlistPayload,
} from "@/hooks/useWaitlist";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  yearsOfExperience: string;
  carOwner: string;
  carType: string;
  startWhen: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const steps = [
  { number: 1, label: "Basic Info" },
  { number: 2, label: "Driving Experience" },
  { number: 3, label: "Driver Readiness" },
];

const cityOptions = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Kano",
  "Calabar",
  "Other",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function DriverWaitlistPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    yearsOfExperience: "",
    carOwner: "",
    carType: "",
    startWhen: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { data: yearsOptions, isLoading: isLoadingYears } =
    useWaitlistYearsOfExperience();
  const { data: carTypeOptions, isLoading: isLoadingCarTypes } =
    useWaitlistCarTypes();
  const { data: startTimeOptions, isLoading: isLoadingStartTimes } =
    useWaitlistDriverStartTimes();

  const joinDriverWaitlistMutation = useMutation({
    mutationFn: waitlistApi.joinDriverWaitlist,
    onSuccess: () => {
      setIsSubmitted(true);
    },
  });

  const validateStep1 = (): FieldErrors => {
    const nextErrors: FieldErrors = {};

    if (!form.firstName.trim()) nextErrors.firstName = "Please enter a valid name";
    if (!form.lastName.trim()) nextErrors.lastName = "Please enter a valid name";
    if (!form.email.trim() || !isValidEmail(form.email)) {
      nextErrors.email = "Please enter a valid email";
    }
    if (!form.city) nextErrors.city = "Please select an option";

    return nextErrors;
  };

  const validateStep2 = (): FieldErrors => {
    const nextErrors: FieldErrors = {};

    if (!form.yearsOfExperience) nextErrors.yearsOfExperience = "Please select an option";
    if (!form.carOwner) nextErrors.carOwner = "Please select an option";
    if (form.carOwner === "Yes" && !form.carType) {
      nextErrors.carType = "Please select an option";
    }

    return nextErrors;
  };

  const validateStep3 = (): FieldErrors => {
    const nextErrors: FieldErrors = {};

    if (!form.startWhen) nextErrors.startWhen = "Please select an option";

    return nextErrors;
  };

  const handleNext = () => {
    const nextErrors =
      currentStep === 1 ? validateStep1() : validateStep2();

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      return;
    }

    router.back();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors = validateStep3();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const payload: DriverWaitlistPayload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || undefined,
      city: form.city,
      yearsOfExperience: form.yearsOfExperience,
      carOwner: form.carOwner === "Yes",
      carType: form.carOwner === "Yes" ? form.carType : undefined,
      startWhen: form.startWhen,
    };

    joinDriverWaitlistMutation.mutate(payload);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="relative hidden lg:block">
            <Image
              src="/images/driver-waitlist.png"
              alt="MyWay Driver"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <h2 className="text-white text-4xl font-semibold mb-3">
                Premium airport trips.
                <br />
                Predictable earnings.
              </h2>
              <p className="text-white/70 max-w-xl">
                Earn more from airport rides â€” not random city chaos. Verified
                passengers. Clear pricing. Calm, professional trips.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-lg">
              <div className="flex justify-center mb-8">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-200 to-gray-400 shadow-lg" />
                  <div className="absolute inset-1 rounded-full bg-gradient-to-b from-gray-100 to-gray-300" />
                  <div className="absolute inset-3 rounded-full bg-gradient-to-b from-white to-gray-200 flex items-center justify-center shadow-inner">
                    <svg
                      className="w-10 h-10 text-gray-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl font-semibold text-gray-900 text-center mb-2">
                You&apos;re on the Driver Waitlist
              </h1>
              <p className="text-gray-500 text-center mb-10">
                Thanks for signing up. You&apos;ll be among the first drivers
                invited when we launch in Lagos.
              </p>

              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                What Happens Next
              </h2>

              <div className="border border-gray-200 rounded-xl p-5 space-y-4 mb-8">
                {[
                  "You'll get early access before public driver onboarding",
                  "We'll notify you as soon as onboarding opens",
                  "You'll receive updates on earnings, requirements, and launch dates",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-cyan-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <Button
                  variant="dark"
                  size="xl"
                  className="w-full rounded-xl"
                  onClick={() =>
                    window.open(
                      "https://whatsapp.com/channel/0029Vb7URlx6buMF3tldya1G",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  Join Driver Community
                </Button>
                <Button
                  variant="outlineDark"
                  size="xl"
                  className="w-full rounded-xl"
                  onClick={() => router.push("/")}
                >
                  Done
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative hidden lg:block">
          <Image
            src="/images/driver-waitlist.png"
            alt="MyWay Driver"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute bottom-0 left-0 right-0 p-10">
            <h2 className="text-white text-4xl font-semibold mb-3">
              Premium airport trips.
              <br />
              Predictable earnings.
            </h2>
            <p className="text-white/70 max-w-xl">
              Earn more from airport rides â€” not random city chaos. Verified
              passengers. Clear pricing. Calm, professional trips.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-xl">
            <div className="flex items-center mb-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep >= step.number
                          ? "bg-gray-900 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step.number}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        currentStep >= step.number
                          ? "text-gray-900"
                          : "text-gray-400"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  <div
                    className={`h-1 rounded-full ${
                      index < steps.length - 1 ? "mr-2" : ""
                    } ${
                      currentStep >= step.number ? "bg-gray-900" : "bg-gray-200"
                    }`}
                  />
                </div>
              ))}
            </div>

            {currentStep === 1 && (
              <>
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
                  Join the MyWay Driver Waitlist
                </h1>
                <p className="text-gray-500 mb-8">
                  Be among the first drivers onboarded when we launch in Lagos.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleNext();
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      placeholder="Enter your first name"
                      value={form.firstName}
                      error={errors.firstName}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, firstName: e.target.value }))
                      }
                    />
                    <Input
                      label="Last Name"
                      placeholder="Enter your last name"
                      value={form.lastName}
                      error={errors.lastName}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, lastName: e.target.value }))
                      }
                    />
                  </div>

                  <Input
                    label="Email Address"
                    placeholder="Enter your Email address"
                    value={form.email}
                    error={errors.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                  />

                  <Input
                    label="Phone Number (Optional)"
                    placeholder="+2348012345678"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                  />

                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <div className="relative">
                      <select
                        className={`w-full px-4 py-2 pr-10 appearance-none border rounded-lg bg-white text-gray-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                          errors.city
                            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        }`}
                        value={form.city}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, city: e.target.value }))
                        }
                      >
                        <option value="">Select an option</option>
                        {cityOptions.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {!errors.city && (
                      <p className="mt-1 text-sm text-gray-500">
                        Select the city you&apos;ll drive in when MyWay launches.
                      </p>
                    )}
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <Button
                      type="button"
                      variant="outlineDark"
                      size="xl"
                      className="w-full rounded-xl order-2 sm:order-1"
                      onClick={handleBack}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="dark"
                      size="xl"
                      className="w-full rounded-xl order-1 sm:order-2"
                    >
                      Continue
                    </Button>
                  </div>

                  <p className="text-center text-gray-400 text-sm">
                    By joining, you agree to receive updates about MyWay.
                    <br />
                    You can unsubscribe anytime.
                  </p>
                </form>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
                  Your Driving Experience
                </h1>
                <p className="text-gray-500 mb-8">
                  Just a quick snapshot so we know you&apos;re a good fit for
                  airport rides.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleNext();
                  }}
                  className="space-y-5"
                >
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Driving Experience
                    </label>
                    <div className="relative">
                      <select
                        className={`w-full px-4 py-2 pr-10 appearance-none border rounded-lg bg-white text-gray-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                          errors.yearsOfExperience
                            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        }`}
                        value={form.yearsOfExperience}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            yearsOfExperience: e.target.value,
                          }))
                        }
                        disabled={isLoadingYears}
                      >
                        <option value="">
                          {isLoadingYears ? "Loading..." : "Select an option"}
                        </option>
                        {yearsOptions?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {errors.yearsOfExperience && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.yearsOfExperience}
                      </p>
                    )}
                  </div>

                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Do you currently own a car?
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {["Yes", "No"].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="carOwner"
                            value={option}
                            checked={form.carOwner === option}
                            onChange={(e) =>
                              setForm((p) => ({
                                ...p,
                                carOwner: e.target.value,
                              }))
                            }
                            className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-900"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                    {errors.carOwner && (
                      <p className="mt-1 text-sm text-red-500">{errors.carOwner}</p>
                    )}
                  </div>

                  {form.carOwner === "Yes" && (
                    <div className="w-full">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type of car
                      </label>
                      <div className="relative">
                        <select
                          className={`w-full px-4 py-2 pr-10 appearance-none border rounded-lg bg-white text-gray-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                            errors.carType
                              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          }`}
                          value={form.carType}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, carType: e.target.value }))
                          }
                          disabled={isLoadingCarTypes}
                        >
                          <option value="">
                            {isLoadingCarTypes ? "Loading..." : "Select an option"}
                          </option>
                          {carTypeOptions?.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <svg
                          className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                      {errors.carType && (
                        <p className="mt-1 text-sm text-red-500">{errors.carType}</p>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <Button
                      type="button"
                      variant="outlineDark"
                      size="xl"
                      className="w-full rounded-xl order-2 sm:order-1"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      variant="dark"
                      size="xl"
                      className="w-full rounded-xl order-1 sm:order-2"
                    >
                      Continue
                    </Button>
                  </div>
                </form>
              </>
            )}

            {currentStep === 3 && (
              <>
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
                  Driver Readiness
                </h1>
                <p className="text-gray-500 mb-8">
                  Help us understand when you&apos;d be ready to start driving
                  with MyWay.
                </p>

                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      When can you start?
                    </label>
                    <div className="relative">
                      <select
                        className={`w-full px-4 py-2 pr-10 appearance-none border rounded-lg bg-white text-gray-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                          errors.startWhen
                            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        }`}
                        value={form.startWhen}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, startWhen: e.target.value }))
                        }
                        disabled={isLoadingStartTimes}
                      >
                        <option value="">
                          {isLoadingStartTimes ? "Loading..." : "Select an option"}
                        </option>
                        {startTimeOptions?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {errors.startWhen && (
                      <p className="mt-1 text-sm text-red-500">{errors.startWhen}</p>
                    )}
                  </div>

                  {joinDriverWaitlistMutation.isError && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <Button
                      type="button"
                      variant="outlineDark"
                      size="xl"
                      className="w-full rounded-xl order-2 sm:order-1"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      variant="dark"
                      size="xl"
                      className="w-full rounded-xl order-1 sm:order-2"
                      isLoading={joinDriverWaitlistMutation.isPending}
                      disabled={joinDriverWaitlistMutation.isPending}
                    >
                      Join Driver Waitlist
                    </Button>
                  </div>

                  <p className="text-center text-gray-400 text-sm">
                    By joining, you agree to receive updates about MyWay.
                    <br />
                    You can unsubscribe anytime.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
