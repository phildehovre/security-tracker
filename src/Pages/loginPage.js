import React from 'react'
import SignIn from '../components/SignIn'
import LogIn from '../components/LogIn'
import { auth } from '../Util/firebase'


function login() {


    return (<>
        {/* <LogIn /> */}
        <SignIn />
    </>
    )
}

export default login