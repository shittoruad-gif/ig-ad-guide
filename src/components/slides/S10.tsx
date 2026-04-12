import CopyButton from "@/components/CopyButton";

export default function S10() {
  return (
    <section className="slide" id="s10">
      <div className="pg-num">10 / 13</div>
      <div className="chip">コピペ用テンプレート</div>
      <h2>テンプレートまとめ<br />ここだけ見ればOK</h2>
      <p className="lead">各場面で使えるLINEテンプレートです。コピーして必要箇所だけ埋めて送ってください。</p>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">飛び先（導線）変更の相談</span>
          <CopyButton targetId="t1" />
        </div>
        <div className="tmpl-body" id="t1">{"【飛び先（導線）変更の相談】\n\n広告の「タップ後の飛び先」を変更したい（または迷っている）ため相談です。\n\n■現在の飛び先：＿＿＿＿（Instagramプロフィール/公式LINE/LP/ホットペッパー/HP）\n■希望：＿＿＿＿（まだ未定でもOK）\n■目的：＿＿＿＿（例：今月は予約を増やしたい/まず相談を増やしたい など）\n■現状：＿＿＿＿（例：クリックはあるが予約が少ない/LINE追加はあるが会話が始まらない など）\n\n■URL\n・現在：＿＿＿＿\n・候補（あれば）：＿＿＿＿\n\nおすすめの飛び先と、改善ポイントも合わせて教えてください。\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">追加ミーティング依頼</span>
          <CopyButton targetId="t2" />
        </div>
        <div className="tmpl-body" id="t2">{"【ミーティング依頼】\n※初回は無料です。2回目以降は 5,500円 / 1時間 の費用が発生します。\n\nミーティングをお願いしたいので、ご相談です。\n\n■話したい内容：＿＿＿＿（例：今月の数字の見方、今後の改善の方向性 など）\n■希望日時：＿＿＿＿（第2希望まで）\n■形式：オンライン / 対面\n※対面の場合、場所によっては交通費＋手数料が発生することがあります。\n\n候補日をご提示いただけますでしょうか。\nよろしくお願いいたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">状況共有テンプレ（困ったときの連絡）</span>
          <CopyButton targetId="t3" />
        </div>
        <div className="tmpl-body" id="t3">{"【状況共有テンプレ】\n\n■いま困っていること：＿＿＿＿（例：クリックはあるが予約が少ない）\n■期間：＿＿＿＿\n■飛び先URL：＿＿＿＿\n■予約枠状況：＿＿＿＿（例：土日が埋まりやすい/平日夜が空いている）\n\nこの状況で、まず何を優先して直すべきか教えてください。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">予約が少ない件の相談</span>
          <CopyButton targetId="t4" />
        </div>
        <div className="tmpl-body" id="t4">{"【予約が少ないので相談】\n\n広告からの反応について相談です。\n\n■いつの話ですか（期間）：＿＿＿＿\n■クリック単価（CPC）：＿＿＿＿（分からなければ空欄でOK）\n■クリック数：＿＿＿＿（分からなければ空欄でOK）\n■予約枠の状況：＿＿＿＿（例：土日が埋まりやすい、平日夜が空いている など）\n\nいまの状況で、まず何から見直すのが良いか（広告の内容、見せる相手、リンク先など）を教えてください。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">リンク先変更相談</span>
          <CopyButton targetId="t5" />
        </div>
        <div className="tmpl-body" id="t5">{"【リンク先（タップ後のページ）を変えたいので相談】\n\n広告をタップした後に開くページ（リンク先）を変えたいので相談です。\n\n■いまのリンク先：＿＿＿＿（HP / ホットペッパー / LINE / LP など）\n■変えたいリンク先：＿＿＿＿（まだ未定でもOK）\n■困っていること：＿＿＿＿（例：クリックはあるが予約が少ない、LINE追加で止まる など）\n\n■URL\n・いま：＿＿＿＿\n・候補（あれば）：＿＿＿＿\n\n「テストしながら変える（ABテスト）」のが良いか、「一旦切り替える」のが良いか、おすすめを教えてください。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">ターゲット・エリア変更</span>
          <CopyButton targetId="t6" />
        </div>
        <div className="tmpl-body" id="t6">{"【広告の設定変更のお願い（配信エリアや見せる相手など）】\n\n広告の設定を変更したいので、対応をお願いします。\n\n■何を変えたいですか：＿＿＿＿（例：配信エリア、年齢、性別、興味関心 など）\n■いまの設定（分かる範囲でOK）：＿＿＿＿\n■こうしたい：＿＿＿＿\n■理由：＿＿＿＿（例：反応が薄い、商圏が広い、客層を変えたい など）\n■いつから反映したい：＿＿＿＿（例：できれば今週中、来週から など）\n\nよろしくお願いいたします。"}</div>
      </div>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
