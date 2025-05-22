// Next.js + Tailwind styled wellness UI prototype with navbar and post example
'use client';

import Link from 'next/link';

const navCards = [
  {
    href: '/auth',
    title: 'Login',
    desc: 'Access the system as Employee, Organizer, or Admin.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    href: '/dashboard',
    title: 'Dashboard',
    desc: 'Your main hub for health and program info.',
    color: 'from-green-400 to-teal-500',
  },
  {
    href: '/programs',
    title: 'Programs',
    desc: 'Browse and register for wellness and recreational programs.',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    href: '/tracking',
    title: 'Wellness Tracking',
    desc: 'Log meals, water, smoking, and mental health activities.',
    color: 'from-teal-400 to-cyan-500',
  },
  {
    href: '/incentives',
    title: 'Incentives',
    desc: 'View your points and earned badges.',
    color: 'from-pink-400 to-pink-600',
  },
  {
    href: '/feedback',
    title: 'Feedback Survey',
    desc: 'Submit your feedback after programs.',
    color: 'from-purple-400 to-indigo-500',
  },
  {
    href: '/admin',
    title: 'Admin Dashboard',
    desc: 'Approve registrations and view reports (admin only).',
    color: 'from-gray-400 to-gray-600',
  },
];

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to Manage Your Health (MYH) Prototype</h1>
      <p className="mb-8">Explore the features below as an Employee, Organizer, or Admin.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {navCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={`rounded-2xl shadow-lg bg-gradient-to-br ${card.color} text-white p-6 flex flex-col items-start hover:scale-105 hover:shadow-2xl transition-transform min-h-[150px]`}
          >
            <div className="text-xl font-semibold mb-2">{card.title}</div>
            <div className="text-sm opacity-90">{card.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
