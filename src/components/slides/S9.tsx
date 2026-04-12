export default function S9() {
  return (
    <section className="slide" id="s9">
      <div className="pg-num">09 / 15</div>
      <div className="chip">制作・休止・権利</div>
      <h2>制作ルール・休止と<br />著作権について</h2>
      <p className="lead">修正・動画制作・休止再開・著作権の要点です。</p>

      <div className="compare">
        <div className="compare-col">
          <div className="compare-head ok">修正ルール</div>
          <div className="compare-body">
            <div className="compare-row"><span className="icon">{"✅"}</span><span>2回まで無料</span></div>
            <div className="compare-row"><span className="icon">{"💰"}</span><span>3回目〜 ¥2,200/回</span></div>
            <div className="compare-row"><span className="icon">{"📝"}</span><span>まとめて提出推奨</span></div>
          </div>
        </div>
        <div className="compare-col">
          <div className="compare-head" style={{ background: "var(--accent)", color: "white" }}>動画制作</div>
          <div className="compare-body">
            <div className="compare-row"><span className="icon">{"🎬"}</span><span>3ヶ月に1本 無料</span></div>
            <div className="compare-row"><span className="icon">{"📈"}</span><span>CPC改善動画 無料</span></div>
            <div className="compare-row"><span className="icon">{"➕"}</span><span>追加 ¥5,500/本</span></div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "12px" }}>
        <div className="card-label">休止・再開</div>
        <div className="card-body">
          ・休止は<strong>3ヶ月経過後</strong>に可能 / 管理費 <strong>¥3,300/月</strong><br />
          ・再開費用なし / 再契約時は初期設定費 ¥11,000 + 最低3ヶ月
        </div>
      </div>

      <div className="card" style={{ marginBottom: "16px" }}>
        <div className="card-label">著作権・データ</div>
        <div className="card-body">
          ・制作物の著作権は<strong>当社に帰属</strong>（自社広告利用はOK）<br />
          ・無断転載・スクショ転載は<strong>禁止</strong>（違約金 ¥110,000）<br />
          ・AI活用あり（個人情報は使用しません）
        </div>
      </div>

      <a href="#s12" className="tmpl-cta">
        <div className="tmpl-cta-icon">{"✏️"}</div>
        <div className="tmpl-cta-text">
          <div className="tmpl-cta-title">動画変更・修正・休止の依頼</div>
          <div className="tmpl-cta-desc">テンプレートをコピーしてLINEで送ってください</div>
        </div>
        <div className="tmpl-cta-arrow">{"→"}</div>
      </a>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
