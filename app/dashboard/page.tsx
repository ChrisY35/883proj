"use client";
import Link from 'next/link';
import { useAuth } from '../components/AuthContext';

const cardsByRole = {
  admin: [
    {
      href: '/admin',
      title: 'Admin Dashboard',
      desc: 'Approve registrations and view reports.',
      color: 'from-gray-400 to-gray-600',
    },
    {
      href: '/profile',
      title: 'Profile',
      desc: 'View and edit your profile.',
      color: 'from-green-400 to-teal-500',
    },
  ],
  employee: [
    {
      href: '/programs',
      title: 'Programs',
      desc: 'Browse and register for programs.',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      href: '/tracking',
      title: 'Wellness Tracking',
      desc: 'Log your wellness activities.',
      color: 'from-teal-400 to-cyan-500',
    },
    {
      href: '/incentives',
      title: 'Incentives',
      desc: 'View your points and badges.',
      color: 'from-pink-400 to-pink-600',
    },
    {
      href: '/feedback',
      title: 'Feedback Survey',
      desc: 'Submit feedback after programs.',
      color: 'from-purple-400 to-indigo-500',
    },
    {
      href: '/profile',
      title: 'Profile',
      desc: 'View and edit your profile.',
      color: 'from-green-400 to-teal-500',
    },
  ],
  organizor: [
    {
      href: '/programs',
      title: 'Manage Programs',
      desc: 'Create and manage programs.',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      href: '/feedback',
      title: 'Feedback Survey',
      desc: 'View and manage feedback.',
      color: 'from-purple-400 to-indigo-500',
    },
    {
      href: '/profile',
      title: 'Profile',
      desc: 'View and edit your profile.',
      color: 'from-green-400 to-teal-500',
    },
  ],
};

export default function DashboardPage() {
  const { user } = useAuth();
  const role = user?.role || 'employee';
  const cards = cardsByRole[role];
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-6">MYH Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={`rounded-2xl shadow-lg bg-gradient-to-br ${card.color} text-white p-6 flex flex-col items-start hover:scale-105 hover:shadow-2xl transition-transform min-h-[120px]`}
          >
            <div className="text-lg font-semibold mb-2">{card.title}</div>
            <div className="text-sm opacity-90">{card.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
} 