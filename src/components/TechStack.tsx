
import {
  GoIcon,
  PythonIcon,
  FirebaseIcon,
} from "./Icons";
import { TechCard } from "./TechCard";

export const TechStack = () => {
  return (
    <div className="m-[20px] flex gap-[15px] max-w-[500px] flex-col justify-center">
      <TechCard
        name="Go"
        desc="Open source general purpose"
        icon={<GoIcon />}
        url="https://go.dev/"
      />
      <TechCard
        name="Python"
        desc="Automate tasks, build websites and software"
        icon={<PythonIcon />}
        url="https://www.python.org/"
      />
      <TechCard
        name="Firestore"
        desc="Development platform to build and grow apps"
        icon={<FirebaseIcon />}
        url="https://firebase.google.com/"
      />
    </div>
  );
};
