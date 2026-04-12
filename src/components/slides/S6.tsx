export default function S6() {
  return (
    <section className="slide dark" id="s6">
      <div className="pg-num">06 / 14</div>
      <div className="chip">契約・料金</div>
      <h2>安定運用のための<br /><span style={{ color: "var(--accent)" }}>基本ルール</span></h2>
      <p className="lead">公平に安定した品質で対応するためのルールです。</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
        <div style={{ background: "#1a1a1a", borderRadius: "10px", padding: "16px" }}>
          <div style={{ fontSize: "10px", color: "var(--accent)", fontWeight: 700, marginBottom: "4px" }}>最低契約期間</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>3ヶ月</div>
        </div>
        <div style={{ background: "#1a1a1a", borderRadius: "10px", padding: "16px" }}>
          <div style={{ fontSize: "10px", color: "var(--accent)", fontWeight: 700, marginBottom: "4px" }}>月額運用費</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>広告費の20%（最低 ¥11,000）</div>
          <div style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>30日単位課金・翌月末クレジット決済</div>
        </div>
        <div style={{ background: "#1a1a1a", borderRadius: "10px", padding: "16px" }}>
          <div style={{ fontSize: "10px", color: "var(--red)", fontWeight: 700, marginBottom: "4px" }}>未決済時</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>7日間未決済で広告停止</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #222" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>ミーティング（初回）</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "var(--green)" }}>無料</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #222" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>ミーティング（2回目〜）</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "white" }}>¥5,500/h</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #222" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>動画（3ヶ月に1本）</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "var(--green)" }}>無料</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #222" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>追加動画</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "white" }}>¥5,500/本</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #222" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>修正（2回まで）</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "var(--green)" }}>無料</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #222" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>修正（3回目〜）</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "white" }}>¥2,200/回</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0" }}>
          <span style={{ fontSize: "13px", color: "#aaa" }}>休止管理費</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "white" }}>¥3,300/月</span>
        </div>
      </div>

      <div className="dark-sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
