import type { ReactNode } from "react";

type IconName = "arrow" | "arrowUp" | "book" | "sun" | "rocket" | "heart" | "sparkle" | "flask" | "award" | "compass" | "users" | "layers" | "menu" | "pin" | "phone" | "mail" | "clock" | "check" | "shield" | "calendar" | "camera" | "leaf" | "play" | "chevron" | "send";

const shapes: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  arrowUp: <><path d="M7 17 17 7"/><path d="M8 7h9v9"/></>,
  book: <><path d="M12 7a8 8 0 0 0-9-2v14a8 8 0 0 1 9 2"/><path d="M12 7a8 8 0 0 1 9-2v14a8 8 0 0 0-9 2"/><path d="M12 7v14"/></>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></>,
  rocket: <><path d="M4 14c-1.5 1.3-2 3.5-2 5 1.5 0 3.7-.5 5-2"/><path d="M10 15 9 9c3-5 7-7 13-7 0 6-2 10-7 13l-5-1Z"/><circle cx="16" cy="8" r="2"/><path d="m9 14-3 3"/></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>,
  sparkle: <><path d="m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7L12 2Z"/><path d="m19 2 1 2 2 1"/></>,
  flask: <><path d="M9 3h6M10 3v7L4 20a1.5 1.5 0 0 0 1.3 2h13.4a1.5 1.5 0 0 0 1.3-2l-6-10V3"/><path d="M7 16h10"/></>,
  award: <><circle cx="12" cy="8" r="5"/><path d="M8 12.5 7 22l5-3 5 3-1-9.5"/></>,
  compass: <><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.4 4.6-4.6 2.4 2.4-4.6 4.6-2.4Z"/></>,
  users: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2"/><path d="M17 5a3 3 0 0 1 0 6m1 4a5 5 0 0 1 3 5"/></>,
  layers: <><path d="m12 2 10 6-10 6L2 8l10-6Zm-10 10 10 6 10-6M2 16l10 6 10-6"/></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  phone: <path d="M5 3h4l2 5-2.3 2a16 16 0 0 0 5.3 5.3L16 13l5 2v4a2 2 0 0 1-2.3 2C10 19.7 4.3 14 3 5.3A2 2 0 0 1 5 3Z"/>,
  mail: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  shield: <><path d="m12 2 8 4v6c0 5.5-3.2 8.6-8 10-4.8-1.4-8-4.5-8-10V6l8-4Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/></>,
  calendar: <><rect x="3" y="5" width="18" height="17" rx="2"/><path d="M7 2v6m10-6v6M3 10h18"/></>,
  camera: <><rect x="2" y="6" width="20" height="15" rx="3"/><circle cx="12" cy="13.5" r="4"/><path d="m7 6 2-3h6l2 3"/></>,
  leaf: <><path d="M20 4C10 3 4 7 4 15c0 3 2 5 5 5 8 0 12-8 11-16Z"/><path d="M4 20c2-5 6-9 12-12"/></>,
  play: <path d="m8 5 11 7-11 7V5Z"/>,
  chevron: <path d="m9 18 6-6-6-6"/>,
  send: <><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/></>,
};

export default function Icon({name, size=20, className=""}: {name:IconName;size?:number;className?:string}) {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[name]}</svg>;
}
