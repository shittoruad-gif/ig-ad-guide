import CopyButton from "@/components/CopyButton";

export default function S12() {
  return (
    <section className="slide" id="s12">
      <div className="pg-num">12 / 13</div>
      <div className="chip">LINE対応・レポート</div>
      <h2>LINE対応テンプレ＆<br />月次レポートの考え方</h2>
      <p className="lead">公式LINEでの対応テンプレートと、月次レポートの見方をまとめました。</p>

      <div className="section-divider">
        <div className="section-divider-line"></div>
        <div className="section-divider-text">LINE対応テンプレート</div>
        <div className="section-divider-line"></div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">友だち追加時の自動応答</span>
          <CopyButton targetId="line1" />
        </div>
        <div className="tmpl-body" id="line1">{"〇〇【友だちの表示名】さん、友だち追加ありがとうございます。\nご連絡内容を確認後、担当スタッフより順番に返信いたします。\nお急ぎの場合はお電話（◯◯◯-◯◯◯◯-◯◯◯◯）もご利用ください。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">問い合わせへの初期返信</span>
          <CopyButton targetId="line2" />
        </div>
        <div className="tmpl-body" id="line2">{"〇〇【名前】様、メッセージありがとうございます。\n◯◯（店舗名）の△△です。お問い合わせ内容を確認いたしました。\n●●についてご質問ですね。後ほど詳しいご案内をお送りいたしますので少々お待ちくださいませ。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">予約受付用の情報ヒアリング</span>
          <CopyButton targetId="line3" />
        </div>
        <div className="tmpl-body" id="line3">{"〇〇様、当院でのご予約を希望いただきありがとうございます。\nスムーズに予約をお取りするため、下記の情報をご返信ください。\n1【お名前（フルネーム）】\n2【ご希望の日時・時間帯】（第2希望までいただけると助かります）\n3【ご希望のメニュー/コース】\n確認でき次第、空き状況を調整しご連絡いたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">予約確定後のフォロー</span>
          <CopyButton targetId="line4" />
        </div>
        <div className="tmpl-body" id="line4">{"ご予約ありがとうございます。\n5月10日(火)15:00～、〇〇整骨院にてお待ちしております。\n当日はお気をつけてお越しくださいませ。\n何かご不明点があればお気軽にご連絡ください。\n前日になりましたらリマインドのご連絡を差し上げます。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">来店後のお礼・リピート促進</span>
          <CopyButton targetId="line5" />
        </div>
        <div className="tmpl-body" id="line5">{"〇〇様、本日はご来院いただきありがとうございました。\nお身体の調子はいかがでしょうか？少しでも楽になっていましたら幸いです。\n次回〇月〇日ごろにケアされると更に効果的です。またのご予約を心よりお待ちしております。\nこのLINEでご連絡いただければ予約可能ですのでお気軽にどうぞ。"}</div>
      </div>

      <div className="section-divider">
        <div className="section-divider-line"></div>
        <div className="section-divider-text">月次レポートの見方</div>
        <div className="section-divider-line"></div>
      </div>

      <div className="card" style={{ marginBottom: "12px" }}>
        <div className="card-label">月次で見るべき順番</div>
        <div className="card-body">
          <strong>1. CPC</strong>（入口の効率）→ <strong>2. クリック数</strong>（興味の量）→ <strong>3. CTR</strong>（訴求の刺さり）→ <strong>4. 問い合わせ/予約</strong>（受け皿の影響が大きい）
        </div>
      </div>

      <div className="notice"><strong>予約が少ない ＝ 広告失敗、とは限りません。</strong>「飛び先の分かりづらさ」「空き枠不足」「返信遅れ」が原因のことが多いです。</div>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
