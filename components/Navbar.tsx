'use client';

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">Clauso</div>

            <div className="navbar-links">
                <Link href="/" className="active">Home</Link>
                <Link href="/">Docs</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">Account</Link>
            </div>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
                <Link href="/" className="active" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/" onClick={() => setIsOpen(false)}>Docs</Link>
                <Link href="/" onClick={() => setIsOpen(false)}>Pricing</Link>
                <Link href="/" onClick={() => setIsOpen(false)}>Account</Link>
            </div>
        </nav>
    );
}
