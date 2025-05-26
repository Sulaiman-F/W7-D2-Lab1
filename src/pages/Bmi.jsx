import React from "react";
import { useState } from "react";
import Alert from "@mui/material/Alert";

function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showBmi, setShowBmi] = useState(false);
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) {
      setError("Please fill in both weight and height fields");
      return;
    }
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    setBmiResult(bmi.toFixed(2));
    if (isNaN(bmi) || bmi <= 0) {
      setError("Invalid input. Please enter valid weight and height.");
      return;
    }
    setShowBmi(true);
  };
  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };
  localStorage.getItem("isLoggedIn") !== "true" &&
    (window.location.href = "/login");
  return (
    <>
      {error && (
        <Alert
          severity="error"
          onClose={() => setError("")}
          className="absolute top-5 left-1/2 transform -translate-x-1/2 w-96"
        >
          {error}
        </Alert>
      )}
      {success && (
        <Alert
          severity="success"
          onClose={() => setSuccess("")}
          className="absolute top-5 left-1/2 transform -translate-x-1/2 w-96"
        >
          {success}
        </Alert>
      )}
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
          <div className="flex flex-col gap-4">
            <div className="">
              <input
                type="number"
                className="border border-gray-300/50 p-2 px-5 rounded-lg w-72 focus:outline-2 focus:outline-sky-600/50 hover:shadow-md transition-shadow duration-300 shadow-blue-500/20 hover:border-sky-600/50  focus:bg-neutral-200/50"
                placeholder="Weight (kg)"
                value={weight}
                onChange={handleWeightChange}
              />
            </div>
            <div className="">
              <input
                type="number"
                className="border border-gray-300/50 p-2 px-5 rounded-lg w-72 focus:outline-2 focus:outline-sky-600/50 hover:shadow-md transition-shadow duration-300 shadow-blue-500/20 hover:border-sky-600/50  focus:bg-neutral-200/50"
                placeholder="Height (cm)"
                value={height}
                onChange={handleHeightChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700"
              onClick={calculateBMI}
            >
              Calculate BMI
            </button>
          </div>
        </div>
        {showBmi && (
          <div className="flex flex-col items-center gap-4 p-2 px-20 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Your BMI Result:</h3>
            {bmiResult < 18.5 ? (
              <>
                <p className="text-sky-500 text-2xl">{bmiResult}</p>
                <img
                  className="w-30 h-auto"
                  src="src/assets/Underweight.png"
                  alt="Underweight"
                />
              </>
            ) : bmiResult >= 18.5 && bmiResult < 22.9 ? (
              <>
                <p className="text-green-500 text-2xl">{bmiResult}</p>
                <img
                  className="w-30 h-auto"
                  src="src/assets/Normal.png"
                  alt="Normal"
                />
              </>
            ) : bmiResult >= 23 && bmiResult < 24.9 ? (
              <>
                <p className="text-yellow-300 text-2xl">{bmiResult}</p>
                <img
                  className="w-30 h-auto"
                  src="src/assets/RiskToOverweight.png"
                  alt="Risk to Overweight"
                />
              </>
            ) : bmiResult >= 23 && bmiResult < 29.9 ? (
              <>
                <p className="text-yellow-600 text-2xl">{bmiResult}</p>
                <img
                  className="w-30 h-auto"
                  src="src/assets/Overweight.png"
                  alt="Overweight"
                />
              </>
            ) : (
              <>
                <p className="text-red-500 text-2xl">{bmiResult}</p>
                <img
                  className="w-30 h-auto"
                  src="src/assets/Obese.png"
                  alt="Obesity"
                />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Bmi;
