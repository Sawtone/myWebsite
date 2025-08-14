"use client"

import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function ProfileCore() {
  const name = "Sawtone"
  const bio = "热爱设计与代码，专注前端与交互"
  const tags = ["Frontend", "Photo", "Music", "Read",]

  return (
    <div className="relative mx-auto w-full max-w-2xl rounded-3xl border border-white/10 bg-neutral-900/50 px-6 py-8 
        shadow-[0_20px_80px_-20px_rgba(236,72,153,0.25),0_40px_120px_-40px_rgba(16,185,129,0.15)] backdrop-blur">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-10 size-40 rounded-full 
            bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),rgba(255,255,255,0))] blur-xl"
      />
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
        <Avatar className="size-24 ring-2 ring-white/10">
          <AvatarImage
            src="/placeholder.svg?height=160&width=160"
            alt="个人头像"
          />
          <AvatarFallback>Sawtone</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-3">
          <h1 id="profile" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {name}
          </h1>
          <p className="text-sm text-neutral-300 sm:text-base">{bio}</p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {tags.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="bg-neutral-800/70 text-neutral-200 hover:bg-neutral-800"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
