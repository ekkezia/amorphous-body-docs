'use client';

import { usePathname } from 'next/navigation';

const MENU: { [key: string]: string } = {
  launchpad: 'Launchpad is ...',
  'midi-graph':
    '🪩 midi-graph 🪩 is a pitch and amplitude based graph that is inspired by MIDI graph UI on audio processing softwares. But, instead of a plain rectangle as the MIDI notes, the program will generate continuously-captured camera images. The y-position of the image will be according to the current detected pitch, hence the images are representation of the MIDI notes. The amplitude of the audio will determine the x-position of the images (or shall we say, “MIDI note”)',
  slitscan: 'Slitscan is ...',
};

export default function About() {
  const pathname = usePathname();
  return (
    <div className="w-screen flex items-start justify-center absolute top-0 left-0 z-[999] font-mono text-sm text-white">
      <details className="group/details open:backdrop-blur-[2px] p-4 w-[360px] border border-1 bg-black sm:bg-none">
        <summary className="text-center">{pathname.split('/')[1]}</summary>
        <div className="text-justify text-xs pt-4">
          <p>{MENU[pathname.split('/')[1]]}</p>
          
          <div className="mt-2">
            <span>🐱 Github</span> <span><a className="text-fuchsia-400" href="https://github.com/ekkezia/midi-party-visualizer" target="_blank">midi-party-visualizer</a></span> 
          </div>
        </div>
      </details>
    </div>
  );
}
