// import { isMobile } from 'react-device-detect';

import Image from "next/image";

import { cn } from '@/utils/cn';

const NUM_OF_IMAGES = 5;

export default function ImageSlide() {
  return (
    <div className={cn("relative w-screen h-screen flex p-0 items-center", 
    "flex left-[75px]",
    // isMobile ? 'flex-col' : 'flex', 
    // isMobile ? 'left-0' : 'left-[75px]'
    )}>
      {
        [...Array(NUM_OF_IMAGES)].map((_, idx) => {
          return (
          <Image
            priority
            alt={`rec-0000${17 + idx * 17}`}
            height={720}
            key={idx}
            src={`/rec-0000${17 + idx * 17}.png`}
            width={1280}
            className={cn("relative", "rotate-0" ,
            // isMobile ? 'rotate-90' : 'rotate-0'
            )}
          />
          )
        })
      }
    </div>
  );
}
