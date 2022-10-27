import React, { useRef, useEffect } from 'react'
import { signInWithGoogle } from '../Util/firebase'

function SignInButton() {

    const signInRef = useRef()

    // useEffect(() => {
    //     /* global google */

    //     google.accounts.id.renderButton(
    //         signInRef.current, { theme: 'outline', size: 'large' }
    //     )
    // }, [])


    return (
        <button onClick={() => { signInWithGoogle() }}>Login</button>
        // <div ref={signInRef}>sign in</div>
    )
}

export default SignInButton