import { Spotify as lanyardSpotify } from "use-lanyard";

function shortString(str: string) {
  return str.length <= 41 ? str : str.slice(0, 39) + "..."
}

export const Spotify = ({
  spotify,
}: {
  spotify: lanyardSpotify;
}) => {
  return (
    <div className="flex h-[8rem] max-w-[25rem] items-center justify-center rounded-lg">
      <a
        href={`https://open.spotify.com/track/${spotify.track_id}`}
        rel="noopener noreferrer"
        target="_blank">
        <img
          src={spotify.album_art_url ? spotify.album_art_url : ''}
          alt="activity"
          className="mr-3 h-[5.5rem] w-[5.5rem] rounded-lg transition duration-500 hover:skew-y-6"
        />
      </a>
      <div className="flex flex-col truncate text-secondary">
        <p className="text-[0.9rem] font-bold text-[#1ed760]">
          Listening to spotify...
        </p>
        <p className="text-[0.8rem] font-bold">{shortString(spotify.song)}</p>
        <p className="text-[0.8rem]">by {shortString(spotify.artist)}</p>
        <p className="text-[0.8rem]">on {shortString(spotify.album)}</p>
      </div>
    </div>
  )
};
