'use client'

import { useLayoutContext } from "@/contextStore/layout-context";
import { cn } from "@/utils/cn";

export default function SlidingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { showMenu } = useLayoutContext()

  return (
          <div className={cn(`overflow-y-hidden overflow-x-scroll flex w-screen h-screen flex p-0 items-center duration-300`)}>
            {children}
          </div>
  );
}
