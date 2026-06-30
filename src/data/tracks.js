const base = import.meta.env.BASE_URL;

const musicPath = (fileName) => `${base}music/${fileName}.mp3`;
const artworkPath = (fileName) => `${base}images/artworks/${fileName}.jpg`;

export const tracks = [
  {
    id: "pi1m",
    artist: "me time.",
    title: "Lil Shrimp Got Talent",
    src: musicPath("pi1"),
    artwork: artworkPath("pi1")
  },
  {
    id: "pi2m",
    artist: "Official髭男dism",
    title: "Pretender",
    src: musicPath("pi2"),
    artwork: artworkPath("pi2")
  },
  {
    id: "pw1m",
    artist: "Christell",
    title: "Dubidubidu",
    src: musicPath("pw1"),
    artwork: artworkPath("pw1")
  },
  {
    id: "pw2m",
    artist: "Uranzaya",
    title: "Ert Urdiin Domog",
    src: musicPath("pw2"),
    artwork: artworkPath("pw2")
  },
  {
    id: "pw3m",
    artist: "AKB48",
    title: "さよならクロール",
    src: musicPath("pw3"),
    artwork: artworkPath("pw3")
  },
  {
    id: "pw4m",
    artist: "桑田佳祐",
    title: "明日晴れるかな",
    src: musicPath("pw4"),
    artwork: artworkPath("pw4")
  },
  {
    id: "pw5m",
    artist: "Vivid BAD SQUAD",
    title: "DAYBREAK FRONTLINE",
    src: musicPath("pw5"),
    artwork: artworkPath("pw5")
  },
  {
    id: "pw6m",
    artist: "米津玄師",
    title: "Lemon",
    src: musicPath("pw6"),
    artwork: artworkPath("pw6")
  },
  {
    id: "ths1m",
    artist: "Mrs. GREEN APPLE",
    title: "僕のこと",
    src: musicPath("ths-ms"),
    artwork: artworkPath("ths-ms")
  },
  {
    id: "ths2m",
    artist: "WANDS",
    title: "世界が終るまでは…",
    src: musicPath("ths-dk"),
    artwork: artworkPath("ths-dk")
  },
  {
    id: "ths3m",
    artist: "サンボマスター",
    title: "できっこないをやらなくちゃ",
    src: musicPath("ths-mt"),
    artwork: artworkPath("ths-mt")
  },
  {
    id: "ths4m",
    artist: "MAN WITH A MISSION",
    title: "PANORAMA RADIO",
    src: musicPath("ths-ss"),
    artwork: artworkPath("ths-ss")
  }
];
