import React from 'react';
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

const Dashboard = async() => {
    const user = await currentUser();

    if (!user) {
        redirect(`/sign-in`);
    }

    return (
        <div className="main-container">
            <section className="section">
                <div className="content-container">
                    <div className="content-text">
                        <h1 className="hero-header flex items-center gap-4">
                            Welcome back {user?.firstName!}
                        </h1>
                        <p style={{margin: "1rem auto"}}>
                            We're still working on your dashboard. Thank you for your patience.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
