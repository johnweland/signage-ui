"use client";
import { Providers } from "@/components/providers";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar";
import CookieConsent from "@/components/cookie-consent";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import SystemNotice from "@/components/sytem-notification";
import Notification from "@/components/toast-notification";

import { toast } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (
    pathname.startsWith("/signin") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/forgot-password")
  ) {
    return (
      <html lang="en" className="h-full light">
        <body className={classNames("h-full antialiased bg-neutral-50", inter.className)}>
          <Notification />
          <Providers>
            <main className="h-full px-4 sm:px-6 lg:px-8 flex justify-center items-center">{children}</main>
          </Providers>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className="h-full light">
      <body className={classNames("h-full antialiased bg-neutral-50", inter.className)}>
        <Notification />
        <SystemNotice />
        <Providers>
          <div>
            <Sidebar />
            <main className="py-10 lg:pl-72">
              <div className="px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
          </div>
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
