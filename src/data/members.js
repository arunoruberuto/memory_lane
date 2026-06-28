const base = import.meta.env.BASE_URL;

export const members = [
  {
    id: "pi1",
    name1: "Alfonsus",
    name2: "Norbert",
    realname: "Alfonsus Ferdinand Norbert",
    realnameLang: "en",
    role: "映像編集",
    bio: "Alfonsusは音楽家のような呼吸感で映像をつなぎ、小さな間も劇的な転換と同じくらい大切に感じさせる。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#ebe6dc",
    statement:
      "編集とは、映像が自らのテンポを明かすまで耳を澄ませること。",
    tags: ["editing", "rhythm", "cinema"],
    works: [
      { title: "手持ちの天気", medium: "短編映像", year: "2026" },
      { title: "カットの痕跡", medium: "映像エッセイ", year: "2025" }
    ]
  },
  {
    id: "pi2",
    name1: "Kim",
    name2: "Byoungsoo",
    realname: "김 병수",
    realnameLang: "ko",
    role: "アートディレクション",
    bio: "Kimはセット、オブジェ、小さな儀式を組み合わせ、どこか見覚えがありながら少し不可能にも感じられる視覚世界をつくる。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#d6d1c7",
    statement:
      "優れた小道具は、観客がほとんど思い出しかけている夢の証拠のように振る舞う。",
    tags: ["objects", "set design", "worldbuilding"],
    works: [
      { title: "九人のためのテーブル", medium: "セット作品", year: "2026" },
      { title: "借りた部屋", medium: "写真ディレクション", year: "2025" }
    ]
  },
  // {
  //   id: "pi3",
  //   name1: "Tamazaki",
  //   name2: "Miharu",
  //   realname: "玉崎 美遥",
  //   realnameLang: "ja",
  //   role: "ライティング",
  //   bio: "玉崎は、見る人自身が作品の中に入り込める余白を残しながら、簡潔な展示テキストや脚本を紡ぐ。",
  //   image: `${base}images/placeholders/portrait.svg`,
  //   accent: "#f5f1ea",
  //   statement:
  //     "よいキャプションは扉を開き、見る人が通り抜ける前にそっと身を引く。",
  //   tags: ["copy", "script", "concept"],
  //   works: [
  //     { title: "キャプション習作", medium: "テキストシリーズ", year: "2026" },
  //     { title: "ボイスメモ", medium: "脚本", year: "2025" }
  //   ]
  // },
  {
    id: "pw1",
    name1: "Kaku",
    name2: "Shibun",
    realname: "郭 紫雯",
    realnameLang: "zh",
    role: "クリエイティブディレクション",
    bio: "郭紫ブンは静かな観察からビジュアルシステムを組み立て、何気ないキャンパスの風景を映画的な断片へと変換する。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#d8d4ca",
    statement:
      "卒業はひとつの境界線であり、未完成の問いがまだ光を放つ部屋でもある。",
    tags: ["direction", "installation", "editorial"],
    works: [
      { title: "ルームトーン", medium: "短編映像", year: "2026" },
      { title: "光のアーカイブ", medium: "インスタレーション", year: "2025" }
    ]
  },
  {
    id: "pw2",
    name1: "Dong",
    name2: "Hao",
    realname: "董 豪",
    realnameLang: "zh",
    role: "写真",
    bio: "董豪は人と人のあいだにある距離を撮影し、ぼかしや沈黙、空気感までも構図の一部として扱う。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#ece7de",
    statement:
      "写真は証明であるよりも、その場の空気がどう感じられたかを思い出すためのものになり得る。",
    tags: ["photo", "portrait", "memory"],
    works: [
      { title: "ベルのあとで", medium: "写真シリーズ", year: "2026" },
      { title: "青い廊下", medium: "ZINE", year: "2025" }
    ]
  },
  {
    id: "pw3",
    name1: "Ri",
    name2: "Gen",
    realname: "李 ゲン",
    realnameLang: "zh",
    role: "モーションデザイン",
    bio: "李ゲン、タイポグラフィを静的なキャプションではなく、生きている表面のように動かすキネティックなアイデンティティを設計する。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#cfcac0",
    statement:
      "動きは文字に脈を与え、その脈が見る人の視線を次の場所へ導く。",
    tags: ["motion", "type", "identity"],
    works: [
      { title: "シグナル習作", medium: "モーションポスター", year: "2026" },
      { title: "九秒間", medium: "タイトルシーケンス", year: "2025" }
    ]
  },
  {
    id: "pw4",
    name1: "Ryo",
    name2: "Sho",
    realname: "リョウ ショウ",
    realnameLang: "zh",
    role: "音楽",
    bio: "リョウショウはフィールドレコーディングとやわらかな電子音を重ね、建築的でありながら親密さを感じさせる音楽をつくる。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#e5e0d6",
    statement:
      "音楽は展示室の床のようなものだ。沈黙でさえ、ひとつの重みを持っている。",
    tags: ["music", "field recording", "composition"],
    works: [
      { title: "ダストループ", medium: "音楽作品", year: "2026" },
      { title: "中庭の漂流", medium: "音楽", year: "2025" }
    ]
  },
  {
    id: "pw5",
    name1: "Rin",
    name2: "Shusei",
    realname: "林 秋静",
    realnameLang: "zh",
    role: "Webエンジニアリング",
    bio: "林秋静はブラウザをひとつの展示室として捉え、インタラクション、テンポ、パフォーマンスをひとつの体験として形づくる。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#f1eee8",
    statement:
      "すべての遷移に存在する理由があるとき、インターフェースは手仕事のような温度を持つ。",
    tags: ["frontend", "interaction", "systems"],
    works: [
      { title: "ソフトカーソル", medium: "インタラクティブWeb", year: "2026" },
      { title: "インデックスルーム", medium: "アーカイブサイト", year: "2025" }
    ]
  },
  {
    id: "pw6",
    name1: "Ro",
    name2: "Seizenen",
    realname: "娄 世前沿",
    realnameLang: "zh",
    role: "グラフィックデザイン",
    bio: "ロ世前エンは抑制されたグリッド、大きな記号、紙のような余白を用いて、静かでありながら意志のある構成をつくる。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#ddd7cc",
    statement:
      "余白は空っぽではない。作品をちょうどよい緊張感で支えているとき、そこには確かな役割がある。",
    tags: ["print", "layout", "visual identity"],
    works: [
      { title: "折りたたまれた索引", medium: "ポスターセット", year: "2026" },
      { title: "余白のメモ", medium: "ブックデザイン", year: "2025" }
    ]
  },
];

export function getMemberById(id) {
  return members.find((member) => member.id === id);
}

export function getOtherMembers(id) {
  return members.filter((member) => member.id !== id);
}
