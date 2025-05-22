"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

const USERS = [
  { username: "admin", password: "123", role: "admin" },
  { username: "employee", password: "123", role: "employee" },
  { username: "organizor", password: "123", role: "organizor" },
];

export type UserRole = "admin" | "employee" | "organizor";
export type User = { username: string; role: UserRole } | null;

type AuthContextType = {
  user: User;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const router = useRouter();

  function login(username: string, password: string) {
    const found = USERS.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setUser({ username: found.username, role: found.role as UserRole });
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
    router.push("/auth");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
} 