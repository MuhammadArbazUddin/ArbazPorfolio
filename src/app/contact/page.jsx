"use client";

import PageTransitionProvider from "@/components/pageTransitionProvider";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

function ContactPage() {
  const text = "Leave a Message!";
  const [success, setSuccess] = useState(false);

  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);

    toast.loading("Sending your message...");
    emailjs
      .sendForm(
        "service_7z11hig",
        "template_lj0sov8", // Replace with your actual Template ID
        formRef.current,
        "UkXTBAR_USdv5oZi-" // Replace with your actual Public Key
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
          toast.dismiss();
          toast.success("Your message has been sent successfully!");
        },
        (error) => {
          console.error("EmailJS error:", error); // Log any specific errors here
          toast.dismiss();
          toast.error("Something went wrong! Please try again.");
        }
      );
  };

  return (
    <PageTransitionProvider>
      <div className="flex flex-col lg:flex-row px-6 sm:px-10 md:px-16 lg:px-24 xl:px-56 gap-8 my-10 lg:my-0">
        <div className="h-1/2 lg:min-h-[calc(100vh-6rem)] lg:w-1/2 flex justify-center items-center">
          <div className="text-4xl md:text-6xl text-black font-semibold">
            {text.split("").map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  delay: idx * 0.1,
                  repeat: Infinity,
                }}
                className="hover:scale-110 transition-transform duration-200"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="lg:w-1/2 bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-2xl font-semibold flex flex-col gap-6 justify-center p-10 my-8"
        >
          <span className="text-xl text-black">Hey Arbaz,</span>
          <textarea
            rows="4"
            className="bg-transparent border-b-2 border-black outline-none resize-none focus:border-black transition-colors duration-200"
            name="message"
            placeholder="Write a message..."
            required
          />
          <span className="text-xl text-black">My email address is:</span>
          <input
            type="email"
            className="bg-transparent border-b-2 border-black outline-none focus:border-black transition-colors duration-200"
            name="user_email"
            placeholder="Provide your email..."
            required
          />
          <span className="text-xl text-black">Best Wishes!</span>
          <button
            type="submit"
            className="bg-black text-white rounded-lg p-3 font-semibold text-lg uppercase hover:bg-black hover:scale-105 transition-transform duration-200"
          >
            Send
          </button>

          {success && (
            <span className="text-sm text-green-500 font-semibold mt-4">
              Your message has been sent successfully!
            </span>
          )}
        </form>
      </div>
    </PageTransitionProvider>
  );
}

export default ContactPage;
