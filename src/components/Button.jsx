export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl px-6 py-3 font-medium text-white
      bg-gradient-to-r from-primary via-secondary to-accent
      shadow-glow hover:scale-[1.02] transition ${className}`}
    >
      {children}
    </button>
  );
}
