<p align="center">Twitter clone built in React.js + Express,js + Less using Cloud Firestore and Storage</p>

## Preview :clapper:

<img width="1425" alt="homepage" src="https://github.com/JuliaSukach/twitter-clone/assets/35064670/a4da4cbe-467b-475d-bffb-85a561829931">




## Features :sparkles:

  - Authentication with Firebase Authentication
  - Strongly typed React components
  - Users can add tweets, like, retweet, and reply
  - Users can delete tweets, add a tweet to bookmarks, and pin their tweet
  - Users can add images and GIFs to tweet
  - Users can follow and unfollow other users
  - Users can see their and other followers and the following list
  - Users can see all users and the trending list
  - Realtime update likes, retweets, and user profile
  - Realtime trending data from Twitter API
  - User can edit their profile
  - Responsive design for mobile, tablet, and desktop
  - Users can customize the site color scheme and color background
  - All images uploads are stored on Firebase Cloud Storage

## Tech :hammer_and_pick:

  - [Express](https://expressjs.com/)
  - [React](https://react.dev/)
  - [Less](https://lesscss.org/)
  - [Firebase](https://firebase.google.com/)
  - [Nodemailer](https://www.nodemailer.com/)

## Development :computer:
Here are the steps to run the project locally.

  1. Clone the repository
  ```
  https://github.com/JuliaSukach/twitter-clone.git
  ```
  2. Install dependencies
  ```
  npm i
  ```
  3. Create a Firebase project and select the web app
  4. Add your Firebase config to .env.development. Note that NEXT_PUBLIC_MEASUREMENT_ID is optional
  5. Make sure you have enabled the following Firebase services:
      - Authentication. Enable the Google sign-in method.
      - Cloud Firestore. Create a database and set its location to your nearest region.
      - Cloud Storage. Create a storage bucket.
  6. Install Firebase CLI globally
     ```
     npm i -g firebase-tools
     ```
  7. Log in to Firebase
     ```
     firebase login
     ```
  8. Get your project ID
     ```
     firebase projects:list
     ```
  9. Select your project ID
     ```
     firebase use your-project-id
     ```
  10. Run this project using the Firebase on the cloud
      
      1. Deploy Firestore rules, Firestore indexes, and Cloud Storage rules
         ```
         firebase deploy --except functions
         ```
      2. Run the project
         ```
           npm run dev
         ```
      
     
