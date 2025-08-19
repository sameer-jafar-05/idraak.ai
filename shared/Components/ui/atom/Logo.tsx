// shared/components/ui/atoms/Logo.tsx
import React from 'react';
import Link from 'next/link';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  asText?: boolean; // whether to render plain text or an image
};

export default function Logo({ size = 'md', asText = true }: LogoProps) {
  // compute simple classNames for sizes
  const sizeClass = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base';

  // This is a server component: no 'use client' and no client-only hooks.
  return (
    <Link href="/" aria-label="idraak.ai home" className={`font-semibold tracking-tight ${sizeClass}`}>
      {/* plain text logo (replace with optimized image later if needed) */}
      idraak.ai
    </Link>
  );
}