import { PricingTable } from '@clerk/nextjs'
import React from 'react'
import WaitlistPricingTables from './WaitlistPricingTables'

const PricingSection = () => {
  return (
    <section className="section" style={{paddingBottom: "8rem"}}>
            <div className="pricing-container">
            <h2 className="contract-section-header">Clear pricing. No fine print.</h2>
            <p className="contract-section-subheader">
                Ironic? Maybe. But you deserve to know exactly what you're getting.
            </p>
            </div>
            <div className="pricing-to-look-good">
                {/*<PricingTable />*/}
                <WaitlistPricingTables />
            </div>
    </section>
  )
}

export default PricingSection