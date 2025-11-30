import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="main-container">
            <div className="sign-in-page">
                <SignIn />
            </div>
        </div>
    )
}