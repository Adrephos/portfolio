import { useLanyardWS } from "use-lanyard";
import { Discord } from "./components/Discord"
import { Footer } from "./components/Footer"
import './App.css';

const DISCORD_ID = "432958582536011777";

export const App = () => {
  const data = useLanyardWS(DISCORD_ID);

  return (
	  <div>
		<Discord lanyard={data} />
		<Footer spotify={data?.spotify} />
	  </div>
	);
}

export default App;
