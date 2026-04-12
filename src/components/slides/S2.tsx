export default function S2() {
  return (
    <section className="slide" id="s2">
      <div className="pg-num">02 / 15</div>
      <div className="chip" style={{ background: "var(--red)" }}>困ったらまずここ</div>
      <h2>お困りごと早見表<br />テンプレで即解決</h2>
      <p className="lead">「何をすればいいか分からない」ときは、下の一覧から状況を選んでください。テンプレートをコピーしてLINEで送るだけでOKです。</p>

      <div className="info" style={{ marginBottom: "16px" }}>
        <strong>テンプレートを使うと対応が早くなります。</strong><br />
        フリーテキストだと確認のやり取りが増え、解決まで時間がかかります。テンプレートなら必要な情報が揃うので<strong>最短で対応</strong>できます。
      </div>

      <div className="section-divider">
        <div className="section-divider-line"></div>
        <div className="section-divider-text">よくある困りごと → テンプレート</div>
        <div className="section-divider-line"></div>
      </div>

      <div className="qnav">
        <a href="#s11" className="qnav-item">
          <div className="qnav-icon">{"😰"}</div>
          <div className="qnav-body">
            <div className="qnav-title">予約が少ない・反応が薄い</div>
            <div className="qnav-desc">クリックはあるが予約が来ない</div>
          </div>
          <div className="qnav-badge">テンプレ④</div>
        </a>
        <a href="#s11" className="qnav-item">
          <div className="qnav-icon">{"🔗"}</div>
          <div className="qnav-body">
            <div className="qnav-title">リンク先（飛び先）を変えたい</div>
            <div className="qnav-desc">タップ後のページを変更したい</div>
          </div>
          <div className="qnav-badge">テンプレ⑤</div>
        </a>
        <a href="#s12" className="qnav-item">
          <div className="qnav-icon">{"🎬"}</div>
          <div className="qnav-body">
            <div className="qnav-title">動画を変えたい・新しく作りたい</div>
            <div className="qnav-desc">差し替え or 追加制作</div>
          </div>
          <div className="qnav-badge">テンプレ⑦⑧</div>
        </a>
        <a href="#s12" className="qnav-item">
          <div className="qnav-icon">{"✏️"}</div>
          <div className="qnav-body">
            <div className="qnav-title">広告の文章や見せ方を修正したい</div>
            <div className="qnav-desc">テロップ、説明文など</div>
          </div>
          <div className="qnav-badge">テンプレ⑫</div>
        </a>
        <a href="#s12" className="qnav-item" style={{ borderColor: "var(--red)", borderWidth: "2px" }}>
          <div className="qnav-icon">{"🚨"}</div>
          <div className="qnav-body">
            <div className="qnav-title">広告が止まった（至急）</div>
            <div className="qnav-desc">エラーが出た・配信されない</div>
          </div>
          <div className="qnav-badge" style={{ background: "var(--red)" }}>テンプレ⑨</div>
        </a>
        <a href="#s11" className="qnav-item">
          <div className="qnav-icon">{"🎯"}</div>
          <div className="qnav-body">
            <div className="qnav-title">ターゲットやエリアを変えたい</div>
            <div className="qnav-desc">配信設定の変更</div>
          </div>
          <div className="qnav-badge">テンプレ⑥</div>
        </a>
        <a href="#s11" className="qnav-item">
          <div className="qnav-icon">{"💬"}</div>
          <div className="qnav-body">
            <div className="qnav-title">ミーティングで相談したい</div>
            <div className="qnav-desc">数字の見方・改善方向性</div>
          </div>
          <div className="qnav-badge">テンプレ②</div>
        </a>
        <a href="#s12" className="qnav-item">
          <div className="qnav-icon">{"⏸️"}</div>
          <div className="qnav-body">
            <div className="qnav-title">休止したい / 再開したい</div>
            <div className="qnav-desc">広告の一時停止・再開</div>
          </div>
          <div className="qnav-badge">テンプレ⑩⑪</div>
        </a>
        <a href="#s11" className="qnav-item">
          <div className="qnav-icon">{"😵"}</div>
          <div className="qnav-body">
            <div className="qnav-title">とにかく困っている（何が問題か分からない）</div>
            <div className="qnav-desc">状況だけ伝えたい</div>
          </div>
          <div className="qnav-badge">テンプレ③</div>
        </a>
        <a href="#s13" className="qnav-item">
          <div className="qnav-icon">{"📊"}</div>
          <div className="qnav-body">
            <div className="qnav-title">レポートの見方が分からない</div>
            <div className="qnav-desc">月次レポートへの質問</div>
          </div>
          <div className="qnav-badge">テンプレ⑭</div>
        </a>
        <a href="#s13" className="qnav-item">
          <div className="qnav-icon">{"📅"}</div>
          <div className="qnav-body">
            <div className="qnav-title">休診日・臨時休業を伝えたい</div>
            <div className="qnav-desc">営業日の変更連絡</div>
          </div>
          <div className="qnav-badge" style={{ background: "var(--green)" }}>テンプレ⑮</div>
        </a>
        <a href="#s13" className="qnav-item">
          <div className="qnav-icon">{"💰"}</div>
          <div className="qnav-body">
            <div className="qnav-title">予算を変えたい</div>
            <div className="qnav-desc">広告費の増減</div>
          </div>
          <div className="qnav-badge" style={{ background: "var(--green)" }}>テンプレ⑯</div>
        </a>
        <a href="#s3" className="qnav-item" style={{ borderColor: "var(--green)" }}>
          <div className="qnav-icon">{"🔰"}</div>
          <div className="qnav-body">
            <div className="qnav-title">初期設定が分からない</div>
            <div className="qnav-desc">動画撮影・現在地・支払い設定</div>
          </div>
          <div className="qnav-badge" style={{ background: "var(--green)" }}>初期設定ガイド</div>
        </a>
        <a href="#s13" className="qnav-item">
          <div className="qnav-icon">{"🔄"}</div>
          <div className="qnav-body">
            <div className="qnav-title">メニュー/キャンペーンが変わった</div>
            <div className="qnav-desc">料金・内容の変更連絡</div>
          </div>
          <div className="qnav-badge" style={{ background: "var(--green)" }}>テンプレ⑰</div>
        </a>
      </div>

      <div className="notice"><strong>テンプレートが見つからない場合</strong>は、LINEで「相談です」とだけ送ってください。担当者が状況を確認します。</div>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
