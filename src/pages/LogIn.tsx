import Loading from "@/components/loading/Loading";
import { auth } from "@/firebase";
import useAuthCheck from "@/hooks/useAuthCheck";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, type FormEvent } from "react";
import { Navigate } from "react-router-dom";
import styles from "./LogIn.module.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { user, checkingAuth } = useAuthCheck();

  async function onSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error instanceof Error) setErrorMessage(error.message);
      console.error(error);
    }
  }

  if (checkingAuth) return <Loading />;
  if (user) return <Navigate to="/home" />;
  return (
    <div className={styles.LogIn}>
      <form onSubmit={onSubmit}>
        {errorMessage ? (
          <div className={styles.loginError}>{errorMessage}</div>
        ) : (
          <></>
        )}
        <div className={styles.input_container}>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="E-MAIL"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
            value={password}
            autoComplete="on"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default LogIn;
