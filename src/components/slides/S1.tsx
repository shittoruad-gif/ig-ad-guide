export default function S1() {
  return (
    <section className="slide dark" id="s1">
      <div className="pg-num">01 / 15</div>
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "10px", color: "#555", border: "1px solid #333", display: "inline-block", padding: "3px 10px", borderRadius: "3px", marginBottom: "20px", letterSpacing: ".1em" }}>Instagram Ad Guide</div>

      <h2>Instagram広告運用<br /><span style={{ color: "var(--accent)" }}>クライアント向け</span><br />完全ガイド</h2>
      <p className="lead">はじめての方でも大丈夫。大事な考え方・ルール・よくある質問・すぐ使えるテンプレートを全部まとめました。</p>

      <a href="#s2" className="tmpl-cta" style={{ marginBottom: "20px" }}>
        <div className="tmpl-cta-icon">{"📋"}</div>
        <div className="tmpl-cta-text">
          <div className="tmpl-cta-title">困ったら → まず次のページへ</div>
          <div className="tmpl-cta-desc">状況別テンプレートの早見表があります。コピーしてLINEで送るだけでOK。</div>
        </div>
        <div className="tmpl-cta-arrow">{"→"}</div>
      </a>

      <div style={{ background: "#1a1a1a", borderRadius: "12px", padding: "18px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", color: "var(--accent)", fontWeight: 700, letterSpacing: ".08em", marginBottom: "12px" }}>HOW TO USE THIS GUIDE</div>
        <ul className="checklist">
          <li className="ok" style={{ color: "#aaa" }}><strong style={{ color: "white" }}>まず「早見表」を見る</strong> → 困りごとに合うテンプレートが分かる</li>
          <li className="ok" style={{ color: "#aaa" }}><strong style={{ color: "white" }}>テンプレートをコピー</strong> → LINEに貼って空欄を埋めるだけ</li>
          <li className="ok" style={{ color: "#aaa" }}><strong style={{ color: "white" }}>時間があるとき全体を読む</strong> → 広告の仕組みが分かると改善が早い</li>
        </ul>
      </div>

      <div className="tip" style={{ background: "rgba(6,199,85,.1)", borderLeftColor: "var(--green)" }}>
        <strong style={{ color: "var(--green)" }}>テンプレートを使うメリット</strong><br />
        <span style={{ color: "#aaa" }}>必要な情報が揃った状態で届くため、<strong style={{ color: "white" }}>確認のやり取りが減り、対応が最短</strong>になります。フリーテキストより圧倒的に早く解決します。</span>
      </div>

      <div className="dark-sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
