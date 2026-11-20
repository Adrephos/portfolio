import { TsumuLayout, TsumuSection } from "./TsumuLayout";

const SECTIONS: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Data collected and where it lives",
    body: (
      <>
        <p>
          All data Tsumu collects is stored <strong className="text-secondary">locally in your
          browser</strong> (via IndexedDB and <code className="text-green">chrome.storage.local</code>)
          and is never sent to Tsumu's developer. There is no Tsumu account or remote server. Two
          optional connections talk to other services, never to Tsumu: the Steam connection, and
          Sync, which copies your data to a private folder in your own Google Drive. Neither is on
          until you turn it on.
        </p>
        <p className="mt-3">Data stored locally includes:</p>
        <ul className="mt-2 flex flex-col gap-2 list-disc list-inside">
          <li><strong className="text-secondary">Watch sessions</strong> — site, video ID, title, channel name, channel avatar URL, thumbnail, detected or manually-selected language, start/end times, and duration. On Jellyfin and on other sites, a session also keeps the address of the page, so the video can be reopened from your history.</li>
          <li><strong className="text-secondary">Manual timers and entries</strong> — the language, category, title and times of activity you log yourself.</li>
          <li><strong className="text-secondary">Settings</strong> — target language, app language, daily goals per language, custom categories, a timestamp-saving keybind, day-reset hour, the minimum length of a manual timer, the "hide non-target videos" preferences, per-channel language overrides, and the timers you pinned.</li>
          <li><strong className="text-secondary">Saved timestamps</strong> you bookmark while watching.</li>
          <li><strong className="text-secondary">Mining list</strong> — videos you mark for later review.</li>
          <li><strong className="text-secondary">Videos you switched tracking off for</strong>, and <strong className="text-secondary">manual language overrides</strong> you set for individual videos.</li>
          <li><strong className="text-secondary">Channel avatars</strong>, kept so your history can show them without asking again.</li>
          <li><strong className="text-secondary">Steam connection (only if you set it up)</strong> — your Steam Web API key and SteamID64, the games you chose to count (with the language of each), the games you said never to count, and a game that is running and waiting for your decision. The key is stored unencrypted in this browser, like your settings, and is not part of Export. Game time is kept as watch sessions with the game's name and its store picture address.</li>
          <li><strong className="text-secondary">Anki counting (only if you turn it on)</strong> — the address of AnkiConnect, the minutes of pause that end a sitting, the decks you chose to count (with the language of each) and, per deck, the time of the last review read. Reviews are kept as watch sessions with the deck's name.</li>
          <li><strong className="text-secondary">Migaku counting (only if you turn it on)</strong> — the minutes of pause that end a sitting, and, per deck, the time of the last review read. Reviews are kept as watch sessions with the deck's name.</li>
          <li><strong className="text-secondary">Sync (only if you connect it)</strong> — the sign-in token Google gave Tsumu for your Drive (it lasts about an hour and is renewed quietly), the email address of the Google account you signed in with, and a record of the files last seen in your Drive (their names, modified times and a fingerprint of each file's text). They stay in this browser and are never part of Export or of what is synced.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Network requests",
    body: (
      <>
        <p>
          Tsumu does not send your watch history, settings or any other stored data anywhere,
          except to your own Google Drive once you turn Sync on. It makes these requests:
        </p>
        <ul className="mt-2 flex flex-col gap-2 list-disc list-inside">
          <li><strong className="text-secondary">YouTube's public pages and oEmbed endpoint</strong> (<code className="text-green">youtube.com/oembed</code>, a video's public watch page, a channel's public page). Tsumu puts only the video ID or channel handle in the address. They fill in a title, channel name, channel handle or avatar that the page itself did not provide, and read a video's caption-track language when the "hide non-target videos" filter or language detection needs it. They are sent without cookies, so YouTube does not see which account you are signed in to.</li>
          <li><strong className="text-secondary">A check for Jellyfin on the page you are visiting.</strong> Jellyfin is self-hosted, so no address identifies it. On web pages other than YouTube, Netflix and Twitch, Tsumu asks the page's own server for its public <code className="text-green">/System/Info/Public</code> endpoint (without cookies) and checks whether it answers as a Jellyfin server. The request goes only to the site you are already on, and the answer is remembered for that tab session. It is not recorded.</li>
          <li><strong className="text-secondary">Your own Jellyfin server.</strong> On a Jellyfin server, Tsumu uses the page's own client to read the playing item's audio language, title and series poster from that same server.</li>
          <li><strong className="text-secondary">Steam, only after you connect it.</strong> Tsumu asks Steam's Web API (<code className="text-green">api.steampowered.com</code>) about your profile: which game it is running now (about every 24 seconds while the browser is open), your name and picture, and your list of owned games. These requests carry your API key and SteamID64, which is how Steam identifies you; they go to Steam and nowhere else. When you add a game by app ID, or a game's picture does not load from its guessed address, Tsumu asks Steam's public store item service for the game's name and picture addresses, sending only the app ID and no key. The pictures load from Steam's image servers (<code className="text-green">steamstatic.com</code>) when the dashboard or popup shows them. "Sign in with Steam" opens Steam's own login page in a tab; Steam sends your SteamID64 back to an address that does not exist (<code className="text-green">tsumu.invalid</code>), and Tsumu reads it from the tab's address and closes the tab. Tsumu never sees your Steam password.</li>
          <li><strong className="text-secondary">Anki, only after you turn it on.</strong> Tsumu asks AnkiConnect, the Anki add-on running on your own computer (by default <code className="text-green">127.0.0.1:8765</code>), for the deck names and for when each card of the decks you chose was answered and how long it took. The requests never leave your machine, and what Anki holds, such as the cards' contents, is not read.</li>
          <li><strong className="text-secondary">Migaku, only after you turn it on.</strong> Tsumu makes no request of its own. While a <code className="text-green">study.migaku.com</code> tab is open, about once a minute, it reads the review database Migaku keeps in that page's own browser storage: the deck names and, for each answered card, when it was answered and how long it took. The cards' contents are not read. It also notices when the page calls Migaku's own server to upload new reviews (that the call happened, not what it carries), as a hint to read again.</li>
          <li><strong className="text-secondary">Google Drive, only after you turn on Sync.</strong> You sign in with Google in a window Google serves (Tsumu never sees your Google password) and allow one thing: access to the private application-data folder of your Drive (the scope <code className="text-green">drive.appdata</code>). Tsumu can read and write only that folder, which holds files it created; it cannot see anything else in your Drive. The requests go to Google (<code className="text-green">googleapis.com</code> and <code className="text-green">accounts.google.com</code>) and nowhere else. They list the files in that folder, download those that changed, and upload the ones your changes affect: one file per month of watch sessions and one file for the rest. Once, when you sign in, Tsumu also asks Drive for the email address of the account (<code className="text-green">drive/v3/about</code>), to name that account in later quiet sign-ins and to show it in Settings. Sync runs about once every 15 minutes, a minute after a session ends, when you open the popup or the dashboard or start the browser, and when you press Sync now. The sign-in lasts about an hour; Tsumu renews it without showing anything while you are still signed in to Google in this browser, and asks you to connect again when it cannot. Sync works in Chrome-based browsers; it is not available in Firefox yet.</li>
        </ul>
        <p className="mt-3">
          What goes into the Drive files: your closed watch sessions, saved timestamps, mined
          videos, channel names and avatar addresses, per-video and per-channel language choices,
          the videos you switched tracking off for, your settings, a list of what you deleted (so
          a deletion reaches your other devices, kept for about 90 days), and the portable part of
          the Steam, Anki and Migaku settings (the games, decks and gaps you chose, and the Migaku
          switch). What never goes in them: a session still running, your Steam API key and
          SteamID64, the AnkiConnect address, the points Anki and Migaku were read up to, and the
          Google sign-in token. The files are plain JSON, not encrypted by Tsumu, and are
          protected by your Google account. Tsumu's developer has no access to them.
        </p>
        <p className="mt-3">
          On Twitch and Netflix, Tsumu reads what the page has already loaded and makes no
          requests of its own. There is no analytics, tracking, or third-party SDK of any kind.
        </p>
      </>
    ),
  },
  {
    heading: "Permissions",
    body: (
      <ul className="flex flex-col gap-2 list-disc list-inside">
        <li><strong className="text-secondary">storage</strong> — save your settings and local tracking data.</li>
        <li><strong className="text-secondary">alarms</strong> — keep the background service worker alive so an in-progress session isn't lost.</li>
        <li><strong className="text-secondary">tabs</strong> — detect which tab is currently active so tracking follows the right video, jump back to a tab when opening a saved timestamp, and open or focus the dashboard from its keyboard shortcut.</li>
        <li><strong className="text-secondary">windows</strong> (Chrome only) — focus the correct window when opening a saved timestamp or the dashboard, and clean up tracking state when a window closes.</li>
        <li><strong className="text-secondary">Host access to youtube.com and netflix.com</strong> — read video/channel info, show the in-page language badge, and make the YouTube requests described above.</li>
        <li><strong className="text-secondary">Host access to api.steampowered.com</strong> — make the Steam requests described above. Nothing is requested from it until you connect Steam.</li>
        <li><strong className="text-secondary">Host access to localhost (127.0.0.1)</strong> — reach AnkiConnect on your own computer, as described above. Nothing is requested from it until you turn Anki on.</li>
        <li><strong className="text-secondary">identity and host access to googleapis.com</strong> (both optional, asked for only when you press Connect) — sign in to Google and make the Google Drive requests described above. Nothing is requested until you turn Sync on, and if you decline the permission, Sync stays off.</li>
        <li><strong className="text-secondary">Content scripts on twitch.tv and study.migaku.com</strong> — read the stream's language and show the badge on Twitch, and read your Migaku review database as described above. Nothing is read until you turn Migaku on.</li>
        <li><strong className="text-secondary">Content scripts on every web page.</strong> Two of them run everywhere: one makes the Jellyfin check described above, and one looks for a <code className="text-green">&lt;video&gt;</code>. On a page that is not Jellyfin, it reads the video's title, duration and a frame sample to recognise it, asks Tsumu's own storage whether you already tracked it, and otherwise shows a small button that asks whether to track it. Nothing is recorded until you press it. Tsumu reads nothing else from the page.</li>
      </ul>
    ),
  },
  {
    heading: "Your control over your data",
    body: (
      <>
        <p>
          The extension's Settings page has <strong className="text-secondary">Export Data</strong>
          {" "}and <strong className="text-secondary">Import Data</strong> controls, and a{" "}
          <strong className="text-secondary">Delete All Data</strong> control in its last section,
          that give you full access to and control over everything stored locally. Deleting removes
          your history, saved timestamps, mined videos, settings and Steam connection (including
          the API key).
        </p>
        <p className="mt-3">With Sync on, there are three ways to leave it:</p>
        <ul className="mt-2 flex flex-col gap-2 list-disc list-inside">
          <li><strong className="text-secondary">Turning Sync off</strong> (the switch in Sync's settings) disconnects: it removes the sign-in token and the account's address from this browser and stops syncing. Nothing is deleted here or in your Drive.</li>
          <li><strong className="text-secondary">Delete cloud copy</strong> (a button in Sync's settings, with a confirmation) deletes Tsumu's files from your Drive and turns Sync off on this device. The data on this device stays. A device that is still connected puts its data back at its next sync, so disconnect the others first.</li>
          <li><strong className="text-secondary">Delete All Data</strong> first turns Sync off and does not touch your Drive, because deleting here while connected would bring everything back from it. To remove the Drive copy too, use Delete cloud copy first, or Google Drive's Settings, Manage apps.</li>
        </ul>
        <p className="mt-3">
          A single video can be switched off from its badge, and per-video language choices can be
          cleared. Uninstalling the extension removes all of its local data. An exported file holds
          your titles, channels, page addresses and timestamps as plain JSON.
        </p>
      </>
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

export const PrivacyPage = () => (
  <TsumuLayout
    page="privacy"
    title="Privacy Policy"
    meta="Last updated: 2026-11-20"
    lead="Tsumu is a browser extension that tracks how much time you spend watching content in your target language on YouTube, Netflix, Twitch and Jellyfin, and on any other site where you choose to turn it on, lets you log other activity by hand, and, if you turn them on, counts the time you play the games you choose on Steam and the time you spend answering Anki and Migaku cards. This page explains what data it handles and why."
  >
    {SECTIONS.map(({ heading, body }) => (
      <TsumuSection key={heading} heading={heading}>
        {body}
      </TsumuSection>
    ))}
  </TsumuLayout>
);
