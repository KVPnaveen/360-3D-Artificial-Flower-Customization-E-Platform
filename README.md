<<<<<<< HEAD
# RedShan360 Frontend - 3D Artificial Flower Customization E-Platform

A modern, scalable React.js frontend for a comprehensive e-commerce and 3D customization platform.

## 🚀 Features

- **3D Flower Customization**: Interactive 3D editor with react-three-fiber
- **360° Product Visualization**: Full product view from all angles
- **E-commerce Platform**: Shopping cart, checkout, order management
- **Role-Based Access**: Guest, Customer, Employee, Manager, Admin
- **Warehouse Management**: Inventory tracking and stock management
- **Responsive Design**: Tailwind CSS for mobile-first UI
- **Real-time Updates**: WebSocket ready for live notifications

## 🛠 Tech Stack

- **Frontend**: React 18.2+
- **Bundler**: Vite 5.1+
- **Styling**: Tailwind CSS 3.4+
- **Routing**: React Router DOM 6.14+
- **HTTP Client**: Axios 1.5+
- **3D Graphics**: Three.js + react-three-fiber
- **State Management**: React Context API

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons, 3D models
│   ├── components/     # Reusable UI components
│   ├── pages/          # Full-page components (role-based)
│   ├── layouts/        # Layout wrappers
│   ├── routes/         # Routing configuration
│   ├── services/       # API services
│   ├── context/        # React Context
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Utilities & constants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                # Environment variables
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Clone repository
git clone <repo-url>
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app runs at `http://localhost:5173`

## 📋 Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally

## 🔐 Authentication & Roles

Supported user roles:
- **Guest**: Public access (Home, Products)
- **Customer**: Browse, customize, order
- **Employee**: Task management, assigned work
- **Manager**: Team oversight, reports
- **Admin**: System administration, user management

Protected routes enforce role-based access via `ProtectedRoutes.jsx`.

## 🎨 Customization

### Tailwind Configuration
Modify `tailwind.config.cjs` to customize colors, fonts, and breakpoints.

### API Configuration
Set `VITE_API_URL` in `.env` to your backend server.

## 📱 Component Organization

- `components/common/` - Reusable components (Button, Modal, Spinner)
- `components/product/` - Product-related components
- `components/customization/` - 3D customizer
- `components/warehouse/` - Inventory components
- `components/dashboard/` - Dashboard widgets

## 🔄 State Management

### AuthContext
Manages user authentication and role-based permissions.

### CartContext
Manages shopping cart state and operations.

Extend with additional contexts as needed.

## 🌐 API Integration

Services layer in `src/services/`:
- `api.js` - Axios instance with interceptors
- `authService.js` - Authentication endpoints
- `productService.js` - Product catalog
- `orderService.js` - Order management
- `warehouseService.js` - Inventory management

## 🤝 Team Development

Designed for parallel development with 4+ team members:
- Feature-based folder structure
- Clear separation of concerns
- Isolated component folders per feature
- Git branching strategies supported

## 📚 Documentation

- See `FOLDER_STRUCTURE.md` for detailed architecture
- Component READMEs in each folder

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 5174
```

### Module not found errors
```bash
npm install
```

### Tailwind not working
Ensure `src/index.css` has Tailwind directives and dev server is running.

## 📝 License

© 2026 RedShan360. All rights reserved.
=======
# 360-3D-Artificial-Flower-Customization-E-Platform
This is a web-based artificial flower customization and e-commerce platform featuring 3D product customization, 360° product visualization, secure online ordering, and centralized business management.
>>>>>>> 6f3d076d5b8580489b3819471360836d1c01275b
