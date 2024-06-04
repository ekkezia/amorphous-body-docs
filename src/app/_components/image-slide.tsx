'use client'
// import { isMobile } from 'react-device-detect';

import Image from "next/image";
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';

import { PROJECT_URL } from '../../../shared';

const NUM_OF_IMAGES = 5;

export default function ImageSlide() {
  const pathname = usePathname();

  return (
    <div className={cn("relative w-screen h-screen flex p-0 items-center", 
    "flex left-[75px]",
    // isMobile ? 'flex-col' : 'flex', 
    // isMobile ? 'left-0' : 'left-[75px]'
    )}>
      {
        [...Array(NUM_OF_IMAGES)].map((_, idx) => {
          const imageSrc = `${PROJECT_URL}${pathname}/rec-0000${17 + idx * 17}.png`
          return (
          <Image
            priority
            alt={imageSrc}
            height={720}
            key={idx}
            src={imageSrc}
            width={1280}
            className={cn("relative", "rotate-0", "border-b-1" ,
            // isMobile ? 'rotate-90' : 'rotate-0'
            )}
          />
          )
        })
      }
    </div>
  );
}
