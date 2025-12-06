'use client';

import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

export default function DashboardNav({ name }: { name: string }) {

  return (
    <nav style={{ paddingLeft: '3rem', paddingRight: '3rem' }} className="h-16 bg-white border-b border-black flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <h1 className="text-xl font-bold !text-black">Clauso</h1>
        </Link>
        <h1>  {'>'}  </h1>
        <Link href="/dashboard/account">
          <h1 className="text-xl font-bold !text-black">{name}</h1>
        </Link>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-6">
        {/* Help/Docs */}
        <Link 
          href="/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          title="Documentation"
        >
          <span className="text-2xl">❓</span>
        </Link>

        {/* Subscription */}
        <Link 
          href="/dashboard/subscription"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          title="Subscription"
        >
          <span className="text-2xl">🚀</span>
        </Link>

        {/* Notifications */}
        <Link 
          href="/dashboard/subscription"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          title="Subscription"
        >
          <span className="text-2xl">🔔</span>
        </Link>

        {/* User button from Clerk */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}