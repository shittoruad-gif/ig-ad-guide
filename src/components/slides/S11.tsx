import CopyButton from "@/components/CopyButton";

export default function S11() {
  return (
    <section className="slide" id="s11">
      <div className="pg-num">11 / 13</div>
      <div className="chip green">テンプレート続き</div>
      <h2>動画・修正・休止<br />テンプレート</h2>
      <p className="lead">動画変更・制作依頼・広告停止・休止・再開・修正依頼・レポート質問のテンプレートです。</p>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">動画の変更（差し替え）依頼</span>
          <CopyButton targetId="t7" />
        </div>
        <div className="tmpl-body" id="t7">{"【動画の変更（差し替え）のお願い】\n※修正は2回まで無料です。3回目以降は 2,200円 / 回 の費用が発生します。\n※差し替え理由が分かると、成果を落としにくい提案ができます。\n\n広告で使っている動画を差し替えたいので、対応をお願いします。\n\n■動画内テロップや文章の変更（ある場合）：＿＿＿＿\n■理由：＿＿＿＿（例：反応が薄い、内容を誤解された、季節に合わせたい など）\n■いつまでに反映したい：＿＿＿＿（目安でOK）\n\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">追加動画制作の依頼</span>
          <CopyButton targetId="t8" />
        </div>
        <div className="tmpl-body" id="t8">{"【追加の動画を作ってほしい（制作依頼）】\n※追加制作は 5,500円 / 本 の費用が発生します。\n※3ヶ月に1本まで無償の対象になる場合があります。分からない場合も、このまま送ってOKです。\n\n追加で動画を作ってほしいので、相談です。\n\n■目的：＿＿＿＿（例：新規予約、LINE登録、体験申込 など）\n■誰に見せたい：＿＿＿＿（例：30代女性、産後ママ、デスクワークの人 など）\n■何を伝えたい：＿＿＿＿（例：産後骨盤矯正、肩こり、姿勢、体験 など）\n■本数：＿＿＿＿本\n■いつまでに欲しい：＿＿＿＿（目安でOK）\n\n■素材（写真や動画の共有リンク）：＿＿＿＿\n■NG（言わないでほしい表現など）：＿＿＿＿（あれば）\n\n参考動画があれば、URLや添付も送ります。\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">至急：広告停止</span>
          <CopyButton targetId="t9" />
        </div>
        <div className="tmpl-body" id="t9">{"【至急：広告停止】\n\n広告が停止している表示が出ました。\n\n■発生日時：＿＿＿＿\n■エラー表示内容：＿＿＿＿（可能ならそのまま転記）\n■カード確認状況：＿＿＿＿（例：期限OK/限度額確認中/別カード追加済 など）\n\n※通知画面のスクショ添付がおすすめです\n次の対応手順を教えてください。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">休止申請</span>
          <CopyButton targetId="t10" />
        </div>
        <div className="tmpl-body" id="t10">{"【休止申請】\n\nお世話になっております。広告運用の休止を希望します。\n\n■休止開始希望日：＿＿＿＿（例：2026/3/1から）\n■休止理由（任意）：＿＿＿＿\n■休止中の連絡先（任意）：＿＿＿＿\n\n※休止は3ヶ月経過後から可能\n※休止中は休止管理費 3,300円（税込）が発生します\n\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">再開希望</span>
          <CopyButton targetId="t11" />
        </div>
        <div className="tmpl-body" id="t11">{"【再開希望】\n\nお世話になっております。広告運用の再開を希望します。\n\n■再開希望日：＿＿＿＿（例：2026/4/1から）\n■直近で変わった点：＿＿＿＿（例：メニュー/価格/予約導線/キャンペーン など）\n■今月の優先したい目的：＿＿＿＿（例：新規予約/LINE登録 など）\n\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">修正依頼</span>
          <CopyButton targetId="t12" />
        </div>
        <div className="tmpl-body" id="t12">{"【修正のお願い（文章や見せ方を変えたい）】\n※修正は2回まで無料です。3回目以降は 2,200円 / 回 の費用が発生します。\n※修正点は、できるだけ1通にまとめてご連絡ください。\n\n広告の内容を一部修正したいので、対応をお願いします。\n\n■どれを直したいですか\n・広告素材（名前）：＿＿＿＿（例：2月_肩こり_リール①）\n・どの部分：＿＿＿＿（例：最初の3秒のテロップ、最後の一言、説明文 など）\n\n■どう直したいですか（まとめて書いてOK）\n① いま：＿＿＿＿ → 直したい：＿＿＿＿\n② いま：＿＿＿＿ → 直したい：＿＿＿＿\n③ いま：＿＿＿＿ → 直したい：＿＿＿＿\n\n■理由（任意）：＿＿＿＿（例：表現を柔らかくしたい、誤解を避けたい など）\n\nよろしくお願いします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">レポート質問</span>
          <CopyButton targetId="t13" />
        </div>
        <div className="tmpl-body" id="t13">{"【レポート確認】\n\nレポート確認しました。以下だけ教えてください。\n\n①今月の最重要ポイント（1行で）\n②来月やること（1〜2個）\n③こちらの改善点\n\nよろしくお願いします。"}</div>
      </div>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
