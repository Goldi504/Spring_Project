
import {
    Menu,
    Search,
    Heart,
    ShoppingCart,
    UserRound,
    Zap,
    X,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <a href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B2545] text-[#08BFE8]">
            <Zap size={23} fill="currentColor" />
          </span>
                    <span className="text-xl font-extrabold tracking-tight text-[#0B2545]">
            Creator<span className="text-[#08BFE8]">Store</span>
          </span>
                </a>

                <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
                    <a href="/" className="text-[#08BFE8]">Home</a>
                    <a href="#products" className="transition hover:text-[#08BFE8]">
                        Products
                    </a>
                    <a href="#categories" className="transition hover:text-[#08BFE8]">
                        Categories
                    </a>
                    <a href="#benefits" className="transition hover:text-[#08BFE8]">
                        Why us?
                    </a>
                </nav>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        window.location.href = `/products?search=${encodeURIComponent(search)}`;
                    }}
                    className="hidden max-w-xs flex-1 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 lg:flex"
                >
                    <Search size={18} className="shrink-0 text-slate-400" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search products..."
                        className="w-full bg-transparent text-sm outline-none"
                    />
                </form>

                <div className="flex items-center gap-2">
                    <button
                        aria-label="Wishlist"
                        className="hidden rounded-full p-2.5 text-[#0B2545] transition hover:bg-slate-100 sm:block"
                    >
                        <Heart size={20} />
                    </button>
                    <a
                        href="/cart"
                        aria-label="Shopping cart"
                        className="relative rounded-full p-2.5 text-[#0B2545] transition hover:bg-slate-100"
                    >
                        <ShoppingCart size={21} />
                        <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#08BFE8] px-1 text-[10px] font-bold text-[#0B2545]">
              0
            </span>
                    </a>
                    <a
                        href="/login"
                        aria-label="Account"
                        className="hidden rounded-full bg-[#0B2545] p-2.5 text-white transition hover:bg-[#163B63] sm:block"
                    >
                        <UserRound size={19} />
                    </a>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                        className="rounded-lg p-2 text-[#0B2545] hover:bg-slate-100 md:hidden"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-semibold text-slate-700">
                        <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
                        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
                        <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
                        <a href="/login" onClick={() => setMenuOpen(false)}>Sign in</a>
                    </div>
                </nav>
            )}
        </header>
    );
}
