export default function S7() {
  return (
    <section className="slide" id="s7">
      <div className="pg-num">07 / 13</div>
      <div className="chip green">改善チェック</div>
      <h2>予約が取れない時の<br />改善チェックリスト</h2>
      <p className="lead">クリックはあるのに予約につながらない場合は、以下を順番に確認してください。</p>

      <div className="card featured" style={{ marginBottom: "16px" }}>
        <div className="card-label">まず確認する「3つのズレ」</div>
        <ul className="checklist">
          <li className="no"><strong>期待ズレ</strong>：広告で期待した内容と、リンク先の内容が不一致</li>
          <li className="no"><strong>導線ズレ</strong>：予約ボタンが見つからない／入力が面倒／空き枠がない</li>
          <li className="no"><strong>オファーズレ</strong>：比較されると弱い（価格・特典・限定性・安心材料）</li>
        </ul>
      </div>

      <div className="section-divider">
        <div className="section-divider-line"></div>
        <div className="section-divider-text">具体的なチェック項目</div>
        <div className="section-divider-line"></div>
      </div>

      <div className="rule-list" style={{ marginBottom: "20px" }}>
        <div className="rule-item" style={{ borderColor: "var(--rule)" }}>
          <div className="rule-num" style={{ color: "var(--accent)" }}>01</div>
          <div className="rule-text" style={{ color: "var(--mid)" }}>プロフィールから予約ページまでの導線を実際にたどってみる</div>
        </div>
        <div className="rule-item" style={{ borderColor: "var(--rule)" }}>
          <div className="rule-num" style={{ color: "var(--accent)" }}>02</div>
          <div className="rule-text" style={{ color: "var(--mid)" }}>予約フォームの入力項目が多すぎないか確認する</div>
        </div>
        <div className="rule-item" style={{ borderColor: "var(--rule)" }}>
          <div className="rule-num" style={{ color: "var(--accent)" }}>03</div>
          <div className="rule-text" style={{ color: "var(--mid)" }}>希望する日時の空き枠があるか確認する</div>
        </div>
        <div className="rule-item" style={{ borderColor: "var(--rule)" }}>
          <div className="rule-num" style={{ color: "var(--accent)" }}>04</div>
          <div className="rule-text" style={{ color: "var(--mid)" }}>料金や特典が明確に表示されているか確認する</div>
        </div>
        <div className="rule-item" style={{ borderColor: "var(--rule)" }}>
          <div className="rule-num" style={{ color: "var(--accent)" }}>05</div>
          <div className="rule-text" style={{ color: "var(--mid)" }}>競合と比べて魅力的なオファーになっているか確認する</div>
        </div>
        <div className="rule-item" style={{ borderColor: "var(--rule)" }}>
          <div className="rule-num" style={{ color: "var(--accent)" }}>06</div>
          <div className="rule-text" style={{ color: "var(--mid)" }}>スマホで見やすい表示になっているか確認する</div>
        </div>
      </div>

      <div className="section-divider">
        <div className="section-divider-line"></div>
        <div className="section-divider-text">決済エラー時の対応</div>
        <div className="section-divider-line"></div>
      </div>

      <div className="flow">
        <div className="flow-step">
          <div className="flow-num">STEP 01</div>
          <div className="flow-text"><strong>Facebookからの通知確認</strong></div>
        </div>
        <div className="flow-step">
          <div className="flow-num">STEP 02</div>
          <div className="flow-text"><strong>クレジットカード情報の確認</strong></div>
        </div>
        <div className="flow-step">
          <div className="flow-num">STEP 03</div>
          <div className="flow-text"><strong>新しい支払い方法の追加</strong></div>
        </div>
        <div className="flow-step">
          <div className="flow-num">STEP 04</div>
          <div className="flow-text"><strong>未払い残高の手動決済</strong></div>
        </div>
        <div className="flow-step">
          <div className="flow-num">STEP 05</div>
          <div className="flow-text"><strong>再発防止</strong>別カード用意・期限/残高の確認</div>
        </div>
      </div>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
