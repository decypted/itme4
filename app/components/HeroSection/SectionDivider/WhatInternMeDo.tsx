import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  { 
    id: 1, 
    name: 'Job Seekers', 
    headline: 'Make career searching flow seamlessly while you get back to your personal aspirations.', 
    description: "A careers platform that's dedicatedly made for you", 
    image: '/InternMe.svg', 
    imagetwo: '/intern-demo.jpg',
    perks: [
      { title: 'Tracking', icon: '/tracking-icon.svg', description: 'Track your job applications and see your progress.' },
      { title: 'Prepare', icon: '/prepare-icon.svg', description: 'Prepare for interviews with personalized resources.' },
      { title: 'Negotiate', icon: '/negotiate-icon.svg', description: 'Negotiate the best salary and benefits packages.' }
    ]
  },
  { 
    id: 2, 
    name: 'Employers', 
    headline: 'Find top talent quickly and efficiently with our streamlined hiring process.', 
    description: "A platform built for employers to find their next great hire.", 
    image: '/intern-demo.jpg', 
    imagetwo: '/intern-demo.jpg',
    perks: [
      { title: 'Smart Matching', icon: '/smart-match-icon.svg', description: 'Match with top candidates based on job descriptions.' },
      { title: 'Automated Screening', icon: '/automated-screen-icon.svg', description: 'Save time by automatically screening resumes.' },
      { title: 'Hiring Analytics', icon: '/hiring-analytics-icon.svg', description: 'Analyze the effectiveness of your hiring process.' }
    ]
  },
  {
    id: 3,
    name: 'Students',
    headline: 'Empowering students with practical experience and job placement opportunities.',
    description: "A platform designed to assist students in gaining hands-on experience through internships and co-op programs.",
    image: '/student-image.jpg',
    imagetwo: '/student-demo.jpg',
    perks: [
      { 
        title: 'Internship and Co-op Programs', 
        icon: '/internship-icon.svg', 
        description: 'Assisting students in developing internship and cooperative education programs to offer valuable hands-on experience with partnered businesses.' 
      },
      { 
        title: 'Virtual Mock Interviews', 
        icon: '/mock-interview-icon.svg', 
        description: 'Conduct mock interview sessions online to help students practice and improve interview skills.' 
      },
      { 
        title: 'Employer Partnerships', 
        icon: '/employer-partnership-icon.svg', 
        description: 'We forge partnerships with local, national and international employers to increase job placement opportunities for students.' 
      }
    ]
  }
  // Add more products with unique perks here...
];

const Office = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className='w-[100%] bg-gradient-to-r from-[#f5f6fa] to-[#e0e7ff] text-black overflow-hidden'>
      <div className='w-[90%] mx-auto grid md:grid-cols-1 gap-8'>
        <div className='relative space-y-2 col-span-1'>
          <div className='relative z-10'>
            <h1 className='py-10 text-3xl'>
              InternMe is designed for prospect job seekers, employers, and students.
            </h1>
          </div>
          <div className='flex md:flex md:space-x-10 gap-5'>
            {products.map((product) => (
              <motion.button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                initial={{ backgroundColor: 'transparent' }}
                animate={{
                  backgroundColor: selectedProduct.id === product.id ? '#ebf5ff' : 'transparent',
                  color: selectedProduct.id === product.id ? '#6eb5fc' : 'black',
                  scaleX: selectedProduct.id === product.id ? 1.05 : 1
                }}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                transition={{ duration: 0.3 }}
                className={`h-[4em] rounded-full flex items-center justify-between space-x-2 w-full md:w-[33%] text-black shadow-md px-4 relative z-10 
                 `}
              >
                <div className='flex items-center space-x-2'>
                  <div>
                    <Image
                      src={product.image}
                      width={30}
                      height={30}
                      objectFit="contain"
                      alt={product.name}
                      className='logo'
                    />
                  </div>
                  <span>{product.name}</span>
                </div>
               
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          key={selectedProduct.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col col-span-2 relative z-10 mt-20 h-[100%]'
        >
          <div className='ml-0 space-y-5 bg-white py-10 px-10 rounded-lg'>
            <span className='text-md font-bold mt-4 text-[#393a3d] text-sm'>{selectedProduct.name}</span>
            <p className='text-4xl w-[100%] lg:w-[70%]'>{selectedProduct.headline}</p>
            <p className='mt-4 w-[100%] text-md'>{selectedProduct.description}</p>
          </div>

          {/* Perks Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedProduct.perks.map((perk) => (
              <motion.div
                key={perk.title}
                className="bg-white p-6 rounded-lg shadow-lg space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-4">
                  <Image src={perk.icon} width={40} height={40} alt={perk.title} />
                </div>
                <h4 className="text-xl font-semibold text-center mb-2">{perk.title}</h4>
                <p className="text-sm text-center">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Office;
