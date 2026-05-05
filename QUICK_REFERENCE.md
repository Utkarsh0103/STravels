# 📋 STravels - Quick Reference Guide

## 🚀 Quick Start

```bash
cd ui
npm install
npm start
```

Open: http://localhost:4200

---

## 🔑 Demo Credentials

- **Email**: john.doe@example.com
- **Password**: password123

---

## 📁 Key Directories

| Path | Purpose |
|------|---------|
| `ui/src/app/core/services/` | Business logic services |
| `ui/src/app/features/` | Page components |
| `ui/src/app/shared/` | Reusable components |
| `ui/src/app/models/` | TypeScript interfaces |
| `ui/src/app/layouts/` | Header, Footer |
| `ui/src/styles.scss` | Global styles |

---

## 🎨 Design Tokens

### Colors
```scss
--primary-color: #1E40AF    // Deep Blue
--accent-purple: #8B5CF6    // Royal Purple
--secondary-color: #F59E0B  // Amber Gold
--accent-teal: #14B8A6      // Teal
```

### Spacing
```scss
--spacing-xs: 0.5rem   // 8px
--spacing-sm: 1rem     // 16px
--spacing-md: 1.5rem   // 24px
--spacing-lg: 2rem     // 32px
--spacing-xl: 3rem     // 48px
```

### Border Radius
```scss
--radius-md: 0.5rem    // 8px
--radius-lg: 0.75rem   // 12px
--radius-xl: 1rem      // 16px
--radius-2xl: 1.5rem   // 24px
--radius-3xl: 2rem     // 32px
```

---

## 🛣️ Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/home` | Home | Landing page |
| `/search` | Search | Browse packages |
| `/package/:id` | PackageDetails | Package info |
| `/booking/:id` | Booking | Book package |
| `/payment` | Payment | Payment page |
| `/confirmation` | Confirmation | Success page |
| `/my-bookings` | MyBookings | Booking history |
| `/profile` | Profile | User profile |
| `/login` | Login | Authentication |
| `/register` | Register | Sign up |
| `/about` | About | Company info |
| `/contact` | Contact | Contact form |

---

## 🔧 Common Commands

### Development
```bash
npm start              # Start dev server
npm run watch          # Watch mode
ng serve --open        # Serve and open browser
ng serve --port 4300   # Use different port
```

### Building
```bash
npm run build          # Production build
ng build --configuration production
```

### Code Generation
```bash
ng generate component name        # New component
ng generate service name          # New service
ng generate module name           # New module
```

---

## 📦 Key Services

### AuthService
```typescript
login(credentials: LoginRequest): Observable<AuthResponse>
register(request: RegisterRequest): Observable<AuthResponse>
logout(): void
getCurrentUser(): User | null
isLoggedIn(): boolean
```

### PackageService
```typescript
getAllPackages(): Observable<TravelPackage[]>
getPackageById(id: string): Observable<TravelPackage>
getFeaturedPackages(): Observable<TravelPackage[]>
searchPackages(filters: SearchFilters): Observable<TravelPackage[]>
```

### BookingService
```typescript
createBooking(request: BookingRequest): Observable<Booking>
getBookingById(id: string): Observable<Booking>
getUserBookings(userId: string): Observable<Booking[]>
cancelBooking(bookingId: string): Observable<boolean>
```

---

## 🎯 CSS Classes

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-sm">Small</button>
```

### Grid
```html
<div class="grid grid-2">Two columns</div>
<div class="grid grid-3">Three columns</div>
<div class="grid grid-4">Four columns</div>
```

### Spacing
```html
<div class="mb-1">Margin bottom 8px</div>
<div class="mb-2">Margin bottom 16px</div>
<div class="mt-3">Margin top 24px</div>
```

---

## 🔍 Troubleshooting

### Port in Use
```bash
ng serve --port 4300
```

### Clear Cache
```bash
rm -rf .angular/cache
rm -rf node_modules
npm install
```

### TypeScript Errors
```bash
npm install --save-dev typescript@5.4
```

---

## 📚 Documentation

- [README.md](README.md) - Main documentation
- [SETUP.md](SETUP.md) - Setup instructions
- [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute
- [CHANGELOG.md](CHANGELOG.md) - Version history

---

## 🌟 Pro Tips

1. Use VS Code with Angular Language Service extension
2. Enable auto-save for instant preview
3. Use Chrome DevTools for debugging
4. Check Network tab for API calls (when backend is added)
5. Use Augmented Reality mode in DevTools for responsive testing

---

## 📞 Need Help?

1. Check README.md for detailed docs
2. Review SETUP.md for installation issues
3. Search GitHub issues
4. Create new issue with details

---

**Quick Reference Version 1.0** | Updated: 2024-05-05
