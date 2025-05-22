"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "./AuthContext";

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/programs", label: "Programs" },
  { href: "/tracking", label: "Tracking" },
  { href: "/incentives", label: "Incentives" },
  { href: "/feedback", label: "Feedback" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3">
        <Link href="/" className="text-lg font-bold tracking-tight mb-2 md:mb-0 md:mr-6">MYH</Link>
        <ul className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-2 rounded-xl shadow bg-white/20 hover:bg-white/40 text-white transition-colors font-medium text-sm md:text-base border border-white/30 ${pathname === link.href ? "bg-white/60 text-teal-700 font-bold" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            {user ? (
              <button
                onClick={logout}
                className="block px-4 py-2 rounded-xl shadow bg-white/20 hover:bg-white/40 text-white transition-colors font-medium text-sm md:text-base border border-white/30"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/auth"
                className={`block px-4 py-2 rounded-xl shadow bg-white/20 hover:bg-white/40 text-white transition-colors font-medium text-sm md:text-base border border-white/30 ${pathname === "/auth" ? "bg-white/60 text-teal-700 font-bold" : ""}`}
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
} 