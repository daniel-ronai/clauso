'use client';

import Image from "next/image";
import Link from "next/link";
import TypingHighlight from "@/components/TypingHighlight";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import ContractSection from "@/components/ContractSection";
import SummarySection from "@/components/SummarySection";

export default function Home() {
  return (
    <div className="main-container">
        <section className="section">
            <div className="content-container">
                <div className="content-text">
                    <div className="bubble-text">
                        <Link href='/#waitlist-form'>
                            🔥 Join the <span className="gold-shine">waitlist</span>
                        </Link>
                    </div>

                    <h1 className="hero-header">
                        Never let{" "}
                        <TypingHighlight
                            words={["risk", "loss", "liability"]}
                            typingSpeed={180}      // slower typing
                            deletingSpeed={90}     // slower deleting
                            pauseDelay={1800}      // wait before deleting and before next word
                        />{" "}
                        hit your contracts again.
                    </h1>

                    <p className="hero-subheader">
                        Every contract hides risk. With our tool, you catch potential losses early, protect your business from liability, and make confident decisions, fast.
                    </p>
                    {/*<div className="cta-buttons">
                        <Link href='/dashboard'>
                            <button className="cta-button-primary">Go to Dashboard</button>
                        </Link>
                        <Link href='/docs'>
                            <button className="cta-button-secondary">Learn More</button>
                        </Link>
                    </div>*/}
                    <div id="waitlist-form">
                        <WaitlistForm />
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="content-container">
                <ContractSection />
            </div>
        </section>
        <section className="section">
            <div className="content-container">
                <SummarySection />
            </div>
        </section>
    </div>
  );
}
