import { Data } from "use-lanyard";

function shortString(str: string) {
	return str.length <= 41 ? str : str.slice(0, 39) + "..."
}

export const YoutubeMusic = ({
  lanyard,
}: {
  lanyard: Data | undefined;
}) => {
  const ytMusic = lanyard?.activities.find(
    (activity) => activity.type === 0 && activity.name.startsWith("YouTube")
  )

  return ytMusic ? (
    <div
      className="flex h-[8rem] max-w-[90%] sm:max-w-[23rem] items-center justify-center rounded-lg bg-opacity-0">
      <img
        src={
          ytMusic.assets?.large_image.startsWith(
									"mp:external"
								)
									? ytMusic.assets.large_image.replace(
										/mp:external\/([^]*)\/(http[s])/g,
										"$2:/"
									)
									: ytMusic.assets?.large_image.startsWith(
										"mp:attachments"
									) ? ytMusic.assets.large_image.replace(
										/mp:attachments\/([^]*)\/([^]*)/g,
										"https://cdn.discordapp.com/attachments/$1/$2"
									) : `https://cdn.discordapp.com/app-assets/${ytMusic.application_id}/${ytMusic.assets?.large_image}.webp`
        }
        alt="activity"
        className="mr-3 h-[5.5rem] min-w-[5.5rem] rounded-lg transition duration-500 transform hover:-scale-x-100"
      />

      <div className="flex flex-col overflow-hidden text-secondary">
        <p className="text-[0.9rem] font-bold text-[#1ed760]">
          Listening to YouTube Music...
        </p>
        <p className="text-[0.8rem] font-bold">{shortString(ytMusic.details!)}</p>
        <p className="text-[0.8rem]">{
					ytMusic.state?.startsWith("by") ?
					shortString(ytMusic.state) :
					"by " + shortString(ytMusic.state!)
				}</p>
      </div>
    </div >
  ) : (
    <div className="flex h-[6.25rem] w-[18.75rem] items-center rounded-lg bg-opacity-0 p-2 text-center">
      <p className="text-secondary">
        I'm not listening to anything right now
      </p>
    </div>
  );
};
