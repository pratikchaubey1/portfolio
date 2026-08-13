import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-slate-50">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Contact Me</h1>
      <p className="text-slate-600 mb-8 max-w-xl text-center px-4">
        Feel free to reach out to me for any job opportunities, freelance projects, or just to say hi!
      </p>
      <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
          <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
          <textarea className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none" placeholder="Your message..."></textarea>
        </div>
        <button type="button" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
