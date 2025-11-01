"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  // Don't render anything if authenticated (will redirect)
  if (isAuthenticated) {
    return null;
  }

  return (
    <div>
      <h1>Selfyne</h1>
    </div>
  );
}
