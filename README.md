# StockView

A simple stock viewing application built with React.

## Features

- View a list of stocks with real-time price information
- Search stocks by symbol, name, or sector
- View detailed stock information including market cap, volume, and 52-week high/low
- Clean, responsive UI with TailwindCSS

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **React Router** - Client-side routing
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── StockCard.jsx
│   └── StockList.jsx
├── data/            # Mock data and helpers
│   └── stocks.js
├── pages/           # Page components
│   ├── HomePage.jsx
│   └── StockDetailPage.jsx
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## License

MIT
