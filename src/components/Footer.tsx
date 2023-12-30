import { Data } from "use-lanyard";
import { Spotify } from "./Spotify";
import { YoutubeMusic } from "./YoutubeMusic";

export const Footer = ({
	lanyard,
}: {
	lanyard: Data | undefined;
}) => {
	return (
		<div className="flex flex-wrap w-full items-center justify-center pb-5 sm:justify-between sm:pb-0">
			{lanyard?.spotify ? (
				<Spotify spotify={lanyard?.spotify} />
			) :
				<YoutubeMusic lanyard={lanyard} />
			}
			<p className="mt-5 text-[0.9rem] text-secondary sm:mt-0">
				Copyright &copy; Adrephos {new Date().getFullYear()}. All rights reserved
			</p>
		</div>
	);
};
