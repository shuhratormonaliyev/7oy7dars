import React from "react";
import Email from "../public/images/email.svg";
import Telefon from "../public/images/Calling.svg";
import House from "../public/images/Buildinghouse.svg";
import Logo from "../public/images/logo.svg";
// import Store from "./redux/store";
function App() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">

      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-8" />
          <span className="text-3xl font-bold">Brave</span>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Templates
          </a>
          <a href="#" className="text-gray-600 hove.r:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Resources
          </a>
        </nav>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
          Start Free Trial
        </button>
      </header>
      <main className="max-w-3xl mx-auto text-center py-20">
        <h2 className="text-lg font-semibold text-gray-500">Contact Us</h2>
        <h1 className="text-4xl font-bold mt-2">
          Say <span className="text-blue-600">Hello!</span> We're always here to
          help.
        </h1>
        <p className="text-gray-600 mt-4 w-[700px] mx-auto">
          Interested in learning more about SmartMoving? Give us a call or send
          an email and one of our team members will be happy to assist you.
        </p>

        <div className="flex flex-col justify-center mt-[100px] mx-auto w-[870px]">
          <div className="flex w-full mb-6 justify-between">
            <div className="bg-white flex items-center justify-start p-5 rounded-lg shadow-md w-[420px]">
              <img width={40} height={40} src={Telefon} alt="Phone icon" />
              <div className="ml-8">
                <span className="block text-start font-semibold">CALL US</span>
                <p className="text-start text-3xl text-[#4F5153] font-semibold">
                  +1 (214) 960 4130
                </p>
              </div>
            </div>
            <div className="bg-white flex p-5 items-center rounded-lg shadow-md w-[420px]">
              <img width={40} height={40} src={Email} alt="Email icon" />
              <div className="ml-8">
                <span className="block text-start font-semibold">Email Us</span>
                <p className="text-start text-3xl text-[#4F5153] font-semibold">
                  hello@aiinfo.com
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 flex rounded-lg shadow-md">
            <img src={House} alt="House icon" />
            <div className="ml-8">
              <span className="block font-semibold text-start">
                HEADQUARTERS
              </span>
              <p className="text-start text-3xl text-[#4F5153] font-semibold">
                12720 Hillcrest Road Suite 980, Dallas, TX 75230
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="h-96 bg-cover bg-center bg-slate-900 text-white py-16 text-center mt-10 mb-2">
  <h2 className="text-2xl font-semibold">
    Sign up for your free 14 day trial now!
  </h2>
  <button className="mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg">
    Get Started for free
  </button>
</div>
    </div>
  );
}

export default App;
