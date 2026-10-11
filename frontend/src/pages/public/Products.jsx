
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X, ArrowUpDown } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ProductCard from "../../components/common/ProductCard";

const sampleProducts = [
    {
        id: 1,
        name: "iPhone 15",
        category: "Mobiles",
        price: 79999,
        rating: 4.8,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        name: "Samsung Galaxy Phone",
        category: "Mobiles",
        price: 68999,
        rating: 4.7,
        badge: "Featured",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        name: "Premium Laptop",
        category: "Laptops",
        price: 104999,
        rating: 4.7,
        badge: "Top rated",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        name: "Wireless Headphones",
        category: "Accessories",
        price: 12999,
        rating: 4.6,
        badge: "",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 5,
        name: "Smart Watch",
        category: "Smartwatches",
        price: 39999,
        rating: 4.5,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 6,
        name: "Tablet",
        category: "Tablets",
        price: 32999,
        rating: 4.4,
        badge: "",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 7,
        name: "Laptop for Work",
        category: "Laptops",
        price: 74999,
        rating: 4.5,
        badge: "",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 8,
        name: "Wireless Earbuds",
        category: "Accessories",
        price: 4999,
        rating: 4.3,
        badge: "Value pick",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=80",
    },
];

const categories = [
    "All",
    "Mobiles",
    "Laptops",
    "Accessories",
    "Smartwatches",
    "Tablets",
];

export default function Products() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("search") || "");
    const [category, setCategory] = useState(
        searchParams.get("category") || "All"
    );
    const [maxPrice, setMaxPrice] = useState(150000);
    const [sortBy, setSortBy] = useState("featured");
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const filteredProducts = useMemo(() => {
        let result = sampleProducts.filter((product) => {
            const matchesSearch =
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.category.toLowerCase().includes(search.toLowerCase());

            const matchesCategory =
                category === "All" || product.category === category;

            const matchesPrice = product.price <= maxPrice;

            return matchesSearch && matchesCategory && matchesPrice;
        });

        if (sortBy === "price-low") {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-high") {
            result = [...result].sort((a, b) => b.price - a.price);
        } else if (sortBy === "rating") {
            result = [...result].sort((a, b) => b.rating - a.rating);
        }

        return result;
    }, [search, category, maxPrice, sortBy]);

    function updateSearch(value) {
        setSearch(value);

        const params = new URLSearchParams(searchParams);
        if (value.trim()) {
            params.set("search", value);
        } else {
            params.delete("search");
        }
        setSearchParams(params, { replace: true });
    }

    function resetFilters() {
        setSearch("");
        setCategory("All");
        setMaxPrice(150000);
        setSortBy("featured");
        setSearchParams({});
    }

    const filters = (
        <div className="space-y-7">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-extrabold text-[#0B2545]">Filters</h2>
                <button
                    onClick={resetFilters}
                    className="text-xs font-bold text-sky-700 hover:text-[#0B2545]"
                >
                    Clear all
                </button>
            </div>

            <div>
                <h3 className="mb-3 text-sm font-bold text-[#0B2545]">Category</h3>
                <div className="space-y-3">
                    {categories.map((item) => (
                        <label
                            key={item}
                            className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
                        >
                            <input
                                type="radio"
                                name="category"
                                checked={category === item}
                                onChange={() => {
                                    setCategory(item);
                                    const params = new URLSearchParams(searchParams);
                                    if (item === "All") {
                                        params.delete("category");
                                    } else {
                                        params.set("category", item);
                                    }
                                    setSearchParams(params, { replace: true });
                                }}
                                className="h-4 w-4 accent-[#08BFE8]"
                            />
                            {item === "All" ? "All categories" : item}
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[#0B2545]">Maximum price</h3>
                    <span className="text-xs font-semibold text-slate-500">
            ₹{maxPrice.toLocaleString("en-IN")}
          </span>
                </div>
                <input
                    type="range"
                    min="5000"
                    max="150000"
                    step="1000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full cursor-pointer accent-[#08BFE8]"
                />
                <div className="mt-2 flex justify-between text-xs text-slate-400">
                    <span>₹5,000</span>
                    <span>₹1,50,000</span>
                </div>
            </div>

            <div className="rounded-xl bg-[#F3F7FB] p-4">
                <p className="text-sm font-bold text-[#0B2545]">Need help?</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                    Browse by category or search for a product to narrow your results.
                </p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F3F7FB]">
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8 rounded-2xl bg-[#0B2545] px-6 py-8 text-white sm:px-9">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#08BFE8]">
                        Explore the collection
                    </p>
                    <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                        Find your next device.
                    </h1>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                        Discover smartphones, laptops, wearables, and accessories for
                        everyday life.
                    </p>
                </div>

                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-2xl font-extrabold text-[#0B2545]">
                            All products
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Showing {filteredProducts.length} sample products
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <label className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 sm:min-w-64">
                            <Search size={18} className="shrink-0 text-slate-400" />
                            <input
                                value={search}
                                onChange={(e) => updateSearch(e.target.value)}
                                placeholder="Search products..."
                                className="w-full min-w-0 bg-transparent text-sm outline-none"
                            />
                            {search && (
                                <button onClick={() => updateSearch("")} aria-label="Clear search">
                                    <X size={16} className="text-slate-400" />
                                </button>
                            )}
                        </label>

                        <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                            <ArrowUpDown size={17} className="text-slate-500" />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="max-w-36 bg-transparent text-sm font-semibold text-[#0B2545] outline-none"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: low to high</option>
                                <option value="price-high">Price: high to low</option>
                                <option value="rating">Top rated</option>
                            </select>
                        </label>

                        <button
                            onClick={() => setMobileFiltersOpen(true)}
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-[#0B2545] lg:hidden"
                        >
                            <SlidersHorizontal size={17} />
                            Filters
                        </button>
                    </div>
                </div>

                <div className="grid items-start gap-7 lg:grid-cols-[240px_minmax(0,1fr)]">
                    <aside className="hidden rounded-2xl border border-slate-200 bg-white p-5 lg:block">
                        {filters}
                    </aside>

                    {mobileFiltersOpen && (
                        <div className="fixed inset-0 z-[60] lg:hidden">
                            <button
                                aria-label="Close filters"
                                onClick={() => setMobileFiltersOpen(false)}
                                className="absolute inset-0 h-full w-full bg-slate-950/50"
                            />
                            <div className="absolute right-0 top-0 h-full w-[min(88%,360px)] overflow-y-auto bg-white p-5 shadow-2xl">
                                <div className="mb-6 flex items-center justify-between">
                                    <h2 className="text-xl font-extrabold text-[#0B2545]">
                                        Filter products
                                    </h2>
                                    <button
                                        onClick={() => setMobileFiltersOpen(false)}
                                        aria-label="Close filters"
                                        className="rounded-lg p-2 hover:bg-slate-100"
                                    >
                                        <X size={21} />
                                    </button>
                                </div>
                                {filters}
                                <button
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="mt-6 w-full rounded-xl bg-[#08BFE8] px-4 py-3 font-bold text-[#0B2545]"
                                >
                                    Show {filteredProducts.length} products
                                </button>
                            </div>
                        </div>
                    )}

                    <section>
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDF8FF] text-sky-700">
                                    <Search size={26} />
                                </div>
                                <h3 className="mt-4 text-xl font-extrabold text-[#0B2545]">
                                    No products found
                                </h3>
                                <p className="mt-2 text-sm text-slate-500">
                                    Try another search or clear your filters.
                                </p>
                                <button
                                    onClick={resetFilters}
                                    className="mt-5 rounded-xl bg-[#08BFE8] px-5 py-3 text-sm font-bold text-[#0B2545]"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
