import { Spotify as LanyardSpotify } from "use-lanyard";
import { Spotify } from "./Spotify";

export const Footer = ({
  spotify,
}: {
  spotify: LanyardSpotify | undefined | null;
}) => {
  return (
    <footer className="flex flex-wrap items-center justify-center py-4 px-10 sm:justify-between md:px-20">
      <Spotify spotify={spotify} />
      <p className="mt-5 text-[0.9rem] text-secondary sm:mt-0">
        Copyright &copy; Adrephos {new Date().getFullYear()}. All rights reserved
      </p>
    </footer>
  );
};
