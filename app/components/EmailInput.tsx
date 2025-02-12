import React, { useState } from 'react';
import { motion } from 'framer-motion';

const tempEmailDomains = [
  'mailinator.com', 'guerrillamail.com', 'tempmail.com', '10minutemail.com', 'yopmail.com'
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (isSubmitted) {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const domain = email.split('@')[1];
    if (tempEmailDomains.includes(domain)) {
      setError('Temporary email addresses are not allowed.');
      return;
    }

    setError('');
    window.location.href = '/dashboard';
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
          whileFocus={{ boxShadow: '0px 0px 8px rgba(0, 0, 255, 0.5)', scale: 1.01 }}
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
              initial={{ x: '-150%' }}
              animate={{ x: '150%' }}
              transition={{ duration: 0.75, ease: 'easeInOut' }}
            />
          )}
          Get Started
        </motion.button>
      </motion.div>

      {isSubmitted && error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
};

export default EmailInput;