import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 text-center"
      data-aos="fade-up"
    >
      {/* Image */}
      <div
        className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] mb-6"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1815.jpg?w=740"
          alt="404 Not Found"
          className="w-full h-auto mix-blend-multiply"
        />
      </div>

      {/* Heading */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        Oops! Page Not Found
      </h1>

      {/* Description */}
      <p
        className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 max-w-md md:max-w-xl"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        Sorry, the page you’re looking for doesn’t exist, has been moved, or is
        temporarily unavailable.
      </p>

      {/* Extra info */}
      <p
        className="text-xs sm:text-sm md:text-base text-gray-500 mb-8 max-w-sm md:max-w-lg"
        data-aos="fade-left"
        data-aos-delay="700"
      >
        You might want to check the URL, or try navigating back to the previous
        page. If you believe this is an error, please contact support.
      </p>

      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 transition"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        ← Go Back
      </button>
    </div>
  );
}
