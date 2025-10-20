# Test Automation Framework

Playwright + TypeScript test automation with API testing, cross-browser E2E testing, and CI/CD integration.

## �️ Tech Stack

- **Framework:** Playwright
- **Language:** TypeScript  
- **Architecture:** Page Object Model
- **CI/CD:** GitHub Actions + GitHub Pages

## 📁 Structure

```
tests/
├── api/           # API tests
├── e2e/           # E2E tests  
├── pages/         # Page objects
├── resources/     # Test data
└── types/         # TypeScript types
```

## � Setup

```bash
npm install
npx playwright install
```

## 🎯 Commands

### Run Tests
```bash
npm test                              # All tests
npx playwright test --grep "@api"    # API tests only
npx playwright test --grep "@e2e"    # E2E tests only
```

### Browsers
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Debug & Reports
```bash
npx playwright test --debug          # Debug mode
npx playwright test --ui             # UI mode
npx playwright show-report           # View reports
```

## 📊 Live Reports

Test reports auto-deploy to: [GitHub Pages](https://hayee4.github.io/genesys-sdet-homework/)

## 🔄 CI/CD

- **API Tests** → **E2E Tests** (parallel browsers) → **Deploy Reports**
- Reports deploy on success OR failure for debugging
