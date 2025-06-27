import React from 'react';

const Support = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Support</h1>
      <p className="mb-4">
        Need help with something? We're here for you!
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          For account issues, password resets, or login help, contact us via the <a href="/contact" className="text-blue-600 underline">Contact page</a>.
        </li>
        <li>
          Check our <span className="font-semibold">FAQ</span> section (coming soon) for common questions.
        </li>
        <li>
          If you want to report a bug or suggest a feature, send an email to <a href="mailto:n.siyam120@gmail.com" className="text-blue-600 underline">n.siyam120@gmail.com</a>.
        </li>
      </ul>
    </div>
  );
};

export default Support;
