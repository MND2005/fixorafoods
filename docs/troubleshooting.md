# Troubleshooting Firebase Contact Form Issues

This guide helps diagnose and resolve common issues with the Firebase contact form implementation.

## Messages Not Showing in Admin Panel

### 1. Check Authentication
- Ensure you're logged in to the admin panel with valid credentials
- Verify the user exists in Firebase Authentication
- Check that the user has the correct permissions

### 2. Verify Firestore Security Rules
The correct security rules should be:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactMessages/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

### 3. Check Browser Console
- Open browser developer tools (F12)
- Check the Console tab for any JavaScript errors
- Look for Firebase-related errors or warnings

### 4. Verify Network Requests
- In browser developer tools, go to the Network tab
- Submit a contact form
- Look for requests to Firebase APIs
- Check if they return successful responses or errors

### 5. Check Firestore Data
- Go to Firebase Console
- Navigate to Firestore Database
- Verify the `contactMessages` collection exists
- Check if documents are being created when forms are submitted

## Testing Steps

### 1. Test API Route
Visit `/api/test-firebase` in your browser to check if the server can connect to Firebase.

### 2. Test Client-Side
Visit `/test-firebase` to test client-side Firebase integration.

### 3. Manual Firestore Check
In Firebase Console:
1. Go to Firestore Database
2. Check if `contactMessages` collection exists
3. Verify documents are being created when forms are submitted

## Common Issues and Solutions

### Issue: "Missing or insufficient permissions"
**Solution:** Update Firestore security rules as shown above.

### Issue: Messages save but don't appear in admin
**Solution:** 
1. Check that you're logged in to the admin panel
2. Verify security rules allow read access for authenticated users
3. Try refreshing the admin page

### Issue: Form submits but no data in Firestore
**Solution:**
1. Check browser console for errors
2. Verify Firebase configuration in `.env.local`
3. Ensure the collection name matches exactly (`contactMessages`)

## Debugging Checklist

- [ ] Firebase configuration in `.env.local` is correct
- [ ] Firestore security rules are properly set
- [ ] Admin user exists in Firebase Authentication
- [ ] Admin user credentials are correct
- [ ] No JavaScript errors in browser console
- [ ] Network requests to Firebase are successful
- [ ] Data appears in Firestore Database in Firebase Console
- [ ] Admin page shows no error messages

## Additional Help

If issues persist:
1. Check Firebase project settings and billing status
2. Verify all Firebase SDKs are properly installed
3. Ensure no ad blockers or browser extensions interfere with Firebase
4. Try in an incognito/private browser window