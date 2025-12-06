import React from 'react'
import Navbar from './Navbar'
import { ClerkProvider } from '@clerk/nextjs';
import Footer from './Footer';
import { currentUser } from '@clerk/nextjs/server';
import { Link } from 'lucide-react';

export const DashboardContent = async () => {

  const user = await currentUser();

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
                        <a style={{ color: "blue" }} href="/">
                            Click here to go back to the landing page
                        </a>
                    </div>
                </div>
            </section>
        </div>
  );
}
