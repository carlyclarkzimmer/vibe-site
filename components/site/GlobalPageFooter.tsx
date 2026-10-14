"use client";

import { usePathname } from "next/navigation";
import { EquityPledge } from "../EquityPledge";
import { SiteFooter } from "./SiteFooter";

export function GlobalPageFooter() {
  const pathname = usePathname();
  const showEquityPledge = pathname !== "/love";

  return (
    <>
      {showEquityPledge ? <EquityPledge /> : null}
      <SiteFooter />
    </>
  );
}
