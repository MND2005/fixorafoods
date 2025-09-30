# Firebase Configuration Issues

## Common Configuration Errors

The error you encountered:
```
GET https://www.googleapis.com/identitytoolkit/v3/relyingparty/getProjectConfig?key=... 400 (Bad Request)
{"error":{"code":400,"message":"CONFIGURATION_NOT_FOUND","errors":[{"message":"CONFIGURATION_NOT_FOUND","domain":"global","reason":"invalid"}]}}
```

This error indicates that Firebase cannot find the project configuration, which is typically caused by one of the following issues:

## Possible Causes

1. **Invalid API Key**: The API key in your environment variables is incorrect or has been revoked
2. **Wrong Project ID**: The project ID doesn't match an existing Firebase project
3. **Project Not Properly Set Up**: The Firebase project may not be properly configured in the Firebase Console
4. **Network Issues**: Connectivity problems preventing access to Firebase services
5. **Environment Variables Not Loaded**: The environment variables are not being properly loaded by Next.js

## How to Fix

### 1. Verify Environment Variables

Check your `.env.local` file and ensure all Firebase configuration values are correct:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdefghijklmnop
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 2. Check Firebase Project Settings

1. Go to the Firebase Console: https://console.firebase.google.com/
2. Select your project
3. Go to Project Settings (gear icon)
4. Under "General" tab, find your web app configuration
5. Verify that the values match what you have in your `.env.local` file

### 3. Verify API Key Permissions

1. In Firebase Console, go to Project Settings
2. Go to the "General" tab
3. Scroll down to "Your apps" section
4. Find your web app and click on the "Config" radio button
5. Verify the API key is correct

### 4. Restart Development Server

After making changes to environment variables:
1. Stop your development server (Ctrl+C)
2. Restart with `npm run dev`

## Debugging Steps

### 1. Check Browser Console

Look for detailed error messages in the browser console that might provide more specific information about what's wrong.

### 2. Test API Endpoint Directly

You can test if your API key is valid by making a direct request:
```
curl "https://www.googleapis.com/identitytoolkit/v3/relyingparty/getProjectConfig?key=YOUR_API_KEY"
```

### 3. Use Debug Pages

Visit the following pages to check Firebase status:
- `/debug-firebase` - Check Firebase connectivity
- `/test-auth` - Check authentication status

## Error Handling Improvements

The code has been updated to include better error handling:

1. **Graceful Degradation**: Components now check if Firebase services are properly initialized
2. **User-Friendly Error Messages**: Clear error messages are displayed when Firebase is not configured correctly
3. **Fallback Behavior**: Components provide helpful information when Firebase services are unavailable

## Best Practices

1. **Environment Variables**: Always use environment variables for sensitive configuration
2. **Validation**: Validate configuration at startup
3. **Error Handling**: Implement comprehensive error handling for all Firebase operations
4. **Testing**: Test configuration changes thoroughly

## Common Mistakes to Avoid

1. **Wrong API Key Type**: Make sure you're using the web API key, not the server key
2. **Missing Environment Variables**: Ensure all required variables are present
3. **Typos**: Double-check for typos in project IDs and domain names
4. **Not Restarting Server**: Always restart the development server after changing environment variables

If you continue to experience issues, try creating a new Firebase project and updating your configuration values.