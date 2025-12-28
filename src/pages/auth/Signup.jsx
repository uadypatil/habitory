import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        purpose: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
        if (!formData.password) newErrors.password = "Password is required";
        if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm password";
        if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if (!formData.purpose) newErrors.purpose = "Please select a purpose";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("Form data:", formData);
        alert("Registration successful!");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 md:px-6 relative">

            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="absolute top-6 left-4 md:left-6 text-blue-600 font-medium hover:underline z-50"
            >
                ← Back
            </button>

            {/* Signup Card */}
            <div
                className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 sm:p-10"
                data-aos="fade-up"
            >

                {/* Header */}
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600">
                    Create Your Account
                </h1>
                <p className="text-center text-gray-500 mt-2 text-sm sm:text-base">
                    Sign up to start your discipline journey
                </p>

                {/* Form */}
                <form className="mt-8 sm:mt-10 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.fullName ? "border-red-500" : ""}`}
                        />
                        {errors.fullName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.email ? "border-red-500" : ""}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.password ? "border-red-500" : ""}`}
                        />
                        {errors.password && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.password}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.confirmPassword ? "border-red-500" : ""}`}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.confirmPassword}</p>}
                    </div>

                    {/* Purpose */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Purpose to Use</label>
                        <select
                            name="purpose"
                            value={formData.purpose}
                            onChange={handleChange}
                            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.purpose ? "border-red-500" : ""}`}
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="fitness">Fitness</option>
                            <option value="regular-routines">Regular Routines</option>
                            <option value="sports-routine">Sports Routine</option>
                            <option value="more">Other...</option>
                        </select>
                        {errors.purpose && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.purpose}</p>}
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-2 sm:gap-4">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-sm text-gray-400">OR</span>
                    <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Already Have Account */}
                <p className="text-center text-gray-600 text-sm sm:text-base">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 font-medium hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
}
