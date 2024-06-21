'use client'
import { cn } from '@/utils/cn';

export default function ImageSlide({ numOfImages, path }: { numOfImages: number, path: string }) {
  return (
    <div className={cn("relative w-fit h-dvh max-h-screen flex p-0 items-center", 
    "flex translate-x-[66px]",
    "z-0",
    // isMobile ? 'flex-col' : 'flex', 
    // isMobile ? 'left-0' : 'left-[64px]'
    )}>
      {
        [...Array(numOfImages)].map((_, idx) => {
          const imageSrc = `${path}_${idx}.png`
          return (
            <div className="h-[360px] w-[640px] tall:w-[1280px] tall:h-[720px] relative border-b border-t" key={idx}>
              <img
                alt={imageSrc}
                className={cn("absolute w-full h-full", "rotate-0")}
                src={imageSrc}
              />
            </div>
          )
        })
      }
      </div>
  );
}

// function IndividualImage({ imageSrc}: { imageSrc: string}) {
//   const [loading, setLoading] = useState<boolean>(true)
//   if(loading) return <div>Loading...</div>
//   else 
//   return (
//     <Image
//     fill
//     priority
//     alt={imageSrc}
//     className={cn("absolute", "rotate-0")}
//     onLoad={() => {setLoading(false)}}
//     src={imageSrc}
//   />
//   )
// }