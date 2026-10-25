
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  UserRound,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Categories", path: "/categories" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-200 ${
    isActive
        ? "text-indigo-600"
        : "text-slate-600 hover:text-indigo-600"
}`;

  function handleSearch(event) {
    event.preventDefault();

    const query = searchQuery.trim();

    if (query) {
      window.location.href = `/products?search=${encodeURIComponent(query)}`;
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="CreatorStore home"
        >
          <motion.div
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
          >
            <ShoppingBag size={23} strokeWidth={2.2} />
          </motion.div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
              Creator<span className="text-indigo-600">Store</span>
            </h1>
            <p className="hidden text-[10px] font-medium tracking-[0.18em] text-slate-400 sm:block">
              YOUR EVERYDAY MARKETPLACE
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={navLinkClass}
            >
              {({ isActive }) => (
                <span className="relative py-2">
                  {item.name}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-link"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-indigo-600"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* SEARCH */}
          <form
            onSubmit={handleSearch}
            className="hidden items-center rounded-xl border border-slate-200 bg-slate-50 px-3 transition-all duration-300 focus-within:border-indigo-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-100 lg:flex"
          >
            <Search size={18} className="text-slate-400" />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="w-36 bg-transparent px-2 py-2.5 text-sm outline-none placeholder:text-slate-400 xl:w-44"
            />

            <button
              type="submit"
              aria-label="Submit search"
              className="rounded-lg p-1.5 text-indigo-600 transition hover:bg-indigo-50"
            >
              <ArrowRight size={17} />
            </button>
          </form>

          {/* MOBILE SEARCH BUTTON */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setSearchOpen(!searchOpen)}
            className="rounded-xl p-2.5 text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600 lg:hidden"
            aria-label="Toggle search"
          >
            <Search size={21} />
          </motion.button>

          {/* CART */}
          <motion.div
            whileHover={{ y: -2, scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
            >
              <ShoppingCart size={21} />
            </Link>
          </motion.div>

          {/* LOGIN */}
          <motion.div
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:block"
          >
            <Link
              to="/login"
              className="flex h-11 items-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-colors hover:bg-indigo-600"
            >
              <UserRound size={17} />
              <span>Sign In</span>
            </Link>
          </motion.div>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </motion.button>
        </div>
      </div>

      {/* MOBILE SEARCH */}
      <AnimatePresence>
        {searchOpen && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSearch}
            className="overflow-hidden border-t border-slate-100 px-4 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl items-center gap-3 py-3">
              <Search size={20} className="shrink-0 text-slate-400" />

              <input
                autoFocus
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search products..."
                aria-label="Search products"
                className="min-w-0 flex-1 rounded-lg bg-slate-50 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
              />

              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Search
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-100 bg-white md:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
    isActive
        ? "bg-indigo-50 text-indigo-600"
        : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
              >
                <UserRound size={18} />
                Sign In
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
