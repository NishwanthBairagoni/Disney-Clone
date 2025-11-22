# Firebase Setup Checklist

## ✅ Completed
- [x] Firebase config updated in `src/firebase.js`
- [x] Development server restarted

## 🔴 REQUIRED: Do This Now in Firebase Console

### Step 1: Enable Google Authentication
1. Go to: https://console.firebase.google.com/project/disneyclone-e84a5/authentication/providers
2. Click on **Google** provider
3. Toggle **Enable** to **ON**
4. Enter your email as the **Project support email**
5. Click **Save**

### Step 2: Verify Authorized Domains
1. Go to: https://console.firebase.google.com/project/disneyclone-e84a5/authentication/settings
2. Scroll to **Authorized domains**
3. Make sure `localhost` is in the list (it should be by default)

## 🎯 After completing the above:
- Your login button should work!
- Click "GET ALL THERE" to test Google sign-in

---

**Quick Links:**
- [Enable Google Auth](https://console.firebase.google.com/project/disneyclone-e84a5/authentication/providers)
- [Check Authorized Domains](https://console.firebase.google.com/project/disneyclone-e84a5/authentication/settings)


