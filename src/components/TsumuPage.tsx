import { Link } from "react-router-dom";
import { Background } from "./Background";
import { ArrowLeftIcon, CheckIcon, LockIcon, ShieldIcon } from "./Icons";

const FEATURES = [
  "Automatic language detection on YouTube and Netflix",
  "Daily immersion goals, tracked per language",
  "Hides videos that don't match your target language",
  "Dashboard with streaks, watch history, and language breakdowns",
  "All data stays local — export/import anytime",
];

export const TsumuPage = () => {
  return (
    <div className="flex flex-col min-h-dvh w-auto items-center">
      <div className="flex flex-col items-center max-w-[40rem] px-5 py-10 text-center gap-6">
        <Link
          to="/"
          className="group self-start flex items-center gap-2 text-secondary text-[0.9rem] opacity-70 hover:opacity-100 transition-opacity"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            <ArrowLeftIcon size={16} />
          </span>
          Back
        </Link>

        <h1 className="text-[2.5rem] font-bold text-secondary transition-transform hover:scale-105">
          Tsumu 積
        </h1>
        <p className="text-[1.1rem] text-neutral-400">
          A browser extension that tracks your language immersion time on YouTube and Netflix.
        </p>

        <ul className="flex flex-col gap-3 self-stretch text-left">
          {FEATURES.map((f) => (
            <li
              key={f}
              className="group flex items-start gap-3 rounded-lg text-secondary p-2 -m-2 transition-all hover:bg-primary hover:translate-x-1"
            >
              <span className="mt-[0.15rem] shrink-0 text-green transition-transform group-hover:scale-110">
                <CheckIcon size={18} />
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <div className="flex items-center gap-2 rounded-lg bg-primary border border-neutral-700 px-5 py-3 text-neutral-400 font-bold cursor-default">
            <LockIcon size={18} />
            Source — private
          </div>
          <Link
            to="/tsumu/privacy"
            className="flex items-center gap-2 rounded-lg bg-primary border border-neutral-700 px-5 py-3 text-secondary font-bold transition-all hover:-translate-y-1 hover:border-green active:translate-y-1"
          >
            <ShieldIcon size={18} />
            Privacy Policy
          </Link>
        </div>

        <p className="text-[0.85rem] text-neutral-500 mt-2">
          Not yet published to the Chrome Web Store — check back soon.
        </p>
      </div>
      <Background />
    </div>
  );
};
