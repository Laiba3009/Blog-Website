import React from "react";

function Contact() {
  return (
    <main  data-aos="zoom-in" className="contact h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-pink-300 to-pink-500">
      <div className=" p-8 rounded-lg bg-white shadow-lg w-full sm:w-[400px]">
        <h1 data-aos="zoom-in" className=" text-black con-tittle text-3xl font-bold text-center mb-8">Contact Us</h1>
        <form action="" className="form flex  flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          />
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
          />
          <input
            className="msg p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
            type="text"
            placeholder="Your Message"
          />
        </form>
        <button className="btn-sub w-full bg-gradient-to-r from-indigo-200 via-pink-300 to-pink-500 text-black py-3 rounded-md mt-6 hover:bg-gray-500 transition-all duration-300">
          Submit
        </button>
      </div>
    </main>
  );
}

export default Contact;