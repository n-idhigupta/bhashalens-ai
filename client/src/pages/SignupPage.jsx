import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { data } = await API.post("/auth/register", formData);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/dashboard");
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FAF7F2] px-4">
      <div className="bg-white shadow-sm border border-[#EFE5D8] rounded-3xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-2 text-[#3E2F25]">Create Account</h2>
        <p className="text-center text-[#7A6757] mb-6">Start using BhashaLens AI</p>

        {message && (
          <p className="text-center mb-4 text-sm text-red-600">{message}</p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-[#E6DACC] bg-[#FCFAF7] p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#D7C2AA]"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-[#E6DACC] bg-[#FCFAF7] p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#D7C2AA]"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-[#E6DACC] bg-[#FCFAF7] p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#D7C2AA]"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#4B3A2F] text-white py-3 rounded-xl hover:bg-[#5A4638] transition"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-[#6D5A4B]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#8C6A4A] font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;