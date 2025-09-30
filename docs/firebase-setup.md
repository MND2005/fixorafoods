# Firebase Setup Guide

This guide explains how to set up Firebase for the contact form functionality.

## Prerequisites

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Register your web app in the Firebase project

## Configuration

1. After creating your Firebase project, go to Project Settings
2. Add a web app to your project
3. Copy the Firebase configuration object
4. Update the values in `.env.local` with your actual Firebase credentials:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Firebase Authentication Setup

1. In the Firebase Console, go to Authentication > Sign-in method
2. Enable Email/Password sign-in provider
3. Create an admin user account for accessing the admin panel

For detailed instructions on creating an admin account and logging in, see the [Admin Login Guide](./admin-login-guide.md)

## Firestore Database Setup

1. In the Firebase Console, go to Firestore Database
2. Create a new database in production mode
3. Create a collection named `contactMessages` (this will be used automatically)

## Security Rules

For the contact form to work properly, you'll need to set up Firebase Firestore security rules. 

Since we want anyone to be able to submit messages through the contact form but only authenticated admins to read them, use these rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to create contact messages
    match /contactMessages/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

To set up these rules:

1. In the Firebase Console, go to Firestore Database > Rules
2. Replace the existing rules with the ones above
3. Click "Publish"

These rules allow:
- Anyone to submit contact messages (create)
- Only authenticated users (admins) to read, update, or delete messages

## Testing

1. Start the development server: `npm run dev`
2. Navigate to the contact page and submit a form
3. Check the Firestore database to verify the message was saved
4. Navigate to `/admin` to view submitted messages
5. For detailed configuration testing, visit `/test-firebase-config`

## Troubleshooting

If you encounter a "FirebaseError: Missing or insufficient permissions" error:

1. Make sure you've updated the Firestore security rules as described above
2. Verify that your Firebase configuration in `.env.local` is correct
3. Check the browser console for more detailed error messages
4. Ensure you're using the correct Firebase project and credentials

The most common cause of this error is incorrect security rules. The rules provided above should resolve the permission issue by allowing public creation of contact messages while restricting read access to authenticated users only.

### Specific Issue: Not Logged In

If your debug tool shows "User: Not logged in" with a permission error, this is expected behavior. Your security rules correctly restrict read access to authenticated users only.

To fix this:

1. Create an admin account in Firebase Authentication (see Firebase Authentication Setup above)
2. Log in to the admin panel at `/admin` with those credentials
3. Messages will appear automatically after login

### Testing Your Configuration

For detailed configuration testing, visit `/test-firebase-config` which will run automated tests and provide specific guidance.

If messages are not showing in the admin panel:

1. Verify that you're logged in with the correct admin credentials
2. Check the browser console for any JavaScript errors
3. Confirm that messages are actually being saved to Firestore by checking the Firebase Console
4. Try refreshing the admin page or clicking the "Refresh" button
5. Ensure your security rules allow read access for authenticated users

You can also check if messages exist in Firestore by:
1. Going to the Firebase Console
2. Navigating to Firestore Database
3. Checking if the `contactMessages` collection exists and has documents

## Debugging Messages Not Showing in Admin

If messages are being saved to Firebase but not showing in the admin panel:

1. Visit `/debug-firebase` to check if messages can be fetched
2. Check the browser console for detailed logging information
3. Verify the user is properly authenticated in the admin panel
4. Try the API endpoint at `/api/verify-messages` to test server-side connectivity

### Common Issues:

1. **Authentication Problems**: Make sure you're logged in with an account that has read permissions
2. **Security Rules**: Ensure the security rules allow read access for authenticated users
3. **Network Issues**: Check for any network errors in the browser console
4. **Data Format**: Verify that the data structure in Firestore matches what the admin panel expects

### Debugging Steps:

1. Open the browser's developer tools (F12)
2. Go to the Console tab
3. Visit the admin page
4. Look for log messages that indicate what's happening during the fetch process
5. Check for any error messages

The debug page (`/debug-firebase`) provides detailed information about:
- Authentication status
- Ability to fetch messages
- Message data format

## React Hydration Issues

If you encounter React hydration warnings in development, please refer to the [Hydration Issues documentation](./hydration-issues.md) for solutions. These warnings are common with browser extensions and don't affect functionality in production.

## Firebase Configuration Issues

If you encounter configuration errors like "CONFIGURATION_NOT_FOUND", please refer to the [Firebase Configuration Issues documentation](./firebase-configuration-issues.md) for solutions. These errors are typically caused by incorrect API keys or project configuration.