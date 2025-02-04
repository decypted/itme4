"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (userEmail: string): Promise<void> => {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'theandyv@proton.me', // Replace with your email address
        subject: 'New Registered User',
        html: `<p>Congrats on a new registration! The new registered users email is: <strong>${userEmail}</strong></p>`
    });
};