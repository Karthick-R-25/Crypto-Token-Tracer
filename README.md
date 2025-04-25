# 🚀 Crypto Dashboard with Random Live Updates using Redux

This project is built using [Create React App](https://github.com/facebook/create-react-app) and simulates a real-time cryptocurrency dashboard. It uses **Redux** to manage state and updates coin prices, volume, and 24H % changes **randomly every 2 seconds** to mimic live market behavior.

---

## 📦 Available Scripts

In the project directory, you can run:

### `npm start`

Starts the development server.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
Live updates run every 2 seconds via `setInterval` in the Redux slice.

### `npm run build`

Builds the app for production in the `build/` folder.  
Optimized for performance and ready to deploy.

---
# 🚀 Crypto Token Tracer

🔗 **Live Demo**: [https://karthick-r-25.github.io/Crypto-Token-Tracer/](https://karthick-r-25.github.io/Crypto-Token-Tracer/)

This is a real-time cryptocurrency dashboard that displays token data with randomized price, 24h %, and volume updates every 2 seconds using Redux and setInterval. Designed for performance, clarity, and interactivity.
## 📽 Demo Video

▶️ **[Watch on YouTube](https://youtu.be/rHvhKzcWWpQ)**

[![Watch the demo](https://img.youtube.com/vi/rHvhKzcWWpQ/hqdefault.jpg)](https://youtu.be/rHvhKzcWWpQ)

---

## 🧠 Project Overview

- **Random Data Simulation**:  
  The project uses a pre-defined dataset of cryptocurrencies (name, logo, etc.), and Redux injects new random values for price, volume, and 24H change every 2 seconds.

- **Redux State Management**:
  - Static values (coin name, logo, symbol) are preserved.
  - Dynamic values (price, volume, % change) are randomized using `Math.random()` inside Redux reducers.
  - `setInterval` triggers a Redux action every 2 seconds.
  - `clearInterval` ensures memory cleanup on unmount.

- **UI Layout**:
  - Live-updating table with color-coded values (green ↑ for increase, red ↓ for decrease).
  - Volume bar representation using `<progress>` or styled bars.
  - Icons and layout styled for clarity and speed reading.

---

## 🌐 Deployment

This app can be easily deployed using GitHub Pages or any static hosting platform.

### Deploy with GitHub Pages:

1. Install GitHub Pages:
   ```bash
   npm install gh-pages --save-dev
