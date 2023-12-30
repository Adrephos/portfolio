import { Data, Spotify as lanyardSpotify } from "use-lanyard";

export const YoutubeMusic = ({
  lanyard,
}: {
  lanyard: Data | undefined;
}) => {
  const ytMusic = lanyard?.activities.find(
    (activity) => activity.type === 0 && activity.name == "YouTube Music"
  )

  return ytMusic ? (
    <div
      className="flex h-[8rem] max-w-[90%] sm:max-w-[25rem] items-center justify-center rounded-lg bg-opacity-0 p-5">
      <img
        src={
          ytMusic.assets?.large_image.startsWith(
            "mp:external"
          )
            ? ytMusic.assets.large_image.replace(
              /mp:external\/([^]*)\/(http[s])/g,
              "$2:/"
            )
            : `https://cdn.discordapp.com/app-assets/${ytMusic.application_id}/${ytMusic.assets?.large_image}.webp`
        }
        alt="activity"
        className="mr-3 h-[5.5rem] min-w-[5.5rem] rounded-lg transition duration-500 transform hover:-scale-x-100"
      />

      <div className="flex flex-col overflow-hidden text-secondary">
        <p className="text-[0.9rem] font-bold text-[#1ed760]">
          Listening to YouTube Music...
        </p>
        <p className="text-[0.8rem] truncate font-bold">{ytMusic.details}</p>
        <p className="text-[0.8rem] truncate">by {ytMusic.state}</p>
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
