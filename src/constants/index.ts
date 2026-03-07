// Application constants

/**
 * Application metadata
 */
export const APP_NAME = "MyWay";
export const APP_DESCRIPTION = "Building the future, one step at a time.";
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

/**
 * API configuration
 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.myway.africa";
export const API_TIMEOUT = 30000; // 30 seconds

/**
 * Pagination defaults
 */
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;

/**
 * Route paths
 */
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  CONTACT: "/contact",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  SETTINGS: "/settings",
} as const;

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  THEME: "myway-theme",
  TOKEN: "myway-token",
  USER: "myway-user",
} as const;

/**
 * Breakpoints (matching Tailwind defaults)
 */
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;

/**
 * Animation durations (in ms)
 */
export const DURATIONS = {
  FAST: 150,
  NORMAL: 200,
  SLOW: 300,
} as const;

/**
 * Status codes
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
} as const;
