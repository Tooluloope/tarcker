import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_ID

};



// Takes in the Authenticated User after component did mount  and check if user Snapshot exist in Firestore and user return  reference to the USer
export const createUserProfileDocument = async (userAuth, displayName, ...additionalData) => {
    if(!userAuth) return 
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {email} = userAuth
        const createdAt = new Date()

        await userRef.set({
            
            email,
            createdAt,
            additionalData
        });

        // Updating the user displayName

        let user = firebase.auth().currentUser;
        console.log(user)

        user.updateProfile({
            displayName: displayName,
            
          }).then(function() {
            console.log("Update Successful")
          }).catch(function(error) {
            console.log(error)
          });
    }

    return userRef;
}
 
 
 
  // Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

// Represents the Google Sign-In authentication provider. Use this class to obtain GoogleAuthCredentials.
// Start a sign in process for an unauthenticated user.
const provider = new firebase.auth.GoogleAuthProvider();

// Sets the OAuth custom parameters to pass in a Google OAuth request for popup and redirect sign-in operations
provider.setCustomParameters({prompt: 'select_account'})

// Sign in with a Google popup
export const signInWithGoogle = ()=> auth.signInWithPopup(provider)




  export default firebase;