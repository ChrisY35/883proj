"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../components/AuthContext";

export default function AuthPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = login(username, password);
    if (ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xs flex flex-col gap-4 border border-gray-200">
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-full">Login</button>
        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        <div className="text-xs text-gray-500 mt-2">
          <div>Try one of these users:</div>
          <div className="mt-1">
            <span className="font-mono">admin / 123</span><br />
            <span className="font-mono">employee / 123</span><br />
            <span className="font-mono">organizor / 123</span>
          </div>
        </div>
      </form>
    </div>
  );
} 