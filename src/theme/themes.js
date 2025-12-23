export const themes = {
  chit: {
  id: "chit",
  name: "Chit",
  vantaEffect: "CLOUDS",
  vantaConfig: {
    mouseControls: true,
    touchControls: true,
    skyColor: 0xff8c42,
    cloudColor: 0xffc37d,
    speed: 0.6,
  },
  fallbackGradient: "linear-gradient(135deg,#FF8C42,#FFD194)",

  // 🔥 UI colors (fixed)
  cardBg: "rgba(255, 243, 230, 0.92)",   // cream, not white
  text: "#2B1E14",
  mutedText: "rgba(43,30,20,0.6)",
  accent: "#FF8C42",
  border: "rgba(255,140,66,0.25)",
  shadow: "0 18px 50px rgba(0,0,0,0.18)",
},

  chat: {
    id: "chat",
    name: "Chat",

    // Background
    vantaEffect: "NETS",
    vantaConfig: {
      mouseControls: true,
      touchControls: true,
      backgroundColor: 0x0b1020,
      color: 0x6ee7ff,
      points: 10,
      maxDistance: 24,
    },
    fallbackGradient: "linear-gradient(135deg,#0B1020,#121A2F)",

    // Card / UI
    cardBg: "rgba(18,24,45,0.85)",
    text: "#EAF6FF",
    mutedText: "#9CA3AF",
    accent: "#6EE7FF",
    border: "rgba(255,255,255,0.08)",
    shadow: "0 18px 55px rgba(0,0,0,0.55)",

    // Buttons
    buttonBg: "linear-gradient(135deg,#6EE7FF,#3FBAC2)",
    buttonText: "#0B1020",
  },
  zen: {
  id: "zen",
  name: "Zen",
  vantaEffect: "CLOUDS",
  vantaConfig: {
    mouseControls: false,
    touchControls: false,
    skyColor: 0x0f172a,
    cloudColor: 0x94a3b8,
    cloudShadowColor: 0x020617,
    speed: 0.3,
  },
  fallbackGradient: "linear-gradient(135deg,#020617,#0f172a)",
  cardBg: "rgba(15,23,42,0.65)",
  text: "#E5E7EB",
  textSecondary: "#94A3B8",
  accent: "#38BDF8",
  border: "rgba(255,255,255,0.08)",
  shadow: "0 20px 60px rgba(0,0,0,0.6)",
}

};

export const getDefaultTheme = () => themes.chit;
