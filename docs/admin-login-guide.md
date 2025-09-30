# Admin Login Guide

This guide explains how to set up and log in to the admin panel to view contact form submissions.

Before setting up an admin account, you can verify your Firebase configuration by visiting `/test-firebase-config` which will run automated tests and provide specific guidance.

## Prerequisites

1. You must have set up Firebase Authentication in your Firebase project
2. You must have configured Firestore security rules as described in the Firebase Setup Guide

## Creating an Admin Account

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project "fixorafood"
3. Navigate to **Authentication** > **Users**
4. Click **"Add user"**
5. Enter an email and password for your admin account (e.g., admin@yourdomain.com)
6. Click **"Add user"**

## Logging in to the Admin Panel

1. Visit your admin page:
   - Development: [http://localhost:9002/admin](http://localhost:9002/admin)
   - Production: [your-domain.com/admin](your-domain.com/admin)

2. You'll see the login form:
   ![Admin Login Form](/docs/images/admin-login.png)

3. Enter the email and password you created in the previous step

4. Click **Login**

## Troubleshooting Login Issues

### Invalid Email or Password

If you get an "Invalid email or password" error:

1. Double-check that you're entering the correct credentials
2. Make sure you created the account in the correct Firebase project
3. Check that you're using the correct Firebase configuration in your `.env.local` file

### Too Many Failed Attempts

If you see "Too many failed attempts":

1. Wait a few minutes before trying again
2. Make sure you're using the correct credentials

### Account Not Found

If you get an "Account not found" error:

1. Go back to the Firebase Console
2. Navigate to **Authentication** > **Users**
3. Verify that your admin account exists
4. If it doesn't exist, create it following the steps above

## Verifying Security Rules

Make sure your Firestore security rules are properly configured:

1. In the Firebase Console, go to **Firestore Database** > **Rules**
2. Ensure your rules match this:

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

3. Click **"Publish"** to save the rules

## After Logging In

Once you're successfully logged in:

1. You'll see the contact form submissions
2. You can delete messages using the trash icon
3. You can refresh the list using the refresh button
4. You can log out using the logout button

## Common Issues and Solutions

### Messages Still Not Showing After Login

If you're logged in but still don't see messages:

1. Make sure the contact form is working properly
2. Check that messages are being saved to Firestore:
   - Go to Firebase Console > Firestore Database
   - Check if the `contactMessages` collection exists
   - Verify it has documents
3. Try clicking the "Refresh" button in the admin panel
4. Check the browser console for any error messages

### Permission Errors After Login

If you're logged in but still see permission errors:

1. Verify your Firestore security rules are correct (see above)
2. Make sure you're logged in with the correct account
3. Try logging out and logging back in
4. Check that your Firebase configuration in `.env.local` is correct

## Debugging

If you continue to have issues:

1. Visit the debug page at `/debug-firebase`
2. Check the authentication status
3. Try the "Fetch Messages" action
4. Review the error messages for specific guidance

## Security Best Practices

1. Use a strong password for your admin account
2. Don't share admin credentials
3. Consider enabling multi-factor authentication for admin accounts
4. Regularly review the list of users in Firebase Authentication
5. Monitor the Firebase Console for any suspicious activity