import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { useHistory } from 'react-router-dom'; // If you're using react-router for routing

function EmailInput() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // List of common temporary email providers to block
  const tempEmailDomains = [
    'mailinator.com', 'guerrillamail.com', 'tempmail.com', '10minutemail.com', 'yopmail.com'
  ];

  // Regular expression to check if the email format is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (isSubmitted) {
      setError(''); // Reset error after change if submitted previously
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Check if the email is in the correct format
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const domain = email.split('@')[1];
    // Check if the email belongs to a known temporary email provider
    if (tempEmailDomains.includes(domain)) {
      setError('Temporary email addresses are not allowed.');
      return;
    }

    // If no errors, redirect to the dashboard
    setError(''); // Clear any error
    window.location.href = '/dashboard'; // or use `useHistory()` for React Router
  };

  return (
    <div className="relative w-full">
      <motion.div className="relative w-full">
        <motion.input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="py-3 rounded-full px-5 w-full text-black/50 bg-black/5 border-black/10 border-[1px] pr-24"
          whileFocus={{ boxShadow: "0px 0px 8px rgba(0, 0, 255, 0.5)", scale: 1.01 }}
        />
        
        <motion.button 
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-indigo-500 text-white px-5 py-2 rounded-full shadow-md overflow-hidden flex items-center justify-center"
          disabled={!!error}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleSubmit}
        >
          {isHovered && (
            <motion.div 
              className="absolute inset-0 bg-white opacity-20 rotate-12"
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            />
          )}
          Sign Up
        </motion.button>
      </motion.div>

      {/* Error message only appears after submission */}
      {isSubmitted && error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
}

export default EmailInput;
