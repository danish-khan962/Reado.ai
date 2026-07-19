import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateTime(date: Date | string = new Date()): string {
  const d = typeof date === "string" ? new Date(date) : date;

  const day = d.getDate();
  const month = d.toLocaleString("en-GB", { month: "short" });
  const year = d.getFullYear();
  const time = d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const weekday = d.toLocaleString("en-GB", { weekday: "long" });

  return `${day} ${month} ${year}, ${time}, ${weekday}`;
}