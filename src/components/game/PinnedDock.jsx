// Persistent top-right dock: inbox + field-manual glyph.
// Rendered fixed so the player can always reach them from the menu or a level.

function GlyphQ() {
  return (
    <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3 H9 V7 L6.5 9.5 V12" stroke="#9a8f6a" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter" />
      <rect x="5.7" y="15" width="1.6" height="1.6" fill="#9a8f6a" />
    </svg>
  );
}

export default function PinnedDock({ unreadCount, onOpenInbox, onOpenManual, hidden }) {
  if (hidden) return null;
  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 flex items-center gap-3 sm:right-6 sm:top-6">
      <button
        onClick={onOpenInbox}
        className="pointer-events-auto flex items-center gap-2 border border-[#262629] bg-[#0a0a0b]/80 px-4 py-2 font-mono text-xs uppercase tracking-[.2em] text-[#d8d5cd] backdrop-blur transition hover:border-[#3a3a3e] hover:text-[#9a8f6a]"
      >
        inbox
        {unreadCount > 0 && (
          <span className="rounded-full bg-[#b0523e] px-1.5 text-[10px] leading-5 text-white">{unreadCount}</span>
        )}
      </button>
      <button
        onClick={onOpenManual}
        aria-label="Field manual"
        className="pointer-events-auto flex h-9 w-9 items-center justify-center border border-[#262629] bg-[#0a0a0b]/80 backdrop-blur transition hover:border-[#3a3a3e]"
      >
        <GlyphQ />
      </button>
    </div>
  );
}