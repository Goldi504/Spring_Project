
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Zap,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    LoaderCircle,
    AlertCircle,
} from "lucide-react";

export default function Login() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (!email.trim() || !password) {
            setError("Please enter your email and password.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:8080/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email.trim(),
                        password,
                    }),
                }
            );

            const contentType = response.headers.get("content-type");
            const data = contentType?.includes("application/json")
                ? await response.json()
                : await response.text();

            if (!response.ok) {
                const message =
                    typeof data === "object" && data !== null
                        ? data.message || data.error || data.detail
                        : data;

                throw new Error(
                    message || `Login failed (${response.status}).`
                );
            }

            // Adjust these property names to match AuthResponse.java.
            const token =
                typeof data === "object"
                    ? data.token || data.accessToken || data.access_token
                    : null;

            if (token) {
                const storage = rememberMe ? localStorage : sessionStorage;

                storage.setItem("token", token);
            }

            // Store user details if the backend returns them.
            if (typeof data === "object" && data !== null) {
                const user = data.user || data;

                if (user.email) {
                    sessionStorage.setItem("userEmail", user.email);
                }

                if (user.role) {
                    sessionStorage.setItem("userRole", user.role);
                }
            }

            // If your backend uses cookies instead of returning a token,
            // adjust the authentication handling to match that design.
            if (!token) {
                throw new Error(
                    "Login response received, but no authentication token was found. Check AuthResponse.java."
                );
            }

            navigate("/dashboard");
        } catch (err) {
            if (err instanceof TypeError) {
                setError(
                    "Cannot connect to the backend. Check that Spring Boot is running on port 8080 and that CORS is configured."
                );
            } else {
                setError(err.message || "Something went wrong. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#F3F7FB] p-4 sm:p-8">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/70 md:grid-cols-2">
                <section className="relative hidden min-h-[580px] overflow-hidden bg-[#0B2545] p-10 text-white md:flex md:flex-col md:justify-between">
                    <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#08BFE8]/20 blur-3xl" />

                    <Link to="/" className="relative z-10 inline-flex items-center gap-2">
                        <span className="rounded-xl bg-[#08BFE8] p-2 text-[#0B2545]">
                            <Zap size={23} fill="currentColor" />
                        </span>
                        <span className="text-xl font-extrabold">
                            Creator<span className="text-[#08BFE8]">Store</span>
                        </span>
                    </Link>

                    <div className="relative z-10">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#08BFE8]">
                            Welcome back
                        </span>

                        <h1 className="mt-4 text-4xl font-extrabold leading-tight">
                            Your next favorite device is waiting.
                        </h1>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
                            Sign in to explore products, manage your orders, and continue
                            your shopping journey.
                        </p>
                    </div>

                    <p className="relative z-10 text-xs text-slate-400">
                        Technology for your everyday life.
                    </p>
                </section>

                <section className="flex items-center justify-center px-6 py-10 sm:px-12 md:py-14">
                    <div className="w-full max-w-md">
                        <Link
                            to="/"
                            className="mb-8 inline-flex items-center gap-2 text-lg font-extrabold text-[#0B2545] md:hidden"
                        >
                            <Zap className="text-sky-500" size={23} />
                            CreatorStore
                        </Link>

                        <p className="text-sm font-bold text-sky-600">
                            YOUR ACCOUNT
                        </p>

                        <h2 className="mt-2 text-3xl font-extrabold text-[#0B2545]">
                            Sign in
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-500">
                            Enter your email and password to access your account.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-bold text-[#0B2545]"
                                >
                                    Email address
                                </label>

                                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-[#08BFE8] focus-within:ring-2 focus-within:ring-cyan-100">
                                    <Mail size={18} className="shrink-0 text-slate-400" />

                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="w-full bg-transparent text-sm outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-bold text-[#0B2545]"
                                >
                                    Password
                                </label>

                                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-[#08BFE8] focus-within:ring-2 focus-within:ring-cyan-100">
                                    <Lock size={18} className="shrink-0 text-slate-400" />

                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full bg-transparent text-sm outline-none"
                                    />

                                    <button
                                        type="button"
                                        aria-label={
                                            showPassword ? "Hide password" : "Show password"
                                        }
                                        onClick={() => setShowPassword((previous) => !previous)}
                                        className="shrink-0 text-slate-400 hover:text-[#0B2545]"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-3 text-sm">
                                <label className="flex items-center gap-2 text-slate-600">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="accent-[#08BFE8]"
                                    />
                                    Remember me
                                </label>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setError("Password recovery has not been configured yet.")
                                    }
                                    className="font-semibold text-sky-700 hover:text-[#0B2545]"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            {error && (
                                <div
                                    role="alert"
                                    className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                                >
                                    <AlertCircle size={18} className="mt-0.5 shrink-0" />
                                    <p>{error}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#08BFE8] px-5 py-3.5 font-extrabold text-[#0B2545] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? (
                                    <>
                                        <LoaderCircle size={18} className="animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        Sign in <ArrowRight size={18} />
                                    </>
                                )}
                            </button>
                        </form>

                        <p className="mt-7 text-center text-sm text-slate-500">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className="font-extrabold text-sky-700 hover:text-[#0B2545]"
                            >
                                Create account
                            </Link>
                        </p>

                        <Link
                            to="/"
                            className="mt-6 block text-center text-sm font-semibold text-slate-500 hover:text-[#0B2545]"
                        >
                            ← Back to home
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}