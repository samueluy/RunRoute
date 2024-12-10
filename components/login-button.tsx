"use client"

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import Image from "next/image"

export function LoginButton() {
  return (
    <Button
      onClick={() => signIn("strava", { callbackUrl: "/profile" })}
      className="bg-[#FC4C02] text-white hover:bg-[#FC4C02]/90"
    >
      <Image
        src="/strava-white.png"
        alt="Strava logo"
        width={20}
        height={20}
        className="mr-2"
      />
      Continue with Strava
    </Button>
  )
}