import { Link } from "react-router-dom";
import { Background } from "./Background";
import { GitHubIcon } from "./Icons";

const FEATURES = [
  "Automatic language detection on YouTube and Netflix",
  "Daily immersion goals, tracked per language",
  "Hide video cards guessed to be in a different language than your target",
  "Dashboard with streaks, watch history, and language breakdowns",
  "All data stays local — export/import anytime",
];

export const TsumuPage = () => {
  return (
    <div className="flex flex-col min-h-dvh w-auto items-center">
      <div className="flex flex-col items-center max-w-[40rem] px-5 py-10 text-center gap-6">
        <Link
          to="/"
          className="self-start text-secondary text-[0.9rem] opacity-70 hover:opacity-100 transition-opacity"
        >
          &larr; Back
        </Link>

        <h1 className="text-[2.5rem] font-bold text-secondary">Tsumu 積</h1>
        <p className="text-[1.1rem] text-neutral-400">
          A browser extension that tracks your language immersion time on YouTube and Netflix.
        </p>

        <ul className="flex flex-col gap-3 self-stretch text-left">
          {FEATURES.map((f) => (
            <li key={f} className="flex items-start gap-3 text-secondary">
              <span className="mt-1 h-[0.5rem] w-[0.5rem] shrink-0 rounded-full bg-green" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <a
            href="https://gitlab.com/adrephos/tsumu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-primary border border-neutral-700 px-5 py-3 text-secondary font-bold transition-all hover:-translate-y-1 active:translate-y-1"
          >
            <GitHubIcon />
            Source
          </a>
          <a
            href="https://adrephos.com/tsumu/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary border border-neutral-700 px-5 py-3 text-secondary font-bold transition-all hover:-translate-y-1 active:translate-y-1"
          >
            Privacy Policy
          </a>
        </div>

        <p className="text-[0.85rem] text-neutral-500 mt-2">
          Not yet published to the Chrome Web Store — check back soon.
        </p>
      </div>
      <Background />
    </div>
  );
};
