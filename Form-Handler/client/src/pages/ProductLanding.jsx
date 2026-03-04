import React, { useRef, useEffect } from 'react';

export default function ProductLanding() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const product = productRef.current?.value;

    alert(`Product Registration Details:\nName: ${name}\nEmail: ${email}\nModel: ${product}`);
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center p-4 font-sans text-neutral-900">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200">
        <div className="bg-neutral-900 px-6 py-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-800 to-black opacity-50 z-0 pointer-events-none"></div>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Product Registration</h1>
            <p className="text-neutral-400 text-sm">Sign up to activate your warranty and unlock exclusive perks.</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              ref={nameRef}
              className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all placeholder:text-neutral-400"
              placeholder="Jane Doe"
              data-testid="input-name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all placeholder:text-neutral-400"
              placeholder="jane@example.com"
              data-testid="input-email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="product" className="block text-sm font-medium text-neutral-700">
              Product Model
            </label>
            <div className="relative">
              <select
                id="product"
                ref={productRef}
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all appearance-none"
                data-testid="select-product"
              >
                <option value="Standard">Standard</option>
                <option value="Pro">Pro</option>
                <option value="Ultra">Ultra</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-neutral-900 hover:bg-black text-white font-medium py-3 px-4 rounded-lg transition-all focus:ring-4 focus:ring-neutral-900/30 focus:outline-none shadow-md hover:shadow-lg active:scale-[0.98]"
              data-testid="button-submit"
            >
              Complete Registration
            </button>
          </div>
        </form>
        
        <div className="bg-neutral-50 px-6 py-4 text-center border-t border-neutral-100 flex items-center justify-center gap-2">
          <span className="text-xl">✨</span>
          <p className="text-xs text-neutral-500 font-medium">
            This design was brought to life by your AI model companion.
          </p>
          <span className="text-xl">✨</span>
        </div>
      </div>
    </div>
  );
}