import { motion } from "framer-motion";

export default function Button({
                                   children,
                                   onClick,
                                   type = "button",
                                   variant = "primary",
                                   className = "",
                                   disabled = false,
                               }) {
    const variants = {
        primary:
            "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700",
        secondary:
            "border border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:text-indigo-600",
        dark: "bg-slate-900 text-white hover:bg-slate-800",
    };

    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            whileHover={disabled ? undefined : { y: -2, scale: 1.02 }}
            whileTap={disabled ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={`
        inline-flex items-center justify-center gap-2
        rounded-xl px-5 py-3 text-sm font-semibold
        transition-colors duration-200
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant] || variants.primary}
        ${className}
      `}
        >
            {children}
        </motion.button>
    );
}