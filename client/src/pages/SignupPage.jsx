import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/register", formData);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/dashboard");
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-4">
      <div className="bg-white p-10 rounded-3xl shadow-md w-full max-w-lg border border-[#EFE5D8]">
        <p className="text-sm tracking-[0.3em] text-[#B28A6A] mb-4">SIGNUP</p>
        <h1 className="text-4xl font-bold text-[#4B2E1F] mb-4">
          Create Account
        </h1>
        <p className="text-[#6E4D3B] mb-6">Start using BhashaLens AI</p>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#4B2E1F] text-white py-3 rounded-xl"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-[#6E4D3B]">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;