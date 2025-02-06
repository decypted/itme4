import React from "react";
import Image from "next/image";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Essential",
    description: "We negotiate your offer by comparing it to the industry standard.",
    price: "$35",
    month: "Month",
    icon: "File_Document.svg",
    cta: "Get Started",
    benefits: [
      { text: "Automatic Salary Negotiations", icon: "/icons/doc-scan.svg" },
      { text: "Automatic Event Reminder", icon: "/icons/calendar.svg" },
      { text: "Progress Tracking", icon: "/icons/tracking.svg" },
    ],
    careergrowth: [
      { text: "Interview Knowledgebase Search", icon: "/icons/knowledgebase-search.svg" },
      { text: "Job Offers Insights", icon: "/icons/insights.svg" },
    ]
  },
  {
    name: "Professional",
    description: "Premium support and insights for top-tier professionals.",
    icon: "File_Document.svg",
    price: "$55",
    month: "Month",
    cta: "Get Started",
    benefits: [
      { text: "Automatic Salary Negotiations", icon: "/icons/doc-scan.svg" },
      { text: "Automatic Event Reminder", icon: "/icons/calendar.svg" },
      { text: "Progress Tracking", icon: "/icons/tracking.svg" },
    ],
    expertise: [
      { text: "Career Growth Manager", icon: "/icons/manager.svg", text2: "Also guaranteed at 20 ghosted or denied applications." },
    ],
    careergrowth: [
      { text: "Interview Knowledgebase Search", icon: "/icons/knowledgebase-search.svg" },
      { text: "Job Offers Insights", icon: "/icons/insights.svg" },
      { text: "Cultural Compatibility Assessment", icon: "/icons/culture.svg" },
    ]
  },
];

const essentialsPlan = {
  name: "Intern",
  description: "Basic tools to help you get started with salary insights.",
  price: "$10",
  month: "Month",
  icon: "File_Document.svg",
  benefits: [
    { text: "Salary Benchmarking", icon: "Check.svg" },
    { text: "Offer Evaluation", icon: "Check.svg" },
  ],
};

const PricingTable = () => {
  return (
    <div className="w-[80%] h-full py-5 mx-auto rounded-3xl bg-[#eeedf3]">
      <div className="grid md:flex justify-center w-[90%] mx-auto">
        
        {/* Essentials Plan */}
        <div className="w-[40%] px-10 py-5">
          <span className="text-lg font-semibold">{essentialsPlan.name}</span>
          <p className="mt-[2em] rounded-full flex text-xl">
            {essentialsPlan.price} <span className="px-2">/</span><span>{essentialsPlan.month}</span>
          </p>
          <p className="text-gray-600 mt-2">{essentialsPlan.description}</p>
          <div className="mt-2">
            {essentialsPlan.benefits.map((benefit, index) => (
              <p key={index} className="flex items-center gap-2">
                <Image src={benefit.icon} height={20} width={20} alt="Benefit Icon" />
                {benefit.text}
              </p>
            ))}
          </div>
        </div>

        {/* Professional & Enterprise Plans */}
        <div className="bg-white rounded-xl px-10 py-5 text-sm grid md:flex shadow-lg">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="w-[100%] px-4 py-5">
              <div className="h-[10em]">
                <span className="font-medium text-lg">{plan.name}</span>
                <p className="mt-[2em] rounded-full flex text-xl">
                  {plan.price} <span className="px-2">/</span><span>{plan.month}</span>
                </p>
                <p className="text-gray-600 text-[16px]">{plan.description}</p>
              </div>
              <div className="border-b-[1px] py-5 w-[90%] ">
                <button className="py-4 bg-gray-200 w-[60%] rounded-2xl hover:scale-95 hover:bg-indigo-500 hover:text-white transition-all">{plan.cta}</button>
              </div>
             
              <div className="mt-10">
                <p className="text-black text-lg font-medium">Career Management</p>
                <span className="text-md text-gray-600">
                  Students are eligible to receive the Intern plan at a rate of $2/month, or at no cost if your educational institution is partnered with us.
                  <Link href="" className="text-sm underline hover:text-indigo-600 block py-2">Verification is conducted through our third-party vendor, SheerID.</Link>
                </span>
              </div>

              {/* Render Benefits */}
              <div>
                {plan.benefits.map((benefit, bIndex) => (
                  <p key={bIndex} className="flex items-center gap-2 text-[16px] w-[80%] py-1">
                    <Image src={benefit.icon} height={20} width={20} alt="Benefit Icon" />
                    {benefit.text}
                  </p>
                ))}
              </div>

              {/* Render Career Growth */}
              <div>
                <p className="text-black text-lg font-medium py-3">Convenience</p>
                {plan.careergrowth.map((growth, gIndex) => (
                  <p key={gIndex} className="flex items-center gap-2 text-[16px] w-[80%] py-1">
                    <Image src={growth.icon} height={20} width={20} alt="Career Growth Icon" />
                    {growth.text}
                  </p>
                ))}
                
                {/* Render Expertise only if it exists */}
                <div>
                  <p className="text-lg font-bold py-3">Tap into Expertise</p>
                </div>
                {plan.expertise && plan.expertise.map((expertise, eIndex) => (
                  
                  <p key={eIndex} className="flex items-center gap-2 text-[16px] w-[80%] py-1">
                    <Image src={expertise.icon} height={20} width={20} alt="Expertise Icon" />
                    {expertise.text} 
                  
                  </p>
                  
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
