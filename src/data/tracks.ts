export type Track = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  mood: string;
  src: string;
};

export const tracks: Track[] = [
  {
    id: "room-tone",
    title: "Room Tone",
    artist: "PIPW Sound Archive",
    duration: 184,
    mood: "Soft field recording / opening",
    src: "/music/room-tone.mp3"
  },
  {
    id: "courtyard-drift",
    title: "Courtyard Drift",
    artist: "Mio Kawase",
    duration: 212,
    mood: "Warm ambient / gallery walk",
    src: "/music/courtyard-drift.mp3"
  },
  {
    id: "after-image",
    title: "After Image",
    artist: "Graduation Ensemble",
    duration: 156,
    mood: "Minimal pulse / closing",
    src: "/music/after-image.mp3"
  }
];
