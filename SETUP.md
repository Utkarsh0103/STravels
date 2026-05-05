# 🚀 STravels - Quick Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 22.x or higher
  - Download from: https://nodejs.org/
  - Verify: `node --version`
  
- **npm**: Comes with Node.js
  - Verify: `npm --version`

- **Git**: For version control
  - Download from: https://git-scm.com/
  - Verify: `git --version`

---

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/STravels.git
cd STravels
```

### 2. Navigate to UI Folder

```bash
cd ui
```

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Angular 18
- TypeScript 5.4
- RxJS
- And all other dependencies

**Installation time**: Approximately 2-5 minutes depending on your internet connection.

### 4. Start Development Server

```bash
npm start
```

or

```bash
ng serve --open
```

The application will automatically open in your default browser at:
```
http://localhost:4200
```

**Note**: The first build may take a few moments.

---

## Verification

Once the application is running, you should see:

1. ✅ Home page with animated hero section
2. ✅ Navigation bar with STravels logo
3. ✅ Featured packages displayed
4. ✅ No console errors

### Test Login

To test the authentication system:

1. Navigate to Login page (click "Login" in header)
2. Use these demo credentials:
   - **Email**: john.doe@example.com
   - **Password**: password123
3. Click "Login"
4. You should be redirected to home page with user menu visible

---

## Available Scripts

In the `ui/` directory, you can run:

### Development

```bash
npm start          # Start dev server (http://localhost:4200)
npm run watch      # Build with watch mode
```

### Building

```bash
npm run build      # Production build (output in dist/)
```

### Testing

```bash
npm test           # Run unit tests
```

---

## Project Structure Overview

```
STravels/
├── ui/                    # Frontend Angular application
│   ├── src/
│   │   ├── app/          # Application code
│   │   ├── assets/       # Static files
│   │   └── styles.scss   # Global styles
│   └── package.json      # Dependencies
├── api/                   # Backend (future)
└── README.md             # Main documentation
```

---

## Troubleshooting

### Port Already in Use

If port 4200 is already in use:

```bash
ng serve --port 4300
```

### Node Version Issues

If you have an older Node.js version:

1. Install Node Version Manager (nvm)
2. Install Node 22:
   ```bash
   nvm install 22
   nvm use 22
   ```

### Module Not Found Errors

Clear cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Clear Angular cache:

```bash
rm -rf .angular/cache
ng serve
```

---

## Next Steps

1. ✅ Explore the application
2. ✅ Try different pages (Home, Search, About, Contact)
3. ✅ Test the booking flow
4. ✅ Check responsive design on mobile
5. ✅ Review the code structure
6. 🔧 Start customizing for your needs

---

## Development Tips

### Hot Reload

The development server supports hot reload. Any changes you make to:
- TypeScript files (.ts)
- HTML templates (.html)
- SCSS styles (.scss)

Will automatically refresh the browser.

### Browser DevTools

Open browser DevTools (F12) to:
- Inspect elements
- View console logs
- Debug TypeScript (source maps enabled)
- Test responsive design

### Recommended VS Code Extensions

- Angular Language Service
- Angular Snippets
- TypeScript Hero
- SCSS IntelliSense
- Prettier - Code formatter
- ESLint

---

## Support

If you encounter any issues:

1. Check the [README.md](README.md) for detailed documentation
2. Review [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines
3. Search existing GitHub issues
4. Create a new issue with detailed information

---

## Ready to Build? 🚀

You're all set! Start exploring the codebase and building amazing features.

Happy coding! 💻✨
