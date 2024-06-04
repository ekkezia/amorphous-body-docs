export default function Copyright() {
  return (
    <div className="w-screen items-start justify-center absolute bottom-0 left-0 p-4 z-[999] font-mono text-xs cursor-pointer flex text-white">
      <details className="group/details open:backdrop-blur-[2px] p-4 w-[360px] border border-1 bg-black sm:bg-transparent">
        <summary className="text-center">Copyright © 2024 Elizabeth Kezia Widjaja</summary>
        <div className="text-justify pt-4">
          <p>
            The works are displayed as documentation and accompaniment to the <b>Asian Avant-Garde Film Festival's</b>{' '}
            <a
              href="https://www.mplus.org.hk/en/cinema/asian-avant-garde-film-festival/amorphous-bodies-a-happening/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <b><u>Amorphous Body: A Happening</u></b>
            </a>{' '}
            - an avant-garde experimentation and live performances in conjunction with the Asian Avant-Garde Film Festival
            in <b>M+ Museum (Hong Kong)</b> on 31 May 2024, starting with{' '}
            <a
              href="https://instagram.com/ugh.isha"
              rel="noopener noreferrer"
              target="_blank"
            >
              <b><u>Baby Diwata</u></b>
            </a>, a Manila-born DJ known for genre-fluid selections, and{' '}
            <a
              href="https://instagram.com/l0veless"
              rel="noopener noreferrer"
              target="_blank"
            >
              <b><u>Loveless</u></b>
            </a>, a Hong Kong-born artist who brings a non-conforming mix to the dance floor. Experimental visuals will be created in live-time by{' '}
            <a
              className="text-fuchsia-400"
              href="https://instagram.com/ekezia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <b><u>Elizabeth Kezia Widjaja</u></b>
            </a>, an Indonesia-born and raised artist and photographer.
          </p>
        </div>
      </details>
    </div>
  );
}
