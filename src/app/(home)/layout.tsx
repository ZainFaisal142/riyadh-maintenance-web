import type { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <html dir="ltr" lang="en-US">
      <body>{children}</body>
    </html>
  );
}
