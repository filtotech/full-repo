import React from 'react'

const EnquiryForm = ({selectedProduct}: { selectedProduct: any }) => {
  return (
    <div>
        <h1>EnquiryForm</h1>
         <h2>Enquired For : {selectedProduct}</h2>
         <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded-md p-2 w-full" />
         <input type="number" placeholder="Enter your phone number" className="border border-gray-300 rounded-md p-2 w-full mt-4" />
         <textarea placeholder="Enter your message (if any)" className="border border-gray-300 rounded-md p-2 w-full mt-4" rows={4} />
         <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Submit Enquiry</button>
    </div>
  )
}

export default EnquiryForm