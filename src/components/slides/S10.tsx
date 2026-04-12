import CopyButton from "@/components/CopyButton";

export default function S10() {
  return (
    <section className="slide dark" id="s10">
      <div className="pg-num">10 / 14</div>
      <div className="chip">テンプレート集①</div>
      <h2><span style={{ color: "var(--accent)" }}>コピペで即連絡</span><br />運用相談テンプレ</h2>
      <p className="lead">LINEにコピペして、空欄を埋めるだけ。確認のやり取りが減り、対応が早くなります。</p>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">① 飛び先（導線）変更の相談</span>
          <CopyButton targetId="t1" />
        </div>
        <div className="tmpl-body" id="t1">{"【飛び先（導線）変更の相談】\n\n広告の「タップ後の飛び先」を変更したい（または迷っている）ため相談です。\n\n■現在の飛び先：＿＿＿＿（Instagramプロフィール/公式LINE/LP/ホットペッパー/HP）\n■希望：＿＿＿＿（まだ未定でもOK）\n■目的：＿＿＿＿（例：今月は予約を増やしたい/まず相談を増やしたい など）\n■現状：＿＿＿＿（例：クリックはあるが予約が少ない/LINE追加はあるが会話が始まらない など）\n\n■URL\n・現在：＿＿＿＿\n・候補（あれば）：＿＿＿＿\n\nおすすめの飛び先と、改善ポイントも合わせて教えてください。\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">② ミーティング依頼</span>
          <CopyButton targetId="t2" />
        </div>
        <div className="tmpl-body" id="t2">{"【ミーティング依頼】\n※初回は無料です。2回目以降は 5,500円 / 1時間 の費用が発生します。\n\nミーティングをお願いしたいので、ご相談です。\n\n■話したい内容：＿＿＿＿（例：今月の数字の見方、今後の改善の方向性 など）\n■希望日時：＿＿＿＿（第2希望まで）\n■形式：オンライン / 対面\n※対面の場合、場所によっては交通費＋手数料が発生することがあります。\n\n候補日をご提示いただけますでしょうか。\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">③ 状況共有（困ったときの連絡）</span>
          <CopyButton targetId="t3" />
        </div>
        <div className="tmpl-body" id="t3">{"【状況共有】\n\n■いま困っていること：＿＿＿＿（例：クリックはあるが予約が少ない）\n■期間：＿＿＿＿\n■飛び先URL：＿＿＿＿\n■予約枠状況：＿＿＿＿（例：土日が埋まりやすい/平日夜が空いている）\n\nこの状況で、まず何を優先して直すべきか教えてください。"}</div>
      </div>

      <div className="dark-sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
