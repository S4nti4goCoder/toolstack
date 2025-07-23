# 🧰 ToolStack - Compound Interest Calculator

> Modern, responsive web application for calculating daily investment returns based on effective annual rate.

## ✨ Features

- 🧮 **Accurate Calculations** - Convert annual effective rates to daily equivalent rates
- 📱 **Responsive Design** - Optimized for mobile and desktop devices
- 🎨 **Modern UI** - Clean interface with glassmorphism effects and smooth animations
- 📊 **Detailed Results** - Complete breakdown of gains, final amount, and daily rates
- 🔍 **Interactive Example** - Dedicated page with pre-loaded demonstration data
- ⚡ **Real-time Validation** - Instant form validation with helpful error messages
- 🎯 **Atomic Design** - Well-structured component architecture

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/S4nti4goCoder/toolstack.git

# Navigate to project directory
cd toolstack

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🛠️ Built With

| Technology       | Purpose                     | Version |
| ---------------- | --------------------------- | ------- |
| **React**        | Frontend framework          | 19.1.0  |
| **Vite**         | Build tool and dev server   | 7.0.4   |
| **Tailwind CSS** | Utility-first CSS framework | 4.1.11  |
| **React Router** | Client-side routing         | 7.7.0   |
| **Lucide React** | Beautiful icon library      | 0.525.0 |
| **React Helmet** | SEO and meta tag management | 2.0.5   |

## 📁 Project Structure

```
toolstack/
├── public/
│   ├── _redirects          # Netlify routing configuration
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── atoms/          # Basic building blocks (Button, Input, Card)
│   │   ├── molecules/      # Component combinations (FormField, ResultCard)
│   │   ├── organisms/      # Complex components (Calculator, Header, Footer)
│   │   ├── templates/      # Page layouts (AppLayout)
│   │   └── pages/          # Complete pages (HomePage, CalculatorPage)
│   ├── lib/                # Utility functions
│   ├── routes/             # Route configuration
│   ├── utils/              # Business logic (calculator functions)
│   └── App.jsx
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── package.json
```

## 🎯 How to Use

### Calculator Page

1. **Enter Initial Amount** - Input your investment amount in the first field
2. **Set Annual Rate** - Enter the effective annual interest rate as a percentage
3. **Specify Time Period** - Input the number of days for your investment
4. **Calculate Results** - Click "Calculate" to see detailed breakdown including:
   - Daily equivalent rate
   - Total gains over the period
   - Final amount after compound growth
   - Investment summary

### Example Page

- **Pre-loaded Demo** - View a working example with $1,000,000 invested at 12.5% annual rate for 365 days
- **Educational Tool** - Understand how compound interest works with real numbers
- **Try Calculator** - Use the "Use Calculator" button to create your own calculations

## 🧮 Calculation Formula

The application uses the compound interest formula with daily compounding:

```
Daily Rate = (1 + Annual Rate)^(1/365) - 1
Final Amount = Principal × (1 + Daily Rate)^Days
Total Gain = Final Amount - Principal
```

## 👨‍💻 Author

**Santiago Coder**

- GitHub: [@S4nti4goCoder](https://github.com/S4nti4goCoder)
- Portfolio: [https://portfolio-santiago-quintero.vercel.app/](https://portfolio-santiago-quintero.vercel.app/)

---