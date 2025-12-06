import React from 'react';

const Docs = () => {
    return (
        <div className="main-container">
            <section className="section">
                <div className="content-container">
                    <div className="content-text">
                        <div className="bubble-text">📄 Documentation</div>
                        <h1 className="hero-header">Welcome to <span className="zigzag-underline">our Docs</span></h1>
                        <p style={{margin: "1rem auto"}}>
                            The goal of these documentation pages is to provide users with clear guidance on how to use
                            Clauso effectively, understand its features, and get the most out of its AI-powered contract
                            analysis. Whether you're a first-time user or an experienced professional, these docs aim to
                            make your experience smooth and intuitive. Please note that the documentation is <strong>still
                            a work in progress</strong>, and we are continuously updating it with new guides, tutorials,
                            and feature explanations.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Docs;
