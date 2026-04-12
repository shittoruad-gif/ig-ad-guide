import CopyButton from "@/components/CopyButton";

export default function S13() {
  return (
    <section className="slide" id="s13">
      <div className="pg-num">13 / 15</div>
      <div className="chip green">テンプレート集④</div>
      <h2>その他テンプレ<br />素材・レポート・予算</h2>
      <p className="lead">素材送付、レポート質問、休診日連絡、予算変更、メニュー変更のテンプレートです。</p>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">⑬ 素材（写真・動画）の送付</span>
          <CopyButton targetId="t13" />
        </div>
        <div className="tmpl-body" id="t13">{"【素材の送付】\n\n広告用の素材を送ります。\n\n■用途：＿＿＿＿（例：新しいリール広告用、LP差し替え用 など）\n■素材の説明：＿＿＿＿（例：施術風景3枚、院内の写真2枚 など）\n■使ってほしい/使わないでほしい素材：＿＿＿＿\n■その他ご要望：＿＿＿＿\n\n※写真はこのLINEに直接添付します"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">⑭ レポートへの質問</span>
          <CopyButton targetId="t14" />
        </div>
        <div className="tmpl-body" id="t14">{"【レポート確認】\n\nレポート確認しました。以下だけ教えてください。\n\n①今月の最重要ポイント（1行で）\n②来月やること（1〜2個）\n③こちらの改善点\n\nよろしくお願いします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">⑮ 休診日・臨時休業の連絡</span>
          <CopyButton targetId="t15" />
        </div>
        <div className="tmpl-body" id="t15">{"【営業日変更のご連絡】\n\n下記の日程で営業日に変更があります。広告配信の調整をお願いします。\n\n■休診日/休業日：＿＿＿＿（例：5/3〜5/6 GW休業）\n■通常営業に戻る日：＿＿＿＿\n■広告の対応：＿＿＿＿（例：休業中は停止してほしい / そのまま配信でOK）\n\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">⑯ 広告予算の変更</span>
          <CopyButton targetId="t16" />
        </div>
        <div className="tmpl-body" id="t16">{"【広告予算の変更のお願い】\n\n広告の予算を変更したいので、対応をお願いします。\n\n■現在の月額予算：＿＿＿＿円\n■希望の月額予算：＿＿＿＿円\n■変更理由：＿＿＿＿（例：反応が良いので増やしたい / 予算を抑えたい など）\n■いつから反映したい：＿＿＿＿\n\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">⑰ キャンペーン・メニュー変更の連絡</span>
          <CopyButton targetId="t17" />
        </div>
        <div className="tmpl-body" id="t17">{"【メニュー/キャンペーン変更の連絡】\n\n下記の変更がありますので、広告への反映をお願いします。\n\n■何が変わりましたか：＿＿＿＿（例：新メニュー追加、料金変更、キャンペーン開始 など）\n■変更の詳細：\n　・変更前：＿＿＿＿\n　・変更後：＿＿＿＿\n■いつから：＿＿＿＿\n■広告への反映希望：＿＿＿＿（例：広告文も変えてほしい / 特に不要 など）\n\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">⑱ 初期設定が分からない（ヘルプ）</span>
          <CopyButton targetId="t18" />
        </div>
        <div className="tmpl-body" id="t18">{"【初期設定のヘルプ】\n\nガイドの初期設定を進めていますが、つまずいています。\n\n■どこまでできましたか：＿＿＿＿（例：動画は撮れた / 現在地設定で迷っている など）\n■つまずいている箇所：＿＿＿＿\n■エラーや分からない画面のスクショ：（このLINEに添付します）\n\nよろしくお願いします。"}</div>
      </div>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
