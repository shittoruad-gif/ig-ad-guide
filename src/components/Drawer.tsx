"use client";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const items = [
  { id: "s1", label: "表紙", num: "01" },
  { id: "s2", label: "困ったらまずここ（早見表）", num: "02" },
  { id: "s3", label: "初期設定ガイド", num: "03" },
  { id: "s4", label: "広告の基本・導線ガイド", num: "04" },
  { id: "s5", label: "成果の考え方・3ヶ月コミット", num: "05" },
  { id: "s6", label: "契約・料金ルール", num: "06" },
  { id: "s7", label: "よくある質問（FAQ）", num: "07" },
  { id: "s8", label: "改善チェックリスト", num: "08" },
  { id: "s9", label: "制作・休止・著作権", num: "09" },
  { id: "s10", label: "テンプレ①〜③ 運用相談", num: "10" },
  { id: "s11", label: "テンプレ④〜⑥ 改善・設定変更", num: "11" },
  { id: "s12", label: "テンプレ⑦〜⑫ 動画・修正・休止", num: "12" },
  { id: "s13", label: "テンプレ⑬〜⑱ その他", num: "13" },
  { id: "s14", label: "まとめ", num: "14" },
];

export default function Drawer({ open, onClose }: DrawerProps) {
  return (
    <div className={`drawer${open ? " open" : ""}`} id="drawer">
      <div className="drawer-title">ページ一覧</div>
      <ul className="drawer-list">
        {items.map((item) => (
          <li key={item.id} className="drawer-item">
            <a href={`#${item.id}`} onClick={onClose}>
              <span>{item.label}</span>
              <span className="pg-num">{item.num}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
