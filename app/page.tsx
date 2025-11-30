'use client';

import Image from "next/image";
import Link from "next/link";
import TypingHighlight from "@/components/TypingHighlight";

export default function Home() {
  return (
    <div className="main-container">
        <section className="section">
            <div className="content-container">
                <div className="content-text">
                    <div className="bubble-text">🔥 Try it risk-free</div>
                    <h1 className="hero-header">
                        Never make a{" "}
                        <TypingHighlight
                            words={["mistake", "typo", "blunder", "pitfall"]}
                            typingSpeed={180}      // slower typing
                            deletingSpeed={90}     // slower deleting
                            pauseDelay={1800}      // wait before deleting and before next word
                        />{" "}
                        in your contracts again.
                    </h1>

                    <p className="hero-subheader">
                        Clauso’s AI-powered assistant analyzes every clause, flags risks, and ensures you sign with total confidence.
                    </p>
                    <div className="cta-buttons">
                        <Link href='/dashboard'>
                            <button className="cta-button-primary">Go to Dashboard</button>
                        </Link>
                        <Link href='/'>
                            <button className="cta-button-secondary">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
