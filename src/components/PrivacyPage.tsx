import { Link } from "react-router-dom";
import { Background } from "./Background";
import { ArrowLeftIcon } from "./Icons";

const SECTIONS: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Data collected and where it lives",
    body: (
      <>
        <p>
          All data Tsumu collects is stored <strong className="text-secondary">locally in your
          browser</strong> (via IndexedDB and <code className="text-green">chrome.storage.local</code>)
          and is never sent to Tsumu's developer or any third party. There is no account,
          sign-in, or remote server involved.
        </p>
        <p className="mt-3">Data stored locally includes:</p>
        <ul className="mt-2 flex flex-col gap-2 list-disc list-inside">
          <li><strong className="text-secondary">Watch sessions</strong> — site (YouTube/Netflix), video ID, title, channel name, channel avatar URL, detected or manually-selected language, start/end times, and duration.</li>
          <li><strong className="text-secondary">Settings</strong> — target language, app language, daily goals per language, custom categories, a timestamp-saving keybind, day-reset hour, and the "hide non-target videos" preferences.</li>
          <li><strong className="text-secondary">Saved timestamps</strong> you bookmark while watching.</li>
          <li><strong className="text-secondary">Mining list</strong> — videos you mark for later review.</li>
          <li><strong className="text-secondary">Manual language overrides</strong> you set for individual videos.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Network requests",
    body: (
      <p>
        Tsumu makes exactly one kind of outbound request: when a video's title/channel name
        isn't otherwise available, it queries <strong className="text-secondary">YouTube's own
        public oEmbed endpoint</strong> (<code className="text-green">youtube.com/oembed</code>)
        with the video ID, to display that metadata in your history. This is an unauthenticated,
        public request — no personal data, browsing history, or account information is sent. No
        other network requests are made; there is no analytics, tracking, or third-party SDK of
        any kind.
      </p>
    ),
  },
  {
    heading: "Permissions",
    body: (
      <ul className="flex flex-col gap-2 list-disc list-inside">
        <li><strong className="text-secondary">storage</strong> — save your settings and local tracking data.</li>
        <li><strong className="text-secondary">alarms</strong> — keep the background service worker alive so an in-progress session isn't lost.</li>
        <li><strong className="text-secondary">tabs</strong> — detect which YouTube/Netflix tab is currently active so tracking follows the right video, and to jump back to a tab when opening a saved timestamp.</li>
        <li><strong className="text-secondary">windows</strong> (Chrome only) — focus the correct window when opening a saved timestamp, and clean up tracking state when a window closes.</li>
        <li><strong className="text-secondary">Host access to youtube.com and netflix.com</strong> — read video/channel info and show the in-page language badge on those two sites only. Tsumu does not run on, or request access to, any other site.</li>
      </ul>
    ),
  },
  {
    heading: "Your control over your data",
    body: (
      <p>
        The extension's Settings page has <strong className="text-secondary">Export Data</strong>,
        {" "}<strong className="text-secondary">Import Data</strong>, and{" "}
        <strong className="text-secondary">Clear All Data</strong> controls that give you full
        access to and control over everything stored locally. Uninstalling the extension removes
        all of its local data.
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about this policy:{" "}
        <a href="mailto:adrephos@gmail.com" className="text-green hover:underline">
          adrephos@gmail.com
        </a>
      </p>
    ),
  },
];

export const PrivacyPage = () => {
  return (
    <div className="flex flex-col min-h-dvh w-auto items-center">
      <div className="flex flex-col max-w-[40rem] px-5 py-10 gap-6">
        <Link
          to="/tsumu"
          className="group self-start flex items-center gap-2 text-secondary text-[0.9rem] opacity-70 hover:opacity-100 transition-opacity"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            <ArrowLeftIcon size={16} />
          </span>
          Back to Tsumu
        </Link>

        <div>
          <h1 className="text-[2rem] font-bold text-secondary">Privacy Policy — Tsumu 積</h1>
          <p className="text-[0.85rem] text-neutral-500 mt-1">Last updated: 2026-08-10</p>
        </div>

        <p className="text-neutral-400">
          Tsumu is a browser extension that tracks how much time you spend watching content in
          your target language on YouTube and Netflix. This page explains what data it handles
          and why.
        </p>

        {SECTIONS.map(({ heading, body }) => (
          <div
            key={heading}
            className="rounded-lg bg-primary border border-neutral-700 p-5 transition-colors hover:border-green"
          >
            <h2 className="text-[1.1rem] font-bold text-secondary mb-3">{heading}</h2>
            <div className="text-neutral-400 text-[0.95rem] leading-relaxed">{body}</div>
          </div>
        ))}
      </div>
      <Background />
    </div>
  );
};
