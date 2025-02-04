const Pricing = {
    subscriptionTitle: ["Kynite", "Kynite", "Family"],
    subscriptionPrice: {
        monthly: ["$0/mo", "$8.99/mo", "$11.99/mo"],
        yearly: ["$0/yr", "$5.42/mo", "$9.99/mo"], // Example prices
        lifetime: ["$0/lifetime", "$129.99/lifetime", "$249.99/lifetime"], // Example prices
        yearlyDescription: ["$64.99 billed annually", "$119.99 billed annually"],
        lifeTimeDescription: ["$129.99 billed once and never again", "$249.99 billed once and never again.  That equates to $15.62 a year assuming it covers your child from birth until they turn 16."]
      },
    description: ["Free, forever.", "Turn on the engine to shutting off mindless doom scrolling", "Powerful parental features to put your kids back in the driver seat, not screens."],
    subscriptionCTA: ['Get started', 'Free trial', '$5.99/mo'],
    noSessionDepositNeeded: [true, false, false],
    accountabilityBuddy: [true, true, true],
    warningsDoomscroll: [true, true, true],
    lastChance: [false, true, true],
    earnInterest: [false, true, true],
    accountabilityScore: [true, true, true],
    accountabilityScoreDescriptor: ["3 Day History", "Unlimited History", "Unlimited History"],
    allowanceControl: [false, false, true],
    usageTimeMoniter: [false, false, true],
    pricingOptions: {
        monthly: ["$4.99/mo", "$7.99/mo thereafter", "$11.99/mo"],
        yearly: ["$49.99/yr", "$79.99/yr", "$119.99/yr"],
        lifetime: ["$199.99", "$299.99", "$399.99"],
    },
    pricingDescriptor: {
        month: ""
    }
};

export default Pricing;
