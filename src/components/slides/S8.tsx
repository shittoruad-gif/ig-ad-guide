export default function S8() {
  return (
    <section className="slide" id="s8">
      <div className="pg-num">08 / 15</div>
      <div className="chip green">改善チェック</div>
      <h2>予約が取れない時の<br />改善チェックリスト</h2>
      <p className="lead">クリックはあるのに予約が来ない場合、下の「3つのズレ」をまず確認してください。</p>

      <div className="card featured" style={{ marginBottom: "16px" }}>
        <div className="card-label">まず確認する「3つのズレ」</div>
        <ul className="checklist">
          <li className="no"><strong>期待ズレ</strong>：広告の内容とリンク先が不一致</li>
          <li className="no"><strong>導線ズレ</strong>：予約ボタンが見つからない/空き枠がない</li>
          <li className="no"><strong>オファーズレ</strong>：競合と比べて弱い</li>
        </ul>
      </div>

      <div className="section-divider">
        <div className="section-divider-line"></div>
        <div className="section-divider-text">セルフチェック6項目</div>
        <div className="section-divider-line"></div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
        <div className="sit-card">
          <div className="sit-card-head"><div className="sit-card-emoji">{"👆"}</div><div className="sit-card-title">1. 導線をたどってみる</div></div>
          <div className="sit-card-body">プロフィール→予約ページまで実際にスマホで操作してみてください</div>
        </div>
        <div className="sit-card">
          <div className="sit-card-head"><div className="sit-card-emoji">{"📝"}</div><div className="sit-card-title">2. 入力項目が多すぎないか</div></div>
          <div className="sit-card-body">予約フォームの項目数をチェック。多いと離脱します</div>
        </div>
        <div className="sit-card">
          <div className="sit-card-head"><div className="sit-card-emoji">{"📅"}</div><div className="sit-card-title">3. 空き枠があるか</div></div>
          <div className="sit-card-body">希望日時に予約が取れる状態になっているか確認</div>
        </div>
        <div className="sit-card">
          <div className="sit-card-head"><div className="sit-card-emoji">{"💰"}</div><div className="sit-card-title">4. 料金が明確か</div></div>
          <div className="sit-card-body">総額・特典が分かりやすく表示されているか</div>
        </div>
        <div className="sit-card">
          <div className="sit-card-head"><div className="sit-card-emoji">{"🏆"}</div><div className="sit-card-title">5. 競合と比較して魅力的か</div></div>
          <div className="sit-card-body">価格・特典・限定性・安心材料を見直す</div>
        </div>
        <div className="sit-card">
          <div className="sit-card-head"><div className="sit-card-emoji">{"📱"}</div><div className="sit-card-title">6. スマホで見やすいか</div></div>
          <div className="sit-card-body">文字が小さい・ボタンが押しにくいなどないか</div>
        </div>
      </div>

      <a href="#s11" className="tmpl-cta">
        <div className="tmpl-cta-icon">{"😰"}</div>
        <div className="tmpl-cta-text">
          <div className="tmpl-cta-title">チェックしても改善しない場合</div>
          <div className="tmpl-cta-desc">テンプレート④「予約が少ない件の相談」をコピーして送ってください</div>
        </div>
        <div className="tmpl-cta-arrow">{"→"}</div>
      </a>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
