import { getWfByMemberId } from "@/data/wf";

const base = import.meta.env.BASE_URL;
const memberResumeImage = (id) => `${base}images/resume/${id}.webp`;

const memberDefinitions = [
  {
    id: "pi1",
    name1: "Alfonsus",
    name2: "Norbert",
    realname: "Alfonsus Ferdinand Norbert",
    realnameLang: "en",
    role: "Leader",
    bio: "アルフォンスは音楽家のような呼吸感で映像をつなぎ、小さな間も劇的な転換と同じくらい大切に感じさせる。",
    image: memberResumeImage("pi1"),
    accent: "#ebe6dc",
    profile: {
      template: "candy",
      windowStyle: {
        "--profile-window-title": "#d92f74",
        "--profile-window-answer": "#d92f74"
      },
      astro: "おひつじ座",
      birthday: "4月1日",
      q1: "小さな編集室を借りて、一日中好きな映画と音楽だけをつなぎ直してみたい。",
      q2: "一緒に過ごした時間のテンポを、これからも忘れずに持っていきたいです。"
    },
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
        url: `${base}projects/pi1/index.html`
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
    realnameLang: "ko",
    role: "Member",
    bio: "キムはセット、オブジェ、小さな儀式を組み合わせ、どこか見覚えがありながら少し不可能にも感じられる視覚世界をつくる。",
    image: memberResumeImage("pi2"),
    accent: "#d6d1c7",
    profile: {
      template: "mint",
      windowStyle: {
        "--profile-window-card-border": "#4bc5ad"
      },
      astro: "うお座",
      birthday: "5月15日",
      q1: "素材屋さんと古道具屋さんをまわって、見たことのない部屋を一つ作りたい。",
      q2: "何気ない毎日を作品に変えてくれたみんなに感謝しています。"
    },
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
    id: "pw1",
    name1: "Kaku",
    name2: "Shibun",
    realname: "郭 紫雯",
    realnameLang: "zh",
    role: "Profile Designer",
    bio: "カクは静かな観察からビジュアルシステムを組み立て、ありふれたキャンパスの風景を構成された映画的な断片へと置き換える。",
    image: memberResumeImage("pw1"),
    accent: "#ebe6dc",
    profile: {
      template: "soda",
      windowStyle: {
        "--profile-window-line": "#ffd1e4"
      },
      astro: "てんびん座",
      birthday: "10月8日",
      q1: "みんなを集めて、展示みたいな一泊旅行を企画したい。",
      q2: "この場所で出会った視点が、これからの制作の土台になります。"
    },
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
    role: "Member",
    bio: "トウは人と人とのあいだにある空間を撮影し、距離、ぼかし、沈黙を能動的な構図の道具として用いる。",
    image: memberResumeImage("pw2"),
    accent: "#d6d1c7",
    profile: {
      template: "candy",
      windowStyle: {
        "--profile-window-header": "linear-gradient(90deg, #ff8fab, #ffc2d1)"
      },
      astro: "かに座",
      birthday: "7月22日",
      q1: "大きなフィルムカメラを買って、知らない街の朝を撮りに行きたい。",
      q2: "写真に写らない会話や空気まで、ずっと大切に覚えています。"
    },
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
    role: "Member",
    bio: "リは、タイポグラフィが静止したキャプションではなく生きている表面のように振る舞う、動的なアイデンティティを設計する。",
    image: memberResumeImage("pw3"),
    accent: "#d8d4ca",
    profile: {
      template: "mint",
      windowStyle: {
        "--profile-window-title": "#0f8c7a"
      },
      astro: "ふたご座",
      birthday: "6月3日",
      q1: "新しいPCとモニターをそろえて、動く文字の実験を何本も作りたい。",
      q2: "一人では出せなかった速さと発想を、みんなからもらいました。"
    },
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
    role: "Photo Designer",
    bio: "リョウはフィールドレコーディングと柔らかな電子音の質感を重ね、建築的でありながら親密に感じられる音楽をつくる。",
    image: memberResumeImage("pw4"),
    accent: "#ece7de",
    profile: {
      template: "soda",
      windowStyle: {
        "--profile-window-border": "#4262d9"
      },
      astro: "みずがめ座",
      birthday: "2月10日",
      q1: "録音機材を持って旅に出て、知らない場所の音だけで曲を作りたい。",
      q2: "みんなの声や足音も、この展示の大事な音として残っています。"
    },
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
    role: "Sub Leader",
    bio: "リンはブラウザを展示室として捉え、インタラクション、間合い、パフォーマンスをひとつの面へと形づくる。",
    image: memberResumeImage("pw5"),
    accent: "#cfcac0",
    profile: {
      template: "candy",
      windowStyle: {
        "--profile-window-card-bg": "#fffdfd"
      },
      astro: "おとめ座",
      birthday: "9月2日",
      q1: "ずっと触っていたくなるようなWeb作品を、時間を気にせず作り込みたい。",
      q2: "同じ画面をのぞき込みながら考えた時間が、いちばんの宝物です。"
    },
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
    role: "Member",
    bio: "ロは抑制されたグリッド、大きなマーク、紙のような余白を使い、静かでありながら意思のある構成をつくる。",
    image: memberResumeImage("pw6"),
    accent: "#e5e0d6",
    profile: {
      template: "mint",
      windowStyle: {
        "--profile-window-qa-bg": "#f5fffc"
      },
      astro: "やぎ座",
      birthday: "1月6日",
      q1: "紙、インク、製本にぜんぶ使って、手で触れる作品集を作りたい。",
      q2: "余白の取り方まで一緒に悩める仲間に出会えてよかったです。"
    },
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

export const members = memberDefinitions.map((member) => ({
  ...member,
  wf: getWfByMemberId(member.id),
}));

export function getMemberById(id) {
  return members.find((member) => member.id === id);
}

export function getOtherMembers(id) {
  return members.filter((member) => member.id !== id);
}
