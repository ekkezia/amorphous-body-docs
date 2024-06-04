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
    <div className={cn("relative w-fit h-dvh flex p-0 items-center", 
    "flex translate-x-[66px]",
    // isMobile ? 'flex-col' : 'flex', 
    // isMobile ? 'left-0' : 'left-[64px]'
    )}>
      {
        [...Array(NUM_OF_IMAGES)].map((_, idx) => {
          const imageSrc = `${PROJECT_URL}${pathname}/rec-0000${17 + idx * 17}.png`
          return (
            <div className="h-[360px] w-[640px] tall:w-[1280px] tall:h-[720px] relative border-b border-t" key={idx}>
              <Image
                priority
                alt={imageSrc}
                layout="fill"
                objectFit='cover'
                src={imageSrc}
                className={cn("absolute", "rotate-0" ,
                // isMobile ? 'rotate-90' : 'rotate-0'
                )}
              />
            </div>
          )
        })
      }
      </div>
  );
}
