'use client'

import { isMobile } from 'react-device-detect';

import { cn } from "@/utils/cn";

export default function SlidingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("w-screen h-screen flex p-0 items-center bg-black", 
    "overflow-y-hidden overflow-x-scroll", 
    // isMobile ? 'overflow-y-scroll overflow-x-hidden' : 'overflow-y-hidden overflow-x-scroll'
    )}>
    {children}
          </div>
  );
}
