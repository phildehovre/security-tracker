import firebaseui from "firebaseui";
import firebase from 'firebase'

var ui = new firebaseui.auth.AuthUI(firebase.auth)

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
        }
    ],
    // Other config options...
});


if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    ui.start('#firebaseui-auth-container', uiConfig);
}