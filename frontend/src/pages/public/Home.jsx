
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
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductCard from "../../components/common/ProductCard";

const categories = [
    {
        name: "Mobiles",
        icon: Smartphone,
        description: "Latest smartphones",
    },
    {
        name: "Laptops",
        icon: Laptop,
        description: "Power for your work",
    },
    {
        name: "Accessories",
        icon: Headphones,
        description: "Everyday essentials",
    },
    {
        name: "Smartwatches",
        icon: Watch,
        description: "Stay connected",
    },
];

const products = [
    {
        id: 1,
        name: "iPhone 15",
        category: "Mobiles",
        price: 79999,
        rating: 4.8,
        badge: "Popular",
        image:
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        name: "Premium Laptop",
        category: "Laptops",
        price: 104999,
        rating: 4.7,
        badge: "Featured",
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        name: "Wireless Headphones",
        category: "Accessories",
        price: 12999,
        rating: 4.6,
        badge: "Best seller",
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        name: "Smart Watch",
        category: "Smartwatches",
        price: 39999,
        rating: 4.5,
        badge: "",
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    },
];

const benefits = [
    {
        icon: Truck,
        title: "Free Shipping",
        text: "On eligible orders",
    },
    {
        icon: ShieldCheck,
        title: "Secure Shopping",
        text: "Your data stays protected",
    },
    {
        icon: RotateCcw,
        title: "Easy Returns",
        text: "Simple return process",
    },
    {
        icon: Headphones,
        title: "Customer Support",
        text: "We are here to help",
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-[#F3F7FB]">
            <Navbar />

            <main>
                {/* Hero section */}
                <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden rounded-3xl bg-[#0B2545]">
                        <div className="absolute -right-16 -top-24 -z-10 h-80 w-80 rounded-full bg-[#08BFE8]/20 blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 -z-10 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />

                        <div className="grid min-h-[400px] items-center gap-8 p-7 sm:p-10 md:grid-cols-2 md:p-14">
                            <div className="max-w-xl py-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#69E4FF]">
                  <span className="h-2 w-2 rounded-full bg-[#08BFE8]" />
                  Technology for everyone
                </span>

                                <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                                    Latest gadgets
                                    <br />
                                    for a <span className="text-[#08BFE8]">smarter</span>
                                    <br />
                                    tomorrow.
                                </h1>

                                <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                                    Explore smartphones, laptops, wearables, and accessories
                                    selected for your everyday life.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <a
                                        href="#products"
                                        className="inline-flex items-center gap-2 rounded-xl bg-[#08BFE8] px-6 py-3.5 text-sm font-extrabold text-[#0B2545] shadow-lg shadow-cyan-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                                    >
                                        Shop products <ArrowRight size={18} />
                                    </a>
                                    <a
                                        href="#categories"
                                        className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                                    >
                                        Explore categories
                                    </a>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300">
                                    <span>✓ Carefully selected products</span>
                                    <span>✓ Simple shopping experience</span>
                                </div>
                            </div>

                            <div className="relative flex min-h-[250px] items-center justify-center md:min-h-[330px]">
                                <div className="absolute h-64 w-64 rounded-full border border-cyan-300/20 sm:h-80 sm:w-80" />
                                <div className="absolute h-52 w-52 rounded-full border border-cyan-300/15 sm:h-64 sm:w-64" />
                                <img
                                    src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1100&q=85"
                                    alt="A collection of modern electronic devices"
                                    className="relative z-10 max-h-[330px] w-full rounded-2xl object-cover shadow-2xl shadow-black/30 md:max-h-[360px]"
                                />
                                <div className="absolute -bottom-1 right-0 z-20 rounded-2xl border border-white/10 bg-white p-4 shadow-xl sm:right-2">
                                    <p className="text-xs font-semibold text-slate-500">
                                        Your next upgrade
                                    </p>
                                    <p className="mt-1 font-extrabold text-[#0B2545]">
                                        Starts here <span className="text-[#08BFE8]">↗</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Shopping benefits */}
                <section id="benefits" className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                        {benefits.map(({ icon: Icon, title, text }) => (
                            <div
                                key={title}
                                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#DDF8FF] text-[#087EA4]">
                                    <Icon size={21} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-[#0B2545]">
                                        {title}
                                    </h3>
                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                        {text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Categories */}
                <section id="categories" className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8">
                    <div className="mb-6 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
                                Find your favorites
                            </p>
                            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B2545] sm:text-3xl">
                                Shop by category
                            </h2>
                        </div>
                        <a
                            href="/products"
                            className="inline-flex items-center gap-1 text-sm font-bold text-[#0B2545] hover:text-sky-600"
                        >
                            View all <ArrowUpRight size={17} />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {categories.map(({ name, icon: Icon, description }) => (
                            <a
                                key={name}
                                href={`/products?category=${encodeURIComponent(name)}`}
                                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-slate-200/70 sm:p-6"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDF8FF] text-[#087EA4] transition group-hover:bg-[#08BFE8] group-hover:text-[#0B2545]">
                                    <Icon size={27} />
                                </div>
                                <h3 className="mt-5 font-extrabold text-[#0B2545]">{name}</h3>
                                <p className="mt-1 text-xs text-slate-500">{description}</p>
                                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-sky-600">
                                    Explore <ArrowRight size={14} />
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Featured products */}
                <section id="products" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="mb-7 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
                                Handpicked for you
                            </p>
                            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B2545] sm:text-3xl">
                                Featured products
                            </h2>
                            <p className="mt-2 text-sm text-slate-500">
                                Explore some of our featured technology.
                            </p>
                        </div>
                        <a
                            href="/products"
                            className="hidden items-center gap-1 text-sm font-bold text-[#0B2545] hover:text-sky-600 sm:flex"
                        >
                            All products <ArrowRight size={17} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-6 text-center sm:hidden">
                        <a
                            href="/products"
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-[#0B2545]"
                        >
                            View all products <ArrowRight size={16} />
                        </a>
                    </div>
                </section>

                {/* Closing banner */}
                <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-cyan-100 bg-gradient-to-r from-white to-[#DDF8FF] p-7 sm:flex-row sm:items-center sm:p-10">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                                Upgrade your everyday
                            </p>
                            <h2 className="mt-2 text-2xl font-extrabold text-[#0B2545] sm:text-3xl">
                                Find the technology that fits you.
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Browse the collection and discover your next favorite device.
                            </p>
                        </div>
                        <a
                            href="/products"
                            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0B2545] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#163B63]"
                        >
                            Browse collection <ArrowRight size={18} />
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
