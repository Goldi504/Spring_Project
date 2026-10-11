
import { Mail, Zap } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0B2545] text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
                {/* Brand */}
                <div>
                    <a href="/" className="mb-4 inline-flex items-center gap-2">
            <span className="rounded-lg bg-[#08BFE8] p-2 text-[#0B2545]">
              <Zap size={21} fill="currentColor" />
            </span>
                        <span className="text-xl font-bold">
              Creator<span className="text-[#08BFE8]">Store</span>
            </span>
                    </a>

                    <p className="max-w-xs text-sm leading-6 text-slate-300">
                        Discover everyday technology, carefully selected for your lifestyle.
                    </p>
                </div>

                {/* Shop links */}
                <div>
                    <h3 className="mb-4 font-bold">Shop</h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li><a className="hover:text-[#08BFE8]" href="/products">All products</a></li>
                        <li><a className="hover:text-[#08BFE8]" href="/products?category=Mobiles">Mobiles</a></li>
                        <li><a className="hover:text-[#08BFE8]" href="/products?category=Laptops">Laptops</a></li>
                        <li><a className="hover:text-[#08BFE8]" href="/products?category=Accessories">Accessories</a></li>
                    </ul>
                </div>

                {/* Customer care */}
                <div>
                    <h3 className="mb-4 font-bold">Customer care</h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li><a className="hover:text-[#08BFE8]" href="mailto:support@creatorstore.example">Contact us</a></li>
                        <li><a className="hover:text-[#08BFE8]" href="#shipping">Shipping information</a></li>
                        <li><a className="hover:text-[#08BFE8]" href="#returns">Returns policy</a></li>
                        <li><a className="hover:text-[#08BFE8]" href="/orders">My orders</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="mb-4 font-bold">Stay connected</h3>
                    <p className="mb-4 text-sm leading-6 text-slate-300">
                        Get product news and updates from CreatorStore.
                    </p>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Newsletter signup will be implemented later.");
                        }}
                        className="flex rounded-xl bg-white p-1.5"
                    >
                        <input
                            type="email"
                            required
                            placeholder="Your email address"
                            className="min-w-0 flex-1 px-2 text-sm text-slate-900 outline-none"
                        />
                        <button
                            type="submit"
                            className="rounded-lg bg-[#08BFE8] px-3 py-2 text-sm font-bold text-[#0B2545] hover:bg-cyan-300"
                        >
                            Join
                        </button>
                    </form>

                    <a
                        href="mailto:support@creatorstore.example"
                        className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-[#08BFE8]"
                    >
                        <Mail size={16} />
                        Contact support
                    </a>
                </div>
            </div>

            <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
                © {new Date().getFullYear()} CreatorStore. All rights reserved.
            </div>
        </footer>
    );
}
