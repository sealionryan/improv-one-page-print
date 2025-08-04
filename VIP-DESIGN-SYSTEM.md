# Vegas Improv Power - Design System

## Overview
This design system extends the base BRAND-STYLE-GUIDE.md specifically for Vegas Improv Power's homepage, incorporating improv comedy elements while maintaining professional standards.

---

## Color Palette - Vegas Improv Power

### Primary Brand Colors
```css
:root {
  /* Primary Purple - #4e4489 variations */
  --vip-purple-50: #f7f6fb;
  --vip-purple-100: #ede9f5;
  --vip-purple-75: #e1d9ee;   /* Extra light for backgrounds */
  --vip-purple-200: #d3c7e8;
  --vip-purple-300: #bfa8da;
  --vip-purple-400: #a585c9;
  --vip-purple-500: #8b65b6;
  --vip-purple-600: #7651a3;
  --vip-purple-700: #5d4186;
  --vip-purple-800: #4e4489;  /* Base brand color */
  --vip-purple-900: #3d3569;
  --vip-purple-925: #32294d;  /* Extra dark for text */
  --vip-purple-950: #1f1a2e;

  /* Accent Coral - #FFA77A variations */
  --vip-coral-50: #fff7f3;
  --vip-coral-100: #ffede5;
  --vip-coral-200: #ffd6c7;
  --vip-coral-300: #ffb89d;
  --vip-coral-400: #ff9573;
  --vip-coral-500: #ffa77a;  /* Base accent color */
  --vip-coral-600: #ff8549;
  --vip-coral-700: #e6632a;  /* Darker for white text */
  --vip-coral-800: #cc4a15;
  --vip-coral-900: #a83908;

  /* Neutral palette for text and backgrounds */
  --vip-white: #ffffff;
  --vip-gray-50: #fafafa;
  --vip-gray-100: #f5f5f5;
  --vip-gray-200: #eeeeee;
  --vip-gray-300: #e0e0e0;
  --vip-gray-400: #bdbdbd;
  --vip-gray-500: #9e9e9e;
  --vip-gray-600: #757575;
  --vip-gray-700: #616161;
  --vip-gray-800: #424242;
  --vip-gray-900: #212121;
}
```

### Semantic Color Usage
```css
:root {
  /* Text colors */
  --text-primary: var(--vip-purple-950);
  --text-secondary: var(--vip-purple-925);
  --text-tertiary: var(--vip-gray-600);
  --text-muted: var(--vip-gray-400);
  --text-on-dark: var(--vip-white);
  --text-accent: var(--vip-coral-700);

  /* Background colors */
  --bg-primary: var(--vip-white);
  --bg-secondary: var(--vip-purple-50);
  --bg-accent: var(--vip-purple-100);
  --bg-dark: var(--vip-purple-900);
  
  /* Interactive colors */
  --cta-primary: var(--vip-coral-700);
  --cta-primary-hover: var(--vip-coral-800);
  --cta-secondary: var(--vip-purple-800);
  --cta-secondary-hover: var(--vip-purple-900);
}
```

---

## Typography System

### Font Loading
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Karma:wght@400;500&display=swap');

:root {
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Karma', serif;
  --font-ui: 'Karma', serif;
}
```

### Heading Styles - Improv Personality
```css
.vip-heading-xl {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.vip-heading-large {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.vip-heading-medium {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: 1.3;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.vip-heading-small {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  line-height: 1.4;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}
```

### Body Text Styles
```css
.vip-text-large {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.vip-text-body {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.vip-text-small {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text-tertiary);
  margin-bottom: 0.75rem;
}

.vip-text-caption {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.4;
  color: var(--text-muted);
  letter-spacing: 0.01em;
}
```

---

## Component Library

### VIP Glass Cards
```css
.vip-card-primary {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  padding: 2rem;
  box-shadow:
    0 4px 8px rgba(78, 68, 137, 0.04),
    0 8px 16px rgba(78, 68, 137, 0.04),
    0 16px 32px rgba(78, 68, 137, 0.04),
    0 24px 48px rgba(78, 68, 137, 0.03);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.vip-card-primary:hover {
  transform: translateY(-4px);
  box-shadow:
    0 8px 16px rgba(78, 68, 137, 0.06),
    0 16px 32px rgba(78, 68, 137, 0.05),
    0 24px 48px rgba(78, 68, 137, 0.04),
    0 32px 64px rgba(78, 68, 137, 0.03);
}

.vip-card-service {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(78, 68, 137, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow:
    0 2px 4px rgba(78, 68, 137, 0.03),
    0 4px 8px rgba(78, 68, 137, 0.03),
    0 8px 16px rgba(78, 68, 137, 0.03),
    0 16px 32px rgba(78, 68, 137, 0.02);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.vip-card-service:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 167, 122, 0.3);
  box-shadow:
    0 4px 8px rgba(78, 68, 137, 0.05),
    0 8px 16px rgba(255, 167, 122, 0.08),
    0 16px 32px rgba(78, 68, 137, 0.04),
    0 24px 48px rgba(255, 167, 122, 0.06);
}
```

### Button System
```css
.vip-btn-primary {
  background: linear-gradient(135deg, var(--vip-coral-700) 0%, var(--vip-coral-800) 100%);
  color: var(--vip-white);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1rem;
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow:
    0 4px 8px rgba(230, 99, 42, 0.25),
    0 8px 16px rgba(230, 99, 42, 0.15);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.vip-btn-primary:hover {
  transform: translateY(-1px);
  box-shadow:
    0 6px 12px rgba(230, 99, 42, 0.3),
    0 12px 24px rgba(230, 99, 42, 0.2);
  background: linear-gradient(135deg, var(--vip-coral-800) 0%, var(--vip-coral-900) 100%);
}

.vip-btn-secondary {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 1rem;
  padding: 0.875rem 2rem;
  border: 1px solid rgba(78, 68, 137, 0.2);
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow:
    0 2px 4px rgba(78, 68, 137, 0.1),
    0 4px 8px rgba(78, 68, 137, 0.05);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.vip-btn-secondary:hover {
  border-color: rgba(78, 68, 137, 0.3);
  background: rgba(255, 255, 255, 0.9);
  box-shadow:
    0 4px 8px rgba(78, 68, 137, 0.15),
    0 8px 16px rgba(78, 68, 137, 0.1);
}
```

### Form Components
```css
.vip-form-group {
  margin-bottom: 1.5rem;
}

.vip-form-label {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  display: block;
}

.vip-form-input {
  width: 100%;
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(78, 68, 137, 0.2);
  border-radius: 8px;
  color: var(--text-primary);
  box-shadow:
    0 2px 4px rgba(78, 68, 137, 0.05),
    0 4px 8px rgba(78, 68, 137, 0.03);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.vip-form-input:focus {
  outline: none;
  border-color: var(--vip-coral-500);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow:
    0 0 0 3px rgba(255, 167, 122, 0.1),
    0 4px 8px rgba(78, 68, 137, 0.1),
    0 8px 16px rgba(255, 167, 122, 0.1);
}

.vip-form-textarea {
  resize: vertical;
  min-height: 120px;
}
```

---

## Layout Patterns

### Container System
```css
.vip-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.vip-container-wide {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.vip-container-narrow {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Responsive padding */
@media (min-width: 640px) {
  .vip-container,
  .vip-container-wide,
  .vip-container-narrow {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .vip-container,
  .vip-container-wide,
  .vip-container-narrow {
    padding: 0 3rem;
  }
}
```

### Grid Systems
```css
.vip-grid-services {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
}

@media (min-width: 640px) {
  .vip-grid-services {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .vip-grid-services {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

.vip-grid-testimonials {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 3rem 0;
}

@media (min-width: 768px) {
  .vip-grid-testimonials {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## Background & Gradient System

### Primary Gradients
```css
.vip-bg-hero {
  background: linear-gradient(135deg, 
    var(--vip-purple-50) 0%,
    rgba(237, 233, 245, 0.8) 25%,
    rgba(255, 240, 236, 0.6) 50%,
    rgba(237, 233, 245, 0.8) 75%,
    var(--vip-purple-100) 100%
  );
  min-height: 100vh;
  position: relative;
}

.vip-bg-section {
  background: linear-gradient(180deg,
    var(--vip-white) 0%,
    var(--vip-purple-50) 100%
  );
  padding: 4rem 0;
}

.vip-bg-dark-section {
  background: linear-gradient(135deg,
    var(--vip-purple-900) 0%,
    var(--vip-purple-800) 50%,
    var(--vip-purple-900) 100%
  );
  color: var(--text-on-dark);
  padding: 4rem 0;
}
```

### Overlay Patterns
```css
.vip-overlay-light {
  position: relative;
}

.vip-overlay-light::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: -1;
}

.vip-overlay-gradient {
  position: relative;
}

.vip-overlay-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg,
    rgba(78, 68, 137, 0.05) 0%,
    rgba(255, 167, 122, 0.05) 100%
  );
  z-index: -1;
}
```

---

## Animation & Micro-interactions

### Page Load Animations
```css
@keyframes vip-fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes vip-scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.vip-animate-fade-in-up {
  animation: vip-fade-in-up 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.vip-animate-scale-in {
  animation: vip-scale-in 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Staggered animations */
.vip-stagger-1 { animation-delay: 100ms; }
.vip-stagger-2 { animation-delay: 200ms; }
.vip-stagger-3 { animation-delay: 300ms; }
.vip-stagger-4 { animation-delay: 400ms; }
```

### Hover Interactions
```css
.vip-hover-lift {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.vip-hover-lift:hover {
  transform: translateY(-4px);
}

.vip-hover-glow {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.vip-hover-glow:hover {
  box-shadow:
    0 0 20px rgba(255, 167, 122, 0.3),
    0 0 40px rgba(255, 167, 122, 0.2);
}
```

---

## Responsive Design Patterns

### Mobile-First Utilities
```css
.vip-text-center-mobile {
  text-align: center;
}

@media (min-width: 768px) {
  .vip-text-center-mobile {
    text-align: left;
  }
}

.vip-stack-mobile {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 768px) {
  .vip-stack-mobile {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
```

### Spacing System
```css
:root {
  --vip-space-xs: 0.25rem;   /* 4px */
  --vip-space-sm: 0.5rem;    /* 8px */
  --vip-space-md: 1rem;      /* 16px */
  --vip-space-lg: 1.5rem;    /* 24px */
  --vip-space-xl: 2rem;      /* 32px */
  --vip-space-2xl: 3rem;     /* 48px */
  --vip-space-3xl: 4rem;     /* 64px */
  --vip-space-4xl: 6rem;     /* 96px */
}

/* Responsive spacing utilities */
.vip-py-section {
  padding-top: var(--vip-space-2xl);
  padding-bottom: var(--vip-space-2xl);
}

@media (min-width: 768px) {
  .vip-py-section {
    padding-top: var(--vip-space-3xl);
    padding-bottom: var(--vip-space-3xl);
  }
}

@media (min-width: 1024px) {
  .vip-py-section {
    padding-top: var(--vip-space-4xl);
    padding-bottom: var(--vip-space-4xl);
  }
}
```

---

## Accessibility Features

### Focus States
```css
.vip-focus-visible:focus-visible {
  outline: 2px solid var(--vip-coral-500);
  outline-offset: 2px;
  border-radius: 4px;
}

.vip-focus-ring:focus {
  box-shadow: 0 0 0 3px rgba(255, 167, 122, 0.3);
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .vip-animate-fade-in-up,
  .vip-animate-scale-in {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

---

## Implementation Notes

### Browser Fallbacks
```css
/* Fallback for browsers without backdrop-filter support */
@supports not (backdrop-filter: blur(10px)) {
  .vip-card-primary {
    background: rgba(255, 255, 255, 0.95);
  }
  
  .vip-card-service {
    background: rgba(255, 255, 255, 0.9);
  }
  
  .vip-form-input {
    background: rgba(255, 255, 255, 0.9);
  }
}
```

### Performance Optimizations
```css
/* Will-change for animated elements */
.vip-hover-lift {
  will-change: transform, box-shadow;
}

.vip-hover-lift:hover {
  will-change: auto;
}

/* GPU acceleration for smooth animations */
.vip-animate-fade-in-up,
.vip-animate-scale-in {
  will-change: transform, opacity;
  backface-visibility: hidden;
}
```

---

## Usage Guidelines

### Do's
✅ Use consistent spacing from the spacing scale  
✅ Layer multiple subtle shadows for depth  
✅ Implement glassmorphic effects with fallbacks  
✅ Maintain high contrast ratios for accessibility  
✅ Test all interactions on mobile devices  
✅ Use the staggered animation classes for lists  

### Don'ts  
❌ Don't mix different border radius sizes inconsistently  
❌ Don't use backdrop-filter without fallbacks  
❌ Don't create animations without reduced motion alternatives  
❌ Don't use colors outside the defined palette  
❌ Don't ignore focus states for keyboard navigation  
❌ Don't make clickable areas smaller than 44px  

This design system provides the foundation for Vegas Improv Power's homepage while maintaining consistency with the established brand guidelines and ensuring professional, accessible, and performant implementation.