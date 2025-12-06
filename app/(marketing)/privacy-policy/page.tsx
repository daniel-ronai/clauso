import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="main-container">
            <section className="section">
                <div className="content-container">
                    <div className="content-text">
                        <div className="bubble-text">📄 Legals</div>
                        <h1 className="hero-header">Privacy Policy</h1>
                        <div style={{textAlign: "left"}}>
                            <p><strong>Privacy Policy</strong></p>

                            <p>Last updated: 2025.11.30</p>

                            <p>
                                This Privacy Policy explains how Clausо ("we", "our", "us") collects, uses, and protects
                                your
                                information. Clausо is currently an early-stage MVP and may change as the product
                                evolves.
                                By using Clausо, you agree to the practices described here.
                            </p>

                            <p><strong>1. Information We Collect</strong></p>

                            <p><strong>a. Information you provide</strong></p>
                            <p>
                                • Uploaded documents or contract text (if you choose to upload)<br/>
                                • Account information such as email (via Clerk authentication)<br/>
                                • Any content you submit while using the platform
                            </p>

                            <p><strong>b. Automatically collected information</strong></p>
                            <p>
                                • Basic device and usage data (browser type, device type, timestamps)<br/>
                                • Error logs for debugging and improving the service
                            </p>

                            <p><strong>c. Third-party services</strong></p>
                            <p>
                                We use third-party providers such as Clerk (authentication), Supabase (database), and
                                OpenAI/Deepgram (AI processing). These services may process limited data as required to
                                operate Clausо.
                            </p>

                            <p><strong>2. How We Use Your Information</strong></p>

                            <p>
                                We use the information we collect to:
                            </p>

                            <p>
                                • Provide contract analysis features<br/>
                                • Improve accuracy and reliability of AI results<br/>
                                • Maintain user accounts<br/>
                                • Deliver core functionality of the platform<br/>
                                • Fix bugs, improve performance, and secure the service
                            </p>

                            <p>
                                Uploaded documents are used <strong>only</strong> to generate analysis results. We do
                                not sell or share
                                your data with advertisers or external parties.
                            </p>

                            <p><strong>3. Storage & Security</strong></p>

                            <p>
                                All user data is stored securely using Supabase and industry-standard encryption.
                                However,
                                because Clausо is an MVP, there may be occasional changes in infrastructure or
                                performance.
                            </p>

                            <p>
                                We take security seriously, but no system is entirely immune to risks. You use Clausо at
                                your own discretion.
                            </p>

                            <p><strong>4. AI Processing</strong></p>

                            <p>
                                Contract text and user inputs may be sent to AI providers such as OpenAI and Deepgram
                                solely for processing your request. We do not allow these providers to train models on
                                your
                                data.
                            </p>

                            <p><strong>5. Cookies</strong></p>

                            <p>
                                Clausо may use essential cookies required for authentication and session management.
                                We do not use tracking or advertising cookies.
                            </p>

                            <p><strong>6. Data Retention</strong></p>

                            <p>
                                We keep your data only as long as necessary to provide the service. You may request
                                deletion of your account or uploaded content at any time by contacting us.
                            </p>

                            <p><strong>7. Children's Privacy</strong></p>

                            <p>
                                Clausо is not intended for use by individuals under 18. We do not knowingly collect data
                                from minors.
                            </p>

                            <p><strong>8. Changes to This Policy</strong></p>

                            <p>
                                As the product evolves, this Privacy Policy may be updated. We will update the “Last
                                Updated” date when changes are made.
                            </p>

                            <p><strong>9. Contact</strong></p>

                            <p>
                                For questions about this Privacy Policy, contact:<br/>
                                <strong>Daniel Ronai</strong><br/>
                                <a href="mailto:hello@danielsends.email">hello@danielsends.email</a>
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PrivacyPolicy;
