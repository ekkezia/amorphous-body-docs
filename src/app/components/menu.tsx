'use client'

import { useLayoutContext } from "@/contextStore/layout-context";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

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


  return (
      <div className={cn("fixed left-0 z-[999] border border-sky bg-black cursor-pointer text-center font-mono h-[360px] w-fit border border-1 duration-500", showMenu ? 'translate-x-[0px]' : 'translate-x-[-90px]')} onMouseEnter={handleHover} onMouseLeave={handleUnHover} style={{ writingMode: 'vertical-rl' }}>
        <div className="pr-4 w-[90px]">
          <h1>Amorphous Body Documentation</h1>
        ◀
</div>

             { <div className="h-full w-[100px] border border-1 px-2">
        {
          Object.entries(MENU).map(([key, val]) => {
            return (
            <h1 className={cn("font-mono text-center border-x border-1 hover:bg-white hover:text-black text-white bg-none", pathname.includes(key) ? 'bg-white text-black' : 'bg-none text-white')} key={key}>{val}</h1>
            )
          })
        }
      </div>}

      </div>
  );
}
