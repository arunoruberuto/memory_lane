import { members } from "@/data/members";

// Shared question list — every member answers the same questions, so
// this is the ONE place to add more later (e.g. up to 12). Each person
// below just needs a matching entry in `answers` keyed by id.
export const QUESTIONS = [
  { id: "q1", label: "もし時間を戻せるなら、もう一度秋生としてHALに入学したいですか？理由は？" },
  { id: "q2", label: "プレデターが追い込むとどうしますか？" },
  { id: "q3", label: "もし過去に戻ったら何年前に戻りたい" },
  { id: "q4", label: "最後の晩餐に欠かせない一品" },
  { id: "q5", label: "ゴジラが襲撃するとどうする？" },
  { id: "q6", label: "もし生まれる国を選べるなら、どの国に生まれたいですか？" },
  { id: "q7", label: "自分の人生への一言" },
  { id: "q8", label: "この世界で一番好きな人は誰ですか？" },
  { id: "q9", label: "もし転生したら異世界の中でどんな職業をやりますか？" },
  { id: "q10", label: "無駄に頑張ったことはなに？" },
  { id: "q11", label: "もし五感（聴覚・視覚・触覚・味覚・嗅覚）を順番に失っていくとしたら、どんな順番が一番辛くないと思いますか？" },
  { id: "q12", label: "小学校に入学したばかりの自分に声をかけられるとしたら、何を言いたいですか？" },
];

const profileRoomImagePath = (fileName) =>
  `${import.meta.env.BASE_URL}images/profileroom/${fileName}`;

const PROFILE_ROOM_PINK = "#ff758c";

const roomDefinitions = [
  {
    id: "pi1",
    menuName: "ある",
    icon: "🐱",
    astro: "やぎ座 ♑",
    photo: profileRoomImagePath("PI01.webp"),
    answers: {
      q1: "無論です！HAL東京素晴らしい！先生たちが優しいし、設備もいいし、建物全体綺麗だし、内定もらう確率も高い！",
      q2: "とりあえず声かけて、ご飯に誘って、一緒にゲームします。笑",
      q3: "2009年！ビットコイン全力で買います！笑",
      q4: "ステーキ、マカロニ＆チーズ、あとマカロン！",
      q5: "逃げます！ :D",
      q6: "日本はいいな～　ポーランドも悪くない！",
      q7: "七転び八起き",
      q8: "イエス・キリスト～！",
      q9: "冒険する異世界なら、ヒーラーになりたいです（笑）。魔法使いも楽しそう！",
      q10: "卒業論文！ ;-;",
      q11: "味覚だね、かも。",
      q12: "もっと自分を信じろ、小僧。心を込めて頑張れば、何だってできるよ！",
    },
  },
  {
    id: "pi2",
    menuName: "きむ",
    icon: "🐰",
    astro: "うお座 ♓",
    photo: profileRoomImagePath("PI02.webp"),
    answers: {
      q1: "戻りたくない。もう一回入学してやり直しても同じ成績をもらう自信がないので。",
      q2: "嫌いな人がたくさんいる所まで逃げてその後プレデターにやられちゃう",
      q3: "30年前",
      q4: "アイスクリーム",
      q5: "ゴジラが落ち着くまでゴジラの踵にくっついちゃう。",
      q6: "ワカンダ",
      q7: "もっとちゃんとするべき",
      q8: "おかん",
      q9: "村人AかB",
      q10: "無駄に人の視線を気にしちゃった",
      q11: "嗅覚-触覚-味覚-聴覚-視覚",
      q12: "トイレは入学式の前に行こう",
    },
  },
  {
    id: "pw1",
    menuName: "かく",
    icon: "🐻",
    astro: "いて座 ♐",
    photo: profileRoomImagePath("PW01.webp"),
    answers: {
      q1: "春生のほうがいい！四年生もいいね",
      q2: "...逆に倒す?",
      q3: "幼少期",
      q4: "...最後の？！食欲あるの？",
      q5: "近くで見てみますw",
      q6: "天国？",
      q7: "死ぬまで生きろ",
      q8: "自分！",
      q9: "剣を持った魔法使い",
      q10: "ないかも",
      q11: "えええ...全部つらい",
      q12: "よく食べて、よく遊んで、楽しんでね",
    },
  },
  {
    id: "pw2",
    menuName: "とう",
    icon: "🐼",
    astro: "てんびん座 ♎",
    photo: profileRoomImagePath("PW02.webp"),
    answers: {
      q1: "はい。少人数のクラスが好きです。",
      q2: "逃げる。",
      q3: "12年前",
      q4: "重慶火鍋",
      q5: "逃げる。",
      q6: "オーストラリア",
      q7: "人生は短い。今を楽しもう。",
      q8: "自分",
      q9: "多分無職",
      q10: "特にない。",
      q11: "嗅覚、味覚、触覚、視覚、聴覚",
      q12: "全力で遊びましょう！",
    },
  },
  {
    id: "pw3",
    menuName: "り",
    icon: "🦊",
    astro: "しし座 ♌",
    photo: profileRoomImagePath("PW03.webp"),
    answers: {
      q1: "どっちでもオーケー。理由は秘密。",
      q2: "諦める",
      q3: "10年前",
      q4: "マーラータン",
      q5: "諦める",
      q6: "母国",
      q7: "認識されない存在は存在していない",
      q8: "母親",
      q9: "国王",
      q10: "ないかも",
      q11: "味覚・聴覚・視覚・触覚・嗅覚",
      q12: "あ？",
    },
  },
  {
    id: "pw4",
    menuName: "りょう",
    icon: "🐹",
    astro: "かに座 ♋",
    photo: profileRoomImagePath("PW04.webp"),
    answers: {
      q1: "四年制に入学したい、もっと色々作ったり、勉強したりしたいです。",
      q2: "追い払うまで戦う",
      q3: "20年前",
      q4: "焼肉",
      q5: "ゴジラの仲間になる",
      q6: "日本",
      q7: "たくさんの壁にぶつかったけれど、これからは全力で楽しみに行きます！",
      q8: "両親",
      q9: "無敵のニンジャ",
      q10: "変えられない他人を変えようとすること",
      q11: "触覚　味覚　嗅覚　聴覚　視覚",
      q12: "ちゃんと勉強しろ、ガキめ。この世を見抜き力を得るために",
    },
  },
  {
    id: "pw5",
    menuName: "りん",
    icon: "🐨",
    astro: "おとめ座 ♍",
    photo: profileRoomImagePath("PW05.webp"),
    questionsPerPage: 2,
    answers: {
      q1: "心の問題はさておき、戻れるならたぶんまた同じルートを選ぶと思う。ほどよい気温の時期に就活できるのはありがたいし、春生という正統派スケジュールからズレているぶん、ちょっとしたレア体験でもある。",
      q2: "「Beam me up, Scotty!（転送を頼む）」を連呼します。……作品が違う？ドンマイ、ドンマイ。",
      q3: "四十年前に戻って幻の黄金時代を吟味したい。ついでに地球温暖化も今ほど本気を出していないはず。",
      q4: "母の手作り餃子。具までちゃんと自作のやつ。",
      q5: "モスラを全力で布教する。ヘイル・モスラ",
      q6: "恭国（『十二国記』）。珠晶の民になりたい。",
      q7: "もうここらでよか。──ほんに？",
      q8: "明日の自分。何もかも任せている。一生会えないのが残念。",
      q9: "行商人。ダンジョンに隠居していて、勇者ご一行が来たら回復薬を通常価格の五倍で売るやつ。",
      q10: "他人に受け入れられるために自分を変えようとしたこと。着地点だけ見れば無駄だったとも言える。が、その中で「自分は何者か」をより理解できたので、フル無駄ではなかったことにしている。",
      q11: "嗅覚・味覚・触覚・聴覚・視覚。食べ物や遊びの楽しさは、まだ目から入る情報である程度想像できると思う。でも、視覚まで失ってしまったら、たぶんメンタルが情報に飢えて死んじまう気がする。",
      q12: "永遠の友情なんて貴様の性には合わない。だからこそ、「今」の友達を大事にするんだぞ。",
    },
  },
  {
    id: "pw6",
    menuName: "ろ",
    icon: "🐧",
    astro: "おうし座 ♉",
    photo: profileRoomImagePath("PW06.webp"),
    answers: {
      q1: "もう一回入学したいです。1周目で失敗したところを、2周目は全部やり直したいからです。",
      q2: "逃げます。",
      q3: "20年前です。人生を最初からやり直したいからです。",
      q4: "お母さんの料理です。",
      q5: "まず写真を撮ります。",
      q6: "日本",
      q7: "なんだかんだ、生き延びてます。",
      q8: "寝かせてくれる人です。",
      q9: "プログラマーです。異世界でもバグと戦います。",
      q10: "ゲームのレベル上げです。現実では何もレベルアップしませんでした。",
      q11: "嗅覚 → 味覚 → 触覚 → 聴覚 → 視覚です。",
      q12: "安心しろ。なんだかんだ大人にはなれる。",
    },
  },
];

const memberById = new Map(members.map((member) => [member.id, member]));

function getClassLabel(id) {
  return `${id.slice(0, 2).toUpperCase()}${id.slice(2).padStart(2, "0")}`;
}

const roomData = roomDefinitions.map((room) => {
  const member = memberById.get(room.id);

  if (!member) {
    throw new Error(`Missing member data for Profile Room ID: ${room.id}`);
  }

  return {
    ...room,
    name: member.realname,
    realnameLang: member.realnameLang,
    class: getClassLabel(member.id),
    color: PROFILE_ROOM_PINK,
    backCoverColor: PROFILE_ROOM_PINK,
  };
});

export default roomData;
