export default function S3() {
  return (
    <section className="slide dark" id="s3">
      <div className="pg-num">03 / 15</div>
      <div className="chip" style={{ background: "var(--green)" }}>初期設定ガイド</div>
      <h2>はじめに<br /><span style={{ color: "var(--accent)" }}>やっていただくこと</span></h2>
      <p className="lead">ここに書いてある5つができれば、広告はスタートできます。分からないところは飛ばしてOK。できたところまでLINEで教えてください。</p>

      <div className="flow">
        <div className="flow-step">
          <div className="flow-num">STEP 01</div>
          <div className="flow-text">
            <strong>動画を撮って送る</strong>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,.7)" }}>必ず<span style={{ color: "#FF5252" }}>縦撮り</span>（スマホを縦にした状態）。施術の様子を角度を変えて複数本。10〜20秒 × 5〜10本が目安。近め（手元）と遠め（全体）があるとベスト。音声・言い間違いOK（編集はこちらでします）。撮れた動画はそのまま<strong style={{ color: "white" }}>グループLINEへ送信</strong>。</span>
            <a href="https://youtu.be/ypoqf0JSwXs" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "8px", fontSize: "11px", color: "var(--accent)", fontWeight: 700, textDecoration: "none", background: "rgba(124,77,255,.15)", padding: "4px 10px", borderRadius: "6px" }}>{"▶ 撮影方法の動画を見る"}</a>
          </div>
        </div>
        <div className="flow-step">
          <div className="flow-num">STEP 02</div>
          <div className="flow-text">
            <strong>現在地（配信エリア）を設定</strong>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,.7)" }}>広告は「店舗から半径◯km」でエリアを決めて配信します。<span style={{ color: "#FF5252" }}>必ず店舗にいるとき</span>に、<strong style={{ color: "white" }}>スマホのInstagramアプリ</strong>から操作してください。設定画面で広告出稿の画面に行った後、広告は出さずに戻ってOK。</span>
            <a href="https://youtu.be/LXgxH8Xd1oA" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "8px", fontSize: "11px", color: "var(--accent)", fontWeight: 700, textDecoration: "none", background: "rgba(124,77,255,.15)", padding: "4px 10px", borderRadius: "6px" }}>{"▶ 現在地設定の動画を見る"}</a>
          </div>
        </div>
        <div className="flow-step">
          <div className="flow-num">STEP 03</div>
          <div className="flow-text">
            <strong>支払い方法をPCで設定</strong>
            <span style={{ fontSize: "12px", color: "#FF5252" }}>スマホアプリからだと手数料30%がかかることがあります。</span>{" "}
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,.7)" }}>必ず<strong style={{ color: "white" }}>PC（またはスマホのブラウザ）</strong>からWebで設定してください。通貨が米ドル（USD）になっている場合は日本円（JPY）に変更。</span>
          </div>
        </div>
        <div className="flow-step">
          <div className="flow-num">STEP 04</div>
          <div className="flow-text">
            <strong>広告が止まっていないか確認（2〜3日に1回）</strong>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,.7)" }}>Instagramアプリ → プロフィール → プロフェッショナルダッシュボード → 広告ツール → 現在の広告。<strong style={{ color: "white" }}>「◯日後終了」→ OK</strong>。<span style={{ color: "#FF5252" }}>「停止中」や消化金額¥0 → NG（すぐLINEで連絡を）</span>。</span>
          </div>
        </div>
        <div className="flow-step">
          <div className="flow-num">STEP 05</div>
          <div className="flow-text">
            <strong>二段階認証を解除（オフ）にする</strong>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,.7)" }}>弊社がログインするたびに確認コードの共有が必要になり、お互いに手間がかかります。解除しておくとスムーズです。Instagramアプリ → メニュー → アカウントセンター → パスワードとセキュリティ → 二段階認証 → SMS・認証アプリを<strong style={{ color: "white" }}>両方オフ</strong>。</span>
          </div>
        </div>
      </div>

      <div className="notice" style={{ background: "rgba(245,166,35,.1)", borderLeftColor: "var(--yellow)" }}>
        <strong style={{ color: "white" }}>二段階認証オフのリスク</strong><br />
        <span style={{ color: "#aaa" }}>不正ログインのリスクが上がります。オフにするかはアカウント管理方針に合わせてご判断ください。</span>
      </div>

      <div style={{ background: "#1a1a1a", borderRadius: "12px", padding: "18px", marginBottom: "16px" }}>
        <div style={{ fontSize: "11px", color: "var(--accent)", fontWeight: 700, marginBottom: "8px" }}>優先度</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "13px", color: "#aaa" }}>1位：動画撮影</span>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--red)", background: "rgba(229,57,53,.15)", padding: "2px 8px", borderRadius: "4px" }}>最優先</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "13px", color: "#aaa" }}>2位：現在地設定 + 支払い設定</span>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--yellow)", background: "rgba(245,166,35,.15)", padding: "2px 8px", borderRadius: "4px" }}>重要</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "13px", color: "#aaa" }}>3位：広告確認 + 2FA解除</span>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--green)", background: "rgba(6,199,85,.15)", padding: "2px 8px", borderRadius: "4px" }}>運用開始後</span>
          </div>
        </div>
      </div>

      <div className="tip" style={{ background: "rgba(6,199,85,.1)", borderLeftColor: "var(--green)" }}>
        <strong style={{ color: "var(--green)" }}>途中まででOK</strong><br />
        <span style={{ color: "#aaa" }}>できたところまでをLINEで教えてください。続きは一緒に進めます。</span>
      </div>

      <div className="dark-sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
