import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { ToastNotification } from "./toast-notification";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="pl-[72px]">
        <Header />
        <main className="w-full pt-[72px] min-h-screen bg-background">
          {children}
        </main>
      </div>
      <ToastNotification />
    </div>
  );
}

