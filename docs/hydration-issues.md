# React Hydration Issues in Next.js

## What is Hydration?

Hydration is the process where React attaches event listeners and initializes state for server-rendered HTML on the client side. In Next.js, pages are server-side rendered (SSR) for performance and SEO benefits, then "hydrated" on the client to become interactive.

## Common Hydration Error Causes

1. **Browser Extensions**: Extensions like Grammarly, password managers, or ad blockers can modify the DOM before React loads
2. **Client/Server Mismatches**: Differences between server-rendered HTML and client-rendered components
3. **Browser APIs**: Using `window`, `document`, or other browser-specific APIs during SSR
4. **Non-deterministic Data**: Using `Date.now()`, `Math.random()`, or other functions that produce different values on server and client

## The Specific Issue

The error you encountered:
```
A tree hydrated but some attributes of the server rendered HTML didn't match the client properties
```

This is typically caused by browser extensions adding attributes to DOM elements before React loads. Common attributes include:
- `bis_register`
- `__processed_*`
- `data-*` attributes added by extensions

## Solutions Implemented

### 1. Client-Only Wrapper Component

We've created a `ClientOnly` component that ensures components only render on the client side after mounting:

```tsx
'use client';

import { useState, useEffect } from 'react';

export function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback;
  }

  return <>{children}</>;
}
```

### 2. Usage in Components

All components that might cause hydration issues are now wrapped with `ClientOnly`:
- Admin page
- Debug pages
- Contact form
- Authentication components

### 3. Why This Works

By using the `ClientOnly` wrapper:
1. Components render `null` (or a fallback) on the server
2. Components only render their actual content after mounting on the client
3. This eliminates any mismatch between server-rendered HTML and client-rendered components

## Best Practices to Avoid Hydration Issues

1. **Use `useEffect` for Browser APIs**: Only access `window`, `document`, or other browser APIs inside `useEffect`
2. **Avoid Non-deterministic Functions**: Don't use `Date.now()` or `Math.random()` during rendering
3. **Handle Browser Extensions**: Be aware that extensions can modify the DOM
4. **Use Client-Only Components**: For components that must only run on the client

## Development vs Production

- Hydration warnings in development mode are common and usually don't affect functionality
- These warnings won't appear in production builds
- The solutions implemented will eliminate these warnings in development as well

## Testing the Solution

To verify the hydration issue is resolved:

1. Restart your development server
2. Visit the admin page (`/admin`)
3. Check the browser console for any remaining hydration warnings
4. The error should no longer appear

If you still see hydration warnings, they may be coming from other components in your application. The approach can be applied to any component causing issues.