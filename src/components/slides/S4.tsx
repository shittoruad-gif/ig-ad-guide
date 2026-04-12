export default function S4() {
  return (
    <section className="slide" id="s4">
      <div className="pg-num">04 / 14</div>
      <div className="chip green">広告の基本・導線</div>
      <h2>広告の仕組みと<br />飛び先で9割決まる話</h2>
      <p className="lead">広告は「表示→クリック→予約」の3ステップ。中でも飛び先が合っていないと予約が伸びません。</p>

      <div style={{ background: "#111", borderRadius: "12px", padding: "16px", marginBottom: "16px", display: "flex", gap: "8px" }}>
        <div style={{ flex: 1, textAlign: "center", padding: "8px" }}>
          <div style={{ fontSize: "10px", color: "var(--accent)", fontWeight: 700, marginBottom: "4px" }}>CPC</div>
          <div style={{ fontSize: "12px", color: "white" }}>1クリックの費用</div>
        </div>
        <div style={{ flex: 1, textAlign: "center", padding: "8px", borderLeft: "1px solid #333", borderRight: "1px solid #333" }}>
          <div style={{ fontSize: "10px", color: "var(--accent)", fontWeight: 700, marginBottom: "4px" }}>クリック数</div>
          <div style={{ fontSize: "12px", color: "white" }}>興味の量</div>
        </div>
        <div style={{ flex: 1, textAlign: "center", padding: "8px" }}>
          <div style={{ fontSize: "10px", color: "var(--accent)", fontWeight: 700, marginBottom: "4px" }}>CTR</div>
          <div style={{ fontSize: "12px", color: "white" }}>訴求の精度</div>
        </div>
      </div>

      <div className="card featured" style={{ marginBottom: "16px" }}>
        <div className="card-label">まず結論（選び方の目安）</div>
        <ul className="checklist">
          <li className="ok"><strong>いますぐ予約が欲しい</strong>：ホットペッパー / LP</li>
          <li className="ok"><strong>まず相談が欲しい</strong>：公式LINE</li>
          <li className="ok"><strong>信頼感を作りたい</strong>：HP / Instagramプロフィール</li>
          <li className="ok"><strong>迷ったら</strong>：公式LINE or ホットペッパー</li>
        </ul>
      </div>

      <div className="anno-card green-card" style={{ marginBottom: "10px" }}>
        <div className="anno-badge"><span className="anno-label green">ホットペッパー</span><span className="urgency normal">予約直結</span></div>
        <div className="anno-name">今すぐ予約が欲しい</div>
        <div className="anno-desc">クーポンで入口を作りやすい。予約の摩擦が低い。</div>
        <div className="card-body" style={{ fontSize: "12px" }}>
          <strong>改善ポイント：</strong>該当クーポン直リンク・写真3枚を整える・枠を確保
        </div>
      </div>

      <div className="anno-card green-card" style={{ marginBottom: "10px" }}>
        <div className="anno-badge"><span className="anno-label green">LP（1枚ページ）</span><span className="urgency normal">予約直結</span></div>
        <div className="anno-name">1メニューを強く売りたい</div>
        <div className="anno-desc">広告→LP→予約の一直線導線。</div>
        <div className="card-body" style={{ fontSize: "12px" }}>
          <strong>改善ポイント：</strong>FVで「誰が・何を・いくらで・どうなる」・ボタンを上中下に
        </div>
      </div>

      <div className="anno-card purple-card" style={{ marginBottom: "10px" }}>
        <div className="anno-badge"><span className="anno-label purple">公式LINE</span><span className="urgency normal">相談型</span></div>
        <div className="anno-name">まず相談が欲しい</div>
        <div className="anno-desc">不安が多い業種に最適。関係づくりも。</div>
        <div className="card-body" style={{ fontSize: "12px" }}>
          <strong>改善ポイント：</strong>自動応答で次のアクション指定・返信目安を決める
        </div>
      </div>

      <div className="anno-card" style={{ marginBottom: "10px" }}>
        <div className="anno-badge"><span className="anno-label">Instagramプロフィール</span></div>
        <div className="anno-name">雰囲気・人柄を伝えたい</div>
        <div className="card-body" style={{ fontSize: "12px" }}>
          <strong>改善ポイント：</strong>冒頭3行で価値を伝える・ピン留め3つ+ハイライト整備
        </div>
      </div>

      <div className="anno-card" style={{ marginBottom: "16px" }}>
        <div className="anno-badge"><span className="anno-label">ホームページ</span></div>
        <div className="anno-name">信頼性重視・複数メニュー</div>
        <div className="card-body" style={{ fontSize: "12px" }}>
          <strong>改善ポイント：</strong>広告ごとに専用ページへ・予約ボタンを常に見える位置に
        </div>
      </div>

      <a href="#s11" className="tmpl-cta">
        <div className="tmpl-cta-icon">{"🔗"}</div>
        <div className="tmpl-cta-text">
          <div className="tmpl-cta-title">飛び先を変えたい・迷っている</div>
          <div className="tmpl-cta-desc">テンプレート①⑤をコピーしてLINEで送ってください</div>
        </div>
        <div className="tmpl-cta-arrow">{"→"}</div>
      </a>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
