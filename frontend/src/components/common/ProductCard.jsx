
import { Heart, ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product }) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/70">
            <a
                href={`/products/${product.id}`}
                className="relative flex h-52 items-center justify-center overflow-hidden bg-[#F3F7FB] p-5"
            >
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />
                {product.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-[#DDF8FF] px-3 py-1 text-xs font-bold text-[#075985]">
            {product.badge}
          </span>
                )}
            </a>

            <div className="p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {product.category}
                </p>
                <a href={`/products/${product.id}`}>
                    <h3 className="line-clamp-1 font-bold text-[#0B2545] transition hover:text-sky-600">
                        {product.name}
                    </h3>
                </a>

                <div className="mt-2 flex items-center gap-1 text-amber-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-semibold text-slate-600">
            {product.rating}
          </span>
                    <span className="text-xs text-slate-400">(sample rating)</span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
          <span className="text-lg font-extrabold text-[#0B2545]">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
                    <button
                        onClick={() => alert(`${product.name} — cart functionality comes next.`)}
                        aria-label={`Add ${product.name} to cart`}
                        className="rounded-xl bg-[#08BFE8] p-2.5 text-[#0B2545] transition hover:bg-[#06A8CE]"
                    >
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>
        </article>
    );
}
