import { axiosi } from '../../config/axios'

export const signup = async (cred) => {
    try {
        const res = await axiosi.post("auth/signup", cred);
        return res.data;
    } catch (error) {
        throw {
            message: error?.response?.data?.message || "Failed to sign up. Please try again later."
        };
    }
}

export const login = async (cred) => {
    try {
        const res = await axiosi.post("auth/login", cred);
        return res.data;
    } catch (error) {
        throw {
            message: error?.response?.data?.message || "Failed to log in. Please check your credentials and try again."
        };
    }
}

export const verifyOtp = async (cred) => {
    try {
        const res = await axiosi.post("auth/verify-otp", cred);
        return res.data;
    } catch (error) {
        throw {
            message: error?.response?.data?.message || "OTP verification failed. Please try again."
        };
    }
}

export const resendOtp = async (cred) => {
    try {
        const res = await axiosi.post("auth/resend-otp", cred);
        return res.data;
    } catch (error) {
        throw {
            message: error?.response?.data?.message || "Failed to resend OTP. Please try again."
        };
    }
}

export const forgotPassword = async (cred) => {
    try {
        const res = await axiosi.post("auth/forgot-password", cred);
        return res.data;
    } catch (error) {
        throw {
            message: error?.response?.data?.message || "Failed to send password reset email. Please try again."
        };
    }
}

export const resetPassword = async (cred) => {
    try {
        const res = await axiosi.post("auth/reset-password", cred);
        return res.data;
    } catch (error) {
        throw {
            message: error?.response?.data?.message || "Failed to reset password. Please try again."
        };
    }
}

export const checkAuth = async () => {
    try {
        const res = await axiosi.get("auth/check-auth");
        return res.data;
    } catch (error) {
        throw {
            message: error?.response?.data?.message || "Authentication check failed."
        };
    }
}

export const logout = async () => {
    try {
        const res = await axiosi.get("auth/logout");
        return res.data;
    } catch (error) {
        throw {
            message: error?.response?.data?.message || "Logout failed. Please try again."
        };
    }
}
