import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black w-full text-white py-[10rem] grid grid-cols-2 sm:grid-cols-4 gap-5 justify-center justify-items-center">
        <div className="grid gap-5">
          <p>
            <u>Questions? Contact us</u>
          </p>
          <p>
            <u>FAQs</u>
          </p>
          <p>
            <u>Investor Relations</u>
          </p>
          <p>
            <u>Privacy</u>
          </p>
          <p>
            <u>Speed Test</u>
          </p>
          <p className="bg-[rgb(15,15,15)] p-3 rounded w-70">
            *A English
            <select className="pl-5 w-4 h-4 ml-3 rounded">
              <option>English</option>
            </select>
          </p>

          <p>Netflix Nepal</p>
        </div>

        <div className="pt-5">
          <p className="mb-2">
            <u>Help Center</u>
          </p>
          <p className="mb-2">
            <u>Jobs</u>
          </p>
          <p className="mb-2">
            <u>Cookie Preferences</u>
          </p>
          <p className="mb-2">
            <u>Legal Notices</u>
          </p>
        </div>

        <div className="pt-5">
          <p className="mb-2">
            <u>Account</u>
          </p>
          <p className="mb-2">
            <u>Ways to Watch</u>
          </p>
          <p className="mb-2">
            <u>Corporate Information</u>
          </p>
          <p className="mb-2">
            <u>Only on Netflix</u>
          </p>
        </div>

        <div className="pt-5">
          <p className="mb-2">
            <u>Media Center</u>
          </p>
          <p className="mb-2">
            <u>Terms of Use</u>
          </p>
          <p className="mb-2">
            <u>Contact Us</u>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
