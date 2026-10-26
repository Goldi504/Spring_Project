import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowUpRight,
    Headphones,
    Laptop,
    ShieldCheck,
    Smartphone,
    Truck,
    Watch,
    RotateCcw,
    Sparkles,
    ShoppingBag,
    RefreshCw,
    PackageOpen,
} from "lucide-react";

import { getAllProducts } from "../../services/productService";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductCard from "../../components/common/ProductCard";

/* ================= CATEGORIES ================= */

const categories = [
    {
        name: "Mobiles",
        description: "Smartphones for everyday life",
        icon: Smartphone,
    },
    {
        name: "Laptops",
        description: "Power your work and creativity",
        icon: Laptop,
    },
    {
        name: "Accessories",
        description: "Everyday essentials",
        icon: Headphones,
    },
    {
        name: "Smartwatches",
        description: "Stay connected and active",
        icon: Watch,
    },
];

/* ================= BENEFITS ================= */

const benefits = [
    {
        icon: Truck,
        title: "Convenient Shopping",
        description: "Explore products in one place",
    },
    {
        icon: ShieldCheck,
        title: "Secure Experience",
        description: "Protected account access",
    },
    {
        icon: RotateCcw,
        title: "Easy Browsing",
        description: "Find products with ease",
    },
    {
        icon: Headphones,
        title: "Customer Support",
        description: "Help when you need it",
    },
];

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

/* ================= HOME COMPONENT ================= */

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    /* ================= FETCH PRODUCTS ================= */

    const loadProducts = async () => {
        try {
            setLoading(true);
            setError("");

            const result = await getAllProducts();

            if (!Array.isArray(result)) {
                throw new Error("The products API returned an unexpected response.");
            }

            setProducts(result);
        } catch (err) {
            console.error("Failed to load products:", err);

            setError(
                err.message || "Unable to load products. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let isMounted = true;

        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError("");

                const result = await getAllProducts();

                if (!Array.isArray(result)) {
                    throw new Error("Unexpected products API response.");
                }

                if (isMounted) {
                    setProducts(result);
                }
            } catch (err) {
                console.error("Failed to load products:", err);

                if (isMounted) {
                    setError(
                        err.message || "Unable to load products. Please try again."
                    );
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchProducts();

        return () => {
            isMounted = false;
        };
    }, []);

    /*
     * Adapt common product field names for the existing ProductCard.
     * Adjust these mappings if your Product entity uses different fields.
     */
    const featuredProducts = products.slice(0, 8).map((product) => ({
        ...product,
        id: product.id ?? product.productId,
        name: product.name ?? product.productName ?? "Unnamed Product",
        price: product.price ?? product.productPrice ?? 0,
        category: product.category ?? "General",
        image:
            product.image ??
            product.imageUrl ??
            product.productImage ??
            product.imageURL ??
            "",
    }));

    return (
        <div className="min-h-screen overflow-hidden bg-slate-50">
            <Navbar />

            <main>
                {/* ================= HERO SECTION ================= */}

                <section className="mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl shadow-slate-900/10">
                        {/* Background effects */}

                        <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />

                        <div className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

                        <div className="grid items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 md:grid-cols-2 md:px-14 lg:px-16 lg:py-20">
                            {/* Hero content */}

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="relative z-10"
                            >
                                <motion.div variants={fadeUpVariants}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-300">
                    <Sparkles size={15} />
                    Discover something better
                  </span>
                                </motion.div>

                                <motion.h1
                                    variants={fadeUpVariants}
                                    className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                                >
                                    Shopping made
                                    <br />

                                    <span className="bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent">
                    simple and smart.
                  </span>
                                </motion.h1>

                                <motion.p
                                    variants={fadeUpVariants}
                                    className="mt-6 max-w-lg text-sm leading-7 text-slate-300 sm:text-base"
                                >
                                    Explore technology, everyday essentials, and products
                                    designed to make your life easier. Find your favorites with
                                    CreatorStore.
                                </motion.p>

                                <motion.div
                                    variants={fadeUpVariants}
                                    className="mt-8 flex flex-wrap gap-4"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.04, y: -3 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <Link
                                            to="/products"
                                            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition-colors hover:bg-indigo-500"
                                        >
                                            Explore Products
                                            <ArrowRight size={18} />
                                        </Link>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.04, y: -3 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <a
                                            href="#categories"
                                            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                                        >
                                            Explore Categories
                                            <ArrowUpRight size={18} />
                                        </a>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    variants={fadeUpVariants}
                                    className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400"
                                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck size={15} className="text-indigo-400" />
                    Easy product discovery
                  </span>

                                    <span className="flex items-center gap-2">
                    <ShoppingBag size={15} className="text-indigo-400" />
                    Convenient shopping
                  </span>
                                </motion.div>
                            </motion.div>

                            {/* Animated hero image */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.85,
                                    rotateY: -12,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    rotateY: 0,
                                }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.2,
                                    ease: "easeOut",
                                }}
                                className="relative mx-auto w-full max-w-lg"
                                style={{ perspective: 1000 }}
                            >
                                {/* Decorative circles */}

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 35,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/20"
                                />

                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{
                                        duration: 45,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/20"
                                />

                                {/* Main product image */}

                                <motion.div
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    whileHover={{
                                        scale: 1.03,
                                        rotateY: 5,
                                        rotateX: -3,
                                    }}
                                    className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/30 backdrop-blur-sm"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1100&q=85"
                                        alt="A collection of electronic devices"
                                        className="h-64 w-full rounded-2xl object-cover sm:h-80"
                                    />

                                    <div className="absolute inset-x-2 bottom-2 rounded-b-2xl bg-gradient-to-t from-slate-950/90 to-transparent p-5 pt-12">
                                        <p className="text-xs font-medium text-slate-300">
                                            Discover your next favorite
                                        </p>

                                        <p className="mt-1 text-xl font-bold text-white">
                                            Upgrade your everyday.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Floating shopping card */}

                                <motion.div
                                    animate={{
                                        y: [0, -8, 0],
                                        rotate: [0, 2, 0],
                                    }}
                                    transition={{
                                        duration: 3.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute -right-2 top-5 z-20 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xl sm:-right-5"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                                            <ShoppingBag size={22} />
                                        </div>

                                        <div>
                                            <p className="text-xs text-slate-500">
                                                Your next discovery
                                            </p>

                                            <p className="mt-1 text-sm font-bold text-slate-900">
                                                Starts here
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating badge */}

                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5,
                                    }}
                                    className="absolute -bottom-5 left-0 z-20 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-5"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                            <ShieldCheck size={19} />
                                        </div>

                                        <div>
                                            <p className="text-sm font-bold text-slate-900">
                                                Shop with confidence
                                            </p>

                                            <p className="text-xs text-slate-500">
                                                Simple and convenient
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ================= BENEFITS SECTION ================= */}

                <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {benefits.map(({ icon: Icon, title, description }) => (
                            <motion.div
                                key={title}
                                variants={fadeUpVariants}
                                whileHover={{ y: -5 }}
                                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg hover:shadow-slate-200/60"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                    <Icon size={23} />
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-slate-900">
                                        {title}
                                    </h3>

                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                        {description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* ================= CATEGORIES SECTION ================= */}

                <section
                    id="categories"
                    className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={fadeUpVariants}
                            className="mb-7 flex items-end justify-between gap-4"
                        >
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                                    Find your favorites
                                </p>

                                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                                    Shop by category
                                </h2>

                                <p className="mt-2 text-sm text-slate-500">
                                    Explore different categories and find what you need.
                                </p>
                            </div>

                            <Link
                                to="/products"
                                className="hidden items-center gap-1 text-sm font-bold text-slate-800 transition-colors hover:text-indigo-600 sm:inline-flex"
                            >
                                View all
                                <ArrowUpRight size={17} />
                            </Link>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            {categories.map(({ name, description, icon: Icon }) => (
                                <motion.div
                                    key={name}
                                    variants={fadeUpVariants}
                                    whileHover={{
                                        y: -7,
                                        rotateX: 2,
                                        rotateY: -2,
                                    }}
                                    style={{ transformPerspective: 1000 }}
                                >
                                    <Link
                                        to={`/products?category=${encodeURIComponent(name)}`}
                                        className="group block h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60 sm:p-6"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.08, rotate: -5 }}
                                            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white"
                                        >
                                            <Icon size={27} />
                                        </motion.div>

                                        <h3 className="mt-5 font-extrabold text-slate-900">
                                            {name}
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-slate-500">
                                            {description}
                                        </p>

                                        <div className="mt-5 flex items-center gap-1 text-xs font-bold text-indigo-600">
                                            Explore
                                            <ArrowRight size={14} />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ================= FEATURED PRODUCTS ================= */}

                <section
                    id="products"
                    className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={fadeUpVariants}
                            className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
                        >
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                                    Handpicked for you
                                </p>

                                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                                    Featured products
                                </h2>

                                <p className="mt-2 text-sm text-slate-500">
                                    Explore products available in our store.
                                </p>
                            </div>

                            <Link
                                to="/products"
                                className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition-colors hover:text-indigo-600"
                            >
                                All products
                                <ArrowRight size={17} />
                            </Link>
                        </motion.div>

                        {/* Loading state */}

                        {loading && (
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {[1, 2, 3, 4].map((item) => (
                                    <div
                                        key={item}
                                        className="animate-pulse rounded-2xl border border-slate-200 bg-white p-4"
                                    >
                                        <div className="h-48 rounded-xl bg-slate-200" />

                                        <div className="mt-4 h-4 w-3/4 rounded bg-slate-200" />

                                        <div className="mt-3 h-4 w-1/2 rounded bg-slate-200" />

                                        <div className="mt-5 h-10 rounded-lg bg-slate-200" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Error state */}

                        {!loading && error && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center"
                            >
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
                                    <PackageOpen size={27} />
                                </div>

                                <h3 className="mt-4 text-lg font-bold text-slate-900">
                                    Products could not be loaded
                                </h3>

                                <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-red-600">
                                    {error}
                                </p>

                                <button
                                    type="button"
                                    onClick={loadProducts}
                                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                                >
                                    <RefreshCw size={16} />
                                    Try Again
                                </button>
                            </motion.div>
                        )}

                        {/* Empty state */}

                        {!loading && !error && products.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                                    <ShoppingBag size={30} />
                                </div>

                                <h3 className="mt-5 text-lg font-bold text-slate-900">
                                    No products available yet
                                </h3>

                                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                                    Products will appear here once they are available in your
                                    store.
                                </p>

                                <Link
                                    to="/products"
                                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                                >
                                    Browse Products
                                    <ArrowRight size={17} />
                                </Link>
                            </motion.div>
                        )}

                        {/* Actual products from backend */}

                        {!loading && !error && products.length > 0 && (
                            <motion.div
                                variants={containerVariants}
                                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                            >
                                {featuredProducts.map((product, index) => (
                                    <motion.div
                                        key={product.id ?? index}
                                        variants={fadeUpVariants}
                                        whileHover={{ y: -6 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ProductCard product={product} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </motion.div>
                </section>

                {/* ================= CALL TO ACTION ================= */}

                <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 p-7 shadow-xl shadow-indigo-200/50 sm:p-10 lg:p-12"
                    >
                        <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

                        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                            <div className="max-w-2xl">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-100">
                                    Your next discovery awaits
                                </p>

                                <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                                    Find products that fit your everyday life.
                                </h2>

                                <p className="mt-3 max-w-xl text-sm leading-7 text-indigo-100">
                                    Browse the collection and discover products that match your
                                    needs and interests.
                                </p>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.97 }}
                                className="shrink-0"
                            >
                                <Link
                                    to="/products"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-indigo-700 shadow-lg transition-colors hover:bg-indigo-50"
                                >
                                    Start Shopping
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
}