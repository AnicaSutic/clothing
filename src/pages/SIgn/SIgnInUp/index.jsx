import React from 'react'
import SignIn from '../../../components/SignIn';
import SignUp from '../../../components/SignUp';
import './index.scss';

export default function SignInUp() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}
