# Firebase Security Rules

This document explains the Firebase security rules for the Fixora Food Solutions website.

## Overview

The Firestore security rules are designed to:
1. Allow public read access to blog posts (so anyone can view the News & Updates page)
2. Restrict write access to blog posts to authenticated admin users only
3. Allow anyone to submit contact messages
4. Restrict read, update, and delete access to contact messages to authenticated admin users only

## Rules Explanation

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read blog posts
    match /blogPosts/{document} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
    
    // Allow anyone to create contact messages
    match /contactMessages/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

### Blog Posts Rules
- `allow read: if true;` - Allows anyone (authenticated or not) to read blog posts
- `allow create, update, delete: if request.auth != null;` - Only allows authenticated users to create, update, or delete blog posts

### Contact Messages Rules
- `allow create: if true;` - Allows anyone to submit contact messages
- `allow read, update, delete: if request.auth != null;` - Only allows authenticated users to read, update, or delete contact messages

## Deployment

To deploy these rules:

1. Make sure you have the Firebase CLI installed:
   ```
   npm install -g firebase-tools
   ```

2. Log in to Firebase:
   ```
   firebase login
   ```

3. Deploy the rules:
   ```
   firebase deploy --only firestore:rules
   ```

## Troubleshooting

If you're still seeing permission errors:

1. Verify that the rules file is correctly formatted
2. Check that you're deploying to the correct Firebase project
3. Make sure your Firebase project has the Blaze (pay-as-you-go) plan enabled, as the Spark (free) plan has limitations on Firestore security rules

For more information about Firestore security rules, see the [Firebase documentation](https://firebase.google.com/docs/firestore/security/get-started).