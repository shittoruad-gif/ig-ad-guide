import CopyButton from "@/components/CopyButton";
import Icon from "@/components/Icon";
import { TEMPLATE_GROUPS } from "@/content/templates";

// お客様向けガイド（2026年10月版）。料金・契約の条件は紹介ページ（ig-ads.s-toru.com）と契約書が正。
const UPDATED = "2026年10月";
const VIDEO_SHOOTING = "https://youtu.be/ypoqf0JSwXs";
const VIDEO_LOCATION = "https://youtu.be/LXgxH8Xd1oA";

const NAV = [
  ["start", "はじめに"],
  ["flow", "開始までの流れ"],
  ["setup", "準備"],
  ["shoot", "撮影"],
  ["running", "始まってから"],
  ["rules", "広告の決まり"],
  ["price", "料金"],
  ["faq", "よくある質問"],
  ["trouble", "困ったとき"],
  ["templates", "連絡テンプレート"],
] as const;

function Section({ id, eyebrow, title, lead, children }: { id: string; eyebrow: string; title: string; lead?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </section>
  );
}

function Steps({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="steps">
      {items.map((it, i) => (
        <li key={i}>
          <span className="num">{i + 1}</span>
          <span className="txt">{it}</span>
        </li>
      ))}
    </ol>
  );
}

function Shots({ items, dir = "location", wide = false }: { items: [string, React.ReactNode][]; dir?: string; wide?: boolean }) {
  return (
    <ol className={`shots${wide ? " wide" : ""}`}>
      {items.map(([img, text], i) => (
        <li key={img}>
          <a href={`/${dir}/${img}.jpg`} target="_blank" rel="noopener" aria-label={`手順${i + 1}の画面を大きく見る`}><img src={`/${dir}/${img}.jpg`} alt={`手順${i + 1}の画面`} loading="lazy" /></a>
          <div className="shot-cap"><span className="num">{i + 1}</span><span>{text}</span></div>
        </li>
      ))}
    </ol>
  );
}

function Done({ text }: { text: string }) {
  return (
    <div className="done">
      <span className="done-label">終わったらグループLINEへ</span>
      <span className="done-text">「{text}」</span>
      <CopyButton text={text} />
    </div>
  );
}

function Note({ kind = "info", children }: { kind?: "info" | "warn"; children: React.ReactNode }) {
  return (
    <div className={`note ${kind}`}>
      <Icon name={kind === "warn" ? "alert" : "help"} size={20} />
      <div>{children}</div>
    </div>
  );
}

const FAQ: { q: string; a: React.ReactNode }[] = [
  { q: "広告を出したら、すぐに予約は増えますか？", a: <>すぐ増えることもありますが、多くの場合は落ち着くまでに時間がかかります。1か月目はデータを集め、2か月目に直し、3か月目で安定させる、という流れが目安です。<b>判断は3か月を目安</b>にしてください。</> },
  { q: "成果の保証はありますか？", a: <>ありません。予約の数は、広告だけでなく、予約ページの見やすさ・空き枠・季節・近くのお店の状況なども影響するためです。広告側（動画・文章・配信の設定）の改善は、しっとるが責任を持って続けます。お店側で直せそうな点に気づいたときも、お伝えします。</> },
  { q: "お金はいつからかかりますか？", a: <>しっとるへの運用代行費は、<b>広告の配信が始まってから</b>かかります。打ち合わせや準備の間はかかりません。配信開始のあと、30日単位で、翌月末にカードでお支払いいただきます。</> },
  { q: "広告費と運用代行費は、何が違いますか？", a: <>広告費は、Instagram（Meta社）に直接お支払いいただくお金です。運用代行費は、動画の制作・広告の設定・毎月のレポートなどの作業代として、しっとるにお支払いいただくお金です。</> },
  { q: "Instagramから少しずつ何回も請求が来ます。大丈夫ですか？", a: <>大丈夫です。Instagramは、広告費を一定額使うたびに自動でカードから引き落とす仕組みです（例：500円使ったら引き落とし、また500円使ったら引き落とし）。回数が多くても、合計はお決めいただいた広告費の範囲に収まります。</> },
  { q: "「現在地の設定」と「支払いの設定」がうまくいきません", a: <>この2つは、使う画面が違います。<b>現在地の設定は、お店にいるときに、スマホのInstagramアプリ</b>から。<b>支払いの設定は、パソコン（またはスマホのSafari・Chrome）</b>から。それでも進まないときは、止まっている画面のスクリーンショットをグループLINEに送ってください。一緒に進めます。</> },
  { q: "「投稿を宣伝」のボタンが出てきません", a: <>Instagramが「プロアカウント」になっていない可能性があります。グループLINEで「投稿を宣伝が出ません」と送ってください。切り替え方をお伝えします。</> },
  { q: "確認コード（二段階認証のコード）が届きました", a: <>しっとるのスタッフが設定のためにログインしようとしている可能性があります。コードには有効期限があるので、届いたらすぐグループLINEで教えてください。手間を減らしたい場合は、二段階認証をオフにすることもできます（下の「準備」をご覧ください）。</> },
  { q: "広告が急に止まりました", a: <>ご自身で操作する前に、まずグループLINEで連絡してください。原因を確かめて対処します。止まっていることが分かる画面のスクリーンショットがあると早く解決できます（テンプレート9）。</> },
  { q: "動画は、どう撮ればいいですか？", a: <>スマホを縦にして、1か所10〜20秒ずつ、ゆっくり撮ってください。施術は近く（手元）と、少し離れたところ（全体）の両方があると助かります。声や言い間違いはそのままで大丈夫です。くわしくは下の「撮影」をご覧ください。</> },
  { q: "お客様に動画に出ていただいてもいいですか？", a: <>大丈夫です。ただし、<b>「広告でしばらく使います」と先に伝えて、了解をもらってから</b>撮ってください。広告が広く出ると、あとから「やめてほしい」と言われることがあるためです。難しければ、スタッフ同士でお客様役をしていただいて大丈夫です。</> },
  { q: "クリックはあるのに、予約が入りません", a: <>広告を押したあとのページ（予約ページ）で、迷ったりやめたりしていることが多いです。予約ボタンが見つけにくい、料金が分かりにくい、空き枠がない、などが主な原因です。下の「困ったとき」の点検をしてみて、それでも変わらなければテンプレート4で相談してください。</> },
  { q: "動画はいつ新しくなりますか？", a: <>動画は<b>3か月に1本まで無料</b>で作ります。また、30日ごとのレポートで、1クリックあたりの費用が100円を超えていた場合は、無料で動画を差し替えます。追加で作る場合は1本5,500円です。</> },
  { q: "配信する場所や年齢を変えたいです", a: <>変えられます。理由（反応が少ない・遠くからの方が多い など）と一緒にテンプレート6で送ってください。より合う設定をご提案します。</> },
  { q: "レポートの数字の見方が分かりません", a: <>上から順に見るのがおすすめです。<b>1クリックの費用</b>（1人が広告を押すのにかかった金額）→ <b>クリック数</b>（興味を持った人の数）→ <b>クリック率</b>（広告を見た人のうち押した人の割合）→ <b>予約・問い合わせ</b>（最後の結果）。分からないところはテンプレート14で聞いてください。</> },
  { q: "途中で広告を止めるとどうなりますか？", a: <>Instagramは「どんな人に見せると反応が良いか」を配信しながら学んでいます。止めると、この学習が最初からになることがあります。事情があるときは先にご相談ください。完全に止めずに広告費を下げる方法もあります。</> },
  { q: "「これは無料？有料？」と迷ったら", a: <>グループLINEで「これは無料の範囲ですか？」と聞いてください。<b>確認は無料</b>です。費用がかかることは、必ず先にお伝えします。</> },
  { q: "解約したいときは？", a: <>最低契約期間の3か月が過ぎてから、<b>翌月の運用が始まる前（前月の末日）まで</b>にご連絡ください（テンプレート20）。当月分の運用代行費と、Instagramへお支払い済みの広告費の返金はありません。</> },
];

const TROUBLE: [string, string, string][] = [
  ["予約が少ない・反応が少ない", "下の「予約が取れないときの点検」で6項目を確認", "テンプレート4"],
  ["広告が止まった（急ぎ）", "自分で操作する前に、すぐグループLINEへ", "テンプレート9"],
  ["準備（設定）で止まっている", "どこまでできたかと、止まっている画面を送る", "テンプレート18"],
  ["広告から開くページを変えたい", "「広告から開くページの選び方」を見てから相談", "テンプレート1・5"],
  ["動画を変えたい・追加したい", "3か月に1本は無料。追加は1本5,500円", "テンプレート7・8"],
  ["文章や見せ方を直したい", "2回まで無料。直したいところは1回にまとめて", "テンプレート12"],
  ["配信する場所・年齢を変えたい", "理由と一緒に送る", "テンプレート6"],
  ["休み・臨時休業がある", "休みの日と、その間の広告をどうするか", "テンプレート15"],
  ["メニュー・料金が変わった", "変更前と変更後、いつからか", "テンプレート17"],
  ["広告費を変えたい", "今の金額と希望の金額", "テンプレート16"],
  ["休みたい・再開したい", "休止は3か月が過ぎてから。休止中は30日ごとに3,300円", "テンプレート10・11"],
  ["何が問題か分からない", "今困っていることを一言で", "テンプレート3"],
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="brand">株式会社しっとる　Instagram広告 運用代行</div>
          <h1>お客様ガイド</h1>
          <p>広告を始める前の準備から、始まってからのこと、料金、困ったときの連絡のしかたまで、このページにまとめました。</p>
          <div className="hero-actions">
            <a className="btn primary" href="#setup">まず準備を見る</a>
            <a className="btn" href="#trouble">困ったとき</a>
          </div>
          <div className="updated">{UPDATED}更新</div>
        </div>
      </header>

      <nav className="toc" aria-label="目次">
        <div className="toc-inner">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </div>
      </nav>

      <main className="wrap">
        <Section id="start" eyebrow="はじめに" title="このページの使い方">
          <div className="grid3">
            <a className="tile" href="#setup"><Icon name="flag" /><b>これから始める方</b><span>「開始までの流れ」と「準備」を順番に</span></a>
            <a className="tile" href="#running"><Icon name="eye" /><b>広告が始まった方</b><span>「始まってから」のお願いは3つだけ</span></a>
            <a className="tile" href="#trouble"><Icon name="help" /><b>困ったとき</b><span>困りごと別に、することと連絡のしかた</span></a>
          </div>
          <Note>
            動画の制作・広告の設定・毎月のレポートは、<b>すべてしっとるが行います。</b>お店にお願いするのは、最初の準備と、始まってからの確認だけです。ご連絡はグループLINEへ。<b>24時間以内</b>にお返事します。
          </Note>
        </Section>

        <Section id="flow" eyebrow="開始までの流れ" title="お申し込みから配信開始まで" lead="運用代行費がかかるのは、6の配信開始からです。">
          <ol className="timeline">
            {[
              ["お申し込み・ご契約", "申込フォームのあと、契約書をお送りします", "お店"],
              ["打ち合わせ（初回無料）", "広告を見せる相手・範囲・入口のメニューを決めます", "一緒に"],
              ["グループLINE", "連絡用のグループに、しっとるのスタッフが入ります", "しっとる"],
              ["準備", "動画の撮影と、Instagramの設定（下の「準備」）", "お店"],
              ["動画と文章のご確認", "仕上がった動画と広告の文章をLINEでお見せします", "一緒に"],
              ["配信開始", "ご承認をいただいてから広告を出します。ここから費用がかかります", "しっとる"],
            ].map(([t, d, who], i) => (
              <li key={i}>
                <span className="tl-num">{i + 1}</span>
                <div><b>{t}</b><span className={`who who-${who === "お店" ? "shop" : who === "しっとる" ? "us" : "both"}`}>{who}</span><p>{d}</p></div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="setup" eyebrow="準備" title="お店にお願いする準備は4つです" lead="分からないところは飛ばして大丈夫です。できたところまでグループLINEで教えてください。続きは一緒に進めます。">
          <div className="card">
            <div className="card-head"><span className="badge">1</span><Icon name="camera" /><h3>動画を撮って送る</h3><span className="pri">いちばん先に</span></div>
            <p>スマホを縦にして、お店と施術の様子を撮ってください。撮り方と撮る場所は、下の「撮影」にまとめています。</p>
            <a className="link" href="#shoot">撮影のしかたを見る</a>
            <Done text="動画送ります" />
          </div>

          <div className="card">
            <div className="card-head"><span className="badge">2</span><Icon name="pin" /><h3>広告を出す場所（現在地）の設定</h3></div>
            <p>広告は「お店から半径◯km」の範囲に出します。お店の場所を真ん中にするため、<b>必ずお店にいるときに、スマホのInstagramアプリ</b>から行います。最初の1回だけです。</p>
            <p className="small">画面の写真は、押すと大きく見られます。</p>
            <Shots items={[
              ["01", <>自分のプロフィールから、どれか1つの投稿を開いて<b>「投稿を宣伝」</b>を押す</>],
              ["02", <>目標の画面は<b>何も変えずに「次へ」</b></>],
              ["03", <>いちばん下の<b>「自分で作成」</b>を押す</>],
              ["04", <>オーディエンス名に<b>「しっとる」</b>と入れて、<b>「地域」</b>を押す</>],
              ["05", <>上の<b>「ローカル」</b>を押す</>],
              ["06", <><b>「現在地」をオン</b>にする<small>地図の真ん中に、お店の場所の印が出ます</small></>],
              ["07", <><b>「半径」</b>を、しっとるからお伝えした距離に合わせて、右上の<b>「完了」</b><small>分からなければ、そのままで大丈夫です。あとでこちらで合わせます</small></>],
              ["08", <>もう一度、右上の<b>「完了」</b>を押す</>],
              ["09", <>一覧に<b>「しっとる」</b>が出て、選ばれていればできています</>],
              ["10", <>左上の「＜」で最初の画面まで戻り、<b>「キャンセル」→「破棄」</b><small>ここで広告は出ません。お金もかかりません。作った「しっとる」の範囲は残ります</small></>],
            ]} />
            <div className="links"><a className="link" href={VIDEO_LOCATION} target="_blank" rel="noopener">手順を動画で見る</a></div>
            <Note>「投稿を宣伝」が出てこないときは、Instagramが「プロアカウント」になっていない可能性があります。グループLINEで教えてください。</Note>
            <Done text="現在地の設定できました" />
          </div>

          <div className="card">
            <div className="card-head"><span className="badge">3</span><Icon name="card" /><h3>広告費を払うカードの登録</h3></div>
            <Note kind="warn"><b>スマホのInstagramアプリからは登録しないでください。</b>アプリから登録すると、AppleやGoogleの手数料（約30%）が上乗せされることがあります。必ずパソコン、またはスマホのSafari・Chrome（インターネットを見るアプリ）で行ってください。</Note>
            <h4>パソコンで行う場合（おすすめ）</h4>
            <p className="small">画面の写真は、押すと大きく見られます。</p>
            <Shots dir="payment" wide items={[
              ["01", <>パソコンで instagram.com を開いてログインし、自分のプロフィールへ。どれか1つの投稿にマウスをのせて<b>「投稿を宣伝」</b>を押す</>],
              ["02", <>お知らせが出たら<b>「OK」</b></>],
              ["03", <>右側を下に進み、<b>「支払い方法」</b>を押す</>],
              ["04", <><b>「デビットカード・クレジットカード」</b>を選んで<b>「次へ」</b></>],
              ["05", <>カードの名義・番号・有効期限・裏の3けたを入れて<b>「保存」</b><small>保存したら、この画面は閉じて大丈夫です。広告は出ません。お金もかかりません</small></>],
            ]} />
            <Note>「投稿を宣伝」の画面で、広告を出すボタンは押さないでください。カードを保存したら、画面を閉じるだけで大丈夫です。お金の単位（日本円になっているか）は、しっとるでも確認します。</Note>
            <h4>パソコンがない場合</h4>
            <p>スマホのSafariやChromeで instagram.com を開いてログインし、メニューから「プロフェッショナルダッシュボード」→「請求と支払い」→「支払い方法を追加」と進み、「デビットカード・クレジットカード」を選んで、カードの情報を入れて「保存」します。</p>
            <Note>カードの番号は、しっとるには送らないでください。</Note>
            <Done text="カードの登録できました" />
          </div>

          <div className="card">
            <div className="card-head"><span className="badge">4</span><Icon name="lock" /><h3>二段階認証をどうするか決める</h3></div>
            <p>二段階認証は、<b>ログインするときに、電話に届く番号も入れないと入れない</b>仕組みです。どちらにするか選んで、グループLINEで教えてください。</p>
            <div className="compare">
              <div><b>オンのまま</b><p>乗っ取りをほぼ防げて安心です。そのかわり、しっとるが設定のためにログインするたびに、届いた番号を教えていただく手間がかかります。</p></div>
              <div><b>オフにする</b><p>やりとりの手間がなくなります。パスワードを人に教えない・ほかと同じにしない、を気をつけてください。</p></div>
            </div>
            <h4>オフにする手順</h4>
            <p>Instagramアプリ → メニュー → アカウントセンター → パスワードとセキュリティ → 二段階認証 → 「SMS」と「認証アプリ」を両方オフ</p>
            <Done text="二段階認証はオン（またはオフ）にします" />
          </div>
        </Section>

        <Section id="shoot" eyebrow="撮影" title="動画の撮り方" lead="特別な機材はいりません。スマホで撮った動画を、しっとるが広告用に仕上げます。">
          <div className="grid2">
            {[
              ["スマホは必ず縦", "横で撮ると、Instagramの画面で上下に黒い帯が出てしまいます"],
              ["1か所10〜20秒", "長くても短くても大丈夫。止めずに次の場所まで撮り続けても、こちらで切ります"],
              ["近くと、少し離れたところの両方", "施術は、手元（近く）と、お部屋全体が入る位置（離れて）の両方を撮ってください"],
              ["ゆっくり動く・ズームしない", "両手で持って、歩くときはゆっくり。ズームを使うとぶれやすくなります"],
              ["明るくする", "照明をつけて、窓を背にした逆光は避けてください"],
              ["声や音はそのままでOK", "話し声・言い間違い・音楽が入っていても、こちらで消して文字を入れます"],
            ].map(([t, d]) => (
              <div className="mini" key={t}><Icon name="check" size={20} /><div><b>{t}</b><p>{d}</p></div></div>
            ))}
          </div>

          <h3 className="sub">撮っていただきたい場所（撮れるところだけで大丈夫です）</h3>
          <table className="table">
            <thead><tr><th>No</th><th>場所</th><th>撮り方</th></tr></thead>
            <tbody>
              {[
                ["お店の外観・看板", "正面から、看板と入口が入るように"],
                ["駐車場（あれば）", "お店と一緒に入る角度で"],
                ["入口から受付まで", "ドアを開けて中へ歩く目線で、ゆっくり"],
                ["受付でのお出迎え", "スタッフさんが正面から笑顔で迎えるところ"],
                ["お部屋の中", "入口から、ベッドや部屋全体が入るように左右にゆっくり"],
                ["カウンセリングの様子", "机の上の手元や、うなずきながら話を聞く表情"],
                ["施術の手元（近く）", "服やタオルの上から、手や機器を当てている手元"],
                ["施術の様子（離れて）", "少し離れて、お部屋全体と施術の様子が入るように"],
                ["スタッフさんの集合", "2〜3人で笑顔。横へゆっくり流すように"],
                ["受付まわり・待合", "カウンターと待合のスペースが入るように"],
              ].map(([p, h], i) => (<tr key={p}><td>{i + 1}</td><td><b>{p}</b></td><td>{h}</td></tr>))}
            </tbody>
          </table>

          <div className="grid2">
            <div className="card tight">
              <h4>撮らないもの</h4>
              <ul className="dots">
                <li>お腹や太ももなど、肌が大きく出ているところ</li>
                <li>体重計やメジャーで測る場面、使う前と後の比べ</li>
                <li>料金や体重などの数字が見える貼り紙</li>
                <li>了解をいただいていない、お客様やスタッフの顔</li>
              </ul>
              <p className="small">Instagramの決まりで、広告が止められる原因になります。</p>
            </div>
            <div className="card tight">
              <h4>送り方</h4>
              <ul className="dots">
                <li>撮れたものから、そのままグループLINEへ</li>
                <li>上の表の番号を添えていただけると助かります（例：「5 お部屋の中」）</li>
                <li>お客様に出ていただく場合は、「広告でしばらく使います」と先に伝えて了解をもらう</li>
              </ul>
              <a className="link" href={VIDEO_SHOOTING} target="_blank" rel="noopener">撮り方を動画で見る</a>
            </div>
          </div>
        </Section>

        <Section id="running" eyebrow="始まってから" title="始まってからのお願いは3つです">
          <div className="card">
            <div className="card-head"><span className="badge">1</span><Icon name="eye" /><h3>2〜3日に1回、広告が止まっていないか見る</h3></div>
            <p>Instagramアプリ → プロフィール → プロフェッショナルダッシュボード → 広告ツール → 現在の広告</p>
            <div className="compare">
              <div className="ok"><b>大丈夫</b><p>「あと◯日で終了」と出ている</p></div>
              <div className="ng"><b>すぐLINEへ</b><p>「停止中」と出ている／使った金額が0円のまま／前に見たときから金額が増えていない</p></div>
            </div>
          </div>
          <div className="card">
            <div className="card-head"><span className="badge">2</span><Icon name="list" /><h3>新しいお客様に「何を見て来られたか」を聞く</h3></div>
            <p>広告から何人来られたかは、しっとるからは分かりません。カウンセリングのときに、さりげなく聞いてください。</p>
            <div className="quote">「ホットペッパー（予約のページ）は、どちらで見つけられましたか？」</div>
            <p>「Instagramを見ていたら出てきて」という方がいたら記録しておき、<b>月に1回、人数とお住まい（市や町の名前）</b>を教えてください（テンプレート19）。その数をもとに、範囲やクーポン、動画の見直しをご提案します。</p>
          </div>
          <div className="card">
            <div className="card-head"><span className="badge">3</span><Icon name="chat" /><h3>変わったことがあれば知らせる</h3></div>
            <p>メニュー・料金・クーポン・お休みが変わったら、グループLINEで教えてください。広告の文章もすぐ直します。</p>
          </div>

          <h3 className="sub">予約につながりやすくするために</h3>
          <div className="grid2">
            <div className="mini"><Icon name="check" size={20} /><div><b>広告で出すクーポンを一番上に</b><p>ホットペッパーなどでは、広告で出しているクーポンをクーポン欄の一番上に置いてください。探しているうちに迷ってやめてしまう方を防ぎます。</p></div></div>
            <div className="mini"><Icon name="check" size={20} /><div><b>すぐ予約できる空き枠を残す</b><p>見た日にすぐ予約できる枠があるほど、予約につながりやすくなります。</p></div></div>
          </div>

          <h3 className="sub">しっとるがすること</h3>
          <ul className="dots">
            <li>配信を始める前に、動画と文章をLINEでお見せして、ご承認をいただきます</li>
            <li>30日ごとにレポートをお送りします（いくら使って、どれだけ反応があったか）</li>
            <li>1クリックあたりの費用が100円を超えたら、無料で動画を差し替えます</li>
            <li>3か月ごとに動画の案を入れ替えて比べ、反応の良い方を続けます</li>
            <li>ご連絡には24時間以内にお返事します</li>
          </ul>

          <h3 className="sub">成果の考え方</h3>
          <div className="grid3">
            <div className="tile static"><b>1か月目</b><span>データを集める</span></div>
            <div className="tile static"><b>2か月目</b><span>反応を見て直す</span></div>
            <div className="tile static"><b>3か月目</b><span>安定させる</span></div>
          </div>
          <p className="small">成果の保証はしていません。判断は3か月を目安にしてください。止めたり始めたりをくり返すと、Instagramの学習が最初からになることがあります。</p>

          <h3 className="sub" id="landing">広告から開くページの選び方</h3>
          <table className="table">
            <thead><tr><th>ページ</th><th>向いているとき</th><th>整えるところ</th></tr></thead>
            <tbody>
              <tr><td><b>ホットペッパーなどの予約サイト</b></td><td>すぐ予約がほしい</td><td>広告のクーポンを一番上に・写真を整える・空き枠を残す</td></tr>
              <tr><td><b>LP（1枚の紹介ページ）</b></td><td>1つのメニューを強く伝えたい</td><td>最初の画面で「誰に・何を・いくらで」・予約ボタンを上と下に</td></tr>
              <tr><td><b>公式LINE</b></td><td>まず相談してほしい</td><td>友だち追加のあとの自動のあいさつで、次にすることを案内</td></tr>
              <tr><td><b>ホームページ</b></td><td>信頼感を伝えたい</td><td>予約ボタンをいつも見える位置に</td></tr>
            </tbody>
          </table>
        </Section>

        <Section id="rules" eyebrow="広告の決まり" title="広告で使えない言葉と見せ方" lead="Instagram（Meta社）の決まりや法律に触れると、広告が止められることがあります。言葉選びはしっとるが行いますが、考え方を知っておいてください。">
          <div className="grid2">
            {[
              ["体重・サイズの数字", "「マイナス何キロ」「何センチ減」などは使いません"],
              ["効果の言い切り", "「必ず痩せる」「効く」「治る」「改善」などは使いません"],
              ["使う前と後の比べ", "ビフォーアフターの写真や動画は使いません"],
              ["見た目を悪く言う言葉", "体型やお悩みを言い当てる・否定する言い方はしません"],
            ].map(([t, d]) => (
              <div className="mini ngmini" key={t}><Icon name="alert" size={20} /><div><b>{t}</b><p>{d}</p></div></div>
            ))}
          </div>
          <Note>広告から開くページ（ホットペッパーなど）の文章も、Instagramの確認の対象になります。止められたときは、しっとるから書き換えの案をお出しします。</Note>
        </Section>

        <Section id="price" eyebrow="料金とご契約" title="料金とご契約の決まり（税込）">
          <table className="table">
            <tbody>
              <tr><th>運用代行費（しっとるへ）</th><td>広告費の20%。広告費が月5万円以下の月は、最低料金の<b>11,000円</b>。リール動画の制作込み</td></tr>
              <tr><th>広告費（Instagramへ）</th><td>Instagram（Meta社）へ直接お支払い。お決めいただいた金額の範囲で、30日かけて少しずつ使われます</td></tr>
              <tr><th>かかり始める時期</th><td>広告の配信が始まってから</td></tr>
              <tr><th>お支払い</th><td>30日単位で、翌月末にカード払い（例：10月に始めた分は11月末）</td></tr>
              <tr><th>お支払いが止まったとき</th><td>未決済が7日続くと、広告をいったん止めます</td></tr>
              <tr><th>最低契約期間</th><td>3か月</td></tr>
              <tr><th>解約</th><td>3か月が過ぎてから。翌月の運用が始まる前（前月の末日）までにご連絡。当月分の運用代行費と、支払い済みの広告費の返金はありません</td></tr>
              <tr><th>休止</th><td>3か月が過ぎてから。休止中は30日ごとに3,300円（管理費）。再開の費用はかかりません</td></tr>
              <tr><th>解約したあとの再契約</th><td>初期設定費 11,000円＋最低3か月</td></tr>
            </tbody>
          </table>
          <h3 className="sub">無料のもの・追加でかかるもの</h3>
          <div className="grid2">
            <div className="card tight"><h4>無料</h4><ul className="dots">
              <li>LINEでのご質問・「これは無料ですか」の確認</li>
              <li>初回の打ち合わせ</li>
              <li>動画（3か月に1本まで）</li>
              <li>1クリックの費用が100円を超えたときの動画の差し替え</li>
              <li>仕上がった広告の修正（2回まで）</li></ul></div>
            <div className="card tight"><h4>追加でかかるもの</h4><ul className="dots">
              <li>動画の追加：1本 5,500円</li>
              <li>修正の3回目から：1回 2,200円（直したいところは1回にまとめてください）</li>
              <li>2回目からの打ち合わせ：1時間 5,500円</li>
              <li>休止中の管理費：30日ごと 3,300円</li></ul></div>
          </div>
          <h3 className="sub">作ったものの扱い</h3>
          <ul className="dots">
            <li>しっとるが作った動画などの著作権はしっとるにあります。お店の広告や宣伝に使っていただくのは自由です</li>
            <li>制作物の無断の転載・スクリーンショットでの転載は禁止です（違約金 110,000円）</li>
            <li>制作にAIを使うことがあります。お客様の個人情報はAIに入れません</li>
          </ul>
        </Section>

        <Section id="faq" eyebrow="よくある質問" title="よくいただくご質問">
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="answer">{f.a}</div>
              </details>
            ))}
          </div>
        </Section>

        <Section id="trouble" eyebrow="困ったとき" title="困りごと別：することと連絡のしかた" lead="テンプレートは、下の「連絡テンプレート」からコピーしてグループLINEに貼り、空欄を埋めて送ってください。">
          <div className="trouble">
            {TROUBLE.map(([t, d, tp]) => (
              <div className="trow" key={t}>
                <b>{t}</b>
                <span>{d}</span>
                <a href="#templates">{tp}</a>
              </div>
            ))}
          </div>

          <h3 className="sub">予約が取れないときの点検（6項目）</h3>
          <Steps items={[
            <>広告から予約まで、自分のスマホで実際にたどってみる<small>迷うところ・止まるところがないか</small></>,
            <>予約で入力する項目が多すぎないか<small>多いほど、途中でやめる方が増えます</small></>,
            <>希望の日時に予約できる空き枠があるか</>,
            <>料金と特典がひと目で分かるか</>,
            <>近くのお店と比べて、選ぶ理由があるか<small>料金・特典・安心できる材料</small></>,
            <>スマホで見やすいか<small>文字が小さい、ボタンが押しにくい、などがないか</small></>,
          ]} />
          <Note>テンプレートが見つからないときは、グループLINEで「相談です」とだけ送ってください。担当者から状況をお聞きします。</Note>
        </Section>

        <Section id="templates" eyebrow="連絡テンプレート" title="コピーしてLINEに貼るだけ" lead="必要なことがそろった状態で届くので、聞き返しが減り、早く対応できます。「＿＿＿＿」のところを埋めて送ってください。分からないところは空欄のままで大丈夫です。">
          {TEMPLATE_GROUPS.map((g) => (
            <div className="tgroup" key={g.title}>
              <h3 className="sub">{g.title}</h3>
              {g.items.map((t) => (
                <details className="tpl" key={t.n} id={`tpl-${t.n}`}>
                  <summary><span className="tno">テンプレート{t.n}</span>{t.title}</summary>
                  <pre id={`tpltext-${t.n}`}>{t.text}</pre>
                  <CopyButton targetId={`tpltext-${t.n}`} label="この文章をコピー" />
                </details>
              ))}
            </div>
          ))}
        </Section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <b>株式会社しっとる</b>
          <p>ご連絡はグループLINEへ。24時間以内にお返事します。</p>
          <p className="small">{UPDATED}更新。料金・契約の条件は、紹介ページと契約書の内容が優先されます。</p>
        </div>
      </footer>
    </>
  );
}
