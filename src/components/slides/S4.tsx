export default function S4() {
  return (
    <section className="slide" id="s4">
      <div className="pg-num">04 / 13</div>
      <div className="chip">成果の考え方</div>
      <h2>成果は3段階。<br />3ヶ月で安定させる</h2>
      <p className="lead">成果はさまざまな要因の影響を受けるため、売上や予約数などの保証は行っておりません。</p>

      <div className="section-divider">
        <div className="section-divider-line"></div>
        <div className="section-divider-text">成果の3段階</div>
        <div className="section-divider-line"></div>
      </div>

      <div className="flow">
        <div className="flow-step">
          <div className="flow-num">STAGE 1</div>
          <div className="flow-text"><strong>入口の成果</strong>表示・クリックが取れている</div>
        </div>
        <div className="flow-step">
          <div className="flow-num">STAGE 2</div>
          <div className="flow-text"><strong>受け皿の成果</strong>リンク先で離脱が少ない（予約まで迷わない）</div>
        </div>
        <div className="flow-step">
          <div className="flow-num">STAGE 3</div>
          <div className="flow-text"><strong>最終の成果</strong>問い合わせ・予約</div>
        </div>
      </div>

      <div className="tip">
        <strong>成果に関する大切なお約束（要点）</strong><br />
        ・成果保証は行っておりません<br />
        ・判断は原則3ヶ月（データ蓄積→改善→安定）を目安<br />
        ・広告の停止と再開を繰り返すと学習がリセットされる可能性があります
      </div>

      <div className="section-divider">
        <div className="section-divider-line"></div>
        <div className="section-divider-text">3ヶ月コミット設計</div>
        <div className="section-divider-line"></div>
      </div>

      <div style={{ background: "#111", borderRadius: "12px", padding: "20px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", color: "#555", fontWeight: 700, letterSpacing: ".08em", marginBottom: "14px" }}>3-MONTH ROADMAP</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px", borderBottom: "1px solid #222" }}>
            <span style={{ fontSize: "13px", color: "#aaa" }}>1ヶ月目</span>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "white" }}>データを集める</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px", borderBottom: "1px solid #222" }}>
            <span style={{ fontSize: "13px", color: "#aaa" }}>2ヶ月目</span>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "var(--accent)" }}>改善する</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "13px", color: "#aaa" }}>3ヶ月目</span>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "14px", color: "var(--green)" }}>安定させる</span>
          </div>
        </div>
      </div>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
