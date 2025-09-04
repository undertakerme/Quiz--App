# 🎯 Quiz Master - Interactive Quiz Application

A modern, responsive quiz application built with React that provides an engaging and educational experience for users of all skill levels.

![Quiz Master](https://img.shields.io/badge/React-18.2.0-blue) ![License](https://img.shields.io/badge/License-MIT-green) ![Status](https://img.shields.io/badge/Status-Active-brightgreen)

## ✨ Features

### 🎮 **Core Functionality**
- **Multiple Difficulty Levels**: Choose from Easy, Medium, or Hard questions
- **Bidirectional Navigation**: Navigate forward and backward through questions
- **Real-time Timer**: 30-second countdown timer for each question
- **Progress Tracking**: Visual progress bar showing quiz completion
- **Score Management**: Track current score and maintain high scores
- **Detailed Results**: Comprehensive breakdown of all answers

### 🎨 **Modern UI/UX**
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Beautiful Animations**: Smooth transitions and hover effects
- **Modern Design System**: Consistent colors, typography, and spacing
- **Interactive Elements**: Engaging buttons with visual feedback
- **Accessibility**: Keyboard navigation and screen reader support

### 📚 **Question Management**
- **24 Total Questions**: 8 questions per difficulty level
- **API Integration**: Fetches questions from Open Trivia Database
- **Local Fallback**: Uses local questions if API is unavailable
- **HTML Support**: Questions support special characters and formatting
- **Randomized Options**: Answer choices are shuffled for each question

### 🏆 **Performance Features**
- **High Score Tracking**: Persistent high score storage
- **Performance Analysis**: Detailed feedback based on score percentage
- **Answer Review**: See correct answers for missed questions
- **Restart Functionality**: Easy quiz restart with fresh questions

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quiz-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 How to Play

1. **Select Difficulty**: Choose from Easy 😊, Medium 🤔, or Hard 🧠
2. **Answer Questions**: Read each question and select your answer
3. **Navigate**: Use Previous/Next buttons to review or skip questions
4. **Timer**: Each question has a 30-second time limit
5. **View Results**: See your score, performance, and detailed breakdown
6. **Play Again**: Restart with new questions anytime

## 🏗️ Project Structure

```
quiz-game/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Start.js          # Welcome screen & difficulty selection
│   │   ├── Quiz.js           # Main quiz interface
│   │   ├── Question.js       # Individual question display
│   │   ├── Result.js         # Results and score display
│   │   └── Timer.js          # Countdown timer component
│   ├── data/
│   │   └── questions.json    # Local question database
│   ├── App.js               # Main application component
│   ├── App.css              # Main styles and design system
│   ├── index.js             # Application entry point
│   └── index.css            # Global styles and resets
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#6366f1) - Main actions and highlights
- **Secondary**: Emerald (#10b981) - Success states and positive feedback
- **Accent**: Amber (#f59e0b) - Timer and attention-grabbing elements
- **Danger**: Red (#ef4444) - Errors and negative feedback

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Responsive**: Scales appropriately across devices

### Components
- **Buttons**: Multiple variants (primary, secondary, outline, danger)
- **Cards**: Consistent spacing and shadow system
- **Progress**: Animated progress bars with shimmer effects
- **Forms**: Accessible input styling with focus states

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode with hot reloading.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production with optimizations.

### `npm run eject`
**⚠️ One-way operation** - Ejects from Create React App configuration.

## 🌐 API Integration

The application integrates with the [Open Trivia Database API](https://opentdb.com/) to fetch fresh questions:

- **Endpoint**: `https://opentdb.com/api.php`
- **Parameters**: 
  - `amount=8` (questions per quiz)
  - `difficulty=easy|medium|hard`
  - `type=multiple` (multiple choice)
- **Fallback**: Local questions if API is unavailable

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: 768px and above
- **Tablet**: 480px - 767px
- **Mobile**: Below 480px

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactions
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and logical tab order
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user's motion preferences

## 🎯 Question Categories

### Easy Questions (8 questions)
- Basic geography and world facts
- Elementary science concepts
- General knowledge
- Simple historical facts

### Medium Questions (8 questions)
- Intermediate science and physics
- Programming and technology
- World geography and culture
- Historical events and figures

### Hard Questions (8 questions)
- Advanced mathematics and physics
- Computer science concepts
- Complex historical and philosophical topics
- Specialized knowledge areas

## 🚀 Performance Optimizations

- **Lazy Loading**: Components load as needed
- **Efficient State Management**: Minimal re-renders
- **Optimized Images**: Compressed and responsive images
- **CSS Variables**: Consistent design system
- **Modern CSS**: Flexbox and Grid layouts

## 🔮 Future Enhancements

- [ ] **User Authentication**: Save progress and scores
- [ ] **Question Categories**: Filter by subject matter
- [ ] **Multiplayer Mode**: Compete with friends
- [ ] **Custom Quizzes**: Create your own question sets
- [ ] **Achievement System**: Unlock badges and rewards
- [ ] **Dark Mode**: Toggle between light and dark themes
- [ ] **Sound Effects**: Audio feedback for interactions
- [ ] **Offline Support**: PWA capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Open Trivia Database](https://opentdb.com/) for providing the question API
- [React](https://reactjs.org/) for the amazing framework
- [Create React App](https://create-react-app.dev/) for the development setup
- [Inter Font](https://fonts.google.com/specimen/Inter) for beautiful typography

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---

**Made with ❤️ and React**
