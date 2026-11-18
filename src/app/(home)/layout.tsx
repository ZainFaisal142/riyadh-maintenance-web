import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <html dir="ltr" lang="en-US">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
