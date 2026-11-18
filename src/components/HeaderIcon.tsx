import type { ReactNode, SVGProps } from "react";

export type HeaderIconName =
  | "brand"
  | "location"
  | "phone"
  | "whatsapp"
  | "translate"
  | "menu"
  | "close";

const iconPaths: Record<HeaderIconName, ReactNode> = {
  brand: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9v11h13V9M9 20v-6h6v6" />
      <path d="m15.5 5.9 2 1.7" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M21 16.4v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.7 2 2 0 0 1 3.1 1.5h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L7 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .6 3 .7a2 2 0 0 1 1.6 1.9Z" />
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7a8.5 8.5 0 1 1 16.3-3.8Z" />
      <path d="M8 8.2c.2-.5.5-.6.8-.6h.6c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4-.1.6.5.9 1.3 1.7 2.2 2.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.3.6 0 .4-.3 1.2-.8 1.5-.5.4-1.1.6-1.8.4-2-.5-3.9-1.7-5.3-3.3-1-1.1-1.7-2.4-1.8-3.4 0-.5.1-.9.4-1.1Z" />
    </>
  ),
  translate: (
    <>
      <path d="m5 8 4 4 4-4M9 12V3" />
      <path d="M3 3h12M6 17h12m-5-3 3 7 3-7m-5 5h4" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
};

interface HeaderIconProps extends SVGProps<SVGSVGElement> {
  name: HeaderIconName;
}

export function HeaderIcon({ name, ...props }: HeaderIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
}
