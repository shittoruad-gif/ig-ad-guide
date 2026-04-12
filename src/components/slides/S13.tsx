export default function S13() {
  return (
    <section className="slide dark" id="s13">
      <div className="pg-num">13 / 13</div>
      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "10px", color: "#555", border: "1px solid #333", display: "inline-block", padding: "3px 10px", borderRadius: "3px", marginBottom: "20px", letterSpacing: ".1em" }}>Summary</div>

      <h2>お互いに気持ちよく<br /><span style={{ color: "var(--accent)" }}>運用するために</span></h2>
      <p className="lead">広告運用は当社だけで完結するものではなく、クライアント様の事業側と連携して成果に近づきます。</p>

      <div className="card featured" style={{ marginBottom: "16px" }}>
        <div className="card-label">成果を出すために最低限ここだけ守ればOK</div>
        <ul className="checklist">
          <li className="ok"><strong>広告の目的を1つに決める</strong>（例：予約を増やす、LINE登録を増やす）</li>
          <li className="ok"><strong>広告の飛び先（導線）を整える</strong>（予約ボタンが見つかる、料金が分かる、空き枠がある）</li>
          <li className="ok"><strong>30日単位で回して改善する</strong>（数字を見て、直して、続ける）</li>
        </ul>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
        <div style={{ background: "#1a1a1a", borderRadius: "10px", padding: "16px" }}>
          <div style={{ fontSize: "10px", color: "var(--accent)", fontWeight: 700, marginBottom: "4px" }}>クライアント様にお願いする最低限の協力</div>
          <ul className="checklist">
            <li className="ok" style={{ color: "#aaa" }}>最新情報の共有（価格・メニュー・キャンペーン・休診日）</li>
            <li className="ok" style={{ color: "#aaa" }}>予約枠の確保（可能な範囲でOK）</li>
            <li className="ok" style={{ color: "#aaa" }}>飛び先ページの改善</li>
            <li className="ok" style={{ color: "#aaa" }}>LINE対応のスピード（目安を決める）</li>
          </ul>
        </div>
      </div>

      <div className="tip" style={{ background: "rgba(6,199,85,.1)", borderLeftColor: "var(--green)" }}>
        <strong style={{ color: "var(--green)" }}>本サービスは「低価格 × 継続改善 × 適正工数」モデルです。</strong><br />
        <span style={{ color: "#aaa" }}>無制限対応ではありませんが、継続的改善を前提とした運用を行います。一緒に、無理なく、着実に成果につながる運用を作っていきましょう。</span>
      </div>

      <div style={{ background: "#111", borderRadius: "12px", padding: "18px", display: "flex", gap: "14px", alignItems: "center", marginBottom: "20px" }}>
        <div style={{ fontSize: "28px" }}>💬</div>
        <div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "4px" }}>ご不明な点はLINEへ</div>
          <div style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.7 }}>どんな小さな疑問でもお気軽にご連絡ください。担当者が直接お答えします。</div>
        </div>
      </div>

      <div className="dark-sf"><span>しっとる広告運用</span><span>発行：2025年4月</span></div>
    </section>
  );
}
