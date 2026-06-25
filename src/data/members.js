const base = import.meta.env.BASE_URL;

export const members = [
  {
    id: "pi1",
    name1: "Alfonsus",
    name2: "Norbert",
    realname: "Alfonsus Ferdinand Norbert",
    role: "Film Editing",
    bio: "Soraは音楽家のような呼吸感で映像をつなぎ、小さな間も劇的な転換と同じくらい大切に感じさせる。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#ebe6dc",
    statement:
      "編集とは、映像が自らのテンポを明かすまで耳を澄ませること。",
    tags: ["editing", "rhythm", "cinema"],
    works: [
      { 
        id: "wfprofile",
        title: "A Younger Me", 
        medium: "Profile Record", 
        year: "2024",
        description:
          "A compact personal web piece built from childhood images, memory fragments, and the strange distance between an earlier self and the present.",
        url: `${base}projects/pi1/wfprofile/index.html`
      },
      { 
        id: "cut-marks",
        title: "Cut Marks", 
        medium: "Video Essay", 
        year: "2025",
        description:
          "A study of rhythm, interruption, and invisible edits that asks how much meaning can live inside a single cut."
      }
    ]
  },
  {
    id: "pi2",
    name1: "Kim",
    name2: "Byoungsoo",
    realname: "김 병수",
    role: "Art Direction",
    bio: "Meiはセット、オブジェ、小さな儀式を組み合わせ、どこか見覚えがありながら少し不可能にも感じられる視覚世界をつくる。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#d6d1c7",
    statement:
      "優れた小道具は、観客がほとんど思い出しかけている夢の証拠のように振る舞う。",
    tags: ["objects", "set design", "worldbuilding"],
    works: [
      {
        id: "table-for-nine",
        title: "Table for Nine",
        medium: "Set Piece",
        year: "2026",
        description:
          "A staged table environment where props, empty seats, and small gestures suggest a gathering that has just moved out of frame."
      },
      {
        id: "borrowed-room",
        title: "Borrowed Room",
        medium: "Photo Direction",
        year: "2025",
        description:
          "A quiet photo sequence that treats an ordinary room as a temporary theater for memory, color, and borrowed intimacy."
      }
    ]
  },
  {
    id: "pi3",
    name1: "Tamazaki",
    name2: "Miharu",
    realname: "玉崎 美遥",
    role: "Writing",
    bio: "Kaiは、鑑賞者が自分自身を作品に重ねられる余白を残しながら、簡潔な展示テキストや脚本を書く。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#f5f1ea",
    statement:
      "よいキャプションは扉を開き、鑑賞者がそこを通る前にそっと身を引く。",
    tags: ["copy", "script", "concept"],
    works: [
      {
        id: "caption-studies",
        title: "Caption Studies",
        medium: "Text Series",
        year: "2026",
        description:
          "A set of short texts exploring how captions can guide attention while still leaving room for the viewer to enter."
      },
      {
        id: "voice-memo",
        title: "Voice Memo",
        medium: "Script",
        year: "2025",
        description:
          "A script shaped like a private recording, moving between rehearsal, confession, and unfinished notes for a future scene."
      }
    ]
  },
  {
    id: "pw1",
    name1: "Kaku",
    name2: "Shibun",
    realname: "郭 紫雯",
    realnameLang: "zh",
    role: "Creative Direction",
    bio: "Aoiは静かな観察からビジュアルシステムを組み立て、ありふれたキャンパスの風景を構成された映画的な断片へと置き換える。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#d8d4ca",
    statement:
      "卒業はひとつの境界として扱われる。未完の問いがまだ光を帯びる部屋として。",
    tags: ["direction", "installation", "editorial"],
    works: [
      {
        id: "room-tone",
        title: "Room Tone",
        medium: "Short Film",
        year: "2026",
        description:
          "A short film that follows campus light, pauses, and residual sound as evidence of a place between ordinary days."
      },
      {
        id: "archive-of-light",
        title: "Archive of Light",
        medium: "Installation",
        year: "2025",
        description:
          "An installation that gathers projected fragments and reflective surfaces into a loose archive of passage, delay, and brightness."
      }
    ],
  }
  ,
  {
    id: "pw2",
    name1: "Dong",
    name2: "Hao",
    realname: "董 豪",
    realnameLang: "zh",
    role: "Photography",
    bio: "Hanaは人と人とのあいだにある空間を撮影し、距離、ぼかし、沈黙を能動的な構図の道具として用いる。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#ece7de",
    statement:
      "写真は証明よりも、空気がどのように感じられたかを思い出すためのものになりうる。",
    tags: ["photo", "portrait", "memory"],
    works: [
      {
        id: "after-the-bell",
        title: "After the Bell",
        medium: "Photo Series",
        year: "2026",
        description:
          "A photo series about the suspended atmosphere after classes end, when corridors keep the traces of movement."
      },
      {
        id: "blue-hallway",
        title: "Blue Hallway",
        medium: "Zine",
        year: "2025",
        description:
          "A small-format zine collecting blurred passageways, cool light, and portraits that sit between documentation and memory."
      }
    ]
  },
  {
    id: "pw3",
    name1: "Ri",
    name2: "Gen",
    realname: "李 ゲン",
    realnameLang: "zh",
    role: "Motion Design",
    bio: "Renは、タイポグラフィが静止したキャプションではなく生きている表面のように振る舞う、動的なアイデンティティを設計する。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#cfcac0",
    statement:
      "動きはタイポグラフィに鼓動を与え、その鼓動が次にどこを見るべきかを鑑賞者に伝える。",
    tags: ["motion", "type", "identity"],
    works: [
      {
        id: "signal-study",
        title: "Signal Study",
        medium: "Motion Poster",
        year: "2026",
        description:
          "A motion poster built from pulsing typography, timing shifts, and graphic signals that turn reading into a moving act."
      },
      {
        id: "nine-seconds",
        title: "Nine Seconds",
        medium: "Title Sequence",
        year: "2025",
        description:
          "A title sequence experiment that compresses identity, pace, and transition into a short burst of moving type."
      }
    ]
  },
  {
    id: "pw4",
    name1: "Ryou",
    name2: "Shou",
    realname: "リョウ ショウ",
    realnameLang: "zh",
    role: "Music",
    bio: "Mioはフィールドレコーディングと柔らかな電子音の質感を重ね、建築的でありながら親密に感じられる音楽をつくる。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#e5e0d6",
    statement:
      "音楽は展示の床であり、沈黙にも素材としての重みがある。",
    tags: ["music", "field recording", "composition"],
    works: [
      {
        id: "dust-loop",
        title: "Dust Loop",
        medium: "Music Piece",
        year: "2026",
        description:
          "A layered sound piece where field recordings, soft static, and repeated tones create a room-like sense of time."
      },
      {
        id: "courtyard-drift",
        title: "Courtyard Drift",
        medium: "Music",
        year: "2025",
        description:
          "A gentle composition drawn from outdoor resonance, footsteps, and electronic texture, drifting between public space and interior feeling."
      }
    ]
  },
  {
    id: "pw5",
    name1: "Rin",
    name2: "Shusei",
    realname: "林 秋静",
    realnameLang: "zh",
    role: "Web Engineering",
    bio: "Yutoはブラウザを展示室として捉え、インタラクション、間合い、パフォーマンスをひとつの面へと形づくる。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#f1eee8",
    statement:
      "すべてのトランジションに存在する理由があるとき、インターフェースは手作りのように感じられる。",
    tags: ["frontend", "interaction", "systems"],
    works: [
      {
        id: "soft-cursor",
        title: "Soft Cursor",
        medium: "Interactive Web",
        year: "2026",
        description:
          "An interactive browser study focused on cursor behavior, quiet transitions, and the tactile feeling of digital space."
      },
      {
        id: "index-room",
        title: "Index Room",
        medium: "Archive Site",
        year: "2025",
        description:
          "An archive interface that treats indexes as rooms, letting documents, images, and paths rearrange into a browsable floor plan."
      }
    ]
  },
  {
    id: "pw6",
    name1: "Ro",
    name2: "Seizenen",
    realname: "娄 世前沿",
    realnameLang: "zh",
    role: "Graphic Design",
    bio: "Rikaは抑制されたグリッド、大きなマーク、紙のような余白を使い、静かでありながら意思のある構成をつくる。",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#ddd7cc",
    statement:
      "余白は、作品をちょうどよい緊張感で支えているとき、空っぽではない。",
    tags: ["print", "layout", "visual identity"],
    works: [
      {
        id: "folded-index",
        title: "Folded Index",
        medium: "Poster Set",
        year: "2026",
        description:
          "A poster system using folds, strict grids, and oversized marks to turn printed space into a navigable index."
      },
      {
        id: "margin-notes",
        title: "Margin Notes",
        medium: "Book Design",
        year: "2025",
        description:
          "A book design experiment where margins carry secondary voices, quiet annotations, and the rhythm of looking again."
      }
    ]
  },
];

export function getMemberById(id) {
  return members.find((member) => member.id === id);
}

export function getOtherMembers(id) {
  return members.filter((member) => member.id !== id);
}
