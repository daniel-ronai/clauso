import React from 'react'
import Navbar from './Navbar'
import { ClerkProvider } from '@clerk/nextjs';
import Footer from './Footer';

export const DashboardContent = () => {
  return (
            <div className = "h-full flex flex-col">
              <div className="hidden sm:flex">
                 yo wassup
              </div>

              <div className="flex sm:hidden">
                 nah
              </div>
            </div>
  );
}
