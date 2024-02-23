"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export default withAuthenticator(DashboardLayout);
