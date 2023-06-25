import { DiscordUser } from "use-lanyard"
import {
  DiscordIcon,
  GitHubIcon,
  SteamIcon,
  LinkedInIcon,
} from "./Icons";

export const TopBar = ({discordUser}: {discordUser: DiscordUser | undefined}) => {
  return (
	  <div className="flex flex-wrap items-center justify-center bg-gray py-3 px-5 sm:justify-between md:px-10">
	  <div className="flex justify-center items-center gap-5">
		<img
		  src={discordUser ? `https://cdn.discordapp.com/avatars/${discordUser!.id}/${discordUser!.avatar}` : "https://github.com/adrephos.png"}
		  alt="avatar"
		  className="h-[3.5rem] w-[3.5rem] rounded-lg"
		/>
		<a href="/" className="text-secondary hover:text-primary">
          <p className="text-[2rem] font-bold">Blog</p>
        </a>
      </div>
      <div className="flex w-[12.5rem] justify-around">
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
          href="https://www.linkedin.com/in/juan-avenda%C3%B1o-6abb3a223/"
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
