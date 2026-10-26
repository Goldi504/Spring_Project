const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export const getAllProducts = async () => {
    const response = await fetch(`${API_BASE_URL}/api/products`);

    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
    }

    const data = await response.json();

    // Support either a direct array or a common wrapped API response.
    if (Array.isArray(data)) {
        return data;
    }

    if (Array.isArray(data.content)) {
        return data.content;
    }

    if (Array.isArray(data.products)) {
        return data.products;
    }

    if (Array.isArray(data.data)) {
        return data.data;
    }

    throw new Error("Unexpected products API response format.");
};