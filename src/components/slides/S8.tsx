export default function S8() {
  return (
    <section className="slide" id="s8">
      <div className="pg-num">08 / 13</div>
      <div className="chip">制作・修正・休止</div>
      <h2>制作ルールと<br />休止・再開の仕組み</h2>
      <p className="lead">修正は品質とスピードを保つためのルールを設けています。</p>

      <div className="compare">
        <div className="compare-col">
          <div className="compare-head ok">修正ルール</div>
          <div className="compare-body">
            <div className="compare-row"><span className="icon">✅</span><span>2回まで無償</span></div>
            <div className="compare-row"><span className="icon">💰</span><span>3回目〜 ¥2,200/回</span></div>
            <div className="compare-row"><span className="icon">📝</span><span>まとめて提出推奨</span></div>
            <div className="compare-row"><span className="icon">🔧</span><span>制作ミスは無料</span></div>
          </div>
        </div>
        <div className="compare-col">
          <div className="compare-head" style={{ background: "var(--accent)", color: "white" }}>動画制作ルール</div>
          <div className="compare-body">
            <div className="compare-row"><span className="icon">🎬</span><span>3ヶ月に1本 無料</span></div>
            <div className="compare-row"><span className="icon">📈</span><span>CPC100円超の改善動画 無料</span></div>
            <div className="compare-row"><span className="icon">➕</span><span>追加 ¥5,500/本</span></div>
            <div className="compare-row"><span className="icon">📱</span><span>縦型（9:16）推奨</span></div>
          </div>
        </div>
      </div>

      <div className="section-divider">
        <div className="section-divider-line"></div>
        <div className="section-divider-text">休止・再開の仕組み</div>
        <div className="section-divider-line"></div>
      </div>

      <div className="card" style={{ marginBottom: "12px" }}>
        <div className="card-label">休止条件</div>
        <div className="card-body">
          ・休止は<strong>3ヶ月経過後</strong>に可能<br />
          ・休止中は休止管理費 <strong>¥3,300（税込）</strong>が発生<br />
          ・再開費用はかかりません
        </div>
      </div>

      <div className="card" style={{ marginBottom: "12px" }}>
        <div className="card-label">再契約時</div>
        <div className="card-body">
          ・最低3ヶ月が再適用されます<br />
          ・初期設定費 <strong>¥11,000（税込）</strong>が発生
        </div>
      </div>

      <div className="notice">休止・再開のテンプレートは「コピペ用テンプレート」スライドにあります。</div>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
