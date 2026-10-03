# Personal Portfolio (React + Tailwind CSS)

A responsive, single-page portfolio with light/dark themes and a live list of
public GitHub repositories.

---

## ⚡ Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) installed on your system.

### Installation & Local Setup

```bash
# 1. Clone the repository
git clone [https://github.com/ICBMAY/portfolio.git](https://github.com/ICBMAY/portfolio.git)
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the Vite development server
npm run dev


### Folder structure

```
src/
├── components/          # Reusable UI sections & elements
│   ├── Navbar.jsx       # Navigation header & light/dark mode switch
│   ├── Hero.jsx         # Intro banner & core calls-to-action
│   ├── About.jsx        # Personal background, experience & skills
│   ├── Projects.jsx     # Repository grid container & project cards
│   ├── Contact.jsx      # Contact information & email action
│   ├── Footer.jsx       # Social links & copyright
│   └── Section.jsx      # Reusable section layout wrapper
├── hooks/
│   └── useGithubRepos.js # Custom React hook for fetching GitHub API data
├── data/
│   └── profile.js       # Central configuration file for all personal content
├── App.jsx              # Main application entry component
├── index.css            # Tailwind CSS imports & color design tokens
└── main.jsx             # React DOM root render entry point
```

