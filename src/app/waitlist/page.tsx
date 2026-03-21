"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { Button, Input } from "@/components/ui";
import {
  waitlistApi,
  useWaitlistInterests,
  type WaitlistPayload,
} from "@/hooks/useWaitlist";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  interest: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

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

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export default function WaitlistPage() {
  const router = useRouter();
  const { data: interestOptions, isLoading: isLoadingInterestOptions } =
    useWaitlistInterests();

  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const joinWaitlistMutation = useMutation({
    mutationFn: waitlistApi.joinWaitlist,
    onSuccess: () => {
      setIsSubmitted(true);
    },
  });

  const validate = (): FieldErrors => {
    const nextErrors: FieldErrors = {};

    if (!form.firstName.trim())
      nextErrors.firstName = "Please enter a valid name";
    if (!form.lastName.trim())
      nextErrors.lastName = "Please enter a valid name";

    if (!form.email.trim() || !isValidEmail(form.email)) {
      nextErrors.email = "Please enter a valid email";
    }

    if (!form.phone.trim() || !isValidPhone(form.phone)) {
      nextErrors.phone = "Please enter a valid phone number";
    }

    if (!form.city.trim()) nextErrors.city = "Please select an option";
    if (!form.interest.trim()) {
      nextErrors.interest = "Please select an option";
    }

    return nextErrors;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const payload: WaitlistPayload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      city: form.city.trim(),
      interest: form.interest.trim(),
    };

    joinWaitlistMutation.mutate(payload);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="relative hidden lg:block">
            <Image
              src="/images/banner.jpg"
              alt="MyWay"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <h2 className="text-white text-4xl font-semibold mb-3">
                Airport rides, finally done right.
              </h2>
              <p className="text-white/70 max-w-xl">
                Premium shared rides built for airport travel — not random city
                trips. Verified co-passengers. Predictable pricing. Professional
                drivers.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-lg">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <h1 className="text-3xl font-semibold text-gray-900 text-center mb-2">
                You&apos;re on the Waitlist
              </h1>
              <p className="text-gray-500 text-center mb-10">
                Thanks for joining MyWay. You&apos;ll be among the first
                travelers invited when we launch in Lagos.
              </p>

              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                What Happens Next
              </h2>

              <div className="border border-gray-200 rounded-xl p-5 space-y-4 mb-10">
                {[
                  "You'll receive early access before public launch",
                  "We'll keep you updated on important milestones",
                  "You'll get launch perks and early user benefits",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-gray-900"
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
                  Join Our Early Community
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

              <p className="text-center text-gray-400 text-sm mt-6">
                Get updates, give feedback, and be part of shaping MyWay.
              </p>
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
            src="/images/banner.jpg"
            alt="MyWay"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute bottom-0 left-0 right-0 p-10">
            <h2 className="text-white text-4xl font-semibold mb-3">
              Airport rides, finally done right.
            </h2>
            <p className="text-white/70 max-w-xl">
              Premium shared rides built for airport travel — not random city
              trips. Verified co-passengers. Predictable pricing. Professional
              drivers.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-xl">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/images/logo-white.png"
                alt="MyWay"
                width={110}
                height={36}
                className="invert"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
              Join the MyWay Waitlist
            </h1>
            <p className="text-gray-500 mb-2">
              Get early access to premium shared airport rides when we launch in
              Lagos.
            </p>
            <p className="text-gray-400 text-sm mb-8">
              Early access. Launch updates. No clutter.
            </p>

            <form onSubmit={onSubmit} className="space-y-5">
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
                label="Phone Number"
                placeholder="+2348012345678"
                value={form.phone}
                error={errors.phone}
                helperText="We will use this for launch updates and access invites."
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
              />

              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your City
                </label>
                <div className="relative">
                  <select
                    className={`
                      w-full px-4 py-3 pr-10 appearance-none
                      border rounded-lg bg-white text-gray-900
                      transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-offset-0
                      ${
                        errors.city
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      }
                    `}
                    value={form.city}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, city: e.target.value }))
                    }
                  >
                    <option value="" className="text-gray-500">
                      Select an option
                    </option>
                    {cityOptions.map((city) => (
                      <option key={city} value={city} className="text-gray-900">
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
                    Select the city you&apos;ll use MyWay from most often.
                  </p>
                )}
                {errors.city && (
                  <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                )}
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Why Are You Interested?
                </label>
                <div className="relative">
                  <select
                  className={`
                    w-full px-4 py-3 pr-10 appearance-none
                    border rounded-lg bg-white text-gray-900
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-offset-0
                    ${
                      errors.interest
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    }
                  `}
                  value={form.interest}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, interest: e.target.value }))
                  }
                  disabled={isLoadingInterestOptions}
                >
                  <option value="" className="text-gray-500">
                    {isLoadingInterestOptions ? "Loading..." : "Select an option"}
                  </option>
                  {interestOptions?.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="text-gray-900"
                    >
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
                {!errors.interest && (
                  <p className="mt-1 text-sm text-gray-500">
                    Select the main reason you&apos;re joining the waitlist.
                  </p>
                )}
                {errors.interest && (
                  <p className="mt-1 text-sm text-red-500">{errors.interest}</p>
                )}
              </div>

              {joinWaitlistMutation.isError && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  Something went wrong. Please try again.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <Button
                  type="button"
                  variant="outlineDark"
                  size="xl"
                  className="w-full rounded-xl"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="dark"
                  size="xl"
                  className="w-full rounded-xl"
                  isLoading={joinWaitlistMutation.isPending}
                  disabled={joinWaitlistMutation.isPending}
                >
                  Join the Waitlist
                </Button>
              </div>

              <p className="text-center text-gray-400 text-sm">
                By joining, you agree to receive updates about MyWay.
                <br />
                You can unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
