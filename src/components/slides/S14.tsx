export default function S14() {
  return (
    <section className="slide dark" id="s14">
      <div className="pg-num">14 / 14</div>
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "10px", color: "#555", border: "1px solid #333", display: "inline-block", padding: "3px 10px", borderRadius: "3px", marginBottom: "20px", letterSpacing: ".1em" }}>Summary</div>

      <h2>お互いに気持ちよく<br /><span style={{ color: "var(--accent)" }}>運用するために</span></h2>
      <p className="lead">広告運用はクライアント様の事業側と連携して成果に近づきます。</p>

      <div className="card featured" style={{ marginBottom: "16px", background: "#1a1a1a", borderColor: "var(--accent)" }}>
        <div className="card-label">成果を出すために最低限ここだけ</div>
        <ul className="checklist">
          <li className="ok" style={{ color: "#aaa" }}><strong style={{ color: "white" }}>広告の目的を1つに決める</strong></li>
          <li className="ok" style={{ color: "#aaa" }}><strong style={{ color: "white" }}>飛び先（導線）を整える</strong></li>
          <li className="ok" style={{ color: "#aaa" }}><strong style={{ color: "white" }}>30日単位で回して改善する</strong></li>
        </ul>
      </div>

      <div style={{ background: "#1a1a1a", borderRadius: "10px", padding: "16px", marginBottom: "16px" }}>
        <div style={{ fontSize: "10px", color: "var(--accent)", fontWeight: 700, marginBottom: "8px" }}>お客様にお願いしたいこと</div>
        <ul className="checklist">
          <li className="ok" style={{ color: "#aaa" }}>最新情報の共有（価格・メニュー・休診日）</li>
          <li className="ok" style={{ color: "#aaa" }}>予約枠の確保</li>
          <li className="ok" style={{ color: "#aaa" }}>飛び先ページの改善</li>
          <li className="ok" style={{ color: "#aaa" }}>LINE対応のスピード</li>
        </ul>
      </div>

      <div style={{ background: "rgba(124,77,255,.15)", border: "1.5px solid var(--accent)", borderRadius: "12px", padding: "18px", marginBottom: "16px" }}>
        <div style={{ fontSize: "15px", fontWeight: 700, color: "white", marginBottom: "8px", textAlign: "center" }}>連絡するときは<br />テンプレートを使ってください</div>
        <div style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.7, textAlign: "center", marginBottom: "12px" }}>必要な情報が揃った状態で届くので、確認のやり取りが減り対応が最短になります。</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <a href="#s10" style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "rgba(255,255,255,.08)", borderRadius: "6px", textDecoration: "none", fontSize: "12px" }}>
            <span style={{ color: "#aaa" }}>運用相談・ミーティング</span>
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>テンプレ①〜③ →</span>
          </a>
          <a href="#s11" style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "rgba(255,255,255,.08)", borderRadius: "6px", textDecoration: "none", fontSize: "12px" }}>
            <span style={{ color: "#aaa" }}>改善・設定変更</span>
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>テンプレ④〜⑥ →</span>
          </a>
          <a href="#s12" style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "rgba(255,255,255,.08)", borderRadius: "6px", textDecoration: "none", fontSize: "12px" }}>
            <span style={{ color: "#aaa" }}>動画・修正・停止・休止</span>
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>テンプレ⑦〜⑫ →</span>
          </a>
          <a href="#s13" style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "rgba(255,255,255,.08)", borderRadius: "6px", textDecoration: "none", fontSize: "12px" }}>
            <span style={{ color: "#aaa" }}>素材・レポート・予算・休診</span>
            <span style={{ color: "var(--accent)", fontWeight: 700 }}>テンプレ⑬〜⑱ →</span>
          </a>
        </div>
      </div>

      <div style={{ background: "#111", borderRadius: "12px", padding: "18px", display: "flex", gap: "14px", alignItems: "center", marginBottom: "20px" }}>
        <div style={{ fontSize: "28px" }}>{"💬"}</div>
        <div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "4px" }}>テンプレが見つからないとき</div>
          <div style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.7 }}>LINEで「相談です」とだけ送ってください。担当者が状況を確認します。</div>
        </div>
      </div>

      <div className="tip" style={{ background: "rgba(6,199,85,.1)", borderLeftColor: "var(--green)" }}>
        <strong style={{ color: "var(--green)" }}>低価格 × 継続改善 × 適正工数モデル</strong><br />
        <span style={{ color: "#aaa" }}>一緒に、無理なく、着実に成果につながる運用を作っていきましょう。</span>
      </div>

      <div className="dark-sf"><span>しっとる広告運用</span><span>発行：2025年4月</span></div>
    </section>
  );
}
