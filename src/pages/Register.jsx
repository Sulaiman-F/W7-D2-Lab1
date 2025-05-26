import React from "react";
import { useNavigate, Link } from "react-router";
import { useState } from "react";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Alert from "@mui/material/Alert";
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields");
      return;
    }
    if (formData.username.length < 3) {
      setError("Username must be at least 3 characters long");
      return;
    }
    if (formData.username == localStorage.getItem("user")) {
      setError("Username already exists");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (formData.email === localStorage.getItem("email")) {
      setError("Email already exists");
      return;
    }
    localStorage.setItem("user", formData.username);
    localStorage.setItem("password", formData.password);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("isLoggedIn", true);
    setSuccess("Registration successful!");
    setTimeout(() => {
      navigate("/login");
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
            Welcome to our platform! Signing up is quick and easy. Please fill
            in the required fields below to create your account. Once
            registered, you’ll gain access to exclusive features like your
            personalized BMI calculator to help you track your health. Let’s get
            started!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center bg-neutral-100 h-full w-1/2">
          <div className="flex flex-col items-center bg-neutral-150 p-5 gap-5 px-10 rounded-lg shadow-md">
            <div className="flex flex-col items-center bg-gradient-to-br from-cyan-400 to-sky-600 rounded-full">
              <RiAccountPinCircleFill className="text-6xl p-2 text-neutral-50" />
            </div>
            <h1 className="text-xl font-medium">Register</h1>
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
              <input
                className="border border-gray-300/50 p-2 px-5 rounded-lg w-72 focus:outline-2 focus:outline-sky-600/50 hover:shadow-md transition-shadow duration-300 shadow-blue-500/20 hover:border-sky-600/50  focus:bg-neutral-200/50"
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
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

              <div className="relative w-72">
                <input
                  className="border border-gray-300/50 p-2 px-5 rounded-lg w-full focus:outline-2 focus:outline-sky-600/50 hover:shadow-md transition-shadow duration-300 shadow-blue-500/20 hover:border-sky-600/50  focus:bg-neutral-200/50"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
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
              <p className="text-sm text-gray-500">
                already have an account?{" "}
                <Link className="hover:underline cursor-pointer" to="/login">
                  Login
                </Link>
              </p>

              <button
                className="bg-sky-500 text-white p-2 rounded-lg w-40 hover:bg-sky-600 transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
                type="submit"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
