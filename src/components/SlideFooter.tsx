"use client";

interface SlideFooterProps {
  current: number;
  total: number;
  goPage: (dir: number) => void;
}

export default function SlideFooter({ current, total, goPage }: SlideFooterProps) {
  const isLast = current === total - 1;
  return (
    <div className="slide-footer">
      <button
        className="btn-nav btn-prev"
        onClick={() => goPage(-1)}
        disabled={current === 0}
        style={{ opacity: current === 0 ? 0.3 : 1 }}
      >
        ← 前へ
      </button>
      <div className="slide-counter">{current + 1} / {total}</div>
      <button
        className={`btn-nav btn-next${isLast ? " purple" : ""}`}
        onClick={() => goPage(1)}
      >
        {isLast ? "最初に戻る ↑" : "次へ →"}
      </button>
    </div>
  );
}
