'use client'

// import { isMobile } from 'react-device-detect';

import Link from 'next/link';
import { usePathname } from "next/navigation";

import { useLayoutContext } from "@/contextStore/layout-context";
import { cn } from "@/utils/cn";

const MENU = {
  'launchpad': 'Launchpad',
  'midi-graph': 'MIDI Graph',
  'slitscan': 'Slitscan'
}

export default function Menu() {
  const pathname = usePathname()

  const { setShowMenu, showMenu } = useLayoutContext()

  const handleHover = () => {
    setShowMenu(true)
  }

    const handleUnHover = () => {
    setShowMenu(false)
  }

  // const isMobile = true;
  return (
      <div onMouseEnter={handleHover} onMouseLeave={handleUnHover} 
      className={cn("fixed z-[999] backdrop-blur-[2px] cursor-pointer text-center font-mono duration-500 text-white left-0 w-fit text-sm h-[360px]", 
      "rotate-writing",
      "sm:bg-none bg:black",
      showMenu ? 'translate-x-0' : 'translate-x-[-100px]'
      // showMenu ? `${isMobile ? 'translate-y-0' : 'translate-x-0'}` : `${isMobile ? 'translate-y-[-100px]' : 'translate-x-[-100px]'}`,
      // isMobile ? "top-0" : "left-0",
      // isMobile ? '' : 'rotate-writing' ,
      // isMobile ? 'h-fit' : 'h-[360px]',
      // isMobile ? 'w-screen' : 'w-fit',
      // isMobile ? 'flex-col-reverse flex' : 'flex flex-col',
      // isMobile ? 'text-xs' : 'text-sm',
      )}
      style={{
        border: '1px solid white'
      }}
      >
        <div className={cn("pr-4 w-[75px]",         
        // isMobile ? 'w-full' : 'w-[75px]'
        )
      }>
          <h1>Amorphous Body Documentation</h1>
        {/* {isMobile ? '▼' : '◀'} */}
        ◀
</div>

       <div className={cn("border border-1", 
       "h-full w-[100px] px-2 py-0"
      //  isMobile ? 'h-[100px]' : 'h-full',
      //  isMobile ? 'w-screen' : 'w-[100px]',
      //  isMobile ? 'py-2' : 'px-2 py-0'
       )}>
        {
          Object.entries(MENU).map(([key, val]) => {
            return (
              <Link href={`/${key}`} key={key}>
            <h1 className={cn("font-mono text-center border-x border-1 hover:bg-white hover:text-black text-white bg-none", 
            "border-x",
            // isMobile ? 'border-y' : 'border-x',
            pathname.includes(key) ? 'bg-white text-black' : 'bg-none text-white')}>{val}</h1>
            </Link>
            )
          })
        }
      </div>

      </div>
  );
}
