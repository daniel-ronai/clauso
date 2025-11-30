"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">

                <div className="footer-left">
                    <Link href="https://x.com/daniel_ronaii" target="_blank" rel="noopener noreferrer">
                        <p className="footer-built">Built and founded by Daniel</p>
                    </Link>
                </div>

                <div className="footer-links">
                    <Link href="/">Home</Link>
                    <Link href="/docs">Docs</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/privacy-policy">Privacy</Link>
                    <Link href="/terms-of-service">Terms</Link>
                </div>

            </div>
        </footer>
    );
}
