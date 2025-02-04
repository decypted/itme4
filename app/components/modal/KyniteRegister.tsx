import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Profile from '@/app/data/profile';
import { motion } from 'framer-motion';
import { sendEmail } from '@/app/lib/resend'; // Ensure this imports correctly

const OpenKyniteRegisterModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isRegistered, setIsRegistered] = useState<boolean>(false);
    const [email, setEmail] = useState<string>(''); // Explicitly type as string
    const [showTooltip, setShowTooltip] = useState<boolean>(false); // State for tooltip visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsRegistered(false);
        setEmail(''); // Reset email when the modal opens
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateEmail(email)) {
            await sendEmail(email); // Send the user's email
            setIsRegistered(true);
            setShowTooltip(false); // Hide tooltip if registered successfully
        } else {
            setShowTooltip(true); // Show tooltip if email is invalid
        }
    };

    // Basic email validation function
    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for basic email validation
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className='hamburger-container max-w-full'>
            <button
                className='py-3 px-5 bg-black/20 rounded-full w-[10em] border-solid border-white/20 border-[1px] text-center font-bold hover:bg-black/50 transition-all mx-auto text-white hover:bg-black hover:text-[#8CFFF9] hover:scale-90'
                onClick={toggleMenu}
            >
                {Profile.en.cta}
            </button>

            {isOpen && (
                <motion.div
                    initial={{ y: -40 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0, type: "spring" }}
                    exit={{ x: -40 }}
                    className='bg-black/40 fixed h-[100%] top-0 bottom-0 left-0 dark:text-white text-white w-full overflow-hidden flex justify-center items-center -z-0'
                    onClick={toggleMenu}
                >
                    <div
                        className='modal w-[90%] md:w-[70%] bg-black/20 h-[30em] border-white/10 shadow-2xl  border-solid border-[1px] grid rounded-xl backdrop-blur-2xl py-20 gap-5'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className='text-3xl md:text-5xl font-bold from-[#8CFFF9] to-[#FFDCAC] bg-clip-text bg-gradient-to-tr text-transparent z-10 w-[90%] text-center mx-auto'>Sign up to be notified of our release!</span>
                        <p className='w-[90%] mx-auto text-white'>We&apos;re glad to see that you&apos;re potentially interested in Kynite. Our team is working hard to deliver you an exceptional product.</p>
                        <div className='w-[90%] mx-auto'>
                            <form onSubmit={handleRegister}>
                                <div className='block md:flex w-[100%] md:space-y-0 space-y-3 md:items-center gap-5'>
                                    <input
                                        type="email"
                                        placeholder='Enter your email'
                                        className='h-[4em] mx-auto bg-white/10 px-5 outline-none rounded-2xl md:rounded-l-2xl w-[100%] md:w-[100%]'
                                        value={email}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} // Explicitly typing event
                                        onFocus={() => setShowTooltip(false)} // Hide tooltip on focus
                                    />
                                    <input
                                        type="submit"
                                        value="Register"
                                        className='bg-white h-[4em] text-black rounded-2xl md:rounded-r-2xl w-[100%] md:w-[40%] from-[#8CFFF9] to-[#FFDCAC] bg-gradient-to-tr hover:bg-gradient-to-b transition-all cursor-pointer'
                                    />
                                </div>
                            </form>
                            {isRegistered && <p className='text-center mt-4 text-green-500'>You have registered. Exit this screen by clicking anywhere outside this modal.</p>}
                            {showTooltip && (
                                <div className="tooltip text-amber-300">Please enter a valid email address.</div> // Tooltip message
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
            <style jsx>{`
                .tooltip {
                    visibility: visible;
                    color: #FFBE8C;
                    text-align: center;
                    border-radius: 5px;
                    padding: 5px;
                    position: absolute;
                    z-index: 1;
                    margin-top: 5px; // Adjust position
                    opacity: 1;
                    transition: opacity 0.3s;
                }
            `}</style>
        </div>
    );
};

export default OpenKyniteRegisterModal;
