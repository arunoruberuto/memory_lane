const base = import.meta.env.BASE_URL;

export const photos = [
  {
    id: "studio-light",
    title: "Studio Light",
    caption: "卒業制作展に向けて準備された、静かな展示風景。",
    image: `${base}images/placeholders/landscape.svg`,
    orientation: "landscape"
  },
  {
    id: "nine-portraits",
    title: "Nine Portraits",
    caption: "メンバー写真や制作過程の記録を掲載するためのスペース。",
    image: `${base}images/placeholders/wide.svg`,
    orientation: "wide"
  },
  {
    id: "table-study",
    title: "Table Study",
    caption: "展示アーカイブの一部として配置されたオブジェ、スケッチ、メモ。",
    image: `${base}images/placeholders/landscape.svg`,
    orientation: "landscape"
  },
  {
    id: "hallway-after",
    title: "Hallway After",
    caption: "キャンパス写真の雰囲気を伝えるための仮イメージ。",
    image: `${base}images/placeholders/portrait.svg`,
    orientation: "portrait"
  },
  {
    id: "paper-wall",
    title: "Paper Wall",
    caption: "レイアウトを調整せずに、大判印刷物の画像へ差し替えられます。",
    image: `${base}images/placeholders/landscape.svg`,
    orientation: "landscape"
  },
  {
    id: "closing-room",
    title: "Closing Room",
    caption: "展示の流れを締めくくる最後の写真。",
    image: `${base}images/placeholders/wide.svg`,
    orientation: "wide"
  }
];
