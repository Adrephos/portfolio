import { useEffect, useState } from "react";

export const PlaylistCard = ({
  title,
  desc,
  img,
  url,
  statusColor,
}: {
  title: string;
  desc: string;
  img: string,
  url: string;
  statusColor: string | undefined;
}) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    setStyle({
      'border-color': "#131313",
    });
  }, [statusColor]);
  return (
    <div className="py-3 px-5">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="flex fex-row bg-primary border border-primary text-secondary outline-none transition-all  hover:-translate-y-1 hover:border-green active:translate-y-1  rounded-lg"
          style={style}
          onMouseEnter={() =>
            setStyle({
              'border-color': statusColor
            })}
          onMouseLeave={() =>
            setStyle({
              'border-color': '#131313'
            })
          }
        >
          <div className="w-[6rem]">
            <img className="rounded-lg" src={img} alt="Playlist Cover" />
          </div>
          <div className="flex flex-wrap items-center overflow-hidden">

            <div className="mx-[1rem] mt-[0.5rem]">
              <p className="text-[1rem] font-bold">{title}</p>
              <p className="text-[0.95rem] text-neutral-400">{desc}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
