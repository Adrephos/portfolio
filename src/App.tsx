import './App.css';
import { useLanyardWS } from "use-lanyard";
import { Discord } from "./components/Discord"
import { Footer } from "./components/Footer"
import { Projects } from "./components/Projects"
import { Playlists } from "./components/Playlists"
import { About } from "./components/About";
import { TopBar } from "./components/TopBar";

const DISCORD_ID = "432958582536011777";

export const App = () => {
  const data = useLanyardWS(DISCORD_ID);

  return (
	  <div className="flex flex-col bg-gray h-auto w-auto gap-5 md:gap-0 md:h-screen">
		  <TopBar discordUser={data?.discord_user}/>
		  <div className="lg:flex flex-row-reverse h-full justify-around">
			<div className="flex flex-wrap p-5 md:border-l-2 border-green justify-center h-full md:p-5 md:pl-10 md:flex-col">
			  <About/>
			  <Discord lanyard={data} />
			</div>
			  <div className="flex flex-wrap gap-5 py-10 px-5 items-center justify-around h-full md:gap-0 md:p-0 md:flex-col">
			  <Projects/>
			  <Playlists/>
			  <Footer spotify={data?.spotify} />
			</div>
		</div>
	  </div>
	);
}

export default App;
