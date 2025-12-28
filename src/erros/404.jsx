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
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center"
            data-aos="fade-up"
        >
            {/* Image */}
            <div style={{ backgroundColor: "rgba(240, 240, 240, 0)", width: "300px", height: "300px" }}>
                <img
                    src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1815.jpg?w=740&t=st=1699845003~exp=1699845603~hmac=8d52f20ec6fede8cc8af243f8144221187d2c97b3f1a796e2ee75bbd9ae02ec8"
                    alt="404 Not Found"
                    className="max-w-xs md:max-w-md mb-8"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    style={{
                        width: "100%",
                        height: "100%",
                        mixBlendMode: "multiply"  // blends white background with the div
                    }}
                />
            </div>

            {/* Heading */}
            <h1
                className="text-4xl font-bold text-blue-600 mb-4"
                data-aos="fade-right"
                data-aos-delay="400"
            >
                Oops! Page Not Found
            </h1>

            {/* Description */}
            <p
                className="text-gray-600 mb-6 max-w-xl"
                data-aos="fade-left"
                data-aos-delay="600"
            >
                Sorry, the page you’re looking for doesn’t exist, has been moved, or
                is temporarily unavailable.
            </p>

            {/* Extra info */}
            <p
                className="text-gray-500 mb-10 max-w-lg"
                data-aos="fade-left"
                data-aos-delay="700"
            >
                You might want to check the URL, or try navigating back to the previous
                page. If you believe this is an error, please contact support.
            </p>

            {/* Go Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                data-aos="fade-up"
                data-aos-delay="800"
            >
                ← Go Back
            </button>
        </div >
    );
}
