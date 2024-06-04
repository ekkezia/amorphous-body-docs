'use client'

import { usePathname } from "next/navigation";

const MENU: {[key: string]: string} = {
  'launchpad': 'Launchpad is ...',
  'midi-graph': 'MIDI Graph is ...',
  'slitscan': 'Slitscan is ...'
}

export default function About() {
  const pathname = usePathname()
  return (
    <div className="w-screen flex items-start justify-center absolute top-0 left-0 p-8 z-[999] font-mono text-lg">
  <details>
  <summary>{pathname.split('/')[1]}</summary>
    <div className="max-w-[360px] text-justify">
    <p className="text-xs">{MENU[pathname.split('/')[1]]}</p>
    </div>
</details>
</div>
  );
}
