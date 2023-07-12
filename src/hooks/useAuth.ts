import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, register } from "../services";
import { IAuthDetail } from "../types/authDetail.interface";

const initialState: IAuthDetail = {
    name: "",
    password: "",
    email: "",
    isMember: true,
};

export const useAuth = () => {
    const [authDetail, setAuthDetail] = useState<IAuthDetail>(initialState);
    const navigate = useNavigate();

    const handleLogin = async () => {
        const { email, password } = authDetail;

        if (!email || !password) {
            toast.error("Please fill out all fields");
            return;
        }

        try {
            const sessionStorageData = await login(authDetail);
            sessionStorageData.accessToken
                ? (navigate("/"), toast.success(`Welcome ${authDetail.email}`))
                : toast.error(sessionStorageData);
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message, {
                    closeButton: true,
                    position: "bottom-center",
                });
            }
        }
    };

    const handleRegister = async () => {
        const { email, isMember, name, password } = authDetail;

        if (!email || !password || (!isMember && !name)) {
            toast.error("Please fill out all fields");
            return;
        }

        try {
            const sessionStorageData = await register(authDetail);
            sessionStorageData.accessToken
                ? (navigate("/"), toast.success(`Welcome ${authDetail.email}`))
                : toast.error(sessionStorageData);
        } catch (error) {
            if (error instanceof Error) {
                toast.error("error", {
                    closeButton: true,
                    position: "bottom-center",
                });
            }
        }
    };

    return {
        authDetail,
        handleLogin,
        handleRegister,
        setAuthDetail,
    };
};
