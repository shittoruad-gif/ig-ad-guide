import CopyButton from "@/components/CopyButton";

export default function S14() {
  return (
    <section className="slide" id="s14">
      <div className="pg-num">14 / 15</div>
      <div className="chip green">LINE対応テンプレ</div>
      <h2>公式LINEで使える<br />テンプレート返信文例</h2>
      <p className="lead">公式LINEで患者様・お客様に返信するとき、そのまま使えるテンプレートです。</p>

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
          <span className="tmpl-head-label">予約受付ヒアリング</span>
          <CopyButton targetId="line3b" />
        </div>
        <div className="tmpl-body" id="line3b">{"〇〇様、ご予約希望ありがとうございます。\nスムーズにお取りするため、下記をご返信ください。\n1【お名前（フルネーム）】\n2【ご希望の日時・時間帯】（第2希望まで）\n3【ご希望のメニュー/コース】\n確認でき次第、空き状況をご連絡いたします。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">日時提案・予約確定</span>
          <CopyButton targetId="line4b" />
        </div>
        <div className="tmpl-body" id="line4b">{"お名前とご希望日時をありがとうございます。\n第1希望の〇月〇日(〇)〇〇:〇〇～でお取りできます。\nこちらの日時でご予約確定してよろしいでしょうか？\n\n（第1希望が難しい場合）\n恐れ入ります、第1希望は埋まっておりました。\n同日〇〇:〇〇～なら空きがございます。\n第2希望の〇月〇日(〇)〇〇:〇〇～もお取りできます。\nご都合お聞かせくださいませ。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">予約確定後のフォロー</span>
          <CopyButton targetId="line5b" />
        </div>
        <div className="tmpl-body" id="line5b">{"ご予約ありがとうございます。\n〇月〇日(〇)〇〇:〇〇～、〇〇にてお待ちしております。\n当日はお気をつけてお越しくださいませ。\nご不明点があればお気軽にご連絡ください。\n前日になりましたらリマインドのご連絡を差し上げます。"}</div>
      </div>

      <div className="tmpl-box">
        <div className="tmpl-head">
          <span className="tmpl-head-label">来店後のお礼・リピート促進</span>
          <CopyButton targetId="line6" />
        </div>
        <div className="tmpl-body" id="line6">{"〇〇様、本日はご来院ありがとうございました。\nお身体の調子はいかがでしょうか？少しでも楽になっていましたら幸いです。\n次回〇月〇日ごろにケアされると更に効果的です。\nまたのご予約を心よりお待ちしております。\nこのLINEでご連絡いただければ予約可能ですのでお気軽にどうぞ。"}</div>
      </div>

      <div className="sf"><span>しっとる広告運用</span><span>Instagram広告 クライアントガイド</span></div>
    </section>
  );
}
