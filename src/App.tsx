import './App.css';
import { useLanyardWS } from "use-lanyard";
import { Discord } from "./components/Discord"
import { Background } from "./components/Background";
import { Footer } from "./components/Footer"
import { Projects } from "./components/Projects"
import { Playlists } from "./components/Playlists"
import { About } from "./components/About";
import { TopBar } from "./components/TopBar";
import { useEffect, useState } from "react";

const DISCORD_ID = "432958582536011777";

export const App = () => {
	const data = useLanyardWS(DISCORD_ID);
	const statusColor =
		data && data.discord_status === "online"
			? "#31a254"
			: data && data.discord_status === "idle"
				? "#faa61a"
				: data && data.discord_status === "dnd"
					? "#ca383a"
					: "#2c2f33"

	const [style, setStyle] = useState({});

	useEffect(() => {
		setStyle({
			'border-color': statusColor,
		});
	}, [statusColor]);

	return (
		<div className="flex flex-col h-full w-auto gap-5 md:gap-0 lg:h-screen sm:flex-col">
			<div className="border-b-2" style={style}>
				<TopBar/>
			</div>
			<div className="flex flex-wrap flex-row-reverse h-full justify-around">
				<div className="flex flex-col p-5 lg:w-2/5 lg:border-l-2 items-center justify-center h-full lg:p-0" style={style}>
					<About statusColor={statusColor} />
					<Discord lanyard={data} statusColor={statusColor} />
				</div>
				<div className="flex flex-col lg:w-3/5 py-0 px-5 items-center justify-around h-full lg:p-0">
					<Projects statusColor={statusColor} />
					<Playlists statusColor={statusColor} />
					<Footer lanyard={data} />
				</div>
			</div>
			<Background />
		</div>
	);
}

export default App;
