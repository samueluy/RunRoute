"use client";

import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useSession } from "next-auth/react"; // Import useSession to get authentication status
import Link from "next/link";

export default function Home() {
  const { status } = useSession(); // Check if user is authenticated

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center space-y-8 px-4 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Discover the Best Running Routes
          <br className="hidden sm:inline" />
          in the Philippines
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Find, rate, and share running routes. Connect with the local running community
          and explore new paths for your next run.
        </p>
      </div>
      <div className="flex flex-col gap-4 min-[400px]:flex-row">
        {status === "authenticated" ? (
          <Link href="/routes">
            <Button size="lg" className="gap-2">
              <MapPin className="h-5 w-5" />
              Explore Routes
            </Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button size="lg" className="gap-2">
              <MapPin className="h-5 w-5" />
              Explore Routes
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
