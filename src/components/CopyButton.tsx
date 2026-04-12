"use client";
import { useState, useCallback } from "react";

interface CopyButtonProps {
  targetId: string;
}

export default function CopyButton({ targetId }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    navigator.clipboard.writeText(el.innerText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [targetId]);

  return (
    <button className={`copy-btn${copied ? " copied" : ""}`} onClick={handleCopy}>
      {copied ? "✓ コピー完了" : "コピー"}
    </button>
  );
}
