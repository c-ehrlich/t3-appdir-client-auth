"use client";

import { useSession } from "next-auth/react";

export function SomeClientComponent() {
  const session = useSession();

  return <pre>Session: {JSON.stringify(session, null, 2)}</pre>;
}
