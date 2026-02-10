"use client";
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { sendMail } from '@/app/actions/NodemailerEmailSender';
const ContactUs = () => {

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const formElement = e.currentTarget;
            const formData = new FormData(formElement);
            
            const result = await sendMail(formData);
            
            if (result.success) {
                alert("Inquiry sent successfully! We will get back to you soon.");
                formElement.reset();
            } else {
                alert("Error: " + (result.error || "Failed to send email. Check your console."));
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("An unexpected error occurred. Please try again.");
        }
    }

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Contact Info & Authority */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                Get in Touch with Our <br />
                <span className="text-emerald-800">Ayurvedic Experts</span>
              </h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Whether you are a healthcare professional looking for clinical data or a distributor interested in our new Ayurvedic range, our corporate team is here to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Corporate Headquarters</h4>
                    <p className="text-slate-600 text-sm leading-6">
                      Bidhan House, Industrial Area Phase II,<br />
                      New Delhi, India - 110020
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-600 text-sm">+91 (011) 2345-6789</p>
                    <p className="text-slate-600 text-sm">+91 98765-43210</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-700">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Inquiries</h4>
                    <p className="text-slate-600 text-sm">info@bidhanpharma.com</p>
                    <p className="text-slate-600 text-sm">ayurveda.div@bidhanpharma.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-700">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600 text-sm">Mon - Sat: 09:00 AM - 06:00 PM</p>
                    <p className="text-slate-600 text-sm font-medium text-emerald-700">Sunday Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="bg-[#F8FAF9] p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
              <form onSubmit={(e)=>handleSubmit(e)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input 
                      name='name'
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input 
                      name='email'
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                  <select name='inquiryType' className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all appearance-none bg-white">
                    <option>Distribution Inquiry</option>
                    <option>Product Information</option>
                    <option>Manufacturing Quality</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message</label>
                  <textarea 
                    name='message'
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button className="w-full py-4 bg-emerald-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/10">
                  <Send size={18} />
                  Send Inquiry
                </button>

                <p className="text-center text-xs text-slate-400 mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;