import { Spotify as LanyardSpotify } from "use-lanyard";
import { Spotify } from "./Spotify";

export const Footer = ({
  spotify,
}: {
  spotify: LanyardSpotify | undefined | null;
}) => {
  return (
	  <div className="flex flex-wrap w-full items-center justify-center pb-5 sm:justify-between sm:pb-0">
      <Spotify spotify={spotify} />
      <p className="mt-5 text-[0.9rem] text-secondary sm:mt-0">
        Copyright &copy; Adrephos {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
};
