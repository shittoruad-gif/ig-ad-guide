export default function S9() {
  return (
    <section className="slide dark" id="s9">
      <div className="pg-num">09 / 13</div>
      <div className="chip">著作権・AI活用</div>
      <h2>データ・著作権と<br /><span style={{ color: "var(--accent)" }}>AI活用の透明性</span></h2>
      <p className="lead">制作物の取り扱いとAI活用について、大事な約束をまとめています。</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
        <div style={{ background: "#1a1a1a", borderRadius: "10px", padding: "16px" }}>
          <div style={{ fontSize: "10px", color: "var(--accent)", fontWeight: 700, marginBottom: "6px" }}>著作権</div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "6px" }}>制作物の著作権は当社に帰属</div>
          <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.7 }}>クライアント様は契約範囲内で自社広告として利用可能です。</div>
        </div>
        <div style={{ background: "#1a1a1a", borderRadius: "10px", padding: "16px" }}>
          <div style={{ fontSize: "10px", color: "var(--red)", fontWeight: 700, marginBottom: "6px" }}>禁止事項</div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "6px" }}>無断転載・スクショ転載は禁止</div>
          <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.7 }}>重大な違反が確認された場合、違約金 ¥110,000（税込）が発生する場合があります。</div>
        </div>
        <div style={{ background: "#1a1a1a", borderRadius: "10px", padding: "16px" }}>
          <div style={{ fontSize: "10px", color: "var(--green)", fontWeight: 700, marginBottom: "6px" }}>実績利用</div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "6px" }}>統計データとして品質向上に活用</div>
          <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.7 }}>個別が特定されないよう加工。契約終了後も実績として利用する場合があります。</div>
        </div>
      </div>

      <div className="section-divider" style={{ borderColor: "#333" }}>
        <div className="section-divider-line" style={{ background: "#333" }}></div>
        <div className="section-divider-text">AI活用について</div>
        <div className="section-divider-line" style={{ background: "#333" }}></div>
      </div>

      <div style={{ background: "#1a1a1a", borderRadius: "10px", padding: "16px", marginBottom: "16px" }}>
        <div style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "8px" }}>品質向上とスピード改善のためにAIを活用</div>
        <ul className="checklist">
          <li className="ok" style={{ color: "#aaa" }}>文章のたたき台や改善案整理に利用</li>
          <li className="ok" style={{ color: "#aaa" }}>個人情報は利用しません</li>
          <li className="ok" style={{ color: "#aaa" }}>匿名化した情報のみを使用</li>
        </ul>
      </div>

      <div className="dark-sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
