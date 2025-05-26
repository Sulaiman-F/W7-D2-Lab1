import React from "react";

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center min-h-screen bg-gray-100 px-2 md:px-10">
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="https://img.freepik.com/free-vector/tiny-women-near-obese-chart-scales-isolated-flat-vector-illustration-cartoon-female-characters-diet-using-weight-control-with-bmi-body-mass-index-medical-fitness-exercise-concept_74855-10177.jpg?ga=GA1.1.1143795653.1745583610&semt=ais_items_boosted&w=740"
            alt="BMI Chart"
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center w-full md:w-1/2">
          <h1 className="text-xl md:text-3xl font-bold">Welcome</h1>
          <p className="text-sm md:text-lg text-center w-full  px-5">
            Welcome to your dashboard, {localStorage.getItem("user")}! Here, you
            can access all your personalized features, including the BMI
            calculator, health insights, and more. Stay motivated and track your
            progress with us!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
