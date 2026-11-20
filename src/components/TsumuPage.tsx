import { TsumuLayout, TsumuFeature } from "./TsumuLayout";

const FEATURES = [
  "Detects the audio language of each video on YouTube, Netflix, Twitch and Jellyfin, and on any other site you turn it on for",
  "Daily immersion goals per language, with streaks and a heatmap",
  "A dashboard with your full watch history and stats by language, site and channel",
  "Timers for reading, conversation and anything else you log by hand",
  "Optional: counts your Steam game time and the time you spend answering Anki and Migaku cards",
  "Saved timestamps, a list of videos to mine later, and a filter that hides videos outside your target language",
  "Your data stays in your browser: no account, nothing sent to the developer, export or delete it anytime",
  "Optional Sync through a private folder in your own Google Drive (Chrome)",
];

export const TsumuPage = () => (
  <TsumuLayout
    page="home"
    title="Tsumu 積"
    lead="A browser extension that tracks how much time you spend immersed in the language you are learning, across video sites, study apps and games."
  >
    {FEATURES.map((f) => (
      <TsumuFeature key={f}>{f}</TsumuFeature>
    ))}
    <p className="text-sm text-br-subtext0 py-3 border-t border-br-surface1">
      Questions or bugs:{" "}
      <a href="mailto:adrephos@gmail.com" className="text-br-text underline underline-offset-4">
        adrephos@gmail.com
      </a>
    </p>
    <p className="text-xs text-br-overlay1 pt-4 border-t border-br-surface1">
      Not yet published to the Chrome Web Store — check back soon.
    </p>
  </TsumuLayout>
);
