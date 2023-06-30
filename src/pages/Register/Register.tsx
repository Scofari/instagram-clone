import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LogoText } from "../../components";
import { Button } from "../../components/UI";
import { useTitle } from "../../hooks/useTitle";
import { register } from "../../services";
import { login } from "../../services/login";
import styles from "./Register.module.scss";
import { IAuthDetail } from "../../types/authDetail.interface";

const initialState: IAuthDetail = {
  name: "",
  password: "",
  email: "",
  isMember: true,
};

const Register = () => {
  const [authDetail, setAuthDetail] = useState<IAuthDetail>(initialState);

  const navigate = useNavigate();
  useTitle("Register |");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setAuthDetail({ ...authDetail, [name]: value });
  };

  const toggleMember = () => {
    setAuthDetail({ ...authDetail, isMember: !authDetail.isMember });
  };

  const handleLogin = async () => {
    const { email, password } = authDetail;

    if (!email || !password) {
      toast.error("Please fill out all field");
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
      toast.error("Please fill out all field");
      return;
    }

    try {
      const sessionStorageData = await register(authDetail);
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

  const handleLoginGuest = async () => {
    try {
      const { VITE_GUEST_LOGIN, VITE_GUEST_PASSWORD } = import.meta.env;

      const guestDetail = {
        email: VITE_GUEST_LOGIN,
        password: VITE_GUEST_PASSWORD,
        name: "Ion",
        isMember: false,
      };

      const sessionStorageData = await login(guestDetail);

      sessionStorageData.accessToken
        ? (navigate("/"),
          toast.success(`Welcome ${guestDetail.name}`, { theme: "colored" }))
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

  return (
    <main className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <LogoText />
        <p>Sign up to see photos and videos from your friends</p>
        <div>
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
        </div>
        <Button type="submit" variant="primary">
          {authDetail.isMember ? "Log in" : "Sign Up"}
        </Button>

        <p className={styles.toggleMemberBtn}>
          {!authDetail.isMember ? "Have an account?" : "Don't have an account?"}
          <button type="button" onClick={toggleMember}>
            {!authDetail.isMember ? `Log in ` : "Sign up"}
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
