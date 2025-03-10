"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    regard: '',
    text: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState('Send Message');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
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
      alert('Something went wrong. Please try again.');
      setButtonText('Send Message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      action="https://formsubmit.co/f0845c5b913eb757b4dbde8a20374c00"
      method="POST"
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto space-y-4"
    >
      <input type="hidden" name="_next" value="" />
      
      <div className="flex flex-col">
        <label htmlFor="name" className="text-lg text-gray-800 dark:text-white mb-1">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-lg text-gray-800 dark:text-white mb-1">Your Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="regard" className="text-lg text-gray-800 dark:text-white mb-1">Regard</label>
        <input
          type="text"
          name="regard"
          id="regard"
          value={formData.regard}
          onChange={handleChange}
          required
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="text" className="text-lg text-gray-800 dark:text-white mb-1">Message</label>
        <textarea
          name="text"
          id="text"
          value={formData.text}
          onChange={handleChange}
          required
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 mt-4 rounded-lg bg-blue-600 text-white font-semibold focus:outline-none hover:bg-blue-500 disabled:bg-gray-400"
      >
        {buttonText}
      </button>
    </form>
  );
}

