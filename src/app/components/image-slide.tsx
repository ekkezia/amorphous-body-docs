import Image from "next/image";

const NUM_OF_IMAGES = 5;

export default function ImageSlide() {
  return (
    <div className="relative left-[90px] flex w-screen h-screen flex p-0 items-center">
      {
        [...Array(NUM_OF_IMAGES)].map((_, idx) => {
          return (
          <Image
            className="relative"
            src={`/rec-0000${17 + idx * 17}.png`}
            alt={`rec-0000${17 + idx * 17}`}
            width={1280}
            height={720}
            priority
            key={idx}
          />
          )
        })
      }
    </div>
  );
}
