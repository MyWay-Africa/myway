// Common type definitions

/**
 * API Response wrapper type
 */
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

/**
 * Base entity with common fields
 */
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * User type
 */
export interface User extends BaseEntity {
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
}

/**
 * User roles
 */
export type UserRole = "admin" | "user" | "moderator";

/**
 * Navigation link type
 */
export interface NavLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
  children?: NavLink[];
}

/**
 * Form field error
 */
export interface FieldError {
  field: string;
  message: string;
}

/**
 * Make specific properties optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Make specific properties required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

/**
 * Extract the resolved type from a Promise
 */
export type Awaited<T> = T extends Promise<infer U> ? U : T;
