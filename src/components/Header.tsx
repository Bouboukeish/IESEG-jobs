'use client'
import { useState } from 'react';
import Image from 'next/image';

interface Job {
  company: string;
  position: string;
  date: string;
  isNew: boolean;
  logo: string;
}

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const jobs: Job[] = [
    {
      company: "L'Oréal",
      position: "Beauty Product Tester",
      date: "2024-01-20",
      isNew: true,
      logo: "/loreal.png"
    },
    {
      company: "Decathlon",
      position: "Weekend Sports Event Helper",
      date: "2024-01-18",
      isNew: false,
      logo: "/decathlon.png"
    }
  ];

  const newJobs = jobs.filter(job => job.isNew).length;

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          Student Quick Missions
        </h1>
        
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:from-indigo-600 hover:to-purple-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a4 4 0 00-4-4h-4a4 4 0 00-4 4v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">My Jobs</span>
            {newJobs > 0 && (
              <span className="flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                {newJobs}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-96 bg-white rounded-xl shadow-xl border border-slate-100 z-50 transform transition-all duration-300 ease-out">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-800">My Jobs</h3>
                <span className="text-sm text-gray-500">{jobs.length} total</span>
              </div>
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
                {jobs.map((job, index) => (
                  <div 
                    key={index}
                    className="p-4 hover:bg-slate-50 transition-all border-b border-slate-100 flex items-center gap-4"
                  >
                    <Image 
                      src={job.logo} 
                      alt={job.company} 
                      width={48}
                      height={48}
                      className="rounded-lg object-cover border border-slate-200"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-gray-900">{job.position}</p>
                        {job.isNew && (
                          <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full font-medium animate-pulse">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{job.company}</p>
                      <p className="text-xs text-gray-400 mt-1">{job.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-slate-50 rounded-b-xl border-t border-slate-100">
                <button className="w-full py-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
                  View All Jobs
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
} 