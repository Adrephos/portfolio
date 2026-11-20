import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Page = "home" | "privacy";

const NAV: { page: Page; to: string; label: string }[] = [
  { page: "home", to: "/tsumu", label: "Overview" },
  { page: "privacy", to: "/tsumu/privacy", label: "Privacy" },
];

// The global `* { font-family }` rule beats inheritance, so the font is forced on every descendant.
const BODY =
  "[&_*]:font-sora [&_.text-green]:text-br-subtext1 [&_.text-secondary]:text-br-text [&_.text-neutral-400]:text-br-subtext0";

const Hanko = ({ size }: { size: number }) => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center flex-shrink-0 bg-br-stamp text-br-text select-none !font-mincho"
    style={{
      width: size,
      height: size,
      borderRadius: 3,
      fontSize: size * 0.62,
      lineHeight: 1,
      transform: "rotate(-2deg)",
      boxShadow: "inset 0 0 0 1px rgba(10,10,10,0.3)",
    }}
  >
    積
  </span>
);

export const TsumuLayout = ({
  page,
  title,
  meta,
  lead,
  children,
}: {
  page: Page;
  title: string;
  meta?: string;
  lead: ReactNode;
  children: ReactNode;
}) => (
  <div className={`min-h-dvh bg-br-crust text-br-text ${BODY}`}>
    <div className="mx-auto max-w-[40rem] px-5 py-10 flex flex-col gap-10">
      <header className="flex items-center justify-between border-b border-br-surface1 pb-4">
        <Link to="/tsumu" className="flex items-center gap-2.5">
          <Hanko size={26} />
          <span className="!font-mincho font-extrabold text-xl tracking-wide">Tsumu</span>
        </Link>
        <nav className="flex gap-5 text-sm">
          {NAV.map((n) => (
            <Link
              key={n.page}
              to={n.to}
              className={page === n.page ? "text-br-text" : "text-br-overlay1 hover:text-br-text"}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/" className="text-br-overlay1 hover:text-br-text">
            adrephos
          </Link>
        </nav>
      </header>
      <div>
        <h1 className="!font-mincho font-extrabold text-4xl">{title}</h1>
        {meta && <p className="text-xs text-br-overlay1 mt-2">{meta}</p>}
        <div className="mt-4 text-br-subtext0 leading-relaxed">{lead}</div>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  </div>
);

export const TsumuSection = ({ heading, children }: { heading: string; children: ReactNode }) => (
  <section className="border-t border-br-surface1 py-6">
    <h2 className="text-xs uppercase tracking-[0.18em] text-br-overlay1 mb-3">{heading}</h2>
    <div className="text-br-subtext0 text-[0.92rem] leading-relaxed">{children}</div>
  </section>
);

export const TsumuFeature = ({ children }: { children: ReactNode }) => (
  <p className="border-t border-br-surface1 py-3 text-br-subtext1 flex gap-3">
    <span className="text-br-overlay0">—</span>
    {children}
  </p>
);
