'use client';

import Image from "next/image";
import Link from "next/link";
import TypingHighlight from "@/components/TypingHighlight";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import ContractSection from "@/components/ContractSection";
import SummarySection from "@/components/SummarySection";
import SafetyNetSection from "@/components/SafetyNetSection";
import { PricingTable } from "@clerk/nextjs";

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
            <div className="hook-container">
                <p className="hook-text">
                    They had a lawyer write it. <br />
                    You probably don't have one to read it. <br />
                    <span className="hook-emphasis">That's not a fair fight.</span>
                </p>
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
        <section className="section">
            <div className="content-container">
                <SafetyNetSection />
            </div>
        </section>
        <div className="items-center">
            <div className="pricing-container">
                <h2 className="contract-section-header">When we launch, pricing will be</h2>
                <p className="contract-section-subheader">
                Find what u need
                </p>
            </div>
        </div>
        <PricingTable />
        <section className="section">
            <div className="content-container">

            </div>
        </section>

        <section className="section">
            <div className="final-cta-container">
                <h2 className="final-cta-heading">
                    Stop signing blind.
                </h2>
                <p className="final-cta-subtext">
                    Join the waitlist and be among the first to catch what others miss.
                </p>
    
                <div className="final-cta-form">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="final-cta-input"
                    />
                    <button className="final-cta-button">
                        Join Waitlist
                    </button>
                </div>
    
                <p className="final-cta-footnote">
                    Early access launching March 2025. First 500 users get lifetime discount.
                </p>
            </div>
        </section>
    </div>
  );
}
