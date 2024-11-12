"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    purpose: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-around  p-4">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="card bg-base-300 rounded-box p-6 text-center">
          <h3 className="text-2xl mb-2">নামঃ মিলন মন্ডল</h3>
          <p className="text-xl">গ্রামঃ মাহমুদপুর</p>
          <span className="text-center text-sm text-slate-400 mb-1">
            প্রাথমিক বিদ্যালয়ের সামনে।
          </span>
          <p className="text-xl mb-1">ইউনিয়ন: হাদিরা</p>
          <p className="text-xl mb-1">ডাকঘরঃ চাতুটিয়া</p>
          <p className="text-xl mb-1">থানাঃ গোপালপুর</p>
          <p className="text-xl mb-1">জেলাঃ টাঙ্গাইল</p>
          <p className="text-xl mb-1">
            মোবাইল: <a href="tel:+8801980458547" className="text-blue-500">01980458547</a>
          </p>
        </div>
      </div>

      <div className="divider md:divider-horizontal my-4 md:my-0">OR</div>

      <div className="w-full md:w-1/2">
        <div className="card rounded-box bg-base-300 flex-grow place-items-center p-6">
          <h1 className="text-2xl mb-2">যোগাযোগ</h1>
          <p className="text-center text-sm text-slate-400 mb-4">
            ফর্ম জমা দিন, আমি শীঘ্রই আপনার সাথে যোগাযোগ করব |
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-2 mb-4">
              <div className="w-full">
                <label className="block text-gray-700 font-semibold mb-2">নাম</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="আপনার নাম"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-semibold mb-2">মোবাইল নম্বর</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  placeholder="আপনার মোবাইল নম্বর"
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">আপনার ঠিকানা</label>
              <input
                type="text"
                name="address"
                placeholder="উদাহরণস্বরূপ: মাহমুদপুর, গোপালপুর, টাঙ্গাইল"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">আপনার কোন সেবা দরকার</label>
              <textarea
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="উদাহরণস্বরূপ: সেনেটারি, সোলার কাজ, আইপিএস, হাউজ ওয়ারিং, ইলেকট্রনিক্স মেকানিক, অন্যান্য"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              যোগাযোগের জন্য জমা দিন
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
