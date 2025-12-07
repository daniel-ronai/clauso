import React from 'react';

const Docs = () => {
    return (
        <div className="main-container">
            <section className="section">
                <div className="content-container">
                    <div className="content-text">
                        <div className="bubble-text">📄 Documentation</div>
                        <h1 className="hero-header" style={{marginBottom: '3rem'}}>Welcome to <span className="zigzag-underline">our Docs</span></h1>
                        <p className='legal-text'>
                             Hey there! 👋 We're building Clauso, and we're genuinely excited to have you here. Whether you're a freelancer staring down a 47-page contract at 11 PM, a consultant who's tired of paying lawyers $400 every time a client sends an NDA, or a founder who just wants to know if that partnership agreement is going to bite you later—this is for you.
                        </p>

                        <p className='legal-text'>
                            Here's the thing: contracts are written in a language designed to confuse you. It's not your fault you don't understand them. But signing something you don't understand? That's how people get burned. We've seen it happen. A missed clause here, an ambiguous term there, and suddenly you're on the hook for way more than you bargained for.
                        </p>

                        <p className='legal-text'>
                            Clauso is an AI-powered contract analyzer that reads the fine print so you don't have to. Upload a contract, and within seconds, our AI breaks down exactly what you're agreeing to—the risks, the red flags, the stuff buried on page 23 that could cost you thousands.
                        </p>

                        <p className='legal-text'>
                            We highlight the dangerous clauses, explain them in plain English, and tell you when something needs a real lawyer's eyes. And here's what makes us different: we don't pretend to replace lawyers. When a contract involves serious liability, IP transfers, or regulatory compliance, we tell you.
                        </p>

                        <p className='legal-text'>
                          This is still early days. We're actively building, learning, and improving based on feedback from people like you. If something breaks, or if you have ideas on how we can make this better, please tell us. We're in this together, and we genuinely want to build something that makes your life easier.
                        </p>

                        <p className='legal-text'>
                          Ready to stop signing blind? Let's go. 🚀
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Docs;
