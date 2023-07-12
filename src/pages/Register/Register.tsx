import { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LogoText } from "../../components";
import { Button } from "../../components/UI";
import { useAuth } from "../../hooks/useAuth";
import { useTitle } from "../../hooks/useTitle";
import { login } from "../../services/login";
import styles from "./Register.module.scss";

const Register = () => {
    useTitle("Register |");
    const { handleLogin, handleRegister, authDetail, setAuthDetail } =
        useAuth();
    const navigate = useNavigate();

    const toggleMember = () => {
        setAuthDetail((prevState) => ({
            ...prevState,
            isMember: !authDetail.isMember,
        }));
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setAuthDetail((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleLoginGuest = async () => {
        try {
            const { VITE_GUEST_LOGIN, VITE_GUEST_PASSWORD } = import.meta.env;

            const guestDetail = {
                email: VITE_GUEST_LOGIN,
                password: VITE_GUEST_PASSWORD,
                name: "Guest",
                isMember: false,
            };

            const sessionStorageData = await login(guestDetail);

            sessionStorageData.accessToken
                ? (navigate("/"),
                  toast.success(`Welcome dear ${guestDetail.name}`))
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

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        authDetail.isMember ? handleLogin() : handleRegister();
    };

    const toggleButtonText = authDetail.isMember ? "Sign Up" : "Log in";
    const toggleMemberText = authDetail.isMember
        ? "Don't have an account?"
        : "Have an account?";

    return (
        <main className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <LogoText />
                <p>Sign up to see photos and videos from your friends</p>
                {!authDetail.isMember && (
                    <input
                        name="name"
                        type="text"
                        placeholder="Ion"
                        onChange={handleChange}
                        value={authDetail.name}
                    />
                )}
                <input
                    name="email"
                    type="email"
                    placeholder="Ion@example.com"
                    onChange={handleChange}
                    value={authDetail.email}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={authDetail.password}
                />
                <Button type="submit" variant="primary">
                    {authDetail.isMember ? "Log in" : "Sign Up"}
                </Button>

                <p className={styles.toggleMemberBtn}>
                    {toggleMemberText}
                    <button type="button" onClick={toggleMember}>
                        {toggleButtonText}
                    </button>
                </p>
            </form>
            <p className={styles.guestBtn}>
                <Button variant="secondary" onClick={handleLoginGuest}>
                    Login as Guest
                </Button>
            </p>
        </main>
    );
};

export default Register;
