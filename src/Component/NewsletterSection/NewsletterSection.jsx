import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
    if (!email) {
      setMessage('Please enter your email.');
      return;
    }

    fetch('https://recipebook-clientside.vercel.app/newsletter-subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessage('✅ Subscribed successfully!');
          setEmail('');
        } else {
          setMessage('❌ Subscription failed. Maybe already subscribed?');
        }
      })
      .catch(() => {
        setMessage('❌ Something went wrong.');
      });
  };

  return (
    <section className="py-12 md:py-20 bg-base-200">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700  mb-2">Join Our Newsletter</h2>
        <p className="text-gray-600  mb-10 ">
          Get weekly updates with new recipes, tips, and offers straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border w-full sm:w-auto"
          />
          <button
            onClick={handleSubscribe}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </div>
        {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
      </div>
    </section>
  );
};

export default NewsletterSection;
