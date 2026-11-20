import { TsumuLayout, TsumuFeature } from "./TsumuLayout";

const FEATURES = [
  "Automatic language detection on YouTube and Netflix",
  "Daily immersion goals, tracked per language",
  "Hides videos that don't match your target language",
  "Dashboard with streaks, watch history, and language breakdowns",
  "All data stays local — export/import anytime",
];

export const TsumuPage = () => (
  <TsumuLayout
    page="home"
    title="Tsumu 積"
    lead="A browser extension that tracks your language immersion time on YouTube and Netflix."
  >
    {FEATURES.map((f) => (
      <TsumuFeature key={f}>{f}</TsumuFeature>
    ))}
    <p className="text-xs text-br-overlay1 pt-4 border-t border-br-surface1">
      Not yet published to the Chrome Web Store — check back soon.
    </p>
  </TsumuLayout>
);
