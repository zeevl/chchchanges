import Link from "next/link";
import React from "react";
import { TriggerLogo } from "./logos/Trigger";
import { GitHub } from "./logos/GitHub";

export const Header = () => {
  return (
    <header className="fixed bg-background w-screen h-14 border-b z-10">
      <div className="flex items-center justify-between h-full px-4 md:pl-4 md:pr-6">
        <div className="flex items-baseline gap-2">
          <Link
            href={"/"}
            className="text-xl sm:text-2xl font-bold tracking-tighter"
          >
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
              AutoChangelog
            </span>
          </Link>
          <div className="text-xs text-dimmed flex items-center gap-1">
            <span className="hidden sm:inline-block">powered </span>by
            <Link
              href="https://trigger.dev"
              className="text-bright hover:text-indigo-500"
              target="_blank"
            >
              <TriggerLogo className="h-4" />
            </Link>
          </div>
        </div>
        <Link
          href="https://github.com/triggerdotdev/ai-changelog"
          target="_blank"
          className="flex items-center gap-1.5 hover:text-indigo-500"
        >
          <GitHub className="w-4 h-4" />
          <span className="hidden sm:block text-sm font-normal">GitHub</span>
        </Link>
      </div>
    </header>
  );
};
