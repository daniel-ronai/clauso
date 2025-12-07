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
import FinalCTA from "@/components/FinalCTA";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <div className="main-container">
        <section className="section">
            <div className="content-container">
                <div className="content-text">
                    <div className="bubble-text">
                        <Link href='/'>
                            🔥 Join the <span className="gold-shine">waitlist</span>
                        </Link>
                    </div>

                    <h1 className="hero-header">
                        Never let{" "}
                        <TypingHighlight
                            words={[ "loss", "liability", "risk" ]}
                            typingSpeed={100}      // slower typing
                            deletingSpeed={70}     // slower deleting
                            pauseDelay={2000}      // wait before deleting and before next word
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
                    It was written in legalese. <br />
                    Anything could be buried in there. <br />
                    <span className="hook-emphasis">Translation shouldn't cost $500/hour.</span>
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
        <section className="section">
            <div className="hook-container" style={{paddingBottom: "8rem"}}>
                <p className="hook-text">
                    Read 50 pages in 30 seconds. <br />
                    Catch what matters in plain English. <br />
                    <span className="hook-emphasis">Sign with actual confidence.</span>
                </p>
            </div>
        </section>

        <PricingSection />

        <section id='join-waitlist' className="cta-section" style={{paddingBottom: "4rem"}}>
            <FinalCTA />
        </section>
    </div>
  );
}
