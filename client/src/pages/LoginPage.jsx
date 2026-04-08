import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/login", formData);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-[#EFE5D8] rounded-3xl shadow-sm p-8">
        <p className="uppercase tracking-[0.2em] text-sm text-[#A08467] mb-3">
          Login
        </p>

        <h1 className="text-3xl font-bold text-[#3E2F25] mb-2">
          Welcome Back
        </h1>

        <p className="text-[#6D5A4B] mb-8">
          Sign in to continue using BhashaLens AI.
        </p>

        {message && <p className="mb-4 text-sm text-red-600">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl border border-[#D8C8B6] bg-[#FCFAF7] focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl border border-[#D8C8B6] bg-[#FCFAF7] focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#4B3A2F] text-white py-3 rounded-2xl hover:bg-[#5A4638] transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-[#7A6757] mt-6 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#8B6B4A] font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;