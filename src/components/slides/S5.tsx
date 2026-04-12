export default function S5() {
  return (
    <section className="slide dark" id="s5">
      <div className="pg-num">05 / 13</div>
      <div className="chip">契約・料金ルール</div>
      <h2>安定運用のための<br /><span style={{ color: "var(--accent)" }}>基本ルール</span></h2>
      <p className="lead">全てのクライアント様に公平に安定した品質で対応するためのルールです。</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
        <div style={{ background: "#1a1a1a", borderRadius: "10px", padding: "16px" }}>
          <div style={{ fontSize: "10px", color: "var(--accent)", fontWeight: 700, marginBottom: "4px" }}>最低契約期間</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>3ヶ月</div>
          <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.7, marginTop: "4px" }}>短期で止めると改善ができず、広告の学習も進みにくいため</div>
        </div>
        <div style={{ background: "#1a1a1a", borderRadius: "10px", padding: "16px" }}>
          <div style={{ fontSize: "10px", color: "var(--accent)", fontWeight: 700, marginBottom: "4px" }}>月額運用費</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>広告運用費の20%（最低 ¥11,000）</div>
          <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.7, marginTop: "4px" }}>30日単位課金・翌月末クレジット決済</div>
        </div>
        <div style={{ background: "#1a1a1a", borderRadius: "10px", padding: "16px" }}>
          <div style={{ fontSize: "10px", color: "var(--red)", fontWeight: 700, marginBottom: "4px" }}>未決済時</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>7日間未決済で広告停止</div>
          <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.7, marginTop: "4px" }}>停止期間中の機会損失は免責となります</div>
        </div>
      </div>

      <div className="section-divider" style={{ borderColor: "#333" }}>
        <div className="section-divider-line" style={{ background: "#333" }}></div>
        <div className="section-divider-text">料金一覧</div>
        <div className="section-divider-line" style={{ background: "#333" }}></div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #222" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>ミーティング（初回）</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "var(--green)" }}>無料</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #222" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>ミーティング（2回目〜）</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "white" }}>¥5,500 / 時間</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #222" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>動画制作（3ヶ月に1本）</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "var(--green)" }}>無料</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #222" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>追加動画</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "white" }}>¥5,500 / 本</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #222" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>修正（2回まで）</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "var(--green)" }}>無料</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>修正（3回目〜）</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "white" }}>¥2,200 / 回</span>
        </div>
      </div>

      <div className="dark-sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
