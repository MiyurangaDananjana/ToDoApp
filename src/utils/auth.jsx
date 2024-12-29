import { jwtDecode } from "jwt-decode";

export const isAuthenticated = () => {
    const token = localStorage.getItem("authToken");
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp > currentTime; // Check if the token is expired
    } catch (err) {
        return false;
    }
};