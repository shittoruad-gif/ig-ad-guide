"use client";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const items = [
  { id: "s1", label: "表紙", num: "01" },
  { id: "s2", label: "運用ポリシー・全体像", num: "02" },
  { id: "s3", label: "導線ガイド（飛び先別）", num: "03" },
  { id: "s4", label: "成果の考え方・3ヶ月コミット", num: "04" },
  { id: "s5", label: "契約・料金ルール", num: "05" },
  { id: "s6", label: "よくある質問（FAQ）", num: "06" },
  { id: "s7", label: "改善チェック・決済エラー", num: "07" },
  { id: "s8", label: "制作・修正・休止・再開", num: "08" },
  { id: "s9", label: "著作権・AI活用", num: "09" },
  { id: "s10", label: "コピペ用テンプレート", num: "10" },
  { id: "s11", label: "LINE対応テンプレート", num: "11" },
  { id: "s12", label: "月次レポート・運用方針", num: "12" },
  { id: "s13", label: "まとめ", num: "13" },
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
