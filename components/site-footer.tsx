import Link from "next/link"

import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="sticky top-0 z-40 w-full border-t bg-background">
      <div className="container flex h-16 flex-row items-center justify-end space-x-4">
        <Link
          href={siteConfig.links.rtsLinkedIn}
          target="_blank"
          rel="noreferrer"
        >
          By Ryan Smith
        </Link>
      </div>
    </footer>
  )
}
