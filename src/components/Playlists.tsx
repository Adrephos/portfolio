import { PlaylistCard } from "./PlaylistCard";

export const Playlists = ({statusColor} : { statusColor: string | undefined }) => {
  return (
    <div className="flex flex-col items-center justify-center">
	  <div className="self-start">
		<p className="mb-[2.5rem] text-[1.1rem] font-bold self-start text-secondary">
		  My Playlists
		</p>
	  </div>
      <div className="grid max-w-[43.75rem] grid-cols-1 gap-y-6 gap-x-8 md:grid-cols-2">
		<PlaylistCard
			title="Classique"
			desc="My favorite Classical pieces"
			img="https://i.scdn.co/image/ab67706c0000bebbce31612b79103e294737c55b"
			url="https://open.spotify.com/playlist/6cZ2fCqoAqKTdYHNcL1mwU?si=d400e31aef47444f"
			statusColor={statusColor}
		/>
		<PlaylistCard
			title="I don't even know"
			desc="Music I like of different genres"
			img="https://i.scdn.co/image/ab67706c0000bebb275daee1f84e96248f529897"
			url="https://open.spotify.com/playlist/4BVhdOgvT7Ak3woPu6GJhw?si=8ca39d8cf042473a"
			statusColor={statusColor}
		/>
      </div>
    </div>
  );
};
