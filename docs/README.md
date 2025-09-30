# Documentation Overview

This directory contains documentation for the Firebase integration in your Next.js application.

## Files

- [Firebase Setup Guide](./firebase-setup.md) - Complete guide for setting up Firebase including security rules
- [Admin Login Guide](./admin-login-guide.md) - Instructions for creating admin accounts and logging in
- [Hydration Issues](./hydration-issues.md) - Solutions for React hydration warnings
- [Firebase Configuration Issues](./firebase-configuration-issues.md) - Troubleshooting Firebase configuration errors

## Tools

- [Firebase Debug Tool](../src/app/debug-firebase/page.tsx) - Live debugging interface at `/debug-firebase`
- [Firebase Configuration Test](../src/app/test-firebase-config/page.tsx) - Automated configuration testing at `/test-firebase-config`
- [Authentication Test](../src/app/test-auth/page.tsx) - Authentication testing at `/test-auth`

## API Endpoints

- [/api/verify-messages](../src/app/api/verify-messages/route.ts) - Server-side message verification
- [/api/test-firebase](../src/app/api/test-firebase/route.ts) - Server-side Firebase connectivity test

## Quick Links

1. **Set up Firebase**: Follow the [Firebase Setup Guide](./firebase-setup.md)
2. **Create Admin Account**: See [Admin Login Guide](./admin-login-guide.md)
3. **Test Configuration**: Visit `/test-firebase-config`
4. **Debug Issues**: Visit `/debug-firebase`
5. **Verify Messages**: Visit `/api/verify-messages`

## Common Issues

### Permission Errors

If you see "Missing or insufficient permissions":

1. Check that you're logged in to the admin panel
2. Verify your Firestore security rules are correct
3. Visit `/test-firebase-config` for automated testing

### Messages Not Showing

If messages aren't appearing in the admin panel:

1. Ensure you're logged in with admin credentials
2. Check that messages are being saved to Firestore
3. Refresh the admin page or click the "Refresh" button

### Configuration Errors

If you see Firebase initialization errors:

1. Verify your `.env.local` file contains correct credentials
2. Check that all required environment variables are set
3. Restart your development server