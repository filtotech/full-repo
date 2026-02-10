"use client";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { sendMail } from '@/app/actions/NodemailerEmailSender';

export default function ContactPage({jsonLd}: { jsonLd: any }) {

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const formElement = e.currentTarget;
            const formData = new FormData(formElement);
            
            const result = await sendMail(formData);
            
            if (result?.success) {
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
    <main className="min-h-screen bg-slate-50">
      {/* Schema Script Injection */}
     {jsonLd && <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />}

      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect With Our Representative For Product Inquiries</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Bidhan Pharmaceuticals is committed to advancing global health. Reach out for medical inquiries, 
            regulatory affairs, or business partnerships.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-12 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <ShieldCheck className="mr-2 text-blue-600" /> Corporate HQ
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mt-1 mr-4 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-800">Visit Us</p>
                    <p className="text-slate-600 text-sm">Bidhan Market Area, Siliguri, West Bengal, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-blue-600 mt-1 mr-4 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-800">Call Support</p>
                    <p className="text-slate-600 text-sm">+91 (033) 2XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-blue-600 mt-1 mr-4 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-800">Email Inquiries</p>
                    <p className="text-slate-600 text-sm">info@bidhanpharma.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-blue-600 mt-1 mr-4 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-800">Business Hours</p>
                    <p className="text-slate-600 text-sm">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Send a Secure Message</h2>
            <p className="text-slate-500 mb-8 text-sm italic">Note: For medical emergencies, please contact your local healthcare provider immediately.</p>
            
            <form onSubmit={(e)=>handleSubmit(e)} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input name='name' type="text" placeholder="Dr. John Doe" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <input name='email' type="email" placeholder="john@clinic.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" required />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-slate-700">Subject</label>
                <select name='inquiryType' className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition bg-white">
                  <option>General Inquiry</option>
                  <option>Products Inquiry</option>
                  <option>Medical Affairs</option>
                  <option>Supply Chain / Distribution</option>
                  <option>Pharmacovigilance (Side Effects Reporting)</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea name='message' rows={5} placeholder="How can we assist you?" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" required></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full md:w-auto px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg transition-all transform hover:scale-[1.02]">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}