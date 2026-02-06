"use client";
import { Mail, Phone, MapPin, MessageSquare, Briefcase, Clock, Send } from 'lucide-react';
// import { sendMail } from '@/utils/NodemailerEmailSender';
import { sendMail } from '@/app/actions/NodemailerEmailSender';
const ContactUs = () => {
    // let [formData, setFormData] = React.useState<FormData | null>({});

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    <div className="bg-white text-slate-900 font-sans relative top-20">
      {/* Header Section */}
      <section className="bg-slate-50 py-15 border-b border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Let’s Start a <span className="text-blue-600">Conversation</span></h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you have a technical inquiry or you're looking for a reliable hydration partner for your institution, 
            our team is ready to provide proactive solutions tailored to your scale.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information & Trust Signals */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Get in Touch</h3>
              <p className="text-slate-600 mb-8">
                We value relationships over transactions. Reach out today, and experience the responsiveness 
                of a partner who cares about your health and your business.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Email Us</p>
                  <p className="text-lg font-semibold text-slate-700">support@aquapure.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Call Our Experts</p>
                  <p className="text-lg font-semibold text-slate-700">+91 (XXX) 000-0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Response Time</p>
                  <p className="text-lg font-semibold text-slate-700">Under 2 Hours (Business Days)</p>
                </div>
              </div>
            </div>

            {/* Institutional Sales Card */}
            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
              <div className="flex items-center gap-3 mb-4 text-blue-700">
                <Briefcase size={20} />
                <h4 className="font-bold">Bulk & Institutional Sales</h4>
              </div>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Looking for supply for hospitals, corporate offices, or events? We offer 
                <span className="font-bold text-blue-700"> highly negotiable pricing structures </span> 
                for long-term institutional partnerships.
              </p>
              <button className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Request a Quote <Send size={14} />
              </button>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-50">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <MessageSquare className="text-blue-600" /> Drop us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <input 
                  name='name'
                  type="text" 
                  placeholder="John Doe" 
                  required
                  className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <input 
                  name='email'
                  type="email" 
                  placeholder="john@company.com" 
                  required
                  className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label  className="text-sm font-semibold text-slate-700 ml-1">Nature of Inquiry</label>
                <select name='inquiryType' required className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none">
                  <option value=''>Select an option</option>
                  <option>General Inquiry</option>
                  <option>Bulk/Institutional Purchase</option>
                  <option>Distributorship Opportunities</option>
                  <option>Quality/Technical Feedback</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                <textarea 
                  name='message'
                  rows={5} 
                  placeholder="Tell us about your requirements..." 
                  required
                  className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                ></textarea>
              </div>

              <div className="md:col-span-2 mt-4">
                <button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-2xl transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200 active:scale-95">
                  Send Your Inquiry
                </button>
                <p className="text-xs text-slate-400 mt-4 text-center md:text-left italic">
                  *Our proactive support team usually responds within 2 business hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Global Presence Map / Office Section */}
      <section className="pb-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 text-white p-10 rounded-[3rem] flex flex-col justify-center">
            <h4 className="text-2xl font-bold mb-4">Corporate Office</h4>
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-blue-400 shrink-0" />
              <p className="text-slate-300">
                Bidhan Pharmaceuticals HQ,<br />
                Pharma-City Industrial Area,<br />
                State, India - 000000
              </p>
            </div>
            <p className="text-blue-400 font-medium">Join us in redefining purity. Let's build a healthier future together.</p>
          </div>
          <div className="bg-blue-100 rounded-[3rem] min-h-[300px] flex items-center justify-center text-blue-400">
             {/* Replace this with an actual Google Map iframe if needed */}
             <MapPin size={64} className="animate-bounce" />
             <span className="font-bold text-blue-900 ml-2">Find us on the map</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;