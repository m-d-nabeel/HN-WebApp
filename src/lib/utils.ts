import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeAgo(timestamp: string) {  
  const date = new Date(timestamp);
  const now = new Date();
  const elapsedMilliseconds =
    (now as unknown as number) - (date as unknown as number);
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const elapsedDays = Math.floor(elapsedHours / 24);
  const elapsedWeeks = Math.floor(elapsedDays / 7);
  const elapsedMonths = Math.floor(elapsedDays / 30);
  const elapsedYears = Math.floor(elapsedDays / 365);

  switch (true) {
    case elapsedYears > 1:
      return `${elapsedYears} years ago`;
    case elapsedYears === 1:
      return "1 year ago";
    case elapsedMonths > 1:
      return `${elapsedMonths} months ago`;
    case elapsedMonths === 1:
      return "1 month ago";
    case elapsedWeeks > 1:
      return `${elapsedWeeks} weeks ago`;
    case elapsedWeeks === 1:
      return "1 week ago";
    case elapsedDays > 1:
      return `${elapsedDays} days ago`;
    case elapsedDays === 1:
      return "1 day ago";
    case elapsedHours > 1:
      return `${elapsedHours} hours ago`;
    case elapsedHours === 1:
      return "1 hour ago";
    case elapsedMinutes > 1:
      return `${elapsedMinutes} minutes ago`;
    case elapsedMinutes === 1:
      return "1 minute ago";
    default:
      return `${elapsedSeconds} seconds ago`;
  }
}
