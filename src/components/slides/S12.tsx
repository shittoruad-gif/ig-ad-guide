import CopyButton from "@/components/CopyButton";

export default function S12() {
  return (
    <section className="slide" id="s12">
      <div className="pg-num">12 / 14</div>
      <div className="chip">テンプレート集③</div>
      <h2>動画・修正・停止<br />休止・再開テンプレ</h2>
      <p className="lead">制作・修正依頼や緊急時のテンプレートです。</p>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">⑦ 動画の差し替え依頼</span>
          <CopyButton targetId="t7" />
        </div>
        <div className="tmpl-body" id="t7">{"【動画の差し替えのお願い】\n※修正は2回まで無料。3回目以降は 2,200円/回。\n\n広告の動画を差し替えたいです。\n\n■動画内テロップや文章の変更（ある場合）：＿＿＿＿\n■理由：＿＿＿＿（例：反応が薄い、季節に合わせたい など）\n■いつまでに反映したい：＿＿＿＿\n\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">⑧ 追加動画の制作依頼</span>
          <CopyButton targetId="t8" />
        </div>
        <div className="tmpl-body" id="t8">{"【追加動画の制作依頼】\n※追加制作は 5,500円/本。3ヶ月に1本は無償対象の場合あり。\n\n■目的：＿＿＿＿（例：新規予約、LINE登録、体験申込）\n■誰に見せたい：＿＿＿＿（例：30代女性、産後ママ）\n■何を伝えたい：＿＿＿＿（例：産後骨盤矯正、肩こり）\n■本数：＿＿＿＿本\n■いつまでに欲しい：＿＿＿＿\n■素材（写真や動画リンク）：＿＿＿＿\n■NG表現（あれば）：＿＿＿＿\n\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box" style={{ borderColor: "var(--red)" }}>
        <div className="tmpl-head" style={{ background: "#FFEBEE" }}>
          <span className="tmpl-head-label" style={{ color: "var(--red)" }}>⑨ 至急：広告停止</span>
          <CopyButton targetId="t9" />
        </div>
        <div className="tmpl-body" id="t9">{"【至急：広告停止】\n\n広告が停止している表示が出ました。\n\n■発生日時：＿＿＿＿\n■エラー表示内容：＿＿＿＿（可能ならそのまま転記）\n■カード確認状況：＿＿＿＿（例：期限OK/限度額確認中/別カード追加済）\n\n※通知画面のスクショ添付がおすすめです\n次の対応手順を教えてください。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">⑩ 休止申請</span>
          <CopyButton targetId="t10" />
        </div>
        <div className="tmpl-body" id="t10">{"【休止申請】\n\n広告運用の休止を希望します。\n\n■休止開始希望日：＿＿＿＿（例：2026/3/1から）\n■休止理由（任意）：＿＿＿＿\n\n※休止は3ヶ月経過後から可能\n※休止中は休止管理費 3,300円（税込）が発生します\n\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">⑪ 再開希望</span>
          <CopyButton targetId="t11" />
        </div>
        <div className="tmpl-body" id="t11">{"【再開希望】\n\n広告運用の再開を希望します。\n\n■再開希望日：＿＿＿＿（例：2026/4/1から）\n■直近で変わった点：＿＿＿＿（例：メニュー/価格/予約導線 など）\n■今月の優先したい目的：＿＿＿＿（例：新規予約/LINE登録）\n\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">⑫ 広告の修正依頼</span>
          <CopyButton targetId="t12" />
        </div>
        <div className="tmpl-body" id="t12">{"【修正のお願い】\n※修正は2回まで無料。3回目以降は 2,200円/回。\n※修正点はできるだけ1通にまとめてください。\n\n■どれを直したいですか\n・広告素材名：＿＿＿＿（例：2月_肩こり_リール①）\n・どの部分：＿＿＿＿（例：最初の3秒のテロップ、説明文 など）\n\n■どう直したいですか\n① いま：＿＿＿＿ → 直したい：＿＿＿＿\n② いま：＿＿＿＿ → 直したい：＿＿＿＿\n\n■理由（任意）：＿＿＿＿\n\nよろしくお願いします。"}</div>
      </div>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
