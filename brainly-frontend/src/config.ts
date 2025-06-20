if (!import.meta.env.VITE_BACKEND_URL || !import.meta.env.VITE_FRONTEND_URL) {
    throw new Error("Missing VITE_BACKEND_URL or VITE_FRONTEND_URL in .env");
}



export const backend_url = import.meta.env.VITE_BACKEND_URL;
export const frontend_url = import.meta.env.VITE_FRONTEND_URL;