"use client";
import { useAuth } from "./AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!user && pathname !== "/auth") {
      router.replace("/auth");
    }
  }, [user, pathname, router]);

  if (!user && pathname !== "/auth") {
    return null;
  }
  return <>{children}</>;
} 