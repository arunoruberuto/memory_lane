const base = import.meta.env.BASE_URL;

export const members = [
  {
    id: "kaku",
    name: "Kaku Shibun",
    realname: "郭紫ブン",
    role: "Creative Direction",
    bio: "Aoi builds visual systems from quiet observations, translating ordinary campus scenes into composed, cinematic fragments.",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#d8d4ca",
    statement:
      "Graduation is treated as a threshold: a room where unfinished questions can still glow.",
    tags: ["direction", "installation", "editorial"],
    works: [
      { title: "Room Tone", medium: "Short Film", year: "2026" },
      { title: "Archive of Light", medium: "Installation", year: "2025" }
    ]
  },
  {
    id: "tou",
    name: "Tou Gou",
    realname: "董豪",
    role: "Photography",
    bio: "Hana photographs the space between people, using distance, blur, and silence as active compositional tools.",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#ece7de",
    statement:
      "A photograph can be less about proof and more about remembering how air felt.",
    tags: ["photo", "portrait", "memory"],
    works: [
      { title: "After the Bell", medium: "Photo Series", year: "2026" },
      { title: "Blue Hallway", medium: "Zine", year: "2025" }
    ]
  },
  {
    id: "li",
    name: "Li Gen",
    realname: "李ゲン",
    role: "Motion Design",
    bio: "Ren designs kinetic identities where typography behaves like a living surface instead of a static caption.",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#cfcac0",
    statement:
      "Movement gives typography a pulse, and the pulse tells the viewer where to look next.",
    tags: ["motion", "type", "identity"],
    works: [
      { title: "Signal Study", medium: "Motion Poster", year: "2026" },
      { title: "Nine Seconds", medium: "Title Sequence", year: "2025" }
    ]
  },
  {
    id: "syou",
    name: "Ryou Shou",
    realname: "廖翔",
    role: "Music",
    bio: "Mio layers field recordings and soft electronic textures into music that feels architectural and intimate.",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#e5e0d6",
    statement:
      "Music is the floor under the exhibition; even silence has a material weight.",
    tags: ["music", "field recording", "composition"],
    works: [
      { title: "Dust Loop", medium: "Music Piece", year: "2026" },
      { title: "Courtyard Drift", medium: "Music", year: "2025" }
    ]
  },
  {
    id: "rin",
    name: "Rin Syuusei",
    realname: "林秋静",
    role: "Web Engineering",
    bio: "Yuto treats the browser as an exhibition room, shaping interaction, pacing, and performance into a single surface.",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#f1eee8",
    statement:
      "An interface can feel handmade when every transition has a reason to exist.",
    tags: ["frontend", "interaction", "systems"],
    works: [
      { title: "Soft Cursor", medium: "Interactive Web", year: "2026" },
      { title: "Index Room", medium: "Archive Site", year: "2025" }
    ]
  },
  {
    id: "ro",
    name: "Ro Seizen",
    realname: "ロ世前エン",
    role: "Graphic Design",
    bio: "Rika uses restrained grids, oversized marks, and paper-like negative space to create calm but assertive compositions.",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#ddd7cc",
    statement:
      "A blank area is not empty when it is holding the work in exactly the right tension.",
    tags: ["print", "layout", "visual identity"],
    works: [
      { title: "Folded Index", medium: "Poster Set", year: "2026" },
      { title: "Margin Notes", medium: "Book Design", year: "2025" }
    ]
  },
  {
    id: "alfonsus",
    name: "Alfonsus Norbert",
    role: "Film Editing",
    bio: "Sora cuts images with a musician's sense of breath, making small pauses feel as important as dramatic turns.",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#ebe6dc",
    statement:
      "Editing is a way of listening to images until they reveal their own tempo.",
    tags: ["editing", "rhythm", "cinema"],
    works: [
      { title: "Handheld Weather", medium: "Short Film", year: "2026" },
      { title: "Cut Marks", medium: "Video Essay", year: "2025" }
    ]
  },
  {
    id: "kim",
    name: "Kim Byoungsoo",
    realname: "김 병수",
    role: "Art Direction",
    bio: "Mei composes sets, objects, and small rituals into visual worlds that feel slightly familiar and slightly impossible.",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#d6d1c7",
    statement:
      "The best props behave like evidence from a dream the audience almost remembers.",
    tags: ["objects", "set design", "worldbuilding"],
    works: [
      { title: "Table for Nine", medium: "Set Piece", year: "2026" },
      { title: "Borrowed Room", medium: "Photo Direction", year: "2025" }
    ]
  },
  {
    id: "Tamazaki",
    name: "Tamazaki Miharu",
    realname: "玉崎 美遥",
    role: "Writing",
    bio: "Kai writes concise exhibition texts and scripts that leave enough space for viewers to bring themselves into the work.",
    image: `${base}images/placeholders/portrait.svg`,
    accent: "#f5f1ea",
    statement:
      "A good caption opens a door, then gets out of the way before the viewer walks through.",
    tags: ["copy", "script", "concept"],
    works: [
      { title: "Caption Studies", medium: "Text Series", year: "2026" },
      { title: "Voice Memo", medium: "Script", year: "2025" }
    ]
  }
];

export function getMemberById(id) {
  return members.find((member) => member.id === id);
}

export function getOtherMembers(id) {
  return members.filter((member) => member.id !== id);
}
