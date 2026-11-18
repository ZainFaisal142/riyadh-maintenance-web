"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackConversion, type ConversionAction } from "@/lib/analytics";

interface ConversionLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> {
  action: ConversionAction;
}

export function ConversionLink({
  action,
  ...anchorProps
}: ConversionLinkProps) {
  return (
    <a
      {...anchorProps}
      onClick={() => {
        trackConversion(action);
      }}
    />
  );
}
