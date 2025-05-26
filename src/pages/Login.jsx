import React from "react";
import { useNavigate, Link } from "react-router";
import { useState } from "react";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Alert from "@mui/material/Alert";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    if (formData.username !== localStorage.getItem("user")) {
      setError("Username does not exist");
      return;
    }
    if (formData.password !== localStorage.getItem("password")) {
      setError("Incorrect password");
      return;
    }
    setSuccess("Login successful!");
    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };
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
      <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100">
        <div className="hidden md:flex flex-col gap-y-5 items-center justify-center bg-gradient-to-bl from-cyan-400 to-sky-600 text-white h-full w-1/2 rounded-r-4xl">
          <h1 className="text-2xl">Welcome</h1>
          <p className="text-center text-lg w-3/4">
            Welcome back! Please log in to access your account and enjoy
            personalized features, including your BMI calculator. Enter your
            credentials below to continue. We’re glad to see you again!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-neutral-100 h-full w-1/2">
          <div className="flex flex-col items-center bg-neutral-150 p-5 gap-5 px-10 rounded-lg shadow-md">
            <div className="flex flex-col items-center bg-gradient-to-br from-cyan-400 to-sky-600 rounded-full">
              <RiAccountPinCircleFill className="text-6xl p-2 text-neutral-50" />
            </div>
            <h1 className="text-xl font-medium">Login</h1>

            <div className="flex flex-col items-center gap-3">
              <input
                className="border border-gray-300/50 p-2 px-5 rounded-lg w-72 focus:outline-2 focus:outline-sky-600/50 hover:shadow-md transition-shadow duration-300 shadow-blue-500/20 hover:border-sky-600/50  focus:bg-neutral-200/50"
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
              <div className="relative w-72">
                <input
                  className="border border-gray-300/50 p-2 px-5 rounded-lg w-full focus:outline-2 focus:outline-sky-600/50 hover:shadow-md transition-shadow duration-300 shadow-blue-500/20 hover:border-sky-600/50  focus:bg-neutral-200/50"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500 cursor-pointer hover:scale-110 transition-transform duration-200"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </button>
              </div>
              <p>
                Don't have an account?{" "}
                <Link className="hover:underline cursor-pointer" to="/register">
                  Register
                </Link>
              </p>
              <button
                className="bg-sky-500 text-white p-2 rounded-lg w-40 hover:bg-sky-600 transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
                type="submit"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
