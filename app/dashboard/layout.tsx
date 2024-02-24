"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import Link from "next/link";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link href={"/"} className="btn btn-ghost text-xl">
            ChatX
          </Link>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <a>Documents</a>
              </li>
              <li>
                <span className="inline-flex gap-2 items-center">
                  Add Document
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end pr-2">
          <Link href={"/dashboard/account"}>
            Account <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      {children}
    </section>
  );
}

export default withAuthenticator(DashboardLayout);
