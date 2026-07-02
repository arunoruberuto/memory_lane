export const profileWindowTemplates = {
  candy: {
    "--profile-window-border": "#ff477e",
    "--profile-window-shadow": "rgba(255, 71, 126, 0.4)",
    "--profile-window-header": "linear-gradient(90deg, #ff758c, #ff7eb3)",
    "--profile-window-content-bg": "#fff0f5",
    "--profile-window-card-bg": "#ffffff",
    "--profile-window-card-border": "#ff758c",
    "--profile-window-title": "#ff477e",
    "--profile-window-label": "#ff758c",
    "--profile-window-line": "#bce6ff",
    "--profile-window-qa-bg": "#f0f8ff",
    "--profile-window-qa-title": "#00b4d8",
    "--profile-window-answer": "#ff477e",
    "--profile-window-scroll-track": "#ffe4ef",
    "--profile-window-scroll-thumb": "#ff758c"
  },
  mint: {
    "--profile-window-border": "#2fbf9f",
    "--profile-window-shadow": "rgba(47, 191, 159, 0.35)",
    "--profile-window-header": "linear-gradient(90deg, #20bfa3, #7ddfc9)",
    "--profile-window-content-bg": "#eefcf8",
    "--profile-window-card-bg": "#ffffff",
    "--profile-window-card-border": "#65d6bf",
    "--profile-window-title": "#168f79",
    "--profile-window-label": "#1da98f",
    "--profile-window-line": "#bee8ff",
    "--profile-window-qa-bg": "#f2fbff",
    "--profile-window-qa-title": "#2584b8",
    "--profile-window-answer": "#168f79",
    "--profile-window-scroll-track": "#d9f8f0",
    "--profile-window-scroll-thumb": "#20bfa3"
  },
  soda: {
    "--profile-window-border": "#5c7cff",
    "--profile-window-shadow": "rgba(92, 124, 255, 0.35)",
    "--profile-window-header": "linear-gradient(90deg, #5c7cff, #8bb8ff)",
    "--profile-window-content-bg": "#eef4ff",
    "--profile-window-card-bg": "#ffffff",
    "--profile-window-card-border": "#8bb8ff",
    "--profile-window-title": "#4262d9",
    "--profile-window-label": "#5c7cff",
    "--profile-window-line": "#ffd3e6",
    "--profile-window-qa-bg": "#fff6fb",
    "--profile-window-qa-title": "#cf5b92",
    "--profile-window-answer": "#4262d9",
    "--profile-window-scroll-track": "#dfe8ff",
    "--profile-window-scroll-thumb": "#5c7cff"
  }
};

export function getProfileWindowStyle(profile) {
  return {
    ...profileWindowTemplates[profile?.template],
    ...profile?.windowStyle
  };
}
