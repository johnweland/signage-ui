"use client";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar";
import CookieConsent from "@/components/cookie-consent";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import SystemNotice from "@/components/sytem-notification";

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
      <html lang="en" className="h-full bg-neutral-50 light">
        <body className={classNames("h-full antialiased", inter.className)}>
          <Providers>
            <main className="px-4 sm:px-6 lg:px-8">{children}</main>
          </Providers>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className="h-full bg-neutral-50 light">
      <body className={classNames("h-full antialiased", inter.className)}>
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
