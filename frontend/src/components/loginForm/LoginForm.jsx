import UseAuth from "../../hooks/useAuth";
import styles from "./loginForm.module.css";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { email, setEmail, setPassword, isLoading, error, signIn } = UseAuth();

  const handleLogin = async (e) => {
    e.preventDefault(); // stop default page reload

    try {
      await signIn();
      console.log("success");
      toast.success("Du er logget ind, din lækkerbisken");
    } catch (err) {
      console.log("fail", err);
      toast.error("Login fejlede :[");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} //sets the value of the password state variable to the value of the input field
        />

        <button className={styles.loginBtn} type="submit" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
