import DashboardNav from "@/components/DashBoardNav";
import Sidebar from "@/components/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <div className="flex h-screen w-screen">

        {/* Desktop view */}
        <div className="hidden md:flex w-full">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <DashboardNav />
            <main className="flex-1 overflow-auto p-6">
              {children}
            </main>
          </div>
        </div>

        {/* Mobile view */}
        <div className="flex md:hidden w-full">
          nah
        </div>
        
      </div>
    </ClerkProvider>
  );
}