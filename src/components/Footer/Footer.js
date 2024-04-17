import React from "react";
import Divider from "../Divider/Divider";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    // <div id="footer" className="bg-[#032b4d] bg-[url('/dot-bg.png')]">
    <div
      id="footer"
      className="bg-[#032b4d] bg-[url('/dot-bg.png')] bg-blend-soft-light"
    >
      <div
      // className="bg-[url('/dot-bg.png')] bg-opacity-5 bg-cover"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/dot-bg.png')",
      // }}
      >
        <div className="container text-white py-16 ">
          <section className="flex justify-between px-8">
            {/* 提示订阅信息 */}
            <div className="flex flex-col">
              <span className="inline-block text-xl my-4">
                订阅我们的最新消息
              </span>
              <span className="inline-block text-base">
                我们提供内容丰富的每月技术通讯 - 请查看
              </span>
            </div>
            {/* 订阅Email框 */}
            <div className="flex py-8">
              <input
                className="rounded-s-lg px-4 py-2 w-[32rem] text-black outline-none focus:border-0 "
                type="text"
              />
              <button className="bg-indigo-500 px-4 py-4 w-36 rounded-e-lg hover:bg-indigo-400 transition-all duration-200">
                现在订阅！
              </button>
            </div>
          </section>
        </div>
        {/* Divider */}
        <Divider />

        {/* Site Map */}
        <div className="container text-white py-16">
          <>
            <></>
          </>
        </div>
        <Divider />
        <div className="text-white p-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4 leading-relaxed">
                IngeniousByte
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 leading-relaxed">
                Our Services
              </h3>
              <ul>
                <li>Startup Solutions</li>
                <li>Web Development</li>
                <li>Networking Services</li>
                <li>SEO Optimization</li>
                <li>Apps Development</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 leading-relaxed">
                Useful Links
              </h3>
              <ul>
                <li>About Us</li>
                <li>Case Study</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 leading-relaxed">
                Contact Info
              </h3>
              <ul>
                <li>Phone: 080 707 555-321</li>
                <li>Email: demo@example.com</li>
                <li>Address: 526 Melrose Street, Water Mill, 11976 New York</li>
              </ul>
            </div>
          </div>
        </div>
        <Divider />
        <div className="container text-white py-16">
          <div className="flex justify-between">
            <span>
              <FaRegCopyright className="inline-block me-2" />
              2024 IngeniousByte - All Rights Reserved.
            </span>
            <span>Terms & Conditions | Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
