import React from "react";
import { IoMdMail } from "react-icons/io";
import { PROFILE_DATA } from "../utils/data";
import { IoLogoPaypal } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

const Contact = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20" id="contact">
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14">
        Contact Us
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        {/* Left Side - Contact Info */}
        <div>
          <ContactInfoCard icon={<IoMdMail />} text={PROFILE_DATA.email} />
          <ContactInfoCard
            icon={<IoLogoPaypal />}
            text={PROFILE_DATA.paypal}
          />
          <ContactInfoCard
            icon={<MdOutlineWeb />}
            text={PROFILE_DATA.website}
          />
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h5 className="md:hidden text-cyan-300 text-lg font-medium mt-4 pb-5">
            Contact Form
          </h5>
          <form
            action="https://formsubmit.co/itevfikg@gmail.com"
            method="POST"
            className="flex flex-col"
          >
          {/* CAPTCHA will be shown automatically */}
            <input
              type="hidden"
              name="_next"
              value="https://yourwebsite.com/thank-you"
            />

            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="input-box"
              autoComplete="off"
              required
            />

            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="input-box"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-box"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              placeholder="What is your project idea? We develop for you..."
              rows="4"
              className="input-box"
              autoComplete="off"
              required
            ></textarea>

            <label className="text-cyan-300 mt-3 mb-1">
              How did you find our services?
            </label>
            <input
              type="range"
              name="rating"
              min="0"
              max="50"
              className="mb-4"
            />

            <button type="submit" className="primary-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 bg-gradient-to-br from-blue-950 to-slate-900 rounded border border-blue-800/40 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-cyan-300 flex items-center justify-center bg-sky-950 rounded border border-cyan-700">
        {icon}
      </div>
      <p className="text-cyan-100 text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default Contact;
