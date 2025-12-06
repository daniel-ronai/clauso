import React from 'react'

const DashboardTopBar = () => {
  return (
<header className="h-[10vh] w-full border-b bg-white flex items-center px-6 justify-between">
      {/* Left: Logo */}
      <div className="text-xl font-bold tracking-tight">
        Clausó
      </div>

      {/* Right: Notifications + Account */}
      <div className="flex items-center gap-6">
        {/* Notifications Icon */}
        <button className="relative p-2 hover:bg-gray-100 rounded-xl transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.7}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 
                 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 
                 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 
                 1.436L4 17h5m6 0v1a3 3 0 
                 11-6 0v-1m6 0H9"
            />
          </svg>
          {/* Notification Dot */}
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Account */}
        <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <span className="hidden sm:block font-medium text-gray-800">Account</span>
        </button>
      </div>
    </header>
  )
}

export default DashboardTopBar