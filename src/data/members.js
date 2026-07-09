const base = import.meta.env.BASE_URL;
const memberResumeImage = (id) => `${base}images/resume/${id}.jpg`;

export const members = [
  {
    id: "pi1",
    name1: "Alfonsus",
    name2: "Norbert",
    realname: "Alfonsus Ferdinand Norbert",
    realnameLang: "en",
    role: "リーダー",
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
        medium: "プロフィール記録",
        year: "2024",
        description:
          "幼少期の写真と記憶の断片、そして過去の自分と現在との不思議な距離感から構成した、コンパクトな個人Web作品。",
        url: `${base}projects/pi1/wfprofile/index.html`
      },
      { 
        id: "cut-marks",
        title: "Cut Marks", 
        medium: "映像エッセイ",
        year: "2025",
        description:
          "リズム、中断、目に見えない編集を探り、ひとつのカットにどれほどの意味を宿せるのかを問いかける作品。"
      }
    ]
  },
  {
    id: "pi2",
    name1: "Kim",
    name2: "Byoungsoo",
    realname: "김 병수",
    realnameLang: "ko",
    role: "アートディレクション",
    bio: "Meiはセット、オブジェ、小さな儀式を組み合わせ、どこか見覚えがありながら少し不可能にも感じられる視覚世界をつくる。",
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
        medium: "セット作品",
        year: "2026",
        description:
          "小道具や空席、ささやかな気配によって、集いの場がたった今フレームの外へ移ったかのように感じさせるテーブル空間。"
      },
      {
        id: "borrowed-room",
        title: "Borrowed Room",
        medium: "フォトディレクション",
        year: "2025",
        description:
          "ありふれた部屋を、記憶と色彩、借りものの親密さが宿る一時的な劇場として捉えた静かな写真作品。"
      }
    ]
  },
  {
    id: "pw1",
    name1: "Kaku",
    name2: "Shibun",
    realname: "郭 紫雯",
    realnameLang: "zh",
    role: "クリエイティブディレクション",
    bio: "Aoiは静かな観察からビジュアルシステムを組み立て、ありふれたキャンパスの風景を構成された映画的な断片へと置き換える。",
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
        medium: "短編映画",
        year: "2026",
        description:
          "キャンパスの光や静かな間、残響をたどりながら、何気ない日々の狭間にある場所の痕跡を映した短編映画。"
      },
      {
        id: "archive-of-light",
        title: "Archive of Light",
        medium: "インスタレーション",
        year: "2025",
        description:
          "投影された断片と反射する面を集め、移ろい、遅れ、光のゆるやかなアーカイブを形づくるインスタレーション。"
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
    role: "写真",
    bio: "Hanaは人と人とのあいだにある空間を撮影し、距離、ぼかし、沈黙を能動的な構図の道具として用いる。",
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
        medium: "写真シリーズ",
        year: "2026",
        description:
          "授業が終わり、人の動きの痕跡だけが廊下に残る、宙づりのような空気を捉えた写真シリーズ。"
      },
      {
        id: "blue-hallway",
        title: "Blue Hallway",
        medium: "Zine",
        year: "2025",
        description:
          "ぼやけた通路、冷たい光、記録と記憶の間にたたずむポートレートを集めた小型のZINE。"
      }
    ]
  },
  {
    id: "pw3",
    name1: "Ri",
    name2: "Gen",
    realname: "李 ゲン",
    realnameLang: "zh",
    role: "モーションデザイン",
    bio: "Renは、タイポグラフィが静止したキャプションではなく生きている表面のように振る舞う、動的なアイデンティティを設計する。",
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
        medium: "モーションポスター",
        year: "2026",
        description:
          "脈打つタイポグラフィ、タイミングの変化、グラフィックの信号によって、読む行為そのものを動きへ変えるモーションポスター。"
      },
      {
        id: "nine-seconds",
        title: "Nine Seconds",
        medium: "タイトルシーケンス",
        year: "2025",
        description:
          "アイデンティティ、速度、変化を、短く弾ける文字の動きへ凝縮したタイトルシーケンスの実験。"
      }
    ]
  },
  {
    id: "pw4",
    name1: "Ryou",
    name2: "Shou",
    realname: "リョウ ショウ",
    realnameLang: "zh",
    role: "音楽",
    bio: "Mioはフィールドレコーディングと柔らかな電子音の質感を重ね、建築的でありながら親密に感じられる音楽をつくる。",
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
        medium: "音楽作品",
        year: "2026",
        description:
          "フィールドレコーディング、柔らかなノイズ、反復する音を重ね、部屋のような時間感覚を生み出すサウンド作品。"
      },
      {
        id: "courtyard-drift",
        title: "Courtyard Drift",
        medium: "音楽",
        year: "2025",
        description:
          "屋外の響き、足音、電子的な質感から紡ぎ、公共空間と内面的な感覚の間を漂う穏やかな楽曲。"
      }
    ]
  },
  {
    id: "pw5",
    name1: "Rin",
    name2: "Shusei",
    realname: "林 秋静",
    realnameLang: "zh",
    role: "Webエンジニアリング",
    bio: "Yutoはブラウザを展示室として捉え、インタラクション、間合い、パフォーマンスをひとつの面へと形づくる。",
    image: memberResumeImage("pw5"),
    accent: "#cfcac0",
    profile: {
      template: "candy",
      windowStyle: {
        "--profile-window-card-bg": "#fffdfd"
      },
      astro: "おとめ座",
      birthday: "9月12日",
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
        medium: "インタラクティブWeb",
        year: "2026",
        description:
          "カーソルの動き、静かなトランジション、デジタル空間の触覚的な感覚に焦点を当てたインタラクティブなブラウザ作品。"
      },
      {
        id: "index-room",
        title: "Index Room",
        medium: "アーカイブサイト",
        year: "2025",
        description:
          "索引を部屋として捉え、文書や画像、経路を閲覧可能なフロアプランへ組み替えるアーカイブインターフェース。"
      }
    ]
  },
  {
    id: "pw6",
    name1: "Ro",
    name2: "Seizenen",
    realname: "娄 世前沿",
    realnameLang: "zh",
    role: "グラフィックデザイン",
    bio: "Rikaは抑制されたグリッド、大きなマーク、紙のような余白を使い、静かでありながら意思のある構成をつくる。",
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
        medium: "ポスターセット",
        year: "2026",
        description:
          "折り目、厳格なグリッド、大きな記号を用いて、印刷された空間をたどることのできる索引へ変えるポスターシステム。"
      },
      {
        id: "margin-notes",
        title: "Margin Notes",
        medium: "ブックデザイン",
        year: "2025",
        description:
          "余白にもうひとつの声や静かな注釈、見返すリズムを宿したブックデザインの実験。"
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
