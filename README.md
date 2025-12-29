# Angular UI Components Library

A reusable Angular component library with Storybook documentation and automated npm publishing.

## 📦 Published Package

**Package Name:** `@indumathidev/indumathi25-ui-components`

```bash
npm install @indumathidev/indumathi25-ui-components
```

**npm Registry:** https://www.npmjs.com/package/@indumathidev/indumathi25-ui-components

## 🏗️ High-Level Architecture Decisions

### 1. **Library Structure**

- **Angular Library:** Built using Angular's library generation tools (`ng-packagr`)
- **Standalone Components:** All components are standalone for better tree-shaking and flexibility
- **Location:** `projects/ui-components/` - Separated from the main application
- **Reason:** Enables independent versioning, building, and publishing of components

### 2. **Component Documentation**

- **Storybook Integration:** Interactive component documentation and testing
- **Stories Location:** `src/stories/` - Contains demo implementations
- **Run Storybook:** `npm run storybook`
- **Reason:** Provides interactive playground for components, visual regression testing, and documentation

### 3. **Publishing Strategy**

- **Registry:** Public npm registry (npmjs.org)
- **Package Naming:** Scoped package (`@indumathidev/indumathi25-ui-components`)
- **Access:** Public - no authentication required for installation
- **Reason:** Scoped packages provide better namespace management and professional organization

### 4. **CI/CD Pipeline**

- **Platform:** GitHub Actions
- **Trigger:** Automatic deployment on push to `main` branch
- **Authentication:** Trusted Publishing with OIDC (OpenID Connect)
  - No manual token management
  - Enhanced security with provenance attestation
  - Environment-based deployment control
- **Workflow:** `.github/workflows/publish-npm.yml`
- **Reason:** Eliminates token rotation risks, provides supply chain security, automated releases

### 5. **Version Management**

- **Strategy:** Manual versioning in `package.json`
- **Location:** `projects/ui-components/package.json`
- **Convention:** Semantic versioning (MAJOR.MINOR.PATCH)
- **Reason:** Explicit control over releases, clear communication of breaking changes

### 6. **Component Export Strategy**

- **Public API:** All exports managed through `public-api.ts`
- **Naming:** Clean component names (e.g., `ProductCard` instead of `ProductCardComponent`)
- **Tree-shakeable:** Only imported components are bundled
- **Reason:** Controlled API surface, better DX, optimized bundle sizes

## 📁 Project Structure

```
taskbox/
├── .github/
│   └── workflows/
│       └── publish-npm.yml          # CI/CD pipeline
├── projects/
│   └── ui-components/               # Publishable library
│       ├── src/
│       │   ├── lib/                 # Component implementations
│       │   │   └── product-card/
│       │   └── public-api.ts        # Public exports
│       └── package.json             # Library metadata & version
├── src/
│   ├── app/                         # Demo application
│   └── stories/                     # Storybook stories
│       └── product-card/
├── angular.json                     # Angular configuration
├── package.json                     # Root dependencies
└── README.md
```

## 🚀 Getting Started

### Development Setup

1. **Install dependencies:**

   ```bash
   cd taskbox
   npm install
   ```

2. **Run Storybook:**

   ```bash
   npm run storybook
   ```

   Opens at `http://localhost:6006`

3. **Build library:**

   ```bash
   npx ng build ui-components
   ```

   Output in `dist/ui-components/`

4. **Run demo app:**
   ```bash
   npm start
   ```

### Publishing

#### Manual Publishing

```bash
# Update version in projects/ui-components/package.json
npm run build ui-components
cd dist/ui-components
npm publish
```

#### Automatic Publishing (CI/CD)

1. Update version in `projects/ui-components/package.json`
2. Commit changes
3. Push to `main` branch
4. GitHub Actions automatically builds and publishes

## 📚 Available Components

### ProductCard

Display product information including image, title, price, and stock status.

**Import:**

```typescript
import { ProductCard } from '@indumathidev/indumathi25-ui-components';
```

**Usage:**

```typescript
import { Component } from '@angular/core';
import { ProductCard } from '@indumathidev/indumathi25-ui-components';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ProductCard],
  template: `
    <storybook-product-card [product]="product" [priority]="true" [lowStockThreshold]="10">
    </storybook-product-card>
  `,
})
export class MyComponent {
  product = {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    image: 'assets/product.jpg',
    stock: 15,
  };
}
```

**Inputs:**

- `product` (required): Product object with:
  - `id: number`
  - `name: string`
  - `price: number`
  - `image: string`
  - `stock: number`
- `priority`: Boolean for high-priority image loading (default: `false`)
- `lowStockThreshold`: Number to determine low stock warning (default: `10`)

## 🔧 Configuration

### npm Trusted Publishing Setup

The project uses npm's Trusted Publishing for secure, tokenless authentication:

**Configuration:**

- **Provider:** GitHub Actions
- **Package:** @indumathidev/indumathi25-ui-components
- **GitHub Org/User:** indumathi25
- **Repository:** angular-ui-library
- **Workflow:** publish-npm.yml
- **Environment:** npm-publish

**Setup Steps:**

1. Go to https://www.npmjs.com/settings/indumathidev/packages
2. Select your package: @indumathidev/indumathi25-ui-components
3. Navigate to Settings → Publishing
4. Enable "Trusted publishing"
5. Add GitHub Actions provider with the configuration above
6. Enable "Require two-factor authentication and disallow tokens" (recommended)

**Benefits:**

- ✅ No token management required
- ✅ Automatic token rotation
- ✅ Supply chain security with provenance
- ✅ Audit trail of all publications

### GitHub Environment

Create `npm-publish` environment in repository settings:

1. Go to Settings → Environments
2. Create new environment: `npm-publish`
3. Optional: Add protection rules (e.g., required reviewers)

## 🛠️ Scripts

```bash
npm run storybook          # Start Storybook dev server
npm run build-storybook    # Build static Storybook
npm run build              # Build main application
npm start                  # Start dev server
npm test                   # Run tests
```

## 📝 Adding New Components

1. **Generate component in library:**

   ```bash
   cd projects/ui-components
   ng generate component lib/my-component
   ```

2. **Export in public API:**
   Edit `projects/ui-components/src/public-api.ts`:

   ```typescript
   export { MyComponent } from './lib/my-component/my-component';
   ```

3. **Create Storybook story:**
   Add `src/stories/my-component/MyComponent.stories.ts`

4. **Update version:**
   Increment version in `projects/ui-components/package.json`

5. **Commit and push:**
   Changes will automatically publish via GitHub Actions

## 🔄 Version Guidelines

Follow semantic versioning:

- **MAJOR** (x.0.0): Breaking changes
- **MINOR** (0.x.0): New features, backward compatible
- **PATCH** (0.0.x): Bug fixes, backward compatible

Example:

- `0.0.1` → `0.0.2`: Bug fix
- `0.0.2` → `0.1.0`: New component added
- `0.1.0` → `1.0.0`: Breaking API change

## 📄 License

MIT

## 🔗 Links

- **npm Package:** https://www.npmjs.com/package/@indumathidev/indumathi25-ui-components
- **Repository:** https://github.com/indumathi25/angular-ui-library
- **Storybook Tutorial:** https://storybook.js.org/tutorials/intro-to-storybook/angular/en/get-started/

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and stories
5. Submit a pull request

## 📞 Support

For issues and questions:

- Open an issue on GitHub
- Check existing documentation in Storybook
