import { useEffect, useState } from "react";

export const ProjectCard = ({
  title,
  desc,
  color,
  lang,
  url,
  statusColor,
}: {
  title: string;
  desc: string;
  color: string;
  lang: string;
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
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-wrap items-center overflow-hidden rounded-lg bg-primary border border-primary text-secondary outline-none transition-all  hover:-translate-y-1 active:translate-y-1"
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
        <div className="mx-[1rem] mt-[0.5rem]">
          <p className="text-[1rem] font-bold">{title}</p>
          <p className="text-[0.95rem] text-neutral-400">{desc}</p>
        </div>
        <div className="mx-[1rem] my-[0.5rem] flex w-full flex-row items-center">
          <div
            className="mr-[0.5rem] h-[0.7rem] w-[0.7rem] rounded-full"
            style={{ backgroundColor: color }}
          ></div>
          <p className="text-[0.8rem]">{lang}</p>
        </div>
      </div>
    </a>
  );
};
