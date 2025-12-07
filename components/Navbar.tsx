'use client';

import { useState } from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {usePathname} from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="navbar">
            <div className="navbar-logo"><Link href="/">Clauso</Link></div>

            <div className="navbar-links">
                <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
                <Link href="/docs" className={pathname === "/docs" ? "active" : ""}>Docs</Link>
                {/*<Link href="/pricing" className={pathname === "/pricing" ? "active" : ""}>Pricing</Link>*/}
                {/*<Link href="/dashboard" className={pathname === "/dashboard" ? "active" : ""}>Dashboard</Link>*/}
                <SignedOut>
                    <SignInButton>
                        <button className="btn-sign-in">Sign In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
                <Link href="/" className="active" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/docs" onClick={() => setIsOpen(false)}>Docs</Link>
                <Link href="/term-of-service" onClick={() => setIsOpen(false)}>Terms</Link>
                <Link href="/privacy-policy" onClick={() => setIsOpen(false)}>Privacy</Link>
                {/*<Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
                <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>*/}
                <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                    <SignedOut>
                        <SignInButton>
                            <button className="btn-sign-in">Sign In</button>
                        </SignInButton>
                    </SignedOut>
                </Link>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}
