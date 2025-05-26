import React from "react";

function Footer() {
  return (
    <div>
      <footer className="flex flex-col bg-sky-600 text-gray-200 gap-5 p-4 text-center">
        <p className="text-xs md:text-md">
          This is a simple BMI calculator application. It is designed to help
          users calculate their Body Mass Index (BMI) based on their height and
          weight.
        </p>
        <p className="text-xs md:text-md">
          © 2023 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
