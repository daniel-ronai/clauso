import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="main-container">
            <section className="section">
                <div className="content-container">
                    <div className="content-text">
                        <div className="bubble-text">📄 Legals</div>
                        <h1 className="hero-header">Privacy Policy</h1>
                        <p>Last updated: 2025.12.07.</p>
                        <div>

                            <p className="legal-text">This privacy policy explains how Clauso collects, uses, and protects your personal information when you join our waitlist or create an account. By using our service, you agree to the collection and use of information in accordance with this policy.</p>

                            <p className="legal-text">We collect your email address when you join our waitlist. This information is stored in our database and is used solely to notify you about product updates, launch information, and waitlist-related communications. We may also collect account information if you choose to create an account through our authentication provider, Clerk. This may include your name, email address, and authentication credentials.</p>

                            <p className="legal-text">Your email address submitted through the waitlist is stored in Supabase. Account information created through Clerk is managed and secured by Clerk's authentication system. We do not sell, trade, or rent your personal information to third parties. Your data is used exclusively for the purpose of managing our waitlist and providing you with updates about Clauso.</p>

                            <p className="legal-text">We work with third-party service providers to help us operate our waitlist and authentication systems. Specifically, we use Supabase for data storage and Clerk for account authentication and management. These providers have access to your information only to perform specific tasks on our behalf and are obligated to protect your information.</p>

                            <p className="legal-text">We implement reasonable security measures to protect your information from unauthorized access, alteration, or destruction. However, please be aware that no method of electronic storage is completely secure, and we cannot guarantee absolute security of your data.</p>

                            <p className="legal-text">You have the right to access, update, or delete your personal information at any time. If you wish to unsubscribe from our waitlist, update your information, or have your data removed from our systems, please contact us at hello@danielsends.email and we will process your request promptly.</p>

                            <p className="legal-text">We may update this privacy policy from time to time to reflect changes in our practices or for legal and regulatory reasons. We will notify waitlist members of any material changes by email. Your continued use of our service after such modifications constitutes your acceptance of the updated policy.</p>

                            <p className="legal-text">If you have any questions or concerns about this privacy policy or how we handle your personal information, please contact us at hello@danielsends.email. We are committed to addressing your concerns and ensuring your privacy is protected.</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PrivacyPolicy;
