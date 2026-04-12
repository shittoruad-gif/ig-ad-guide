export default function S2() {
  return (
    <section className="slide" id="s2">
      <div className="pg-num">02 / 14</div>
      <div className="chip" style={{ background: "var(--red)" }}>困ったらまずここ</div>
      <h2>お困りごと早見表</h2>
      <p className="lead">「何をすればいいか分からない」ときは、下の一覧から状況を選んでください。まず解説ページで確認し、それでも解決しない場合はテンプレートで連絡する流れです。</p>

      <div className="info" style={{ marginBottom: "16px" }}>
        <strong>まず解説を読む → それでもダメならテンプレートで連絡</strong><br />
        各項目をタップすると、まず原因や対処法の解説に飛びます。解説の中にテンプレートへのリンクがありますので、必要に応じてご利用ください。
      </div>

      <div className="section-divider">
        <div className="section-divider-line"></div>
        <div className="section-divider-text">よくある困りごと</div>
        <div className="section-divider-line"></div>
      </div>

      <div className="qnav">
        <a href="#s8" className="qnav-item">
          <div className="qnav-icon">{"😰"}</div>
          <div className="qnav-body">
            <div className="qnav-title">予約が少ない・反応が薄い</div>
            <div className="qnav-desc">まずチェックリストで原因を確認</div>
          </div>
          <div className="qnav-badge">解説→テンプレ</div>
        </a>
        <a href="#s4" className="qnav-item">
          <div className="qnav-icon">{"🔗"}</div>
          <div className="qnav-body">
            <div className="qnav-title">リンク先（飛び先）を変えたい</div>
            <div className="qnav-desc">まず導線ガイドで最適な飛び先を確認</div>
          </div>
          <div className="qnav-badge">解説→テンプレ</div>
        </a>
        <a href="#s9" className="qnav-item">
          <div className="qnav-icon">{"🎬"}</div>
          <div className="qnav-body">
            <div className="qnav-title">動画を変えたい・新しく作りたい</div>
            <div className="qnav-desc">まず制作ルール・無料枠を確認</div>
          </div>
          <div className="qnav-badge">解説→テンプレ</div>
        </a>
        <a href="#s9" className="qnav-item">
          <div className="qnav-icon">{"✏️"}</div>
          <div className="qnav-body">
            <div className="qnav-title">広告の文章や見せ方を修正したい</div>
            <div className="qnav-desc">まず修正ルール・無料回数を確認</div>
          </div>
          <div className="qnav-badge">解説→テンプレ</div>
        </a>
        <a href="#s7" className="qnav-item" style={{ borderColor: "var(--red)", borderWidth: "2px" }}>
          <div className="qnav-icon">{"🚨"}</div>
          <div className="qnav-body">
            <div className="qnav-title">広告が止まった（至急）</div>
            <div className="qnav-desc">まずFAQで対処法を確認</div>
          </div>
          <div className="qnav-badge" style={{ background: "var(--red)" }}>解説→テンプレ</div>
        </a>
        <a href="#s7" className="qnav-item">
          <div className="qnav-icon">{"🎯"}</div>
          <div className="qnav-body">
            <div className="qnav-title">ターゲットやエリアを変えたい</div>
            <div className="qnav-desc">まずFAQで変更の流れを確認</div>
          </div>
          <div className="qnav-badge">解説→テンプレ</div>
        </a>
        <a href="#s6" className="qnav-item">
          <div className="qnav-icon">{"💬"}</div>
          <div className="qnav-body">
            <div className="qnav-title">ミーティングで相談したい</div>
            <div className="qnav-desc">まず料金ルールを確認</div>
          </div>
          <div className="qnav-badge">解説→テンプレ</div>
        </a>
        <a href="#s9" className="qnav-item">
          <div className="qnav-icon">{"⏸️"}</div>
          <div className="qnav-body">
            <div className="qnav-title">休止したい / 再開したい</div>
            <div className="qnav-desc">まず休止条件・費用を確認</div>
          </div>
          <div className="qnav-badge">解説→テンプレ</div>
        </a>
        <a href="#s5" className="qnav-item">
          <div className="qnav-icon">{"😵"}</div>
          <div className="qnav-body">
            <div className="qnav-title">とにかく困っている（何が問題か分からない）</div>
            <div className="qnav-desc">まず成果の考え方を確認</div>
          </div>
          <div className="qnav-badge">解説→テンプレ</div>
        </a>
        <a href="#s7" className="qnav-item">
          <div className="qnav-icon">{"📊"}</div>
          <div className="qnav-body">
            <div className="qnav-title">レポートの見方が分からない</div>
            <div className="qnav-desc">まずFAQで数字の見方を確認</div>
          </div>
          <div className="qnav-badge">解説→テンプレ</div>
        </a>
        <a href="#s13" className="qnav-item">
          <div className="qnav-icon">{"📅"}</div>
          <div className="qnav-body">
            <div className="qnav-title">休診日・臨時休業を伝えたい</div>
            <div className="qnav-desc">テンプレートで連絡</div>
          </div>
          <div className="qnav-badge" style={{ background: "var(--green)" }}>テンプレ⑮</div>
        </a>
        <a href="#s13" className="qnav-item">
          <div className="qnav-icon">{"💰"}</div>
          <div className="qnav-body">
            <div className="qnav-title">予算を変えたい</div>
            <div className="qnav-desc">テンプレートで連絡</div>
          </div>
          <div className="qnav-badge" style={{ background: "var(--green)" }}>テンプレ⑯</div>
        </a>
        <a href="#s3" className="qnav-item" style={{ borderColor: "var(--green)" }}>
          <div className="qnav-icon">{"🔰"}</div>
          <div className="qnav-body">
            <div className="qnav-title">初期設定が分からない</div>
            <div className="qnav-desc">初期設定ガイドを確認</div>
          </div>
          <div className="qnav-badge" style={{ background: "var(--green)" }}>初期設定ガイド</div>
        </a>
        <a href="#s13" className="qnav-item">
          <div className="qnav-icon">{"🔄"}</div>
          <div className="qnav-body">
            <div className="qnav-title">メニュー/キャンペーンが変わった</div>
            <div className="qnav-desc">テンプレートで連絡</div>
          </div>
          <div className="qnav-badge" style={{ background: "var(--green)" }}>テンプレ⑰</div>
        </a>
      </div>

      <div className="notice"><strong>テンプレートが見つからない場合</strong>は、LINEで「相談です」とだけ送ってください。担当者が状況を確認します。</div>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
