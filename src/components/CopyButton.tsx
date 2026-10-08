"use client";
import { useState, useCallback } from "react";

interface CopyButtonProps {
  /** コピーする文字。指定がなければ targetId の要素の文字をコピーする */
  text?: string;
  targetId?: string;
  label?: string;
}

export default function CopyButton({ text, targetId, label = "コピー" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const value = text ?? (targetId ? document.getElementById(targetId)?.innerText : "") ?? "";
    if (!value) return;
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [text, targetId]);

  return (
    <button type="button" className={`copy-btn${copied ? " copied" : ""}`} onClick={handleCopy} aria-live="polite">
      {copied ? "コピーしました" : label}
    </button>
  );
}
