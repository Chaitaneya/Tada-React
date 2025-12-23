# ✨ Zen Tada App

A beautiful, feature-rich to-do application built with React and Vite. Stay productive while enjoying a calming, zen-inspired interface with music, animations, and achievement tracking.

## 🎯 Features

- **Task Management** - Create, complete, and delete tasks with ease
- **Zen Mode** - Distraction-free focused work environment with customizable timer
- **Theme Customization** - Light and dark mode with multiple color themes
- **Music Player** - Integrated background music to boost productivity
- **Cat Companion** - Animated Lottie cat that keeps you company
- **Achievements** - Unlock achievements and earn badges for milestones
- **Progress Tracking** - Visual progress meter and stats panel
- **Clock Display** - Real-time clock integrated into the UI
- **Reduced Motion Support** - Respects user's motion preferences for accessibility
- **Animations** - Smooth, engaging animations with Vanta.js backgrounds
- **Toast Notifications** - Achievement announcements with toasts

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Lightning-fast build tool
- **CSS** - Custom styling with theme system
- **Lottie** - Smooth animations
- **Vanta.js** - Interactive background effects
- **JavaScript (ES6+)** - Modern JavaScript features

## 📦 Installation

1. Clone the repository
```bash
git clone <repository-url>
cd to-do
```

2. Install dependencies
```bash
npm install framer-motion three vanta canvas-confetti lottie-react
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   ├── ThemeToggle.jsx
│   ├── ThemeSelector.jsx
│   ├── ZenMode/         # Zen mode components
│   ├── CatCompanion.jsx # Animated cat
│   ├── MusicPlayer.jsx  # Audio player
│   ├── ProgressMeter.jsx
│   ├── StatsPanel.jsx
│   └── ...
├── contexts/            # React Context providers
│   ├── ThemeProvider.jsx
│   ├── ZenProvider.jsx
│   └── todoContext.js
├── hooks/               # Custom React hooks
│   ├── useTheme.js
│   ├── useZenMode.js
│   ├── useAchievements.js
│   └── usePrefersReducedMotion.js
├── theme/               # Theme configuration
│   └── themes.js
└── assets/              # Static assets
    └── animations/      # Lottie animations
```

## 🎮 Usage

### Creating a Task
1. Enter your task in the input field
2. Click "Add Task" or press Enter
3. Your task appears in the list

### Zen Mode
1. Click the Zen Mode toggle
2. Set your desired focus time
3. Enter a distraction-free environment
4. Timer counts down to help you stay focused

### Changing Themes
- Use the Theme Selector to choose your preferred color scheme
- Toggle between light and dark modes
- Settings are saved locally

### Music Player
- Click the music player icon
- Select or upload your preferred background music
- Control volume and playback

### Achievements
- Complete tasks to earn achievements
- View your progress and statistics
- Unlock badges for milestones

## 🎨 Customization

### Themes
Edit `src/theme/themes.js` to add or modify color schemes.

### Sound Files
Place audio files in `public/` and reference them in the MusicPlayer component.

## ♿ Accessibility

- Respects `prefers-reduced-motion` system setting
- Full keyboard navigation support
- ARIA labels and semantic HTML
- High contrast theme options

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📄 License

Free to use and modify.

---

**Enjoy your zen productivity journey! 🧘‍♂️**
