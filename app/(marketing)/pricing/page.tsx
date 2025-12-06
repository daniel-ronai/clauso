import React from 'react';
import {PricingTable} from "@clerk/nextjs";

const Pricing = () => {
    return (
        <div className='min-h-[75vh]'>
            <div className="main-container">
            <section className="pricing-page">
                <div className="content-container">
                    <div className="content-text">
                        <h2 className="hero-header">Explore our Plans</h2>
                        <p>
                            From single contracts to team dashboards, <span className="highlight-p-green">choose what fits you.</span>
                        </p>
                    </div>
                </div>
            </section>
            <div className="pricing-tables">
                <PricingTable />
            </div>
            </div>
        </div>
    );
}

export default Pricing;
