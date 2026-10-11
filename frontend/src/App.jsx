
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home";
import Products from "./pages/public/Products";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route
                    path="*"
                    element={
                        <div className="flex min-h-screen items-center justify-center bg-[#F3F7FB]">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold text-[#0B2545]">
                                    404 - Page Not Found
                                </h1>
                                <a
                                    href="/"
                                    className="mt-4 inline-block rounded-xl bg-[#08BFE8] px-5 py-3 font-bold text-[#0B2545]"
                                >
                                    Back to Home
                                </a>
                            </div>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
