import {
  DiscordIcon,
  GitHubIcon,
  SteamIcon,
  LinkedInIcon,
} from "./Icons";

export const TopBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-center py-3 px-5 sm:justify-between md:px-10">
      <div className="flex justify-center items-center gap-5 p-2 sm:p-0">
        <img
          src="https://github.com/adrephos.png"
          alt="avatar"
          className="h-[3.5rem] w-[3.5rem] rounded-lg"
        />
        <p className="text-[2rem] text-secondary font-bold">Adrephos</p>
      </div>
      <div className="flex w-[12.5rem] justify-around p-2 sm:p-0">
        <a
          href="https://discord.com/users/432958582536011777"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:-translate-y-1 active:translate-y-1"
        >
          <DiscordIcon />
        </a>
        <a
          href="https://github.com/Adrephos"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:-translate-y-1 active:translate-y-1"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://steamcommunity.com/id/adrephos"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:-translate-y-1 active:translate-y-1"
        >
          <SteamIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/adrephos/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:-translate-y-1 active:translate-y-1"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};
