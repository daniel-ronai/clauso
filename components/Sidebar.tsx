'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Upload, 
  CreditCard, 
  BarChart3, 
  DollarSign,
  User,
  Settings,
  MessageSquare,
  Shield,
  FileText
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const sections = [
    {
      title: 'Organization',
      emoji: '',
      items: [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Upload', href: '/dashboard/new', icon: Upload },
      ]
    },
    {
      title: 'My Plan',
      emoji: '',
      items: [
        { name: 'Usage', href: '/dashboard/usage', icon: BarChart3 },
        { name: 'Subscription', href: '/dashboard/subscription', icon: CreditCard },
        { name: 'Payments', href: '/dashboard/payments', icon: DollarSign },
      ]
    },
    {
      title: 'Utilities',
      emoji: '',
      items: [
        { name: 'Account', href: '/dashboard/account', icon: User },
        { name: 'Settings', href: '/dashboard/settings', icon: Settings },
      ]
    },
    {
      title: 'Support',
      emoji: '',
      items: [
        { name: 'Feedback', href: '/dashboard/feedback', icon: MessageSquare },
        { name: 'Privacy', href: '/privacy-policy', icon: Shield },
        { name: 'Terms', href: '/terms-of-service', icon: FileText },
      ]
    }
  ];

  return (
    <aside className="w-[10%] min-w-[200px] bg-black border-r border-gray-800 flex flex-col h-screen">
      {/* Logo/Brand */}
      <div className="px-4 py-6 mt-4 border-b border-gray-800">
        <h1 className="text-lg font-semibold text-white">Clauso</h1>
      </div>

      {/* Navigation Sections */}
      <nav className="flex-1 overflow-y-auto py-6 px-6 mt-2 flex flex-col justify-evenly">
        {sections.map((section, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-2 px-3 mb-4">
              <span className="text-lg">{section.emoji}</span>
              <h2 className="text-xs font-semibold !text-gray-400 uppercase tracking-wide">
                {section.title}
              </h2>
            </div>
            <div className="flex flex-col gap-1 items-center">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{ paddingTop: '0.625rem', paddingBottom: '0.625rem' }}
                    className={`
                      flex items-center gap-3 px-4 rounded-lg
                      transition-all duration-150 group w-[80%]
                      ${active 
                        ? 'bg-black' 
                        : '!text-white hover:bg-gray-900'
                      }
                    `}
                  >
                    <Icon size={20} strokeWidth={2} className="!text-white" />
                    <span className={`text-base font-medium ${active ? 'gold-shine-text' : ''}`}>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}