import { DashboardContent } from "@/components/DashboardContent";
import DashboardNav from "@/components/DashBoardNav";
import Sidebar from "@/components/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ReactNode } from "react";

export default async function DashboardLayout({ children }: { children: ReactNode }) {

    const user = await currentUser();

  return (
    <ClerkProvider>
      <div className="flex h-screen w-screen">

        {/* Desktop view */}
        <div className="hidden md:flex w-full">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <DashboardNav name={user?.fullName!} />
            <main className="flex-1 overflow-auto p-6">
              {children}
            </main>
          </div>
        </div>

        {/* Mobile view */}
        <div className="flex md:hidden w-full">
          <div className="content-container">
            <DashboardNav name={user?.fullName!} />
            <DashboardContent />
          </div>
        </div>

      </div>
    </ClerkProvider>
  );
}