"use client";

interface TopNavProps {
  onToggleDrawer: () => void;
}

export default function TopNav({ onToggleDrawer }: TopNavProps) {
  return (
    <nav className="top-nav">
      <div className="nav-brand">しっとる広告運用</div>
      <button className="menu-btn" onClick={onToggleDrawer}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
