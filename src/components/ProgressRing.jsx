export function ProgressRing({ progress = 70 }) {
  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full rotate-[-90deg]">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="#E5E7EB"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="#7C8CF8"
          strokeWidth="10"
          fill="none"
          strokeDasharray="283"
          strokeDashoffset={283 - (283 * progress) / 100}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
        {progress}%
      </span>
    </div>
  );
}
