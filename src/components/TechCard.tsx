import { ReactElement } from "react";
import { useEffect, useState } from "react";
import { Tooltip } from 'react-tooltip'

export const TechCard = ({
  name,
  desc,
  icon,
  url,
  statusColor,
}: {
  name: string;
  desc: string;
  icon: ReactElement;
  url: string;
  statusColor: string | undefined;
}) => {
  let id = `img-${name}-card`
  const [style, setStyle] = useState({});
  useEffect(() => {
    setStyle({
      'border-color': "#131313",
    });
  }, [statusColor]);
  return (
    <div className="">
      <a className="" href={url} target="_blank" rel="noopener noreferrer">
        <div className="bg-primary flex items-stretch overflow-hidden rounded-lg none transition-all border border-primary hover:-translate-y-1 active:translate-y-1"
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
          <div id={id} data-tooltip-content={name} data-tooltip-place="top" data-tooltip-variant="dark" className="p-2">
            {icon}
          </div>
          <p className="mx-[10px] self-center p-2 text-secondary">
            {desc}
          </p>
        </div>
        <Tooltip anchorId={id} />
      </a>
    </div>
  );
};
