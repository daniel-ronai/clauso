import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="min-h-[80vh]">
            <div className="main-container">
                <div className="sign-in-page">
                    <SignIn />
                </div>
            </div>
        </div>
    )
}