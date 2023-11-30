"use client";

import { PropsWithChildren } from "react";

export const dynamic = "force-static";

export default async function SettingsPage({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}
