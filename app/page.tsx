import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container">
        <section className="section">
            <div className="content-container">
                <div className="content-text">
                    <div className="bubble-text">🔥 Try it risk-free</div>
                    <h1 className="hero-header">Never make a <span className="highlight">mistake</span> in your contracts again.</h1>
                    <p className="hero-subheader">
                        Clauso’s AI-powered assistant analyzes every clause, flags risks, and ensures you sign with total confidence.
                    </p>
                    <div className="cta-buttons">
                        <button className="cta-button-primary">Go to Dashboard</button>
                        <button className="cta-button-secondary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
