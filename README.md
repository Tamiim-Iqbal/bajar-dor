# 🛒 বাজার দর | BazarDor

**Know Today's Market Prices at a Glance**

বাজার দর is a responsive Bengali-language web application that helps users explore the latest prices of essential daily products across different markets. It provides product-wise price comparisons, daily price changes, category-based browsing, and market price summaries through a clean and user-friendly interface.

## 🌐 Live Demo

- **Live Website:** [Add Your Live Link](https://bajar-dor.vercel.app/)


## ✨ Features

- **📊 Today's Market Prices:** Browse essential product prices with daily price change indicators.
- **📈 Price Trend Sections:** Explore products whose prices have increased or decreased today.
- **🛍️ Product Details:** View minimum, maximum, and average prices, along with market-wise price comparisons.
- **📂 Category-Based Browsing:** Explore products by category with active navigation indicators.
- **↕️ Product Sorting:** Sort products by default order, lowest price, or highest price.
- **🔐 Authentication:** Register and sign in using email and password, Google, or GitHub through Better Auth.
- **🛡️ Protected Routes:** Restrict product detail pages to authenticated users.
- **👤 User Profile:** View profile information and update the user's name.
- **🔔 Toast Notifications:** Receive feedback for authentication, validation, and other relevant actions.
- **⏳ Loading Skeletons:** Display loading states while product data is being fetched.
- **🚫 Custom 404 Page:** Show a friendly error page with a button to return to the homepage.
- **📱 Fully Responsive:** Optimized for mobile, tablet, and desktop screens.
- **🇧🇩 Bengali Interface:** Display product names, units, prices, and price changes using Bengali text and numerals.
- **📅 Bengali Date:** Display the current date in Bengali.
- **🏷️ Price Ticker:** Show a continuously scrolling strip of product prices and daily price changes.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js | React framework and application routing |
| React | Building reusable UI components |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS | Responsive styling and layout |
| HeroUI | UI components |
| Better Auth | Authentication and session management |
| React Hot Toast | Success and error notifications |
| Lucide React | Icons |
| Next.js Font Optimization | Bengali typography |
| BazarDor API | Product, category, and market price data |
| Vercel | Deployment |


## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js 20 or later
- npm, yarn, pnpm, or bun
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Tamiim-Iqbal/bajar-dor.git
```

### 2. Navigate to the Project Directory

```bash
cd your-repository
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root and add the environment variables required by your Better Auth configuration and database.

Example:

```env
BETTER_AUTH_SECRET=your_secure_secret
BETTER_AUTH_URL=http://localhost:3000
```

Add your database connection URL and Google/GitHub OAuth credentials if required by your configuration. Use the exact environment variable names expected by your application.

**Important:** Never commit real secrets, OAuth credentials, or private environment variables to GitHub.

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Authentication

The application uses Better Auth to provide:

- Email and password registration.
- Email and password login.
- Google social authentication.
- GitHub social authentication.
- Session-based authentication.
- Protected product detail pages.
- User profile management and name updates.
- Authentication-related success and error notifications.

OAuth providers and database settings must be configured before the corresponding authentication methods can work.

## 📁 Project Structure

The project follows the Next.js App Router architecture.

```text
BazarDor/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── category/
│   │   │   └── [slug]/
│   │   ├── product/
│   │   │   └── [slug]/
│   │   ├── signin/
│   │   ├── signup/
│   │   ├── profile/
│   │   ├── not-found.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   └── lib/
├── .env.local
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

*Note: This is an example structure. Adjust the directory names and routes to match your actual project.*

## 📱 Responsive Design

BazarDor is designed to provide a consistent experience across different screen sizes.

- **Mobile:** Compact navigation, touch-friendly controls, and single-column product layouts where appropriate.
- **Tablet:** Flexible navigation and adaptable product grids.
- **Desktop:** Multi-column product cards, detailed market tables, and expanded navigation.

## 📦 Build for Production

Check whether the application builds successfully before deployment.

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## ☁️ Deployment

The application can be deployed to Vercel or another compatible hosting platform.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Deploy the application.
5. Test authentication, dynamic routes, product data fetching, and page refreshes on the deployed website.

## 🎯 Project Objectives

- Make essential market prices accessible in Bengali.
- Help users compare prices across different markets.
- Present daily price changes in a simple, understandable format.
- Provide a responsive and accessible user experience.
- Practice modern full-stack development using Next.js, TypeScript, APIs, and authentication.

## 👨‍💻 Author

**Tamim Iqbal**

- GitHub: [GitHub Profile](https://github.com/Tamiim-Iqbal)

## 📄 License

This project was developed for educational purposes as part of the BazarDor assignment.

---

**বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।**

*সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।*