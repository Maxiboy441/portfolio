"use client";

import { useState, useEffect, useRef } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    regard: '',
    text: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState('Send Message');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  // Detect if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Set up event listener for window resize
    window.addEventListener("resize", checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Handle click outside to close tooltip on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node) && tooltipVisible) {
        setTooltipVisible(false);
      }
    };

    if (isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [tooltipVisible, isMobile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText('Email Sent');

    try {
      const response = await fetch('https://formsubmit.co/f0845c5b913eb757b4dbde8a20374c00', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          regard: '',
          text: '',
        });
        setTimeout(() => setButtonText('Send Message'), 2000);
      } else {
        alert('Something went wrong. Please try again.');
        setButtonText('Send Message');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
      setButtonText('Send Message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleTooltip = () => {
    if (isMobile) {
      setTooltipVisible(!tooltipVisible);
    }
  };

  return (
    <div className="text-center">
      <div className="relative inline-block mb-8">
        <h2 className="text-4xl font-bold text-neutral-100 inline-flex items-center">
          Contact me
          <span 
            ref={tooltipRef}
            className="ml-2 cursor-pointer relative group"
            onClick={toggleTooltip}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span 
              className={`
                absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
                w-64 p-3 bg-gray-800 text-white text-sm rounded shadow-lg z-10
                transition-opacity duration-300
                ${isMobile 
                  ? tooltipVisible ? 'opacity-100' : 'opacity-0 pointer-events-none' 
                  : 'opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto'}
              `}
            >
              This form is processed using FormSubmit.co, which has a 60s cooldown. If your message is urgent or if I don't reply within 3-5 days, please email me directly.
            </span>
          </span>
        </h2>
      </div>
      <form
        action="https://formsubmit.co/f0845c5b913eb757b4dbde8a20374c00"
        method="POST"
        onSubmit={handleSubmit}
        className="bg-black dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg mx-auto space-y-6"
      >
        <input type="hidden" name="_next" value="" />

        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg text-white mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg text-white mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="regard" className="text-lg text-white mb-2">Regard</label>
          <input
            type="text"
            name="regard"
            id="regard"
            value={formData.regard}
            onChange={handleChange}
            required
            className="p-4 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="text" className="text-lg text-white mb-2">Message</label>
          <textarea
            name="text"
            id="text"
            value={formData.text}
            onChange={handleChange}
            required
            className="p-4 min-h-[150px] rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 mt-4 rounded-lg bg-indigo-600 text-white font-semibold focus:outline-none hover:bg-indigo-500 disabled:bg-gray-500"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}