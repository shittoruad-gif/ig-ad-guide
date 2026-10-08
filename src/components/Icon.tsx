// 線で描いた小さなアイコン（絵文字は使わない）
type Name = "flag" | "camera" | "pin" | "card" | "lock" | "eye" | "chat" | "yen" | "help" | "alert" | "check" | "list" | "clock" | "copy";

const PATHS: Record<Name, React.ReactNode> = {
  flag: <><path d="M5 21V4" /><path d="M5 4h11l-2 4 2 4H5" /></>,
  camera: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7l2-3h4l2 3" /><circle cx="12" cy="13.5" r="3.5" /></>,
  pin: <><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  card: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /><path d="M7 15h4" /></>,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  chat: <><path d="M4 5h16v11H9l-5 4V5z" /></>,
  yen: <><path d="M6 4l6 8 6-8" /><path d="M12 12v8" /><path d="M8 13h8" /><path d="M8 16.5h8" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14" /><path d="M12 17.2v.1" /></>,
  alert: <><path d="M12 3l10 18H2L12 3z" /><path d="M12 10v5" /><path d="M12 18v.1" /></>,
  check: <><path d="M4 12.5l5 5L20 6.5" /></>,
  list: <><path d="M9 6h11" /><path d="M9 12h11" /><path d="M9 18h11" /><path d="M4 6h.01" /><path d="M4 12h.01" /><path d="M4 18h.01" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" /></>,
};

export default function Icon({ name, size = 22 }: { name: Name; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
