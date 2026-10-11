
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Zap,
    UserRound,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    ShieldCheck,
} from "lucide-react";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setError("");
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formData.password.length < 8) {
            setError("Password must contain at least 8 characters.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Backend registration will be connected in the next step.
        setError("");
        alert("Registration form is valid. Backend integration comes next.");
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#F3F7FB] p-4 sm:p-8">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/70 md:grid-cols-2">

                {/* Left branding panel */}
                <section className="relative hidden overflow-hidden bg-[#0B2545] p-10 text-white md:flex md:flex-col md:justify-between">
                    <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#08BFE8]/20 blur-3xl" />
                    <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

                    <Link to="/" className="relative z-10 inline-flex items-center gap-2">
            <span className="rounded-xl bg-[#08BFE8] p-2 text-[#0B2545]">
              <Zap size={23} fill="currentColor" />
            </span>

                        <span className="text-xl font-extrabold">
              Creator<span className="text-[#08BFE8]">Store</span>
            </span>
                    </Link>

                    <div className="relative z-10 py-12">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-[#08BFE8]">
                            <UserRound size={34} />
                        </div>

                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#08BFE8]">
                            Join our community
                        </p>

                        <h1 className="mt-4 text-4xl font-extrabold leading-tight">
                            Create your account.
                            <br />
                            <span className="text-[#08BFE8]">
                Discover more.
              </span>
                        </h1>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
                            Create your CreatorStore account to explore products,
                            manage your orders, and enjoy a simpler shopping experience.
                        </p>

                        <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                            <ShieldCheck size={25} className="shrink-0 text-[#08BFE8]" />
                            <div>
                                <p className="text-sm font-bold">Your account matters</p>
                                <p className="mt-1 text-xs text-slate-300">
                                    Keep your account credentials private and secure.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="relative z-10 text-xs text-slate-400">
                        Technology for your everyday life.
                    </p>
                </section>

                {/* Registration form */}
                <section className="flex items-center justify-center px-6 py-10 sm:px-12 md:py-12">
                    <div className="w-full max-w-md">

                        <Link
                            to="/"
                            className="mb-7 inline-flex items-center gap-2 text-lg font-extrabold text-[#0B2545] md:hidden"
                        >
                            <Zap size={23} className="text-sky-500" />
                            CreatorStore
                        </Link>

                        <p className="text-sm font-bold uppercase tracking-[0.15em] text-sky-600">
                            GET STARTED
                        </p>

                        <h2 className="mt-2 text-3xl font-extrabold text-[#0B2545]">
                            Create account
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-500">
                            Enter your details below to create your account.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-7 space-y-4">

                            {/* Full name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-bold text-[#0B2545]"
                                >
                                    Full name
                                </label>

                                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 transition focus-within:border-[#08BFE8] focus-within:ring-2 focus-within:ring-cyan-100">
                                    <UserRound size={18} className="shrink-0 text-slate-400" />

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        minLength={2}
                                        maxLength={100}
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="w-full bg-transparent text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-bold text-[#0B2545]"
                                >
                                    Email address
                                </label>

                                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 transition focus-within:border-[#08BFE8] focus-within:ring-2 focus-within:ring-cyan-100">
                                    <Mail size={18} className="shrink-0 text-slate-400" />

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full bg-transparent text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-bold text-[#0B2545]"
                                >
                                    Password
                                </label>

                                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 transition focus-within:border-[#08BFE8] focus-within:ring-2 focus-within:ring-cyan-100">
                                    <Lock size={18} className="shrink-0 text-slate-400" />

                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        autoComplete="new-password"
                                        minLength={8}
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="At least 8 characters"
                                        className="w-full min-w-0 bg-transparent text-sm outline-none"
                                    />

                                    <button
                                        type="button"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="shrink-0 text-slate-400 hover:text-[#0B2545]"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm password */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-2 block text-sm font-bold text-[#0B2545]"
                                >
                                    Confirm password
                                </label>

                                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 transition focus-within:border-[#08BFE8] focus-within:ring-2 focus-within:ring-cyan-100">
                                    <Lock size={18} className="shrink-0 text-slate-400" />

                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        required
                                        autoComplete="new-password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Re-enter your password"
                                        className="w-full min-w-0 bg-transparent text-sm outline-none"
                                    />

                                    <button
                                        type="button"
                                        aria-label={
                                            showConfirmPassword
                                                ? "Hide confirm password"
                                                : "Show confirm password"
                                        }
                                        onClick={() =>
                                            setShowConfirmPassword(!showConfirmPassword)
                                        }
                                        className="shrink-0 text-slate-400 hover:text-[#0B2545]"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Error message */}
                            {error && (
                                <p
                                    role="alert"
                                    className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                                >
                                    {error}
                                </p>
                            )}

                            {/* Terms */}
                            <label className="flex items-start gap-2 pt-1 text-xs leading-5 text-slate-500">
                                <input
                                    type="checkbox"
                                    required
                                    className="mt-1 accent-[#08BFE8]"
                                />
                                <span>
                  I agree to the terms of service and privacy policy.
                </span>
                            </label>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#08BFE8] px-5 py-3.5 font-extrabold text-[#0B2545] transition hover:bg-cyan-300"
                            >
                                Create account
                                <ArrowRight size={18} />
                            </button>
                        </form>

                        <p className="mt-6 text-center text-sm text-slate-500">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-extrabold text-sky-700 hover:text-[#0B2545]"
                            >
                                Sign in
                            </Link>
                        </p>

                        <Link
                            to="/"
                            className="mt-5 block text-center text-sm font-semibold text-slate-500 hover:text-[#0B2545]"
                        >
                            ← Back to home
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
