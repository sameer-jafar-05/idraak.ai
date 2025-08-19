// shared/components/layout/Header.tsx
'use client'; // 1 - interactive: mobile menu toggle needs client behavior
import React from 'react';
import Link from 'next/link';
import Logo from '../ui/atoms/Logo'; // 2 - server atom used inside a client component
import Button from '../ui/atoms/Button'; // 3 - atom we created

export default function Header() {
  const [open, setOpen] = React.useState(false); // 4 - mobile menu toggle state

  return (
    <header className="bg-white border-b">
      {/* top bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* left: brand */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* center / desktop nav */}
          <nav className="hidden md:flex gap-6" aria-label="Primary navigation">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/courses" className="hover:underline">Courses</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
          </nav>

          {/* right: CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/signup" className="hidden sm:inline-block">
              <Button variant="secondary" size="md">Sign up</Button>
            </Link>

            {/* mobile menu button */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2"
            >
              {/* simple hamburger / X icon using text for now */}
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu (collapsible) */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" className="block">Home</Link>
            <Link href="/courses" className="block">Courses</Link>
            <Link href="/about" className="block">About</Link>
            <Link href="/blog" className="block">Blog</Link>
            <Link href="/signup" className="block">Sign up</Link>
          </div>
        </div>
      )}
    </header>
  );
}