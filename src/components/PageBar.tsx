"use client";

interface PageBarProps {
  current: number;
  total: number;
}

export default function PageBar({ current, total }: PageBarProps) {
  const width = ((current + 1) / total) * 100;
  return (
    <div className="page-bar">
      <div className="page-bar-fill" style={{ width: `${width}%` }}></div>
    </div>
  );
}
