export function CustomButton({ children, variant = "default", className = "", ...props }) {
    const baseStyles = "px-4 py-2 rounded-lg font-semibold transition duration-200";
    const variants = {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    };
  
    return (
      <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  }