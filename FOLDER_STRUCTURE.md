RedShan360 Frontend - Complete Folder Structure
================================================

RedShanFlora/
├── .gitignore                          # Git ignore rules
├── index.html                          # HTML entry point
├── package.json                        # Dependencies & scripts
├── postcss.config.cjs                  # PostCSS config (Tailwind)
├── tailwind.config.cjs                 # Tailwind CSS config
├── vite.config.js                      # Vite bundler config
├── RedShan360.code-workspace           # VS Code workspace file
├── README.md                           # Project documentation
│
├── public/                             # Static assets (served as-is)
│   ├── favicon.ico                     # Browser tab icon
│   ├── manifest.json                   # PWA manifest
│   ├── robots.txt                      # SEO robots directive
│   └── README.md                       # Public folder notes
│
└── src/                                # Source code root
    ├── main.jsx                        # React entry point (renders to #root)
    ├── App.jsx                         # Main App component (wraps routes)
    ├── index.css                       # Global styles (Tailwind directives)
    │
    ├── assets/                         # Static files (bundled with app)
    │   ├── README.md                   # Assets guide
    │   ├── images/                     # Image files (PNG, JPG, SVG)
    │   │   └── .gitkeep
    │   ├── icons/                      # SVG/icon files
    │   │   └── .gitkeep
    │   ├── styles/
    │   │   └── tailwind.css            # Custom Tailwind utilities
    │   └── 3dmodels/                   # 3D model files (GLB, OBJ, FBX)
    │       └── placeholder.txt
    │
    ├── components/                     # Reusable UI components
    │   ├── common/                     # Generic components (Button, Modal, Input, etc.)
    │   │   ├── LoadingSpinner.jsx
    │   │   ├── .gitkeep
    │   │   └── README.md
    │   ├── navbar/                     # Navigation bar components
    │   │   ├── Navbar.jsx
    │   │   ├── .gitkeep
    │   │   └── README.md
    │   ├── product/                    # Product display components
    │   │   ├── ProductCard.jsx
    │   │   ├── README.md
    │   │   └── .gitkeep
    │   ├── cart/                       # Shopping cart components
    │   │   ├── CartPreview.jsx
    │   │   ├── .gitkeep
    │   │   └── README.md
    │   ├── customization/              # 3D customizer components
    │   │   ├── CustomizerPanel.jsx
    │   │   ├── README.md
    │   │   └── .gitkeep
    │   ├── warehouse/                  # Warehouse management components
    │   │   ├── WarehouseList.jsx
    │   │   ├── README.md
    │   │   └── .gitkeep
    │   ├── order/                      # Order management components
    │   │   ├── OrderList.jsx
    │   │   ├── README.md
    │   │   └── .gitkeep
    │   └── dashboard/                  # Dashboard widgets
    │       ├── DashboardWidget.jsx
    │       ├── README.md
    │       └── .gitkeep
    │
    ├── pages/                          # Full-page components (route views)
    │   ├── guest/                      # Public pages (no auth required)
    │   │   ├── Home.jsx
    │   │   ├── README.md
    │   │   └── .gitkeep
    │   ├── customer/                   # Customer role pages
    │   │   ├── ProductPage.jsx
    │   │   ├── README.md
    │   │   └── .gitkeep
    │   ├── employee/                   # Employee role pages
    │   │   ├── EmployeeDashboard.jsx
    │   │   ├── README.md
    │   │   └── .gitkeep
    │   ├── manager/                    # Manager role pages
    │   │   ├── ManagerDashboard.jsx
    │   │   ├── README.md
    │   │   └── .gitkeep
    │   ├── admin/                      # Admin role pages
    │   │   ├── AdminPanel.jsx
    │   │   ├── README.md
    │   │   └── .gitkeep
    │   ├── customization/              # 3D customization page
    │   │   ├── CustomizerPage.jsx
    │   │   ├── README.md
    │   │   └── .gitkeep
    │   └── warehouse/                  # Warehouse management page
    │       ├── WarehousePage.jsx
    │       ├── README.md
    │       └── .gitkeep
    │
    ├── layouts/                        # Layout wrapper components
    │   ├── MainLayout.jsx              # Default layout (navbar + main content)
    │   ├── AdminLayout.jsx             # Admin-specific layout
    │   └── DashboardLayout.jsx         # Sidebar + main content layout
    │
    ├── routes/                         # Routing configuration
    │   ├── AppRoutes.jsx               # Main route definitions & lazy loading
    │   └── ProtectedRoutes.jsx         # Role-based route guard
    │
    ├── services/                       # API & business logic services
    │   ├── api.js                      # Axios instance (interceptors, baseURL)
    │   ├── authService.js              # Auth API calls (login, logout, me)
    │   ├── productService.js           # Product API calls (fetch, filter)
    │   ├── orderService.js             # Order API calls (create, list)
    │   └── warehouseService.js         # Warehouse API calls (inventory, stock)
    │
    ├── context/                        # React Context (global state)
    │   ├── AuthContext.jsx             # User authentication state
    │   └── CartContext.jsx             # Shopping cart state
    │
    ├── hooks/                          # Custom React hooks
    │   ├── useAuth.js                  # Hook to access AuthContext
    │   ├── useCart.js                  # Hook to access CartContext
    │   └── useFetch.js                 # Generic data fetching hook
    │
    └── utils/                          # Utility functions & constants
        ├── constants.js                # App-wide constants (ROLES, API URLs, etc.)
        ├── validators.js               # Input validation functions
        └── helpers.js                  # Helper utilities (formatters, converters)


KEY ARCHITECTURAL DECISIONS:
============================

1. Modular Structure for 4-Person Team:
   - Each developer can work on isolated feature folders (components, pages, services)
   - Clear separation of concerns minimizes merge conflicts
   - Parallel development in different role-based pages

2. Role-Based Routing:
   - ProtectedRoutes.jsx enforces role access control
   - Each role gets dedicated pages (guest/, customer/, employee/, etc.)
   - AppRoutes.jsx maps routes to pages with role restrictions

3. Shared State Management:
   - AuthContext: User role & permissions
   - CartContext: Shopping cart items
   - Easily extendable with additional contexts

4. Services Layer:
   - Centralized API calls (api.js provides Axios instance)
   - Each service file handles a domain (auth, products, orders, warehouse)
   - Easy to mock for testing

5. Component Organization:
   - common/: Reusable across all pages (buttons, inputs, spinners)
   - Feature-specific folders: product, customization, warehouse, order, dashboard
   - Clear naming and single-responsibility components

6. Assets Structure:
   - images/: Raster images
   - icons/: SVG icons
   - 3dmodels/: 3D flower models for react-three-fiber
   - styles/: Tailwind custom utilities

7. Static Files:
   - public/: favicon, manifest.json for PWA, robots.txt for SEO

TEAM WORKFLOW EXAMPLE:
=======================

Developer 1: E-commerce & Products
- src/components/product/*
- src/pages/customer/*
- src/services/productService.js

Developer 2: Warehouse & Inventory
- src/components/warehouse/*
- src/pages/warehouse/*
- src/services/warehouseService.js

Developer 3: 3D Customization
- src/components/customization/*
- src/pages/customization/*
- 3D models & three.js integration

Developer 4: Admin & Dashboards
- src/pages/admin/*
- src/pages/employee/*
- src/pages/manager/*
- src/components/dashboard/*

All: Common components, layouts, routes, context, hooks

NEXT STEPS:
===========

1. Run: npm install
2. Run: npm run dev
3. Start developing in feature folders
4. Commit changes with meaningful messages
5. Use Git branching (feature branches per developer)
