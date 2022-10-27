import React from 'react'
import { signInWithGoogle, useSignOut as signOut } from '../Util/firebase'

function SignInButton() {

    return (
        <>
            <button onClick={() => { signInWithGoogle() }}>Login with Google</button>
            <button onClick={() => { signOut() }}>Sign out</button>
        </>
    )
}

export default SignInButton