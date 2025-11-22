# Firebase Setup Instructions

## Step 1: Create a New Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter a project name (e.g., "disney-plus-clone")
4. Follow the setup wizard (you can disable Google Analytics if you want)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project, go to **Authentication** in the left sidebar
2. Click **Get Started**
3. Click on **Sign-in method** tab
4. Click on **Google** provider
5. Toggle **Enable** to ON
6. Enter a project support email
7. Click **Save**

## Step 3: Get Your Firebase Config

1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Select **Project settings**
3. Scroll down to **Your apps** section
4. Click the **Web** icon (`</>`) to add a web app
5. Register your app with a nickname (e.g., "Disney Clone")
6. Copy the `firebaseConfig` object

## Step 4: Update Your Firebase Config

Update the `src/firebase.js` file with your new Firebase configuration.

Your config will look like this:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Step 5: Set Authorized Domains (Important!)

1. In Firebase Console, go to **Authentication** > **Settings** > **Authorized domains**
2. Make sure `localhost` is in the list (it should be by default)
3. If you're deploying, add your production domain

## Step 6: Restart Your Development Server

After updating the config, restart your React app:
- Stop the current server (Ctrl+C)
- Run `npm start` again


