import CopyButton from "@/components/CopyButton";

export default function S11() {
  return (
    <section className="slide" id="s11">
      <div className="pg-num">11 / 15</div>
      <div className="chip">テンプレート集②</div>
      <h2>改善・設定変更<br />テンプレート</h2>
      <p className="lead">予約が少ない・リンク先変更・ターゲット変更のテンプレートです。</p>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">④ 予約が少ない件の相談</span>
          <CopyButton targetId="t4" />
        </div>
        <div className="tmpl-body" id="t4">{"【予約が少ないので相談】\n\n広告からの反応について相談です。\n\n■いつの話ですか（期間）：＿＿＿＿\n■クリック単価（CPC）：＿＿＿＿（分からなければ空欄でOK）\n■クリック数：＿＿＿＿（分からなければ空欄でOK）\n■予約枠の状況：＿＿＿＿（例：土日が埋まりやすい、平日夜が空いている など）\n\nいまの状況で、まず何から見直すのが良いか教えてください。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">⑤ リンク先変更の相談</span>
          <CopyButton targetId="t5" />
        </div>
        <div className="tmpl-body" id="t5">{"【リンク先を変えたいので相談】\n\n広告をタップした後に開くページを変えたいので相談です。\n\n■いまのリンク先：＿＿＿＿（HP / ホットペッパー / LINE / LP など）\n■変えたいリンク先：＿＿＿＿（まだ未定でもOK）\n■困っていること：＿＿＿＿（例：クリックはあるが予約が少ない、LINE追加で止まる など）\n\n■URL\n・いま：＿＿＿＿\n・候補（あれば）：＿＿＿＿\n\nABテストか一旦切り替えか、おすすめを教えてください。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">⑥ ターゲット・エリア変更</span>
          <CopyButton targetId="t6" />
        </div>
        <div className="tmpl-body" id="t6">{"【広告の設定変更のお願い】\n\n広告の設定を変更したいので、対応をお願いします。\n\n■何を変えたいですか：＿＿＿＿（例：配信エリア、年齢、性別、興味関心 など）\n■いまの設定（分かる範囲でOK）：＿＿＿＿\n■こうしたい：＿＿＿＿\n■理由：＿＿＿＿（例：反応が薄い、商圏が広い、客層を変えたい など）\n■いつから反映したい：＿＿＿＿\n\nよろしくお願いいたします。"}</div>
      </div>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
