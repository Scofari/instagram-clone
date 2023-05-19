import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoText } from "../../components";
import { Button } from "../../components/UI";
import { useAppDispatch } from "../../redux/store";
import { loginUser, registerUser } from "../../redux/userSlice";
import { useUserContext } from "../../providers/UserContext";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Register.module.scss";

const initialState = {
	name: "",
	password: "",
	email: "",
	isMember: true,
};

const Register = () => {
	const [values, setValues] = useState(initialState);
	const { loginWithRedirect } = useUserContext();
	const { user } = useAuth0();

	const dispatch = useAppDispatch();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;

		setValues({ ...values, [name]: value });
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (user) {
			loginWithRedirect();
			return;
		}
		const { email, isMember, name, password } = values;
		if (!email || !password || (!isMember && !name)) {
			toast.error("Please fill out all field");
			return;
		}

		if (isMember) {
			dispatch(loginUser({ email, password }));
			return;
		}

		dispatch(registerUser({ password, email, name }));
	};

	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	return (
		<main className={styles.wrapper}>
			<form onSubmit={onSubmit}>
				<LogoText />
				<p>Sign up to see photos and videos from your friends</p>
				{user ? (
					<img
						src={user.picture}
						alt="avatar"
						className={styles.userAvatar}
					/>
				) : (
					<div>
						{!values.isMember && (
							<input
								name="name"
								type="text"
								placeholder="Username"
								onChange={handleChange}
								value={values.name}
							/>
						)}
						<input
							name="email"
							type="email"
							placeholder="Email"
							onChange={handleChange}
							value={values.email}
						/>
						<input
							name="password"
							type="password"
							placeholder="Password"
							onChange={handleChange}
							value={values.password}
						/>
					</div>
				)}
				{/* <Button type="submit" variant="primary">
					{values.isMember ? "Log in" : "Sign Up"}
				</Button> */}
				<Button type="submit" variant="primary">
					{/* {values.isMember ? "Log in" : "Sign Up"} */}
					{user && `Continue as ${user.nickname}`}
				</Button>

				<p className={styles.toggleMemberBtn}>
					{!values.isMember
						? "Have an account?"
						: "Don't have an account?"}
					<button type="button" onClick={toggleMember}>
						{!values.isMember ? `Log in ` : "Sign up"}
					</button>
				</p>
			</form>
		</main>
	);
};

export default Register;
