const base = import.meta.env?.BASE_URL ?? "/";

export const wfQuestions = [
  {
    "id": "name",
    "label": "名前"
  },
  {
    "id": "hobby",
    "label": "趣味みたいなものは？"
  },
  {
    "id": "strength",
    "label": "長所みたいなのはどんなところ？"
  },
  {
    "id": "smallBoast",
    "label": "ちょこっとだけ自慢できることは？"
  },
  {
    "id": "currentInterest",
    "label": "最近ちょこっとハマっているものは？"
  },
  {
    "id": "recentDelicious",
    "label": "最近ものすごく美味い！と思ったのはなに？"
  },
  {
    "id": "favoriteFood",
    "label": "大大大好きな食べ物は？"
  },
  {
    "id": "dislikedFood",
    "label": "ちょっと嫌いな食べ物は？"
  },
  {
    "id": "firstThingHome",
    "label": "まず家に帰ってすることはなに？"
  },
  {
    "id": "nextThingHome",
    "label": "その次にすることは？"
  },
  {
    "id": "averageSleep",
    "label": "平均睡眠時間は？"
  },
  {
    "id": "wakeUpLeadTime",
    "label": "朝、出かける何時間前に起きる？"
  },
  {
    "id": "catchphrase",
    "label": "口癖は？"
  },
  {
    "id": "preference",
    "label": "何フェチ？"
  },
  {
    "id": "lottery",
    "label": "ロト6で80万当たったら！？"
  },
  {
    "id": "motto",
    "label": "えらそうな座右の銘は？"
  },
  {
    "id": "future",
    "label": "18年後なにしてる？"
  },
  {
    "id": "collection",
    "label": "とりあえず集めてるものは？"
  },
  {
    "id": "bloodType",
    "label": "体を流れている血の液体の型は？"
  },
  {
    "id": "pastLife",
    "label": "なんか前世はこんな人かな？"
  },
  {
    "id": "personalityType",
    "label": "ずばり！○○なタイプです！"
  }
];

const rawWfByMemberId = {
  "pi1": {
    "title": "プロフィール・ALFONSUS FERDINAND NORBERT",
    "mainImage": {
      "file": "img001.webp",
      "alt": "メインビジュアル : 夕焼け"
    },
    "answers": {
      "name": {
        "text": "ALFONSUS FERDINAND NORBERT (アルフォンスス フェルディナンド ノルベルト)",
        "images": []
      },
      "hobby": {
        "text": "夜中に歩いて景色を楽しむこと、心の安らぎを見つけるために。これは日本でしかできないですね。インドネシアはそんなに安全じゃないから。",
        "images": []
      },
      "strength": {
        "text": "我慢強いと思います。マー一般的な滅多に怒らない男だね。",
        "images": []
      },
      "smallBoast": {
        "text": "粘り強くて、きまったことが最後までにきちんと果たすこと（？）。分かりません ._.\"",
        "images": []
      },
      "currentInterest": {
        "text": "何もハマってないですね。多分、部屋の掃除とインテリアに少しハマっているかな。家に帰るときに気持ちよく感じたいからです。",
        "images": []
      },
      "recentDelicious": {
        "text": "原宿にある「ローストビーフ大野」の黒毛和牛丼定食。その美味しさが言葉で表せないほど美味しいです～",
        "images": [
          {
            "file": "img003.webp",
            "alt": "ローストビーフ大野"
          }
        ]
      },
      "favoriteFood": {
        "text": "ステーキ！ミディアムレアの焼き加減は最高です～",
        "images": [
          {
            "file": "img002.webp",
            "alt": "ステーキOK"
          }
        ]
      },
      "dislikedFood": {
        "text": "ブロッコリー。ブロッコリーはヤバイ、全然食べられません。少しでも口に入ったら、すぐ吐きそうな感じを感じてる。",
        "images": []
      },
      "firstThingHome": {
        "text": "シャワーを浴びます。シャワーを浴びた後のサッパリした感じが最高です～",
        "images": []
      },
      "nextThingHome": {
        "text": "パジャマを着替えて、ベッドの上にゴロゴロする。",
        "images": []
      },
      "averageSleep": {
        "text": "6時間。毎日早くて夜12.30時寝ます。",
        "images": []
      },
      "wakeUpLeadTime": {
        "text": "1時間前です。8時出発で7時起きることにする。コーヒーを淹れて、歯を磨いて、シャワーを浴びます。",
        "images": []
      },
      "catchphrase": {
        "text": "私の口癖はなんかいつも変わっている。今は「o my god」。前はベトナム語の悪口の「du ma」です。ベトナム人の友達から感染された。",
        "images": []
      },
      "preference": {
        "text": "笑顔ですね。人の笑顔を見たら、心がポカポカになるから。",
        "images": []
      },
      "lottery": {
        "text": "全部貯金します。",
        "images": []
      },
      "motto": {
        "text": "「毎日、心の扉の前に立ち、見張りをしなさい」。自分の思考や意識に何を取り入れるかについて、警戒することの重要性を強く思い出させるもの。",
        "images": []
      },
      "future": {
        "text": "大学の工学部に入ったが、でも事情があったため、中退してしまいました～",
        "images": []
      },
      "collection": {
        "text": "古い切手を集めます～ 今はもうあんまりやってないけど。",
        "images": [
          {
            "file": "img004.webp",
            "alt": "切手コレクション"
          }
        ]
      },
      "bloodType": {
        "text": "私は O 型です。面白いなことに、私の家族は皆 O 型です～",
        "images": []
      },
      "pastLife": {
        "text": "分からないな。今は一人旅が好きなので、前世は旅人かも。",
        "images": []
      },
      "personalityType": {
        "text": "スーパー普通の人。合ってると思います、私あんまり目立つしたくないんだから。",
        "images": []
      }
    }
  },
  "pi2": {
    "title": "🌸 My Profile 🌸",
    "mainImage": {
      "file": "maopaisen.webp",
      "alt": "タイトル画像"
    },
    "answers": {
      "name": {
        "text": "Kim Byoungsoo",
        "images": []
      },
      "hobby": {
        "text": "行ったことないところと行ったことあるところの散歩",
        "images": []
      },
      "strength": {
        "text": "トイシブ",
        "images": []
      },
      "smallBoast": {
        "text": "好きな声優さんと挨拶した",
        "images": [
          {
            "file": "erich.webp",
            "alt": "えりちとうさぎ画像"
          }
        ]
      },
      "currentInterest": {
        "text": "シャニマス(実はシャニソン)",
        "images": [
          {
            "file": "shanison.webp",
            "alt": "シャニソンのフルコンプ画像"
          }
        ]
      },
      "recentDelicious": {
        "text": "大阪本場のたこ焼き",
        "images": [
          {
            "file": "honbatakoyaki.webp",
            "alt": "麻央パイセンのたこ焼き画像"
          }
        ]
      },
      "favoriteFood": {
        "text": "アイスクリーム全般",
        "images": []
      },
      "dislikedFood": {
        "text": "ドリアン・セロリー",
        "images": []
      },
      "firstThingHome": {
        "text": "手を洗う",
        "images": []
      },
      "nextThingHome": {
        "text": "何かを飲む",
        "images": []
      },
      "averageSleep": {
        "text": "5,6時間",
        "images": []
      },
      "wakeUpLeadTime": {
        "text": "大体1時間前",
        "images": []
      },
      "catchphrase": {
        "text": "すみません、もしくはすいません",
        "images": []
      },
      "preference": {
        "text": "顔フェチ（面食い）",
        "images": []
      },
      "lottery": {
        "text": "クレーンゲームやり放題",
        "images": []
      },
      "motto": {
        "text": "MURISEZU Hodoyoku",
        "images": [
          {
            "file": "Hodoyoku.webp",
            "alt": "MURISEZU Hodoyoku画像"
          }
        ]
      },
      "future": {
        "text": "多分死んでいるかも",
        "images": []
      },
      "collection": {
        "text": "学マスグッズ",
        "images": [
          {
            "file": "gakumasu.webp",
            "alt": "ちびぬい画像"
          }
        ]
      },
      "bloodType": {
        "text": "O型",
        "images": []
      },
      "pastLife": {
        "text": "とにかく罪が深いやつ",
        "images": []
      },
      "personalityType": {
        "text": "くだらないやつです。",
        "images": []
      }
    },
    "special": {
      "type": "randomMessage",
      "label": "あなたのための一言",
      "messages": [
        "幸せとは問題を抱えているか、いないかということじゃない。誰でも問題は抱えているけど、みんなが不幸せなわけじゃない。",
        "やってしまったことは取り返しがつかない。でもやらずにそのままになっているものはそのままにしてはいけないよ。",
        "やってみないとわからないよ。",
        "ささやかなものを楽しめ",
        "大いなる力には大いなる責任が伴う。",
        "時には歩く前に、走らねばならない。",
        "3000回愛してる。",
        "顔が全てじゃない。",
        "誰しも真の愛に出会う資格がある。",
        "夢を信じ続けましょう。そうすれば、いつの日か虹がほほ笑みかけてくれるわ。",
        "どんなにあなたの心が深い悲しみに満ちても、信じ続ければあなたの望む夢は実現するわ。",
        "奇跡でさえ起こるのには時間がかかるものなの。",
        "周りを見回せば、幸せはあなたの元にあると、いつかそう気付く日が来るわ。",
        "外見に騙されてはいけない。美は内面に宿るのだから。",
        "何かの夢を一度見たら、それは必ず叶うって言われてるわ。そして私は何度も彼を夢で見たの。",
        "私の夢は私の夢で終わらなければならないって誰が言ったの？",
        "特別な人になるには何が必要なのかしら？それは全部人によると思う。 だからこそ私たちみんなユニークなのよ。",
        "大事なのは外見じゃない、中身だ！",
        "必要なのは、ただ信じる事さ。",
        "昨日になんて戻れない、だって昨日と今日の私は別人よ。",
        "徳とは、我々にとって中庸である行為を選択する態度である。",
        "自分自身の中身をよく見つめろ。本当のお前は今のお前以上なんだぞ。",
        "どうしたってどうにもならないことは時々起こるんだ。起こる前から心配する必要なんてないさ。",
        "人生はただ観てるだけのスポーツじゃないんだ。",
        "答えは目の前にある、近づき過ぎて逆に見えなかったんだ。",
        "受け入れずして思想をたしなむことができれば、それが教育された精神の証である。",
        "善良な私人が、善良な公人であるとは、限らない。",
        "人が想像できることは、必ず人が実現できる。",
        "夢なき者に理想なし、理想なき者に計画なし、計画なき者に実行なし、実行なき者に成功なし。故に、夢なき者に成功なし。",
        "私心さえ除き去るなら、進むもよし退くもよし、出るもよし出ざるもよし。",
        "大器をつくるには、いそぐべからずこと。",
        "人間にとっていちばん大切なのは、愛と人道だ",
        "何かを始めることはやさしいが、それを継続することは難しい。成功させることはなお難しい。",
        "人を信じよ、しかし、その百倍も自らを信じよ。",
        "初心を忘れないことっていうのは大事ですが、初心でプレイをしていてはいけないのです",
        "誰にでも可能性はある、私も最初はゼロだった。",
        "偉大な仕事をする唯一の方法は、自分の仕事を愛することだ。",
        "昨日から学び、今日のために生きて、明日に希望を持て。大切なのは、疑問を持つのをやめないことだ。",
        "勇気がなければ、他のすべての資質は意味をなさない。",
        "明日死ぬかのように生きよ。永遠に生きるかのように学べ。",
        "自分に打ち勝つことが、最も偉大な勝利である。",
        "人生とは自転車のようなものだ。倒れないようにするには走らなければならない。",
        "遅い出発とよく言われるが、人生に遅すぎるということはない。",
        "最大のコストは時間である。",
        "今日の失敗は、工夫を続けてさえいれば、必ず明日の成功に結びつく。",
        "問題は未来だ。だから私は、過去を振り返らない。",
        "成功は、最低の教師だ。優秀な人間をたぶらかして、失敗などありえないと思い込ませてしまう。",
        "人生は公平ではない。そのことに慣れよう。",
        "成功を祝うのはいいが、もっと大切なのは失敗から学ぶことだ。",
        "毎回の瞬間が贈り物さ"
      ]
    }
  },
  "pw1": {
    "title": "プロフィール・郭紫雯",
    "mainImage": {
      "file": "img001.webp",
      "alt": "メインビジュアル:ネコちゃん1"
    },
    "answers": {
      "name": {
        "text": "郭紫雯（かくしぶん）",
        "images": []
      },
      "hobby": {
        "text": "旅行。でもネコがいるので、だいたい日帰りになる。2週間旅行しないと壊れたようになってしまう。",
        "images": []
      },
      "strength": {
        "text": "実行力が高い。",
        "images": []
      },
      "smallBoast": {
        "text": "私が育てている植物も猫も健康に生きている。",
        "images": [
          {
            "file": "img002.webp",
            "alt": "猫と植物の写真"
          },
          {
            "file": "img003.webp",
            "alt": "ネコちゃん２"
          }
        ]
      },
      "currentInterest": {
        "text": "園芸。たくさんの植物を買った。",
        "images": []
      },
      "recentDelicious": {
        "text": "山手ラーメン！雪ラーメンは名物だ。ニンニクと黒コショウをたくさん入れると、すごく美味しい！",
        "images": [
          {
            "file": "img004.webp",
            "alt": "ラーメンの写真"
          }
        ]
      },
      "favoriteFood": {
        "text": "寿司、刺身、天麩羅、焼肉ライクの定食と明太子高菜ごはん全部大大大好き！",
        "images": [
          {
            "file": "img005.webp",
            "alt": "明太子高菜ごはんの写真"
          }
        ]
      },
      "dislikedFood": {
        "text": "ピーマン大嫌い。",
        "images": []
      },
      "firstThingHome": {
        "text": "ネコちゃんを呼んで。",
        "images": []
      },
      "nextThingHome": {
        "text": "横になる。",
        "images": []
      },
      "averageSleep": {
        "text": "8時間かな。（4時間と12時間の場合もある）",
        "images": []
      },
      "wakeUpLeadTime": {
        "text": "三十分前に起きる。私にとって起きることは本当に難しいすぎる。",
        "images": []
      },
      "catchphrase": {
        "text": "特にない。",
        "images": []
      },
      "preference": {
        "text": "匂いフェチ。",
        "images": []
      },
      "lottery": {
        "text": "世界旅行をする。",
        "images": []
      },
      "motto": {
        "text": "何があっても、とにかくやってみよう。",
        "images": []
      },
      "future": {
        "text": "退職するつもり。",
        "images": []
      },
      "collection": {
        "text": "さまざまな地域のスタンプと御朱印を集めている。",
        "images": []
      },
      "bloodType": {
        "text": "特に検査することがない。母はB、父はA。",
        "images": []
      },
      "pastLife": {
        "text": "たぶん不幸な人かな？今世は幸せだから。",
        "images": []
      },
      "personalityType": {
        "text": "真面目なおばあちゃん..",
        "images": []
      }
    }
  },
  "pw2": {
    "title": "プロフィール・董豪",
    "mainImage": {
      "file": "img001.webp",
      "alt": "メインビジュアル：旅行写真"
    },
    "answers": {
      "name": {
        "text": "董豪（とうごう）",
        "images": []
      },
      "hobby": {
        "text": "旅行。中国の34省市自治区のうち30に行ったことがある。",
        "images": []
      },
      "strength": {
        "text": "時間を守る意識が強い。",
        "images": []
      },
      "smallBoast": {
        "text": "日本語学校の在学期間に遅刻したことは一度もない。",
        "images": []
      },
      "currentInterest": {
        "text": "おにぎり。最近の朝食はこればかり食べている。",
        "images": []
      },
      "recentDelicious": {
        "text": "キムパプ。近所の韓国スーパーで買った。",
        "images": []
      },
      "favoriteFood": {
        "text": "火鍋。中国重慶の名物料理。",
        "images": [
          {
            "file": "img002.webp",
            "alt": "火鍋写真"
          }
        ]
      },
      "dislikedFood": {
        "text": "パクチー。生理的に無理。",
        "images": []
      },
      "firstThingHome": {
        "text": "シャワーを浴びる。これしないと落ち着かない。",
        "images": []
      },
      "nextThingHome": {
        "text": "食事をする。お腹空いたまま寝られない。",
        "images": []
      },
      "averageSleep": {
        "text": "7時間。",
        "images": []
      },
      "wakeUpLeadTime": {
        "text": "30分。",
        "images": []
      },
      "catchphrase": {
        "text": "やばっ。",
        "images": []
      },
      "preference": {
        "text": "美しいところ全部。",
        "images": []
      },
      "lottery": {
        "text": "カナダ旅行に行って、バンフ国立公園とオーロラを見たい。",
        "images": []
      },
      "motto": {
        "text": "継続は力なり。",
        "images": []
      },
      "future": {
        "text": "どこかの国で旅行をしている。",
        "images": []
      },
      "collection": {
        "text": "レジ袋。レジ袋有料化になってからずっと集めてる。",
        "images": []
      },
      "bloodType": {
        "text": "調べたことがなくて分からないが、O型の気がする。",
        "images": []
      },
      "pastLife": {
        "text": "現世は男なので、前世は女だったかもしれない。",
        "images": []
      },
      "personalityType": {
        "text": "珍しい妖精。",
        "images": []
      }
    }
  },
  "pw3": {
    "title": "プロフィール・リゲン",
    "mainImage": {
      "file": "img001.webp",
      "alt": "メインビジュアル：花"
    },
    "answers": {
      "name": {
        "text": "リゲン",
        "images": []
      },
      "hobby": {
        "text": "推し活",
        "images": [
          {
            "file": "img002.webp",
            "alt": "イメージ：推したち"
          }
        ]
      },
      "strength": {
        "text": "ないと思う",
        "images": []
      },
      "smallBoast": {
        "text": "掃除の速度が速い",
        "images": []
      },
      "currentInterest": {
        "text": "柔軟剤の組み合わせ",
        "images": []
      },
      "recentDelicious": {
        "text": "カニ",
        "images": []
      },
      "favoriteFood": {
        "text": "すべでの鶏肉料理、カニ、エビ",
        "images": []
      },
      "dislikedFood": {
        "text": "ピーマン、にんじん、生姜",
        "images": []
      },
      "firstThingHome": {
        "text": "手を洗う",
        "images": []
      },
      "nextThingHome": {
        "text": "ルームウェアを着かえる",
        "images": []
      },
      "averageSleep": {
        "text": "８時間",
        "images": []
      },
      "wakeUpLeadTime": {
        "text": "１時間",
        "images": []
      },
      "catchphrase": {
        "text": "特にない",
        "images": []
      },
      "preference": {
        "text": "顔、小動物のような顔一番タイプ",
        "images": []
      },
      "lottery": {
        "text": "すぐ引っ越しする",
        "images": []
      },
      "motto": {
        "text": "特にない",
        "images": []
      },
      "future": {
        "text": "普通な仕事",
        "images": []
      },
      "collection": {
        "text": "推しの直筆チェキ",
        "images": []
      },
      "bloodType": {
        "text": "o型",
        "images": []
      },
      "pastLife": {
        "text": "前世は人類じゃないと思う",
        "images": []
      },
      "personalityType": {
        "text": "フレンドリーな弱虫タイプかなぁ",
        "images": []
      }
    }
  },
  "pw4": {
    "title": "プロフィール・廖翔",
    "mainImage": {
      "file": "img001.webp",
      "alt": "メインビジュアル：鳥居"
    },
    "answers": {
      "name": {
        "text": "廖翔（リョウショウ）",
        "images": []
      },
      "hobby": {
        "text": "剣道かな、ずっとやっているですけど、趣味より習慣かと、でも最近忙しくて、近くの道場との連絡はまだ返信こないから、ちょっと残念。",
        "images": []
      },
      "strength": {
        "text": "観察力かな？ついつい細かいことを見つめる、変なところが多いですけど。",
        "images": []
      },
      "smallBoast": {
        "text": "紙をきれいにきりわける (*｀ω´*)ﾄﾞﾔｯ",
        "images": []
      },
      "currentInterest": {
        "text": "最近は神社巡りにちょっとハマっている、かヶ所にある神社に行き、静かに景色を見ながら、参拝して、御朱印を集めるのは、とても幸せと感じる。",
        "images": []
      },
      "recentDelicious": {
        "text": "先日食べた横濱家系醬油豚骨ラーメン、とても美味しかった、泣くほどに！",
        "images": [
          {
            "file": "img002.webp",
            "alt": "ラーメンの写真"
          }
        ]
      },
      "favoriteFood": {
        "text": "揚げ物が大好きです、豚カツや、天ぷらや、エビフライなど、そとはサクサク、中はジューシーしてて、香ばしくて、美味い。",
        "images": []
      },
      "dislikedFood": {
        "text": "内臓系な食べ物が苦手、生臭いし、食感も好きじゃないので。",
        "images": []
      },
      "firstThingHome": {
        "text": "家に着いたら、まずご飯を炊く、一番時間がかかるから、お腹も空いたから。",
        "images": []
      },
      "nextThingHome": {
        "text": "ご飯を炊いてる間に料理したり、飲み物を飲んだり、少し休憩したりします。",
        "images": []
      },
      "averageSleep": {
        "text": "6～7時間ぐらい、最近睡眠あまりよくない。",
        "images": []
      },
      "wakeUpLeadTime": {
        "text": "毎朝出かける約2時間前に起きます。",
        "images": []
      },
      "catchphrase": {
        "text": "まあ...な",
        "images": []
      },
      "preference": {
        "text": "自分もよくわからないが、多分目か、唇かな。",
        "images": []
      },
      "lottery": {
        "text": "学費として貯める (˶ᐢωᐢ˶)",
        "images": []
      },
      "motto": {
        "text": "①鬼手佛心！ ②一期一会！ ③俺の死に場所は俺がきめる！",
        "images": [
          {
            "file": "img003.webp",
            "alt": "字画写真"
          }
        ]
      },
      "future": {
        "text": "富士山を登っている～～",
        "images": []
      },
      "collection": {
        "text": "軌跡シリーズのゲームディスクずっと集めている。",
        "images": []
      },
      "bloodType": {
        "text": "覚えないな、でも両親どちらもA型だから、自分も多分A型です。",
        "images": []
      },
      "pastLife": {
        "text": "医者だそうです。",
        "images": []
      },
      "personalityType": {
        "text": "え、ちょっと痛いドSで、ヤバいすぎじゃない？",
        "images": []
      }
    }
  },
  "pw5": {
    "title": "プロフィール・林秋静",
    "mainImage": {
      "file": "img001.webp",
      "alt": "メインビジュアル：六義園入り口付近"
    },
    "answers": {
      "name": {
        "text": "林秋静（リンシュウセイ）。「静かな秋の林」というイメージで覚えてもいい。",
        "images": []
      },
      "hobby": {
        "text": "音ゲーと路上観察。",
        "images": []
      },
      "strength": {
        "text": "場の空気を素早く読むところ。（スマートに対応できるとは言っていない）",
        "images": []
      },
      "smallBoast": {
        "text": "自慢をあまりしないこと。",
        "images": []
      },
      "currentInterest": {
        "text": "御朱印集め。最近は雑司が谷七福神を一巡したところ。",
        "images": []
      },
      "recentDelicious": {
        "html": "「<ruby>洋麺屋<rt>ようめんや</rt>五右衛門<rt>ごえもん</rt></ruby>」という店のパスタ。おすすめの一品は、「海老とアボカドとモッツァレラチーズのジェノベーゼ」。",
        "images": [
          {
            "file": "img002.webp",
            "alt": "ジェノベーゼ"
          }
        ]
      },
      "favoriteFood": {
        "html": "<ruby>蝦餃<rt>ハーガオ</rt></ruby>。ニラを入れとも良い。",
        "images": []
      },
      "dislikedFood": {
        "html": "<ruby>牡蠣<rt>ぼれい</rt></ruby>。天ぷらにしても無理。",
        "images": []
      },
      "firstThingHome": {
        "text": "（門を閉めて靴を脱いでから）窓際の風鈴を鳴らして気分をリセット。",
        "images": []
      },
      "nextThingHome": {
        "text": "部屋着に着替える。夏なら風呂直行ことも多い。",
        "images": []
      },
      "averageSleep": {
        "text": "3時間未満（平日）～10時間（休日）",
        "images": []
      },
      "wakeUpLeadTime": {
        "text": "最短1/6時間（10分）前。でもイベントなどの前だと気張りすぎて徹夜することも少なくない。",
        "images": []
      },
      "catchphrase": {
        "text": "「そんなことないよ」",
        "images": []
      },
      "preference": {
        "text": "音フェチ。週に二、三回はASMRを聞きながら眠りにつく。",
        "images": []
      },
      "lottery": {
        "text": "北欧に十日間旅行決行！",
        "images": []
      },
      "motto": {
        "text": "過去はかわらず、未来はわからず。",
        "images": []
      },
      "future": {
        "text": "穏やかに生きている（ならいいなと思う）。",
        "images": []
      },
      "collection": {
        "html": "「ねこあつめ」ならぬ「フクロウあつめ」。（外でフクロウの像やイラストを見つけたらパシャリ）<br />それと、駅スタンプ（JR、東京メトロ中心）",
        "images": [
          {
            "file": "img003.webp",
            "alt": "東京メトロ全駅スタンプラリー"
          }
        ]
      },
      "bloodType": {
        "text": "万能供血者のO型。のわりに意外と好き嫌いが激しいかもしれない。",
        "images": []
      },
      "pastLife": {
        "html": "人ではなく人魚らしい。うまそう。（診断メーカーさん <a href=\"https://shindanmaker.com/853687\">https://shindanmaker.com/853687</a> より）",
        "images": []
      },
      "personalityType": {
        "text": "おしゃれなゴリラ（ｷﾘｯ）音ゲーマーとしてゴリラ（※最上級者ユーザー）になりたい時期もあったが地力が足りなくて断念。",
        "images": []
      }
    }
  },
  "pw6": {
    "title": "プロフィール・ロ　セイゼンエン",
    "mainImage": {
      "file": "img001.webp",
      "alt": "メインビジュアル"
    },
    "answers": {
      "name": {
        "text": "ろう せいぜんえん",
        "images": []
      },
      "hobby": {
        "text": "アニメを見ること、音楽を聴くこと、ゲームをすることです。特に日常系のアニメが好きで、ゆっくり見ながら気分を落ち着かせる時間が好きです。",
        "images": []
      },
      "strength": {
        "text": "一度やると決めたことは、最後までしっかりやり切るところだと思います。あまりすぐに諦めない性格です。",
        "images": []
      },
      "smallBoast": {
        "text": "Webサイトを作るときに、見た目だけではなく、使いやすさも意識して作れるところです。企画して、調べて、改善しながら完成度を上げるのが得意です。",
        "images": []
      },
      "currentInterest": {
        "text": "最近はWeb制作やサイトデザインを見ることに少しハマっています。どうすればもっと見やすくて、かっこいいページになるかを考えるのが楽しいです。",
        "images": []
      },
      "recentDelicious": {
        "text": "焼肉です。特にやわらかいお肉を食べたときは、本当においしいなと思いました。ご飯と一緒に食べると最高です。",
        "images": [
          {
            "file": "img003.webp",
            "alt": "好きな食べ物"
          }
        ]
      },
      "favoriteFood": {
        "text": "お肉です。特にステーキと焼肉が大好きです。しっかりした味のお肉を食べるとすごく幸せな気分になります。",
        "images": [
          {
            "file": "img002.webp",
            "alt": "ステーキ"
          }
        ]
      },
      "dislikedFood": {
        "text": "苦い野菜は少し苦手です。でも、食べられないほどではなくて、頑張れば食べられます。",
        "images": []
      },
      "firstThingHome": {
        "text": "まずベッドに座って少し休みます。そのあとスマホを見たり、音楽を流したりして気分を切り替えます。",
        "images": []
      },
      "nextThingHome": {
        "text": "アニメを見たり、ゲームをしたりします。疲れている日は、そのままゆっくりゴロゴロします。",
        "images": []
      },
      "averageSleep": {
        "text": "平均で6時間くらいです。もう少し早く寝たほうがいいと思いながら、つい遅くなってしまいます。",
        "images": []
      },
      "wakeUpLeadTime": {
        "text": "だいたい1時間前に起きます。準備をして、落ち着いてから出かけるようにしています。",
        "images": []
      },
      "catchphrase": {
        "text": "「やばい」とか「なんか」が多いと思います。気づいたらよく使っています。",
        "images": []
      },
      "preference": {
        "text": "声と雰囲気です。話し方がやさしい人や、落ち着いた雰囲気の人にひかれやすいです。",
        "images": []
      },
      "lottery": {
        "text": "半分は貯金して、残りは自分の好きなものに使いたいです。たとえばパソコンや趣味に使うと思います。",
        "images": []
      },
      "motto": {
        "text": "「やると決めたら最後までやる」です。途中で大変なことがあっても、できるだけ逃げずに頑張りたいと思っています。",
        "images": []
      },
      "future": {
        "text": "日本で安定して働きながら、自分らしく生活していたいです。仕事も私生活も少しずつ余裕のある大人になっていたいです。",
        "images": []
      },
      "collection": {
        "text": "特に集めているものはないですが、好きなアニメや音楽に関するものを見るとつい気になります。",
        "images": [
          {
            "file": "img004.webp",
            "alt": "趣味のイメージ"
          }
        ]
      },
      "bloodType": {
        "text": "O型です。",
        "images": []
      },
      "pastLife": {
        "text": "静かな場所で一人でのんびり過ごすのが好きなので、前世もたぶん落ち着いた性格の人だった気がします。",
        "images": []
      },
      "personalityType": {
        "text": "マイペースで、ちょっと静かなタイプです。でも、仲良くなるとよくしゃべるほうだと思います。",
        "images": []
      }
    }
  }
};

const resolveProjectImage = (memberId, image) => ({
  ...image,
  src: `${base}projects/${memberId}/images/${image.file}`,
});

export const wfByMemberId = Object.fromEntries(
  Object.entries(rawWfByMemberId).map(([memberId, profile]) => [
    memberId,
    {
      ...profile,
      mainImage: resolveProjectImage(memberId, profile.mainImage),
      questions: wfQuestions.map((question) => ({
        ...question,
        ...profile.answers[question.id],
        images: profile.answers[question.id].images.map((image) =>
          resolveProjectImage(memberId, image),
        ),
      })),
    },
  ]),
);

export function getWfByMemberId(id) {
  return wfByMemberId[id] ?? null;
}
