import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for merging Tailwind CSS classes with clsx
 * Automatically resolves conflicts between Tailwind classes
 *
 * @example
 * cn('px-2 py-1', condition && 'bg-blue-500', 'px-4')
 * // Returns: 'py-1 bg-blue-500 px-4' (px-4 overrides px-2)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date to a human-readable string
 * @param date - Date to format
 * @param options - Intl.DateTimeFormat options
 *
 * @example
 * formatDate(new Date()) // "January 9, 2026"
 */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", options).format(d);
}

/**
 * Format a number as currency
 * @param amount - Amount to format
 * @param currency - Currency code (default: USD)
 *
 * @example
 * formatCurrency(1234.56) // "$1,234.56"
 */
export function formatCurrency(
  amount: number,
  currency: string = "USD"
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Truncate a string to a maximum length
 * @param str - String to truncate
 * @param maxLength - Maximum length
 *
 * @example
 * truncate("Hello World", 5) // "Hello..."
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength)}...`;
}

/**
 * Debounce a function
 * @param fn - Function to debounce
 * @param delay - Delay in milliseconds
 *
 * @example
 * const debouncedSearch = debounce(search, 300);
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Generate a random ID
 * @param length - Length of the ID (default: 8)
 *
 * @example
 * generateId() // "x7k9m2n4"
 */
export function generateId(length: number = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

/**
 * Capitalize the first letter of a string
 * @param str - String to capitalize
 *
 * @example
 * capitalize("hello world") // "Hello world"
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Sleep for a specified duration
 * @param ms - Duration in milliseconds
 *
 * @example
 * await sleep(1000); // Wait for 1 second
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
