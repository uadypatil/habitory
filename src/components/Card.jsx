export default function Card({ children, className = "" }) {
    return (
        <div
            className={`bg-glass backdrop-blur-glass shadow-soft rounded-2xl p-5 ${className}`}
        >
            {children}
        </div>
    );
}
