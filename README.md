# Fixora Food Solutions Website

This is the official website for Fixora Food Solutions (Pvt) Ltd, built with Next.js.

## Features

- Responsive design for all device sizes
- Product showcase with detailed pages
- Services listing
- Company information
- News section
- Careers page
- Contact form
- **AI Chatbot** - Instant customer support using OpenRouter API
- **AI Product Recommendations** - Smart product suggestions using Google AI
- **Admin Dashboard** - Manage contact messages and blog posts
- **News & Updates Management** - Feature important posts with embedded previews

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up the chatbot:
   - Create a `.env.local` file in the root directory
   - Add your OpenRouter API key:
     ```
     NEXT_PUBLIC_OPENROUTER_API_KEY=your_api_key_here
     ```

3. Set up AI product recommendations:
   - In the same `.env.local` file, add your Google AI API key:
     ```
     GOOGLE_API_KEY=your_google_ai_api_key_here
     ```

4. Set up Firebase for admin features:
   - Add your Firebase configuration to `.env.local`:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
     NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
     ```

5. Set up Firebase security rules:
   - Deploy the Firestore rules to allow public read access to blog posts:
     ```bash
     firebase deploy --only firestore:rules
     ```

6. Run the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Chatbot Setup

For detailed instructions on setting up and configuring the chatbot, see [docs/chatbot-setup.md](docs/chatbot-setup.md).

## AI Product Recommendations

The website uses Google AI (Gemini) to provide product recommendations. To enable this feature:

1. Get a Google AI API key from [Google AI Studio](https://aistudio.google.com/)
2. Add it to your `.env.local` file as shown in the Getting Started section

## Admin Dashboard

The admin dashboard allows you to:
- Manage contact form submissions
- Manage blog posts for the News & Updates section
- Feature important posts to display with embedded previews

To access the admin dashboard:
1. Visit `/admin`
2. Log in with your admin credentials
3. Use the "News & Updates" tab to manage blog posts

## News & Updates Management

The News & Updates section supports two types of posts:
- **Featured Posts**: Displayed with an embedded preview of the content
- **Regular Posts**: Displayed as links only

To manage posts:
1. Add new posts with titles, URLs, and optional summaries
2. Mark posts as "Featured" to display their embedded preview
3. Feature only one post at a time for best user experience

## Firebase Security Rules

The Firestore security rules have been configured to:
- Allow public read access to blog posts (so anyone can view the News & Updates page)
- Require authentication for creating, updating, or deleting blog posts (admin only)
- Allow anyone to submit contact messages
- Require authentication for reading, updating, or deleting contact messages (admin only)

To deploy the security rules:
```bash
firebase deploy --only firestore:rules
```

## Testing Features

- Test chatbot: Visit any page and click the chat icon in the bottom right
- Test product recommendations: Visit a product detail page and scroll to the "You Might Also Like" section
- Test recommendations directly: Visit `/test-recommendations` to test with different products
- Test page loading: Visit `/test-pages` to verify About and Careers pages load correctly
- Test admin features: Visit `/admin` to access the dashboard

## Troubleshooting

If you encounter issues with page loading:
- See [docs/page-loading-fixes.md](docs/page-loading-fixes.md) for information about common page loading issues and fixes

If you encounter issues with the admin dashboard:
- Verify your Firebase configuration in `.env.local`
- Check that your Firestore security rules allow read/write access for authenticated users

If you encounter permission errors on the News & Updates page:
- Make sure you've deployed the Firestore security rules with `firebase deploy --only firestore:rules`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!