import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const footerData = [
  {
    title: 'Internship Programs',
    links: [
      { name: 'How It Works', href: '/internship-programs' },
      { name: 'Co-op Programs', href: '/co-op-programs' },
      { name: 'Available Internships', href: '/internship-opportunities' },
      { name: 'Employer Partnerships', href: '/employer-partnerships' },
    ]
  },
  {
    title: 'For Employers',
    links: [
      { name: 'Dashboard', href: '/employer-dashboard' },
      { name: 'Post Jobs', href: '/job-postings' },
      { name: 'Hire Interns', href: '/hire-interns' },
      { name: 'Automated Screening', href: '/automated-screening' },
    ]
  },
  {
    title: 'For Students',
    links: [
      { name: 'Dashboard', href: '/student-dashboard' },
      { name: 'Apply for Internships', href: '/apply-internships' },
      { name: 'Resume Builder', href: '/resume-builder' },
      { name: 'Mock Interviews', href: '/mock-interviews' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Help Center', href: '/help-center' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Career Tips', href: '/career-tips' },
    ]
  },
  {
    title: 'About',
    links: [
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Our Story', href: '/our-story' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partnerships', href: '/partnerships' },
      { name: 'Contact Us', href: '/contact' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Use', href: '/terms-of-use' },
    ]
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-gradient-to-r from-[#f5f6fa] to-[#e0e7ff] border-t-[1px] border-gray-300/5">
      <div className="w-[90%] mx-auto">

        {/* Footer Main Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-24 justify-center">

          {/* Logo & Copyright Section - No Links */}
          <div className="flex flex-col sm:items-start sm:text-left">
            <Image src="/InternMe-Black.svg" width={120} height={120} alt="Logo" />
            <span className="mt-4 text-sm text-gray-600 fs">© 2025 InternMe. All rights reserved.</span>
            
          </div>

          {/* Links Sections */}
          {footerData.map((section, index) => (
            <div key={index} className="flex flex-col sm:items-start space-y-3">
              <span className="font-semibold text-lg text-black mb-2">{section.title}</span>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-gray-700 hover:text-indigo-600 transition-all">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Social Media & Contact (optional section) */}
       
      </div>
    </footer>
  );
};

export default Footer;
