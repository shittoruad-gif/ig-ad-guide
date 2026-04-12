export default function S3() {
  return (
    <section className="slide" id="s3">
      <div className="pg-num">03 / 13</div>
      <div className="chip green">導線ガイド</div>
      <h2>広告タップ後の<br />行き先で結果が変わる</h2>
      <p className="lead">同じ広告でも、飛び先が合っていないと予約・問い合わせが伸びにくいです。</p>

      <div className="card featured" style={{ marginBottom: "16px" }}>
        <div className="card-label">選び方の目安</div>
        <ul className="checklist">
          <li className="ok"><strong>いますぐ予約が欲しい</strong>：ホットペッパー / LP</li>
          <li className="ok"><strong>まず相談が欲しい</strong>：公式LINE</li>
          <li className="ok"><strong>信頼感を作りたい</strong>：HP / Instagramプロフィール</li>
          <li className="ok"><strong>迷ったら</strong>：公式LINE or ホットペッパー</li>
        </ul>
      </div>

      <div className="section-divider">
        <div className="section-divider-line"></div>
        <div className="section-divider-text">導線別の比較</div>
        <div className="section-divider-line"></div>
      </div>

      <div className="anno-card green-card" style={{ marginBottom: "10px" }}>
        <div className="anno-badge"><span className="anno-label green">ホットペッパー</span></div>
        <div className="anno-name">今すぐ予約が欲しい</div>
        <div className="anno-desc">予約の摩擦が低い。クーポンで入口を作りやすい。</div>
        <div className="card-body" style={{ fontSize: "12px" }}>
          <strong>つまずき：</strong>比較されやすい・トップに飛ぶと迷う・枠が少ないと離脱<br />
          <strong>改善：</strong>該当クーポン直リンク・写真3枚を整える・枠を確保
        </div>
      </div>

      <div className="anno-card green-card" style={{ marginBottom: "10px" }}>
        <div className="anno-badge"><span className="anno-label green">LP（1枚ページ）</span></div>
        <div className="anno-name">1メニューを強く売りたい</div>
        <div className="anno-desc">広告の訴求と内容を一致させ予約まで一直線。</div>
        <div className="card-body" style={{ fontSize: "12px" }}>
          <strong>つまずき：</strong>文章が長いと離脱・作り込みが弱いと活きない<br />
          <strong>改善：</strong>FVで「誰が・何を・いくらで・どうなる」・ボタンを上中下に
        </div>
      </div>

      <div className="anno-card purple-card" style={{ marginBottom: "10px" }}>
        <div className="anno-badge"><span className="anno-label purple">公式LINE</span></div>
        <div className="anno-name">まず相談が欲しい</div>
        <div className="anno-desc">不安が多い業種に最適。関係づくりもできる。</div>
        <div className="card-body" style={{ fontSize: "12px" }}>
          <strong>つまずき：</strong>追加で止まる・返信が遅いと機会損失<br />
          <strong>改善：</strong>自動応答で次のアクション指定・返信目安を決める
        </div>
      </div>

      <div className="anno-card" style={{ marginBottom: "10px" }}>
        <div className="anno-badge"><span className="anno-label">Instagramプロフィール</span></div>
        <div className="anno-name">雰囲気・人柄を伝えたい</div>
        <div className="anno-desc">広告感を弱めたい場合に有効。</div>
        <div className="card-body" style={{ fontSize: "12px" }}>
          <strong>つまずき：</strong>予約までが長い・未整備だと無駄クリック<br />
          <strong>改善：</strong>冒頭3行で価値を伝える・ピン留め3つ+ハイライト整備
        </div>
      </div>

      <div className="anno-card" style={{ marginBottom: "10px" }}>
        <div className="anno-badge"><span className="anno-label">ホームページ</span></div>
        <div className="anno-name">信頼性重視・複数メニュー</div>
        <div className="anno-desc">医療寄り・専門性が高い業種向け。</div>
        <div className="card-body" style={{ fontSize: "12px" }}>
          <strong>つまずき：</strong>トップだと迷って離脱・スマホで見づらい<br />
          <strong>改善：</strong>広告ごとに専用ページへ・予約ボタンを常に見える位置に
        </div>
      </div>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
