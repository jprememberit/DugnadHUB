DugnadHub – Volunteer Management App Built with React Native (Expo) and
Firebase

DugnadHub is a mobile application designed to simplify the creation,
organization, and participation in volunteer work (dugnad). The app
provides users with a smooth workflow for discovering events, signing
up, commenting, saving favorites, and—if organiser—creating and managing
events.

------------------------------------------------------------------------

Installation & Setup

Prerequisites: - Node.js (LTS recommended) - npm or yarn - Expo CLI
(optional but useful) - Firebase project (Firestore, Authentication,
Storage)

Clone the repository: git clone cd DugnadHub

Install dependencies: npm install or yarn install

Environment variables: Create a .env file in the root directory:

EXPO_PUBLIC_apiKey=your_key
EXPO_PUBLIC_authDomain=your_domain
EXPO_PUBLIC_projectId=your_id
EXPO_PUBLIC_storageBucket=your_bucket
EXPO_PUBLIC_messagingSenderId=your_sender
EXPO_PUBLIC_appId=your_app_id

------------------------------------------------------------------------

Running the App

Start development server: npm start

Run on Android: npm run android

Run on iOS (Mac only): npm run ios

Run in browser: npm run web

------------------------------------------------------------------------

 Implemented Core Requirements

1. User Authentication

    Firebase Email/Password login and registration.
    User accounts stored in Firestore with roles (volunteer/organiser).

2. Viewing Dugnader Work

    List of all upcoming events.
    Search and category filter.
    Event details page with title, description, tasks, category, volunteer capacity, and images.
    Users can sign up for events (with automatic update of remaining capacity).

3. Creation of New Volunteer Events

    Organisers can create new events with:

      Title
      Description
      Tasks
      Category
      Location
      Date/time
      Max volunteers
      Uploading images via camera or gallery
    Images stored in Firebase Storage.

4. Navigation

    Auth stack + bottom tab navigation.
    Navigation between event list → event details → profile → create event.

---

 Extended Functionality Implemented

1. Search & Filter – Users can search events by title/description and filter by category.
2. Error Handling – Custom error banner + alerts for authentication, uploads, and form errors.
3. Favorites – Users can mark/unmark favorite events and view them in profile.

4. Personal Statistics – Profile screen shows total events participated, upcoming events, past events, and favorite events.
5. Event Management (Capacity Tracking) – Each event has a max capacity; remaining slots update when users sign up/withdraw.
6. Interactive communication - Can leave a comment. Volunteer can delete their own comment, while organiser can delete all. 

7. User Roles (Organiser vs Volunteer) –

    Organisers can create events and manage events they created aswell as deletes comments of other users.
    Volunteers can only view, sign up and leave a comment.
    Role switch included in profile.

8. Language Selection (EN / NO) - 

    The app supports two languages: Norwegian (NO) and English (EN).
    Users can change the language at any time from the profile/settings screen.

---

------------------------------------------------------------------------

Testing Platforms

Android Emulator: Tested | iOS Simulator: Tested | Expo Web: Tested

------------------------------------------------------------------------

Firebase:
FireStore Databse - Rules:

rules_version = '2';

service cloud.firestore {
match /databases/{database}/documents {

// This rule allows anyone with your Firestore database reference to view, edit,
// and delete all data in your Firestore database. It is useful for getting
// started, but it is configured to expire after 30 days because it
// leaves your app open to attackers. At that time, all client

// requests to your Firestore database will be denied.
//
// Make sure to write security rules for your app before that time, or else
// all client requests to your Firestore database will be denied until you Update
// your rules
match /{document=**} {
allow read, write: if request.time < timestamp.date(2025, 12, 17);
}
}
}

Storage - Rules:

rules_version = '2';
// Craft rules based on data in your Firestore database
// allow write: if firestore.get(
// /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
service firebase.storage {
match /b/{bucket}/o {
match /{allPaths=**} {
allow read, write: if request.auth != null;
}
}
}


Notes
 The app runs with Firebase config loaded from .env using `process.env.EXPO_PUBLIC_`.


